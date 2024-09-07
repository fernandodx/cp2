<template>
  <div>
    <h1>Sobre a T-burguer</h1>
    <section>
      <h2>Nossa História</h2>
      <p>
        A T-burguer nasceu da paixão por criar hambúrgueres deliciosos e inovadores. Fundada em 2010, nossa hamburgueria começou com um simples objetivo: oferecer uma experiência gastronômica única e saborosa. Desde o início, nos comprometemos a usar apenas os melhores ingredientes e a cozinhar com amor e dedicação.
      </p>
      <p>
        Nossa jornada começou em Brasília, onde nossos fundadores, Fernando Dias e Maria Clara, abriram as portas da nossa primeira loja. Com um menu inspirado nas melhores receitas de hambúrgueres, rapidamente conquistamos o coração dos locais. Hoje, estamos orgulhosos de ter expandido para várias localidades, mantendo sempre o compromisso com a qualidade e a inovação.
      </p>
    </section>
    
    <section>
      <h2>Nossos Valores</h2>
      <ul>
        <li><strong>Qualidade:</strong> Usamos apenas ingredientes frescos e de alta qualidade para garantir o melhor sabor em cada mordida.</li>
        <li><strong>Inovação:</strong> Estamos sempre criando novas receitas e sabores para surpreender nossos clientes.</li>
        <li><strong>Compromisso:</strong> Nosso objetivo é oferecer uma experiência memorável a cada visita, com um atendimento excepcional e um ambiente acolhedor.</li>
      </ul>
    </section>

    <section>
      <h2>Missão</h2>
      <p>
        Nossa missão é proporcionar a melhor experiência gastronômica para os amantes de hambúrgueres, combinando qualidade, criatividade e um atendimento amigável. Queremos ser a escolha número um para quem busca sabor e inovação em cada refeição.
      </p>
    </section>

    <section>
      <h2>Visite-nos</h2>
      <p>
        Estamos localizados em QND 610. Venha nos visitar e descubra por que somos apaixonados por hambúrgueres!
      </p>
      <p>
        Horário de funcionamento: Segunda a Sexta-feira: 11h - 22h | Sábado e Domingo: 12h - 23h
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}

section {
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
}

h2 {
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  border-left: 4px solid darkgoldenrod;
  text-align: justify;
  padding: 10px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  text-align: justify;
}

p {
  line-height: 1.6;
}
</style>
