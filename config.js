// Dados demonstrativos. Substituir apenas por informações confirmadas pela marca.
window.PATU_CONFIG = {
  WHATSAPP_NUMBER: '', // Número internacional somente com dígitos: país + DDD + número.
  business: null, // Dados verificados para LocalBusiness: name, telephone, address, url.
  products: [
    {id:'tradicional',name:'Pudim Tradicional',category:'Tradicionais',description:'Clássico, cremoso e irresistível.',price:'R$ XX,XX',image:'pudim.jpg'},
    {id:'chocolate',name:'Pudim de Chocolate',category:'Especiais',description:'Uma sugestão para os apaixonados por chocolate.',price:'R$ XX,XX',image:'pudim.jpg'},
    {id:'especial',name:'Pudim Especial',category:'Especiais',description:'[Uma combinação especial a definir pela Patu.]',price:'R$ XX,XX',image:'pudim.jpg'},
    {id:'gourmet',name:'Pudim Gourmet',category:'Gourmet',description:'[Sabor gourmet a confirmar com a empresa.]',price:'R$ XX,XX',image:'pudim.jpg'},
    {id:'tamanhos',name:'Um tamanho para cada momento',category:'Tamanhos',description:'[Tamanhos e porções a confirmar.]',price:'R$ XX,XX',image:'pudim.jpg'},
    {id:'combo',name:'Um doce para compartilhar',category:'Combos',description:'[Composição e disponibilidade do combo.]',price:'R$ XX,XX',image:'pudim.jpg'}
  ],
  reviews: Array.from({length:4},()=>({name:'Depoimento de cliente',text:'Adicione aqui uma avaliação real da Patu Pudins.'}))
};
