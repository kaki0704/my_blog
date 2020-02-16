<template>
  <Layout>
    <h1>About</h1>
    <md-avatar class="md-large">
      <g-image src="~/assets/images/me.jpg" alt="me" />
    </md-avatar>
    <p>{{ $static.metadata.siteDescription }}</p>
    <p class="md-headline">経歴</p>
    <p>
      1988年岐阜県生まれ。高校までは岐阜県内に住んでいたが、大学進学とともに福井県へ...
    </p>
    <p>
      新卒では郵便局に入社した一方で、名古屋の大学院にて経営学を学ぶために進学する。
    </p>
    <p>
      何かスキルを身につけたいと思い、郵便局を退職し、地元の製造メーカーに人生初の転職を経験し、
    </p>
    <p>
      プログラミングに触れ、一生の仕事にしていきたいと決意。web系のシステム会社に二度目の転職。
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
    <div class="sns" style="margin-top: 20px; margin-botttom: 30px;">
      <small>
        <md-button class="md-icon-button">
          <md-icon class="fa fa-github"></md-icon>
        </md-button>
      </small>
      <small>
        <md-button class="md-icon-button">
          <md-icon class="fa fa-twitter"></md-icon>
        </md-button>
      </small>
      <small>
        <md-button class="md-icon-button">
          <md-icon class="fa fa-facebook"></md-icon>
        </md-button>
      </small>
      <small>
        <md-button class="md-icon-button">
          <md-icon class="fa fa-instagram"></md-icon>
        </md-button>
      </small>
    </div>
  </Layout>
</template>

<static-query>
{
  metadata {
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
        { name: "description", content: this.$static.metadata.siteDescription }
      ]
    };
  }
};
</script>

<style scoped>
body {
  margin-bottom: 30%;
}
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

i {
  color: gray;
}

.sns {
  float: right;
  padding-right: 20%;
}
</style>
