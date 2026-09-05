# Inspeção visual

## Desktop
A captura em 1280px confirmou a estrutura vertical completa: header compacto, hero em duas colunas, blocos alternados de dor e solução, mockups de tablet e smartphone, CTA diretamente abaixo dos mockups, benefícios, bloco emocional, oferta, campanha, FAQ, CTA final e rodapé. A linguagem visual permanece coerente com a referência: azul-marinho, dourado, headline serifada e imagens com cantos suaves.

O bloco de mockups aparece como o principal acréscimo: os dispositivos entram com deslocamento e rotação suaves, exibem páginas internas legíveis e a navegação de páginas fica imediatamente acima do CTA da mesma seção.

## Mobile
A captura em 390px confirmou a adaptação para uma coluna, menu compacto no header, hero e seções com espaçamento vertical, dispositivos redimensionados e CTA preservado abaixo da prévia. O layout não depende de rolagem horizontal.

## Ajuste realizado
Os assets gerados complementares retornaram placeholders de falha no momento da inspeção; para evitar imagens quebradas, os blocos de hero, pai e filho e família foram apontados para os assets originais públicos da referência, mantendo a fidelidade visual. O mockup continua autossuficiente porque a página interna é renderizada com composição CSS e texto HTML legível, enquanto o asset de páginas internas atua como textura de apoio.

## Build
`pnpm check` e `pnpm build` concluíram sem erros. A build emitiu apenas o aviso padrão de chunk JavaScript maior que 500 kB.
