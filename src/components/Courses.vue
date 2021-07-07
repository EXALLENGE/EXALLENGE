<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title">Популярные курсы</h2>
      <a class="btn to-catalog" href="#" title="Посмотреть все курсы">Все курсы</a>
      <div class="popular-items">
        <div class="catalog-item">
          <h3>
            Python.
            <br />Базовый курс
          </h3>
          <p>Изучим основы языка, напишем первые программы. Прорешаем более 70 практических задач, которые проверят наши учителя.</p>
          <div class="buttons">
            <a href="/description/python" class="btn btn-info">Описание</a>
            <a href="/enroll/python" class="btn btn-buy">Записаться</a>
          </div>
        </div>
        <div class="catalog-item">
          <h3>
            SQL.
            <br />Базовый курс
          </h3>
          <p>Разберем как основы, так и продвинутые темы языка. Разработаем выпускной проект в группах с использованием системы контроля версий.</p>
          <div class="buttons">
            <a href="/description/sql" class="btn btn-info">Описание</a>
            <a href="/enroll/sql" class="btn btn-buy">Записаться</a>
          </div>
        </div>
        <div class="catalog-item">
          <h3>
            Python.
            <br />Продвинутый курс
          </h3>
          <p>Рассмотрим, как устроен фронтенд в 2019 году и что нужно знать для того, чтобы заниматься разработкой. Реализуем проект с использованием HTML, CSS и JS.</p>
          <div class="buttons">
            <a href="/description/python-professional" class="btn btn-info">Описание</a>
            <a href="/enroll-with-message/python-professional" class="btn btn-buy">Записаться</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  margin: 0;
  margin-right: 180px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 45px;
  line-height: 55px;
  color: #707070;
}
.popular-and-price {
  padding-top: 70px;
  padding-bottom: 90px;
  background-color: #f2f2f2;
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.popular-and-price .container {
  position: relative;
}

.popular-items {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.to-catalog {
  position: absolute;
  top: 0;
  right: 0;

  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 18px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}

.to-catalog:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.to-catalog:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

.catalog-item {
  width: 262px;
  padding: 15px 22px;
  border: 1px solid #d8d8d8;
}

.catalog-item h3 {
  margin: 0;
  font-size: 22px;
  color: #707070;
}

.catalog-item p {
  height: 80px;
  font-size: 14px;
}

.catalog-item-price {
  max-width: 55px;
  margin-bottom: 20px;
}

.catalog-item .btn {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 9px 16px;
  margin-top: 20px;
  color: #c0b8ad;
  border: 2px solid #a69f95;
  border-radius: 4px;
}
.catalog-item .btn:hover {
  color: #7d6038;
  border: 2px solid #6c5330;
}

.catalog-item .btn:active {
  color: #908b85;
  border: 2px solid #7d7973;
}

.catalog-item .btn-info {
  margin-right: 30px;
}

.buttons {
  margin-top: 30px;
  margin-bottom: 30px;
}

@media only screen and (max-width: 1050px) {
  .section-title {
    padding-left: 20px;
  }

  .popular-items {
    display: block;
  }
  .container {
    width: initial;
  }
  .catalog-item {
    width: initial;
    border: initial;
  }
  .catalog-item h3 {
    max-width: initial;
  }
  .catalog-item p {
    font-size: 16px;
    height: initial;
  }
  .to-catalog {
    top: 10px;
    right: 20px;
  }
}

@media screen and (max-width: 460px) {
  .to-catalog {
    display: none;
  }
}
</style>

<script>
export default {};
</script>
