<template>
  <Layout>
    <h1>About</h1>
    <md-avatar class="md-large">
      <g-image src="~/assets/images/me.jpg" alt="me" />
    </md-avatar>
    <p>{{ $static.metaData.siteDescription }}</p>
    <p class="md-headline">経歴</p>
    <p>
      岐阜県で育ち、大学進学とともに福井県へ...
    </p>
    <p>
      新卒では郵便局に入社し、名古屋の大学院にて経営学を学ぶために進学する。
    </p>
    <p>
      何かスキルを身につけたいと思い、郵便局を退職し、地元の製造メーカーに人生初の転職を経験し、
    </p>
    <p>
      プログラミングに触れ、一生の仕事にしていきたいと決意し、web系のシステム会社に二度目の転職。
    </p>
    <p>
      現在は岐阜でエンジニアとしてリモートワークで働いています。
    </p>
    <p class="md-headline">スキル</p>
    <ul>
      <li>
        Ruby, Ruby on Rails
      </li>
      <li>
        Javascript, Vue.js, Nuxt.js
      </li>
      <li>
        typescript, Angular
      </li>
    </ul>
  </Layout>
</template>

<static-query>
{
  metaData {
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "About",
      meta: [
        { name: "description", content: this.$static.metaData.siteDescription }
      ]
    };
  }
};
</script>

<style scoped>
  p {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    color: #404040;
  }
  li {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    color: #404040;
  }
</style>
