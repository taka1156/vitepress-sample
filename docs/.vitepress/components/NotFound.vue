<template>
  <div class="container">
    <div class="error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="error-icon"
        viewBox="0 0 48 48"
      >
        <defs>
          <linearGradient id="g">
            <stop offset="0" stop-color="#48C9FF" />
            <stop offset="1" stop-color="#8E64FF" />
          </linearGradient>
        </defs>
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>

      <p class="description">
        エラーが発生しました。<br />
        <a class="error-link" href="/">ホームに戻る</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .container {
    margin: 70px auto 0;
    background: #f7f8fb;
    padding: 100px;
  }

  .error {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-family: sans-serif;
    font-weight: 100 !important;
    color: #47494e;
    text-align: center;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  .error-icon {
    width: 90px;
    height: 90px;
    fill: url(#g);
  }
</style>
