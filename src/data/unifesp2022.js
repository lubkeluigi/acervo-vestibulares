import { unifesp2022Objetivas } from './unifesp2022-objetivas.js';
import { unifesp2022Redacao } from './unifesp2022-redacao.js';
import { unifesp2022Discursivas } from './unifesp2022-discursivas.js';

export const unifesp2022Questions = [
  ...unifesp2022Objetivas,
  unifesp2022Redacao,
  ...unifesp2022Discursivas,
];
