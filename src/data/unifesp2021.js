import { unifesp2021Objetivas } from './unifesp2021-objetivas.js';
import { unifesp2021Redacao } from './unifesp2021-redacao.js';
import { unifesp2021Discursivas } from './unifesp2021-discursivas.js';

export const unifesp2021Questions = [
  ...unifesp2021Objetivas,
  unifesp2021Redacao,
  ...unifesp2021Discursivas,
];
