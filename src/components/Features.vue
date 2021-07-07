<template>
  <div class="features">
    <div class="container">
      <div class="feature-item feature-choice">
        <div class="main__item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="supportIconTitle"
          >
            <title id="supportIconTitle">Support</title>
            <path
              stroke-linecap="round"
              d="M11 8L9.42229 7.21115C9.14458 7.07229 8.83835 7 8.52786 7H7.82843C7.29799 7 6.78929 7.21071 6.41421 7.58579L5.58579 8.41421C5.21071 8.78929 5 9.29799 5 9.82843L5 14.9296C5 15.5983 5.3342 16.2228 5.8906 16.5937L9.75746 19.1716C10.4944 19.663 11.4668 19.611 12.1472 19.044L17 15"
            />
            <path
              d="M14.4549 12.9142C13.8515 12.1062 12.741 11.8739 11.8643 12.3721L10.009 13.4266C9.41298 13.7653 8.66412 13.6641 8.17937 13.1794V13.1794C7.54605 12.546 7.59324 11.5056 8.2813 10.9323L12.4437 7.46356C12.8032 7.16403 13.2562 7 13.7241 7H14.5279C14.8384 7 15.1446 7.07229 15.4223 7.21115L17.8944 8.44721C18.572 8.786 19 9.47852 19 10.2361L19 12.9796C19 14.9037 16.5489 15.718 15.3976 14.1764L14.4549 12.9142Z"
            />
            <path d="M1 17V8" />
            <path d="M1 17V8" />
            <path d="M23 17V8" />
          </svg>
        </div>
        <h2 class="feature-title">Очно</h2>
        <p>Онлайн-курсы заканчивают 1.5 процента слушателей. Что-то запоминают еще меньше. Поэтому мы решили проводить очно все наши занятия.</p>
      </div>
      <div class="feature-item feature-quality">
        <div class="main__item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="diamondIconTitle"
          >
            <title id="diamondIconTitle">Diamond</title>
            <path
              d="M12 20L3 11M12 20L21 11M12 20L8 11M12 20L16 11M3 11L7 5M3 11H8M7 5L8 11M7 5H12M17 5L21 11M17 5L16 11M17 5H12M21 11H16M8 11H16M8 11L12 5M16 11L12 5"
            />
          </svg>
        </div>
        <h2 class="feature-title">Качественно</h2>
        <p>Мы детально проработали все и сами были на вашем месте. Мы уже заранее знаем, какие у вас будут трудности и как нам их вместе преодолеть.</p>
      </div>
      <div class="feature-item feature-safety">
        <div class="main__item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="basketballIconTitle"
          >
            <title id="basketballIconTitle">Basketball</title>
            <g stroke-linecap="butt">
              <path
                d="M3.00476 7.71673C6.03818 6.81589 9.99791 7.74841 13.2448 10.4315C16.5425 13.1566 18.2053 16.9442 17.8244 20.1241"
              />
              <path
                d="M10.102 21.7996C9.33937 19.3589 10.0106 15.6137 12.0776 12.0335C14.1385 8.46402 17.0351 6.01413 19.5251 5.44463"
              />
              <path
                d="M11.4419 2C11.2615 3.94419 10.5157 6.2298 9.22541 8.46468C7.29158 11.8142 4.64753 14.1615 2.40135 14.7854"
              />
            </g>
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <h2 class="feature-title">Увлекательно</h2>
        <p>Мы не читаем лекции по 3 часа и не просим пройти тест в конце. На наших курсах вы будете разрабатывать реальные проекты, чтобы все понять.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features {
  padding-top: 50px;
  padding-bottom: 55px;
  width: 1000px;
  margin: 0 auto;
}

.features .container {
  display: flex;
}

.feature-item {
  width: 279px;
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  border-left: 1px solid #d9d9d9;
}

.feature-item:first-child {
  border-left-color: transparent;
}

.main__item {
  text-align: center;
}

svg {
  stroke: #30b58b;
  stroke-width: 1;
  stroke-linecap: square;
  stroke-linejoin: miter;
  fill: none;
  color: #30b58b;
  width: 54px;
  height: 54px;
  margin: 0 auto;
}

.feature-title {
  margin: 0;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #999;
}

.feature-item p {
  font: 12px/18px Arial, Tahoma, Verdana, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #404040;
}

@media screen and (max-width: 1000px) {
  .features {
    width: initial;
  }
  .features .container {
    display: block;
  }
  .feature-item {
    width: initial;
    padding-right: 0px;
    padding-left: 0px;
    font-size: 14px;
    line-height: 17px;

    border-left-color: transparent;
  }
}
</style>

<script>
export default {};
</script>
