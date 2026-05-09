const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarun AWS EC2</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, sans-serif;
        background: #000;
        color: #fff;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }

      .container {
        width: 100%;
        max-width: 1000px;
        border: 1px solid #333;
        border-radius: 20px;
        padding: 60px 40px;
        background: #111;
        text-align: center;
        box-shadow: 0 0 30px rgba(255,255,255,0.05);
      }

      .tag {
        display: inline-block;
        padding: 8px 18px;
        border: 1px solid #444;
        border-radius: 50px;
        margin-bottom: 25px;
        font-size: 14px;
        color: #ccc;
      }

      h1 {
        font-size: 64px;
        line-height: 1.1;
        margin-bottom: 20px;
      }

      h1 span {
        color: #999;
      }

      p {
        font-size: 18px;
        color: #bbb;
        max-width: 700px;
        margin: auto;
        line-height: 1.7;
      }

      .buttons {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }

      .btn {
        padding: 14px 28px;
        text-decoration: none;
        border-radius: 10px;
        transition: 0.3s;
        font-weight: bold;
      }

      .primary {
        background: #fff;
        color: #000;
      }

      .primary:hover {
        background: #ddd;
      }

      .secondary {
        border: 1px solid #555;
        color: #fff;
      }

      .secondary:hover {
        background: #222;
      }

      .footer {
        margin-top: 50px;
        color: #666;
        font-size: 14px;
      }

      @media (max-width: 768px) {
        .container {
          padding: 40px 25px;
        }

        h1 {
          font-size: 40px;
        }

        p {
          font-size: 16px;
        }

        .buttons {
          flex-direction: column;
        }

        .btn {
          width: 100%;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="tag">
        AWS EC2 • Node.js • Express
      </div>

      <h1>
        Welcome to <span>Tarun's</span><br />
        AWS Server
      </h1>

      <p>
        This Node.js application is successfully deployed on an AWS EC2 instance
        using Express.js. The server is fully responsive, production-ready,
        and running live on port 3000.
      </p>

      <div class="buttons">
        <a href="#" class="btn primary">Server Running</a>
        <a href="#" class="btn secondary">AWS EC2 Active</a>
      </div>

      <div class="footer">
        Built with Node.js, Express & AWS EC2
      </div>
    </div>
  </body>
  </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});