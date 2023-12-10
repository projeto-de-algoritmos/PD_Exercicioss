# Algoritmo de Maior Subsequência Crescente - Programação Dinâmica

## Introdução

O problema da Maior Subsequência Crescente (LIS - Longest Increasing Subsequence) consiste em encontrar a subsequência mais longa de uma sequência dada de elementos, onde os elementos estão em ordem crescente.

A abordagem de Programação Dinâmica é frequentemente utilizada para resolver esse problema de maneira eficiente.

## Abordagem em Programação Dinâmica

A ideia básica por trás do algoritmo é manter uma tabela que armazena o comprimento da maior subsequência crescente terminando em cada posição da sequência original. A tabela é atualizada à medida que percorremos a sequência, considerando cada elemento e calculando o comprimento da subsequência crescente até esse ponto.