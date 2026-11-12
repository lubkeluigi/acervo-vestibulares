#!/usr/bin/env python3
"""Baixa as páginas de resolução comentada do Elite Campinas para a UNIFESP de um determinado ano.

Uso:
  python3 scripts/baixar_elite_campinas.py <ano> <diretorio_destino>

Exemplo:
  python3 scripts/baixar_elite_campinas.py 2024 provas/unifesp-2024/elite
"""
import argparse
from pathlib import Path
from urllib.request import Request, urlopen


def download_elite_unifesp(year: int, dest_dir: Path):
    dest_dir.mkdir(parents=True, exist_ok=True)
    # Padrões históricos de URLs do Elite Campinas para a UNIFESP
    candidates = {
        "dia1.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/1dia_ling_red.asp",
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/1dia.asp",
        ],
        "bio.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia_bio.asp",
        ],
        "qui.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia_qui.asp",
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia_quim.asp",
        ],
        "fis.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia_fis.asp",
        ],
        "mat.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia_mat.asp",
        ],
        "dia2_completo.html": [
            f"https://www.elitecampinas.com.br/gabaritos/unifesp_{year}/2dia.asp",
        ],
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
    }

    for filename, urls in candidates.items():
        for url in urls:
            try:
                req = Request(url, headers=headers)
                with urlopen(req, timeout=30) as resp:
                    raw = resp.read()
                try:
                    text = raw.decode("utf-8")
                except UnicodeDecodeError:
                    text = raw.decode("latin-1", errors="replace")
                out_file = dest_dir / filename
                out_file.write_text(text, encoding="utf-8")
                print(f"[OK] {filename} <- {url} ({len(text)} chars)")
                break
            except Exception as exc:
                print(f"[TENTATIVA FALHOU] {url}: {exc}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Baixa resoluções do Elite Campinas para a UNIFESP.")
    parser.add_argument("ano", type=int, help="Ano do vestibular UNIFESP (ex: 2024)")
    parser.add_argument("destino", type=Path, help="Diretório onde salvar os arquivos HTML")
    args = parser.parse_args()
    download_elite_unifesp(args.ano, args.destino)
