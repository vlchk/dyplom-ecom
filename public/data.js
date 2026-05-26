// Centralized product data
const PRODUCTS = [
  {
    "id": "tshirt",
    "name": "Men's Fashion T Shirt",
    "price": 92.0,
    "priceText": "$92.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA0r053Gt5lWz9fKlNE0BMCkT2HlwJtqpRvRTK3v-T8u7UvxYPXkug-39EBM4QYDfUvkHp9ayMN3ETkQP56uVm_s0im4okZe7ACtJUjyS1kgYIlburfLOb-QK34FWwADNRmkHbpIYtKwh0pIbB7SWq5H4A8BZFUmlSkw_AaksENP_ePwetVhFgFPE0Qr6s/s16000/1.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE6IQkXJEWYVotoHKy_p2ADQ9nHp5YpeIOs3dAg7Hxsx92qPIEgaRG3xF4wj_MvLaH6ZSTg8gC1LmtQyUPgn_ktAexZQD4iWu9oGdZCHm1r0AV7LQfQSYU2VsHBOcakQHQaoJdNt5ZL0c_L5A0tq6jhG3s2B28s_WbzRdboQgaenZCViKDpbQnwru622MU/s315/1.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3qWEIYT14DogayXMsvbCuxKlZJZxb00ZME3AZKDRjxF3soqS_ZbrAcqQp1333Wdo9Knqh-hOjl-FX1udXifX1dgjn4a2qqbBwKkV1Zz_FryveIugcWZHgLOUBi1vUgr8VdarOWd2LhFjJI24g3pGBvdcf_2hJ4tXs8HG_reeCNfFqX3Jo9ackYO1Vu7_Z/s320/24.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvfbEZ3qY4Awvc1Rb4rJ1_OJrzPxnGGyP72ZBA44VmvDwRlebbZBZ13K7pfqxZTpUJDwJUTpckaP1lqm2O9rsQwgx4YizwNcvylXiOuf48vkPU4O-N_U2KYpBqWIUvMdvpk8j1c5QbJ-pNq9sHNKmmIdCAjz7JI1b9GZWnZ2xQ3khmudMPxDzPRyDU3IUV/s320/25.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK3NfKrtjEtjyavlAvILYVYtSoWQ1KHx2r0eKP1Br97glrB8RBrD2I1q0UtYYMDvoGTJRE9ndu4CVbT0XHmivkbECRUPp5fJWKutZgi9DUsHbhISpXhtGWz6EAWan1hJuSNFOJKhEKVJVHlqtMQzYPclY3n-biIOeYRyhwFrsfzsC-eQdapZHn7XMTiOgJ/s320/26.jpg"
    ],
    "description": "The Gildan Ultra Cotton t-shirt is a heavyweight, classic-fit t-shirt made primarily from 100% U.S. cotton. It is known for its durability, featuring a seamless double-needle collar, taped neck and shoulders, and double-needle sleeves and hem. The shirt is pre-shrunk, ideal for screen printing, and available in a wide variety of solid and heathered colors."
  },
  {
    "id": "hoodie",
    "name": "Hygge Hoodie",
    "price": 110.0,
    "priceText": "$110.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_BVUpNvAp8Aqn5l1hPFjDdrr1VeZu6osWw0T_4_E2sKeiCi2NrwBweFzwe3ABLh0Y21339p5FaxA3R-nsHmc9N0iZJ2eNRupMa-6W1Y95mToh6WPWe5-A0EKOPlyr_Y7wPSklfMvv1nzWFK0-vc2w7jrOz0vE9Z-IEbvqtNsbjTHBdVEQJyFAAh36ndnG/s320/img_0208.png",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_BVUpNvAp8Aqn5l1hPFjDdrr1VeZu6osWw0T_4_E2sKeiCi2NrwBweFzwe3ABLh0Y21339p5FaxA3R-nsHmc9N0iZJ2eNRupMa-6W1Y95mToh6WPWe5-A0EKOPlyr_Y7wPSklfMvv1nzWFK0-vc2w7jrOz0vE9Z-IEbvqtNsbjTHBdVEQJyFAAh36ndnG/s320/img_0208.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH8BOV0Es3xLNnLv9sGKlR2AnYDnmxMqV8LirtSEl5KHfYB_u3PicxegmIrrPiMORgN2l6K5XgTAnbQjT5XtOeG4TY9hySKh4cA5WBtT_QtPww7n9ctgFK03i9gRLGsi8sy8fxPA3FmM3I2sd36q161wDufgfAXCPqCaA55rLzINZX8WNVBcR7dEQCp5jp/s320/img_6390.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHC-ODT0JU0oSc2OW_IG1TNIFj0nFVLMmnaMT27Lq1Ojvme5JG8-nkvxqV8633MDgvD2KG5zuyjqyeJ2omO-CKpSfyda9FZG6Qiiil9JUmUk3fqFim9TBswLogBCFXPc69c5e4Vzrjc6X08NcGotDbT2zX7JBxFXSj9sXW8TZw9AreQNOgYXl1ANTwXrk3/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_54_09.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBUW7iV78HeyG_o518-R5fhrJSAUETcMemvXVWwv7c8C5-4cwYmPWApneqj33-b7REcUSUXes-hnj3YsvK84EBnq6hjY4vWkshtfvUkXTMvp1nGyUaRrqlVAkIJk0BrhIBsFZM8augLQMFTLrPRASIKJhco1OZsScBI3HjM-zlaMBbUy28VYb5e-viNTu6/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_52_44.png"
    ],
    "description": "Hygge Hoodie brings effortless comfort with a clean, minimalist design. Made from soft, cozy fabric, it offers a relaxed fit perfect for everyday warmth, slow mornings, and laid-back moments. A timeless essential for anyone who values simplicity and comfort."
  },
  {
    "id": "socks",
    "name": "Cotton Socks",
    "price": 5.0,
    "priceText": "$5.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtFkSk-kkSpFJzXr7tNBCKZ1OTOx7qest2IrkEPHuqE30GMWWOo9B3O3Ec_2ebvgEmxu_gwi2cDU7AofmKLacUVkWEjWEsR7jJ4xKK0xtahIP9SUgGALfmVMwH0n1x_TqHqUMeezTUr6RA53xEknzFNSCnCH5JSnIQyFD2i2C0zCvaWyWYTpaLrIp35hNs/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2011_27_02.png",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtFkSk-kkSpFJzXr7tNBCKZ1OTOx7qest2IrkEPHuqE30GMWWOo9B3O3Ec_2ebvgEmxu_gwi2cDU7AofmKLacUVkWEjWEsR7jJ4xKK0xtahIP9SUgGALfmVMwH0n1x_TqHqUMeezTUr6RA53xEknzFNSCnCH5JSnIQyFD2i2C0zCvaWyWYTpaLrIp35hNs/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2011_27_02.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieJsklpER9ZPqpPHDy2SOcGtEcafnAOtwpMsuyfFdGw5U7hiNbQUknOCeVwDskwQ0rCWGYU6jQc0Oj58dcJXZL4JpwkiJTVdYVSUnj_F0KkUQ7SHAJyUX_9bxqapJWKkSCRXQ6FjchARU0sGTeh7zflPkg_uEs-slb7DgZfOO-nyDYQ2W8IyEldSpcG4kP/s320/1-14-scaled.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUckiSIj5HmikYVgYuLxSAJR6sklYex7CZnh2g-P1VVXSzT-1rjBY97AqXvRMg_WENhAKfPBKIkiOJ0CZuGOz38wt6avuSX5NwV7fqqXcM2bMpGl8UDD1qeolWBOGH5KoDJQPV2VGwC-J1Rlx3mIdfREnGk05Of42pIFN2EnFRxLPnBQDXGUGP5gWbll8m/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2011_28_17.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4ptuLIbcwUHJa10STPZn2WhzQ0tz-XRo1gzQq6Nl6_FyAy1PSBsqsGvWxCskcR5s-40JSMU1ipabKg3UOcjgK3yyZTg5hxAx00fZ1qT6g0KniMzw067unmvjcJO8fL2a07HA2Djnkd9OwjXQG6Euy2Nj8x_uYoeYlSv91gLjHgPgnsX1vtF-ecaSD-V3p/s320/1-13-scaled.png"
    ],
    "description": "Cotton Socks offer soft, breathable comfort with a clean, everyday design. Made from smooth, durable fabric, they provide a snug fit perfect for all-day wear, layering, or effortless minimal style."
  },
  {
    "id": "boots",
    "name": "Grip Boots",
    "price": 80.0,
    "priceText": "$80.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgprmAa8urqMg8FHHZUFxI0miypFqJA_1gY0c8ZEaisJvaMe4SMZwwdwul2IAaK4-zlowK6KqnMJSdIz4iC9_gESeb1BKsQNQPd46BiguWQkhwojG9B9rF2yxHkztHV4-fEu8rtEAgJS6BM7ycsnrXzRKouh3AOszL4rhm1yL5dgeZYhT0rKmXsY-am_98H/s320/2.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgprmAa8urqMg8FHHZUFxI0miypFqJA_1gY0c8ZEaisJvaMe4SMZwwdwul2IAaK4-zlowK6KqnMJSdIz4iC9_gESeb1BKsQNQPd46BiguWQkhwojG9B9rF2yxHkztHV4-fEu8rtEAgJS6BM7ycsnrXzRKouh3AOszL4rhm1yL5dgeZYhT0rKmXsY-am_98H/s320/2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPwhH-KBoUfbmvsrbVC3WFF8l1Fu-yBoVEhNw_AW3Jt249d4jciThJFCMZ18hDEyRFV4kUmsFmUe8F4l7Zxj_2-pbzU6BcQgDoew0SYrH8D-cB4evkj6onB4lAaLaCy_os3vlka-rorBTBi4o3COYLZa2JXLCw3uLnetEB9IzOYDch5AHCbR_tTanbHsO7/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_22_23.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYVZjr4Xq04ClDJYr2G053xMnQRbCTC9Rog_V8rolYWBZ_NTjjac9JwDYxLulpl_o-2zFbWqkgtBENfFJadx0kANy73ajIYsAAKLDUsiVUT8hblSsrrfOlfZooaGGkz7dnEzoL67y2ihy3OMvcnD4ZbA0Alx6hq8ymZ9SloDLbWxUsuwXIkhk1kWnEb00x/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_22_26.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtKgTYktZABLVv6m2bzArL1QA5_PM0P0YVBBLb5j8aBd9nESEo1fKqORjvHQZcuJSg8OgiFaCvPP30D3dJPAVH2sZEgflD50ScJ_La6cJIVoIsjUbznllmZ9iHLSPMoejYXx2x8ji0xw07Y1CD_jl3UgW8cCExezW22sgO35u7y7J1f4fyY52g_niEUcES/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_23_07.png"
    ],
    "description": "Grip Boots are high-quality, durable grip socks designed to provide exceptional stability and comfort during training or everyday use. Made from a soft and breathable cotton blend, they offer a secure, flexible fit that supports natural movement. They feature a reinforced non-slip sole with silicone grip pads that deliver reliable traction on a variety of surfaces, making them ideal for sports, fitness, yoga, or any active lifestyle. The socks include a cushioned heel and toe, an elastic ribbed cuff that stays in place, and a sturdy construction built for long-lasting wear."
  },
  {
    "id": "beanie",
    "name": "Soft Knit Beanie",
    "price": 25.0,
    "priceText": "$25.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmwt8lKbriWD-9A2BDJE_F-3O7xgIL2kl-oe027Yf5MgbNXo6e6Mk7nsyJe32CtVmPsetHR6pronBw966fK23pF5Fx3fv9Ambfx4XhhjtevVlogD6f9pcJMPg_ZjKY0F9m2QUdOc8XmNGhGrHUguVP8L18OlEGy5EK-jMHDxD0bjLtQ_NnPMw3E7_RtXSS/s320/4.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmwt8lKbriWD-9A2BDJE_F-3O7xgIL2kl-oe027Yf5MgbNXo6e6Mk7nsyJe32CtVmPsetHR6pronBw966fK23pF5Fx3fv9Ambfx4XhhjtevVlogD6f9pcJMPg_ZjKY0F9m2QUdOc8XmNGhGrHUguVP8L18OlEGy5EK-jMHDxD0bjLtQ_NnPMw3E7_RtXSS/s320/4.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOvwbJkl5jvUH3JZ0NVC19Fh-6tjHmgl6TW855_whV4m3QO0kvc4TRbiXBom69paA1QwXcV2zuo0e6kxBlSodr4RdSabScwQdM7HGA232gkTeBXJaBy8YOrLDEludsiDmgRR2VrVrEMnrvB0J1gWvirJ8wRgyJF4TcVqNq7QPCfjNYpDJitO_aOYSqK1nf/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2015_08_38.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiArJO2Jmay0nXy9tLJIyBSWzpjiTPdjAL0UhRrulnHdFw5bY7BMfFGavv25h32mo-VUisuxj_QbX-zqirhIuEp0XH9SnvKp67YKOn0SG7un9c3BqUzpfokzMpbswNjmvc9TFNthc41REpRR_L6mdpnDD5jre_PesHd37AZtTX9MGCZV4YEiIL5EoyZMcN8/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2015_08_40.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggRzw3BkvBZ0eTP35icJNrhKF5A8KTyBukBBsISB6ZxoTtLZHfutvoVEzt0ITG-KE_aCHIfU9jjH_sb7AAGQ2tIz4dPtPNM2BZ_5HxFk-CmcLedggmcfOzkrOgN6VTYP-wgLOdJHUIyBqK-Z6sFpF7E86cxPj2HgpGS4HSfrbzykeq1fiKqTe7pgirb5Hh/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2015_10_53.png"
    ],
    "description": "Soft Knit Beanie is a cozy, lightweight hat crafted for everyday comfort. Made from soft, breathable knit fabric, it offers a snug fit that keeps you warm without feeling bulky. Its minimalist design makes it a versatile accessory \u2014 perfect for casual wear, outdoor strolls, or cool-weather adventures."
  },
  {
    "id": "sleeve",
    "name": "Long-Sleeved Shirt",
    "price": 89.0,
    "priceText": "$89.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk9qhkC65xuecr_W4MMctCBxTbLk02mYGi4x73ooOgcqeMgQOuOb0jYkgWRjcWcoDt5YQ3sxZSdXTGDRPwfCepQrn1PTtQEn4pcPufTZKv5p6k1flzgRrvfT0oie010y-VF37uZBnLY1qHXHxvNxwgYL2T6xN11nzdkAuSPkdo2BdaGO6AwjhxnIWBXspK/s320/1-18.png",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk9qhkC65xuecr_W4MMctCBxTbLk02mYGi4x73ooOgcqeMgQOuOb0jYkgWRjcWcoDt5YQ3sxZSdXTGDRPwfCepQrn1PTtQEn4pcPufTZKv5p6k1flzgRrvfT0oie010y-VF37uZBnLY1qHXHxvNxwgYL2T6xN11nzdkAuSPkdo2BdaGO6AwjhxnIWBXspK/s320/1-18.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg122FGaHjCf18XGkKNevEpznP5KP8TefONMDOeDMmyttgMZfAiM7aODrjWxte2tEFurVnkhAtIYVCo5IEicDr6FOLUuU6RkQsh5N1Cva7O_5Lye5C6J6L5NkdY5QGjhe4CXzz8tQ4cWu_Hc9wkLlleOy0KGf6_mnef6teTZSEhf75q2bHG4jPWNG0KNzqw/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2011_10_30.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNoHQSddw4CIm0nXSFiT-ql0b8qLb0D9h6nfhVJ5GMlH0hdnyQADmC9MG1lXftdu1DAcG5aB5nl-rENcVxJMd4HIPvt33GCX_hUkjHCTEpAb7dmBcA0Vat97Sz3uaj1fWfhG8EpKHgL2e_UZIvBCIP077-YVa2urbV5_rzFq8RDB5YtEs72ZiSfVeCM39x/s320/1-16.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlrwcUwkAJdPnPcXKw8w5M43DPU77rmNypwDWl9mEThnJ5dQ17-CSjb1vDx8a_CTJ62eU3GmjHHIkcnNCI8Iy0KhalQ23ugKUog47sybs64_l70v_ycOd5vpFAe55nnMHZLsH9k3ZBL_GlXSoejRSTHq5tJM31UDhcQjOHn82mePb0GqOCaz1_7Ecftpjm/s320/1-15.png"
    ],
    "description": "This long-sleeved shirt delivers a clean, refined look with a smooth, lightweight feel. Its fitted silhouette and minimalist design make it a versatile everyday essential \u2014 perfect for layering, casual outfits, or effortless elegance."
  },
  {
    "id": "pack",
    "name": "Midnight Urban Pack",
    "price": 75.0,
    "priceText": "$75.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoP-HKn9nzuFA_N4_mKGVfPDPvVU5Y6TJQbxMB_m_3xsEvaKi3Ji8hbFYevDQUdF4xAaUE_uehxqDz59BYpARebpWrW8mXj2a4zjqyw0qnuxzrA-yUZxMClsxQEgFiQz4MqyEkjL_ootoW8q6gCA6xjJdv1cIyZ1GgqdXO0Kz6qLC1lS8-To_dNnhOkWXg/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_59_25.png",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoP-HKn9nzuFA_N4_mKGVfPDPvVU5Y6TJQbxMB_m_3xsEvaKi3Ji8hbFYevDQUdF4xAaUE_uehxqDz59BYpARebpWrW8mXj2a4zjqyw0qnuxzrA-yUZxMClsxQEgFiQz4MqyEkjL_ootoW8q6gCA6xjJdv1cIyZ1GgqdXO0Kz6qLC1lS8-To_dNnhOkWXg/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_59_25.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYsZso2-uEs8fDwRyjoZxhIDLz-xdQWIB8nyUX2fQhGNNvfLaCFWJhPNc1Hh-YsWt8uOpq64PY62ncLjTPEoHBf0vzWcjE0P3lbOKOInCQzzhanCeoOVbqkUNa3V_emgIz3n7GPTuWCTfZyKeBA2WdkDcdfK-O1jUmVpUTnXkA9IpPsOOGcYNgX50P30Ar/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_52_40.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr88BIncthfOL7NYD34EmooicKuzH9LMvz7CI2UPjEFaZJg1zmKTjQE-sYGaLV_R65au2qJcQqpf8dRQnxO68AnrOj3A8krPYFRloUN2zPIX4hfr-adJ1CnBhbF4hK3SGMLWhYBUHwB68rjewsr4ydyL5LsdsFXyJxXLvhzLrCLT9xMyrvtqvriPOx-dAh/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_52_38.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTsBHqS98CSxgVbE7Oj42mDJNepACGfKknNt9ScAqgafw_I3K9RCia3DuVYtb99d1Y8H9zwW7s0R6m4uwxH5W7MCQo0SvxLWPCg84nhsWb9esTIZcPndEjLdVqZBWXU3tdgO-DfOifCuGllut4s9Q8J569dK2zx_Cz-WoKmGSq3BZ2dNx6_XczDorspTK2/s320/ChatGPT%20Image%2016%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2014_48_17.png"
    ],
    "description": "Midnight Urban Pack is a sleek, modern backpack designed for everyday city life. With its clean lines, deep midnight tone, and practical layout, it offers the perfect balance of style and functionality. Spacious compartments, a front quick-access pocket, and comfortable padded straps make it ideal for work, travel, or daily commutes."
  },
  {
    "id": "titan",
    "name": "Bold Chrono",
    "price": 92.0,
    "priceText": "$92.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1dItrQkrsbgG0wiI5dwbtMfLHDXxysyDujBZHmka8MtW-MGLHlu9wS1IYw_6Z_JNXNgzDedl3zEvkCWsp8-TXdvaFhOCqWl-QpMBJ8Bk8vadAi7_Io2xKH_e7ZIlRRm1wttHpjPxR0pGRXNA30gmCQQn0Jr5c77-Gxp9KLC3PhGBYGbFdAGKWAsp6W87A/s16000/1.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1dItrQkrsbgG0wiI5dwbtMfLHDXxysyDujBZHmka8MtW-MGLHlu9wS1IYw_6Z_JNXNgzDedl3zEvkCWsp8-TXdvaFhOCqWl-QpMBJ8Bk8vadAi7_Io2xKH_e7ZIlRRm1wttHpjPxR0pGRXNA30gmCQQn0Jr5c77-Gxp9KLC3PhGBYGbFdAGKWAsp6W87A/s16000/1.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6OCBa5PX9w4fdjuBdVBJMbY5vS6R-Ge45Ph6Sjrpl4WGkEpoE6R7KXMI9n8jLAnmFpyiLvZokVIP2-k1dZDV4C3KK8AjDj72fcE1lYEOdw_oe6jPZu-pOayk3QEe-YUldsaVhMLbzxlecvKILx85NdMVuanM1-N_DEXedI45UT-ds0PIm6sXXofqIAfIn/s16000/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2009_38_38.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOIsh7ZjJTvGctj9AY78gm6-PRnnP9Z0ENbfNwapnV9lHu6ubqpn5kT2nzZQbGp8s1tidfrG-DtBmhVEyyS7Je10CyCF7UvtMUFBIoMw2lEME5aVrWxyhZ8wmoSmeAAOw8UxiYcPgYCj_nEOnTk2-6BAWdSZshyphenhyphenZC8vZZqXF-ot_DgKBdYVW4U5nVOfccZ/s16000/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2009_47_10.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4G6LkGjtBZasmbmXGuxBl2jrL6Bk5TiL66SEbEjoSEnEL6iXhAFLyUq4SyYM9phe3oCAg-9aKTA2HERFKSLJb63P16EZcfN24cmu2K0Xn3XcRjeAZYZwMystlyV6fZrVvmjTpfhdYZuimEtJDke8la32WGhxBK1KAha1XFTJYEuWLjVsICAbfMVBsYehV/s16000/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2009_47_51.png"
    ],
    "description": "Its oversized case, textured strap, and precision chronograph details create a statement accessory built for confidence and character. A perfect choice for everyday wear, dynamic looks, or anyone who values bold style with a technical edge."
  },
  {
    "id": "croco",
    "name": "Minimal Croco",
    "price": 85.0,
    "priceText": "$85.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbY8l__pxIFIVyznLPj7OLZpnIsjncu8FwaPPQTR6NwGoglglWiRFs0gFLzJoR24H8lCX4Uw1QkuyaGH0IWs9hc30tLu3pj7AolkAXzDAh2Zw6G5tdaaYYSXI4B2XJsn07AD8jqb-qT3x4dQIJiqF-ClyzLtIGq5iKONL4GiNYj8kcKDqoZLWi1XV40w67/s320/2.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbY8l__pxIFIVyznLPj7OLZpnIsjncu8FwaPPQTR6NwGoglglWiRFs0gFLzJoR24H8lCX4Uw1QkuyaGH0IWs9hc30tLu3pj7AolkAXzDAh2Zw6G5tdaaYYSXI4B2XJsn07AD8jqb-qT3x4dQIJiqF-ClyzLtIGq5iKONL4GiNYj8kcKDqoZLWi1XV40w67/s320/2.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcgijD3QRcGC5NuXOP1EG4bv49sS32q3cyy5xTP0B-wG0sVQxmyaVbXkEFueCuyWpVgF1c60LhtQGAsjn-ehv6nTk4f3lBGXIcTBdJM3Rv5m-QFDZNHPa9AYFeW-WCfZTNq-8cDcOyIPQ1uyVhrm1_3HldU8_NVO7ZxiM5tsN2Bja8P6qvrZZxV-oT9tso/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_00_37.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbql2ou9ZqeLXq4jIvtGLLWxofrPkXYp4NemrNFV5BiSfYjQhfZBDHtnIt2gbuyXvZtomYd5Ncb1KtPAXYXycXs8ZZKHe_E1cVZ8mgjYmwQQArqLI2SJnS7msImW_NpEXUZaOhEqv-VL3CMIMpCT4-PYE9KCbSjI1FDcDLHiRljLRn7EhFLdJnib9xPhzK/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_02_08.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiO-J-ocKk3Zzx3MVRWFfn0ti6GDDKj93lwl2NwzuVZj4b3OL1oKVvzcYPcoLpNIQl3s2sqmqYd-8mPHF18HqjCbOYD2h5YpqRkobZy7PgBP1XqFwHAqMrJOa-TqRECVyqXkBJx4QFCVfNgvm2FW1w8Fuq3cQmc-TzeWvycyKdBYhfcwGbU0bfIX6gbYbuy/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_02_59.png"
    ],
    "description": "Featuring a clean dial, slim markers, and a refined leather or mesh strap, it delivers a timeless look with contemporary sophistication. Perfect for daily wear, formal outfits, or anyone who appreciates a sleek, minimalist timepiece with character."
  },
  {
    "id": "mesh",
    "name": "Mesh Chrono",
    "price": 133.0,
    "priceText": "$133.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHhm1UBwmpTT5YN_GVJqFNgydhWqpYGItAsb2AD-KfNDBhgfNmjgSNKIO5PhZs24_zoUdJVHc1W2fuRcZ50FNo4RBIaZD0v5-O0KB-El0t1KK3ZEIzGkyRzcyJgPVAZSYQDhNiubhBe0x3Zi-XzeiqVnQn-B6n8aXDZbRfspx4dZU3VQNYZWTxlBuezY74/s320/3.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHhm1UBwmpTT5YN_GVJqFNgydhWqpYGItAsb2AD-KfNDBhgfNmjgSNKIO5PhZs24_zoUdJVHc1W2fuRcZ50FNo4RBIaZD0v5-O0KB-El0t1KK3ZEIzGkyRzcyJgPVAZSYQDhNiubhBe0x3Zi-XzeiqVnQn-B6n8aXDZbRfspx4dZU3VQNYZWTxlBuezY74/s320/3.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiQqRILffoRvKLSJlyQ-L7212BpewVe2YmJ_K6Zerty6dvREoW-8otmJMiFtHFHhHg0Y1ZSK7ObcKjAgJEAZjODo7PkvYx-UGtn5ongv0He4RuL59n5mByu9uF9R-qmxz-NfIMPwsb35lahNCfdz8-9TAtMaGggCog1oRtiWBoMvecz1rpNHX1I6fZGtjv/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_08_24.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDQmnDgZvILqhuFL_9vpZbl7X3DzT3uTOT3mQgwodvyApnDnPv_ZMTVXD-_VjMo3AtOcC9lKio9UwzMuxjUmPjyBoG-Vc3XQekCxmxuLuzuKr9i89S8jYVnkHIyC5Ohc7h_ICVwlIrjRmknFBE70Yi6ekl3KJM7yN8nqCoIMNVnShuVcnhbcBfegH1LN_m/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_08_44.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtiSrpOUu9CuRpELvblsLzHnABPAU8398TMPeqawKeYgn80CQX5KhNPaIRyYoRYWSnvr3auLypLrh5uTa_OuNnrwOi-SKgAjfyBv_7lqVdNgnTKsts_BR6j_F9AOo3SOpHRDkRAgrqyZPyaGmyle5VgIOUn1d3AyWrMIpvA0DYHTHnaQizxq7-JX0XozbR/s320/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B8%D0%B9%20%D1%85%D1%80%D0%BE%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D1%84%20%D1%96%D0%B7%20%D1%81%D1%96%D1%82%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%BC%20%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.png"
    ],
    "description": "Its clean dial, sharp detailing, and woven stainless-steel strap create a timeless look that elevates any outfit. Perfect for everyday wear, business style, or anyone who values elegance with a technical edge."
  },
  {
    "id": "urban",
    "name": "Urban High",
    "price": 65.0,
    "priceText": "$65.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-so_YfviKR5SsU0cvAQ1tWBIjQHnq_b3w-9Z-dnGuL8FXDfettwtirLleJuzda_K-s2nS9ZicPuln9Kfnv5IVaBBuS25jjzZa75Afd9sddDOgtUhPRpZ0xL7PsXbeiwDaUtHqINu1GvGls6Kb5UQKtFKrPPA_8yBZadPWA0-rvjKKdsNsYCxnp3LtrgDS/s320/8.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-so_YfviKR5SsU0cvAQ1tWBIjQHnq_b3w-9Z-dnGuL8FXDfettwtirLleJuzda_K-s2nS9ZicPuln9Kfnv5IVaBBuS25jjzZa75Afd9sddDOgtUhPRpZ0xL7PsXbeiwDaUtHqINu1GvGls6Kb5UQKtFKrPPA_8yBZadPWA0-rvjKKdsNsYCxnp3LtrgDS/s320/8.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5s3tcYL2riEhd2S3EYP2ElJ56eO9H-nHJkOOjdl2FyRN3OwM1-wZonhyd4X1ECWrYa2MmoCOKQiKzOzpZzkkYXK8HFBcDwLNYj8tq3hanGmdpy46htKkp3-oQv1lbmLqy7K0pMDAb0Jv01p4Ki5fTduusnLjp6uZG9u3eYuorptiykQWqMVr9o8cVNrXS/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2015_49_46.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFv4IL0Q55WgcBQ5u3C2vrg8QinVQFxxNbcwUWtGg38ogoq-lFkmIbp49qB1Yo0bSqHDy-usGkVB9iWCnUnO4x16brpqFHy0QrxVg9kJga8II-iektdBbKrCi_gCpqlLTEb-5GU-UP7JJyrYuE3R-h25VXktMrmQEAaJ7fVDWIb2YNpWKEqz7ugCprjfz2/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2015_52_17.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4lLwOtf2PBQ1TdGCoQqwfn8Lkqh_n6n3I0vwm7QM02LRlopuxzw6JE0muxSGkdCvG3EMztylpdqQSlJbrvscWxH1JnycTY9qU-PcBcCjAMHFE4UtCLmj6aCfVfNaCpybJBnS3D3k_WK_Zc81U1pVIvZ6ujXiuQvSbgmwTtLElEf5yKcOktaXAtdErfwMp/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2016_31_36.png"
    ],
    "description": "Featuring a sleek layered design, cushioned ankle support, and durable outsoles, they deliver the perfect balance of functionality and attitude. Ideal for casual outfits, active days, or anyone who wants a bold and versatile sneaker choice."
  },
  {
    "id": "sand",
    "name": "Sand Trek",
    "price": 42.0,
    "priceText": "$42.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkitXl1WBSpWUT1TggtdYMgxbcguaMq6661O1uzT4V74gq7Ug9du9Vb8l_s3DlMZq1BXmgQ211m9c7LCBS68gxmdSga4h9vA1ZNcZ2PwAakNVONmPFWxPcm-51ClO1BVHVk4YymSz5SAX51TWHxO6V7wQx6jbIV-TUpvUbZeRGmgLRkjhqixNMOHmJea_k/s320/7.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkitXl1WBSpWUT1TggtdYMgxbcguaMq6661O1uzT4V74gq7Ug9du9Vb8l_s3DlMZq1BXmgQ211m9c7LCBS68gxmdSga4h9vA1ZNcZ2PwAakNVONmPFWxPcm-51ClO1BVHVk4YymSz5SAX51TWHxO6V7wQx6jbIV-TUpvUbZeRGmgLRkjhqixNMOHmJea_k/s320/7.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlZQkMyToJVqsfQ3LAmvYN2RHJ0rLvL8YBhZtLBcOuuU39gc9uGkmOfOlKsrFNQ62OkWsNVOXaEfynGZ2-Q8YB-qKxeRkuEtEOvN7oPH6HARKyv7KoIXxbptZCUJsHQffXLKMkQnFjIvvNfM4Zitft-1TrFO2huVRx3rMD527bvl3Vh9FpJ0HMvt3DDRKf/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2016_39_22.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJVVnrDqflLYbreRXRuJOIszGVHUnU2U5XDe0cg-WHHZcRXrrQcOkAU5u9iMuXXOV2ahd5dDBBZuwNkaxkVkRQNWCXtvhMEsnNkI5Ghz3LHfKIYMPSdV_ZAV3vlOxZSJrMZjnde7ZlDjUCrM9bYatBKxPeTWZx6pBBiyQ4LUkYpFnnZf_8WD7R5bgnECpS/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2016_52_28.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYm8YiLOaAPPRQ9XOOzUPSOMGLb8zwrfzcQPnDLcP2T0tJYny2LJ3mxZo8dfA5v0poiCNe6FmQ8SQMSooI7dH9mav4jsCv4-dZkVx6Pe9U2_knwJ_Syksx8LE_70lxDj1FqGlAs0LeaiuRtIVtV-KkjzbsOGe2hlDmuXVyuZWamHJSXAS1ZYrz-N7D49E_/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2016_55_36.png"
    ],
    "description": "Featuring premium suede, detailed moc-toe stitching, and a lightweight sole, they deliver a perfect balance of style and practicality. Ideal for casual outfits, smart-casual looks, or anyone who appreciates understated elegance."
  },
  {
    "id": "lace",
    "name": "Coffee Lace",
    "price": 81.0,
    "priceText": "$81.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhizFHYNZL8fM6mbk5wApDyAwiOXi5MOWkfppTgaQS1UFMe7UY1AmM5ZExn-6qlreLuRrWxCDqxWK2N6u7WKrvlHmQ_1_1umxDwKypemMsavacqqJ3xY4QbXA9V1vhEICo7p6E-sx4C6wsY1u5malvmwHKhB1r691xtWbIxf6qD-6u9ZnronI5nowTesbQP/s320/6.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhizFHYNZL8fM6mbk5wApDyAwiOXi5MOWkfppTgaQS1UFMe7UY1AmM5ZExn-6qlreLuRrWxCDqxWK2N6u7WKrvlHmQ_1_1umxDwKypemMsavacqqJ3xY4QbXA9V1vhEICo7p6E-sx4C6wsY1u5malvmwHKhB1r691xtWbIxf6qD-6u9ZnronI5nowTesbQP/s320/6.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaT443UozNz5rbv8OQ5YE9f0f2FjO3s75xsEJzVCfSzteY8S4A3S2nkNq2ujVo17B3_pr_dkCpBeGCe7bLEATx5MeTJjgjt8NfxqDJtH0px8c1eniJVF1IZkHttoJxLRQlhxf8ov3XUF-X8u2PwmFdJgesJgSHc3r8xJNTrND4kRjaOqSaiAGtpxUmD_BD/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_02_39.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_2DI6JFcWVrY-dOBS5M-iSiYzIY1nA1FvDSGsFMMde2s4cK3d3GmG9D7DUTpTIG1MWU0SHOl7CppJJZ2siixFZKoB8zmoVIsLUs-eH21JAArJq25GQGPIJaCJx4HdfJhyaLKyOpdwGfg5DiHEEAHWEbixmFfPKSzVFzuTsOyU46P1zPt1t7sEfrTBQzbY/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_04_11.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaQQaOgMLacZ2raJrg24QbFJdDYs58Gu1o2dGibmF7QbxhyXEXkUhV1NC5RZARImeM3ODwHlnWkE-0l0pvj6rTMW5tj3wT-2ooTR2X0odqKD0N5BmZ3eaYuKrCuYc9g76EShFmYzeY7N90-XIyBJI_CnFrM2S-KtrrFOK5YD9FqftzTvqM_BhaqhmaFb9a/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_06_04.png"
    ],
    "description": "Crafted from soft suede with clean stitching and a lightweight sole, they deliver a refined yet relaxed look perfect for everyday wear. An ideal choice for anyone who values versatile style and subtle elegance."
  },
  {
    "id": "mocha",
    "name": "Mocha Edge",
    "price": 102.0,
    "priceText": "$102.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLGXSk4J8_UAsBAzNkEJLjTodHHwSrlMOFVe99F1FlqIEa8o08H9gmAfGtP5kDWtU1Kx8IJHwMb3eeQnp4VqdzLJzc1oWhfCQMY34q3ScGTtIZ2RjzRw_m-X1GxIg-aeBAxMNqWRbsEfw25DXiiqbTEzxrxDJkz_1WCecgrlfuDL9NdT7pVtfdq2WdcosM/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_13_36.png",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLGXSk4J8_UAsBAzNkEJLjTodHHwSrlMOFVe99F1FlqIEa8o08H9gmAfGtP5kDWtU1Kx8IJHwMb3eeQnp4VqdzLJzc1oWhfCQMY34q3ScGTtIZ2RjzRw_m-X1GxIg-aeBAxMNqWRbsEfw25DXiiqbTEzxrxDJkz_1WCecgrlfuDL9NdT7pVtfdq2WdcosM/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_13_36.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ82tPm7SqB8vTiHpwXDYIAGHplfYSRtClCdeA9m7it3HoM6fvV0xZ5lgPoYQBYI8vNzCQL9jqshq8kGzeCO04CorkqeVg6WPbVa1l-5v7QrkmXLpeb49PvKRai6CRwvApb5kCRU2RzC1bCR-Rs-Km5U1JangwwqFi1tA0pmMLG2l3_stJIMAStSKXW8kf/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_15_39.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqUIzmnPaGPfzS94dXmTHP0N8osjUuTrIo28LiaMjl2TMskHu8Xk5UHyn_lk_iTCRWW207zfq2HUM2Poapm9pYKDILN2PLX4KoIgFVruFSC7eO_awpExG3EqQvlsSrPrJ54Iv_aDcrJQ6noypmTbRwmmV_9ORs4dj5xRbtqKmqO8We3UyqBOFNRyduNegG/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_15_42.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMneW8vzO4oItVvmMQ74htoKMz0uYB6CPLnQb1JRNiMRWaSbnzqU7oAXfNvJa2ptaWsoUOmaCLmT4HXjKv3sKPEj3hvnPDjSaIYMPBqimj8G5np6Yx9_mipe7VcrTF9nQ3daFNCcHsVUnr8q8aP9KCqppF_vprh7l4vX31pn4y070ISpc0V2LZUbg0rm_O/s320/ChatGPT%20Image%204%20%D0%B3%D1%80%D1%83%D0%B4.%202025%20%D1%80.,%2017_18_36.png"
    ],
    "description": "Crafted with a smooth matte finish, matching laces, and classic metal eyelets, they offer a perfect balance of style and everyday comfort. Ideal for casual outfits, urban looks, or anyone who wants footwear that stands out with confidence."
  },
  {
    "id": "racer",
    "name": "AeroSport Racer",
    "price": 112.0,
    "priceText": "$112.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4U1wR0VqggjWy7jlBD3iLsAgie2C_aaP1hJRkayevaGM1hYjTt1T1uIVLfSboeWvMeyxkuxgJIX2XkoQjm9joK5psJOAufKspV__L9eEFc8uR6-2F0nU_EFDKhA1AyB4ufcGTt5V5qeZI28AgwH0irobsI7Wf6OZWOx0DyFChsthoHs2x-rZxw5e8jN_0/s320/4.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4U1wR0VqggjWy7jlBD3iLsAgie2C_aaP1hJRkayevaGM1hYjTt1T1uIVLfSboeWvMeyxkuxgJIX2XkoQjm9joK5psJOAufKspV__L9eEFc8uR6-2F0nU_EFDKhA1AyB4ufcGTt5V5qeZI28AgwH0irobsI7Wf6OZWOx0DyFChsthoHs2x-rZxw5e8jN_0/s320/4.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrffRgCvVlVOlWdaNSq69fXQ5YfWZwE15BLfTZ6nUDmBbfkW7O-_4J-CaIw9EsahALorYk7Iooo4TBe21R-qY5JIx-67sz7ot3BIje_zaYX2xXArgw8jv2psClvj0J5f4oiMzAs5RdRofVKSU0Cb7kKuiDWdMM-APVOCF7IRCi0mqYkAG-a1b9AK1pTVRD/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_19_21.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiBWp83wtn_cJEYx8faS2RC_1rxqn2I662itw76C4iC9CEFQbOv5gfRV91OHAt1_mdfnLAIdJa6PsnB7Lf4uzG_kgSTZO_oB_nFVm-Ql0AVj4wO-HvLksrp44eL8iUtqeqH4jCCeTKFIVakGogGUKQ7vFwpcZvjciR09v0HoCl2dHPxTGIPIZ4DFbwfon7/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_20_28.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDvJTTkls-igyT0uQZhpkA3N4fbwRixDDf3cGHfr1TeSlNU6q0CV0sOfcz_TPDglXLwFFWr-YpuJCZwB4k_H_d999962pMXLIfeoQIEU8KexkE_DEJW-n4qubaJgyqU9uqwTzrOOaeCVizuTe_s7oSsiPBEemZnxG24R-V5diy-KwU6gEq0f3tk7AOxo4d/s320/ChatGPT%20Image%2029%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_21_52.png"
    ],
    "description": "Built for those who lead with confidence, this watch features a robust case, sharp indicators, and three performance-driven sub-dials. Available in striking color variations, it delivers both personality and reliability. A perfect choice for anyone who wants a dynamic, modern timepiece that stands out."
  },
  {
    "id": "eye",
    "name": "Eye Graphic Tee",
    "price": 39.0,
    "priceText": "$39.00",
    "mainImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0HvKQ38LE-i_1XR6aFc5mUI0f8I4C28BV7BZFGsIQQkqo8OoBoaWqUOx4gg8XyGP9FEGhjN8A1uFd6RK7dN-uihjiHvg2Nwr473o0FOLrDPWpZTR6pUAYMEIttUTbjykS1cEv9RxyyEgclR6nl_HfwfMoDnUF3gNiZb1SCuo8E_FDL90dn4Kcu7IkMANK/s320/3.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0HvKQ38LE-i_1XR6aFc5mUI0f8I4C28BV7BZFGsIQQkqo8OoBoaWqUOx4gg8XyGP9FEGhjN8A1uFd6RK7dN-uihjiHvg2Nwr473o0FOLrDPWpZTR6pUAYMEIttUTbjykS1cEv9RxyyEgclR6nl_HfwfMoDnUF3gNiZb1SCuo8E_FDL90dn4Kcu7IkMANK/s320/3.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_CaQQuDpR_LJmigIb9UsrmtX4Kp1sDcCnzpdP7UJNy1u-EpP1s8iJoE77wl3qPXZQ0f6ziBXtI4Fkzm4sDZ0Kjct6KUXjV3ZVP2pH6oOAE067UC3HQehhYNDny7yJgrbXjmgui7e0srZQWdyHrs-Z7Pn7FHKacjL0WjkFOtwkrlqhDs9s6fEeIsLx7RN7/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_20_48.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRnCNaG2_LvWFtXna5L4p2fWQqHaU5ClKLL1FUiI7oAnzwMP7Ue7vjLnJWUFyfLfSCIWQwMzuUifbxmQN7qI0jJjJtd6O3Vfag6NA2jPRPCvacQFSOF8aMJy3SEoDHaVlBsAtDBT8EI_4_U3uHTenWHxTYWC6s4ED0PYzimTV5Updzu1hfyVM2wAZOHPPs/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_20_52.png",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc-RkiOHKyb80udZyxmIY-0NuwhTyi3W23cWYvFMKC0ngSyS_CMWNB-iTAkPsX9Keh32or42qfdpPQFUIAF53L6wFoYd-DRXPl7u5wEnk40gyDYsy8P7kWqZCVpUmmM3kgY6OKHObU1ySFml-mQY_a2_wh9VIg6c73aJKiPY90Jbuid9oWrJZoRn2oj0Xo/s320/ChatGPT%20Image%2021%20%D0%BB%D0%B8%D1%81%D1%82.%202025%20%D1%80.,%2010_21_52.png"
    ],
    "description": "Eye Graphic Tee blends bold street style with artistic expression. Crafted from soft, breathable cotton, it features a striking eye motif that adds personality to any outfit. A perfect choice for everyday wear, creative looks, or anyone who loves apparel with character."
  }
];

function findProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === id; }) || null;
}

// =====================
//  BLOG POSTS
// =====================

const BLOG_POSTS = [
  {
    id: "summer-freedom",
    title: "Summer freedom styled your way.",
    date: "Jan 11, 2025",
    category: "Style stories",
    readingTime: "4 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyVta7tFjuRX57lqdQK5vGA02EKd6iGQ-Ox7ZCZmD0MS0Jr-Auwumsr9Spv0BaHXNVzP3vSLfMPUzCoe5rJMRBASYDu2dnQrgOhg8lTTDIgUIpbBVi0huSv9NlwOVtHHTlYbXFof9i_wyFNN5XrNkdj7Jnp8mT_Q5PY5No1idO5fv-zVsbaS89gvQNO4A1/s16000/1.jpg",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyVta7tFjuRX57lqdQK5vGA02EKd6iGQ-Ox7ZCZmD0MS0Jr-Auwumsr9Spv0BaHXNVzP3vSLfMPUzCoe5rJMRBASYDu2dnQrgOhg8lTTDIgUIpbBVi0huSv9NlwOVtHHTlYbXFof9i_wyFNN5XrNkdj7Jnp8mT_Q5PY5No1idO5fv-zVsbaS89gvQNO4A1/s16000/1.jpg",
    intro:
      "Warm days, late sunsets and outfits that move with you. This story is all about easy summer looks that feel as good as they look.",
    content: [
      "Forget heavy layers and complicated outfits. Summer style is about pieces that you barely feel on the body, but that still look put-together.",
      "Start with a breathable base: lightweight cotton tees, linen shirts and relaxed shorts. Then add one bold element – a bright lip, statement earrings or a patterned scarf.",
      "Don’t be afraid of color. Greens, oranges and soft pastels instantly make any look feel more alive.",
      "<strong>Pro tip:</strong> build a small summer capsule: 2–3 tops, 2 bottoms and 1 statement dress or jumpsuit. With them, you can create dozens of combinations without any extra thought."
    ],
    quote: "The best summer outfits are the ones you forget you’re wearing."
  },
  {
    id: "leather-confidence",
    title: "Leather made for confidence, not just for looks.",
    date: "Sep 20, 2025",
    category: "Editorial",
    readingTime: "3 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQWopDN6UPAk0gAee38w90jCIvTYBqF_hpzFv1XPS9STJO1im8AH5syFaLQGPG9o_HJP3osLGdrVaNVCcom6phU5Wi58giPdlBaF_V-itSN5ppgwb93A2V31i-_U3eRluivELei8yunVXLq7nD2q7ml6aDy78N0KAJILkM3nUOVV6XHmi_FFP11Ktp8ylA/s16000/2.jpg",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQWopDN6UPAk0gAee38w90jCIvTYBqF_hpzFv1XPS9STJO1im8AH5syFaLQGPG9o_HJP3osLGdrVaNVCcom6phU5Wi58giPdlBaF_V-itSN5ppgwb93A2V31i-_U3eRluivELei8yunVXLq7nD2q7ml6aDy78N0KAJILkM3nUOVV6XHmi_FFP11Ktp8ylA/s16000/2.jpg",
    intro:
      "A good leather jacket doesn’t just keep you warm – it changes the way you walk into a room.",
    content: [
      "Classic black leather will never go out of style, but you're not limited to it. Deep brown, petrol blue or even burgundy work just as well.",
      "The key is the fit. The seams should follow your shoulders, sleeves end right at the wrist and the jacket must close without pulling.",
      "Pair leather with something soft: a white tee, knitwear or even a flowy dress. The contrast of textures makes the image more expensive and thoughtful."
    ],
    quote: "Leather is less about rebellion and more about quiet confidence."
  },
  {
    id: "calm-meets-style",
    title: "Where calm meets style and inspiration grows.",
    date: "Jan 11, 2021",
    category: "Lifestyle",
    readingTime: "5 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihiwm7l2GlzSd0XsIElG8nCDMysKYSErbrKkjyGjDckbCa9qtdnXtBLLKupQkGc6ewbN_Qf3J2rU9Asif3q5q-omPA4MwI0r3yJf_PG5IJlAHZ6G8FmspqwTaQF-819jPMi6iQ7OKnER66H4EHBmy0gefGigsRb2ZNeonkTUZFIfgA4ZyqArTfZE3jrx0C/s16000/3.jpg",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihiwm7l2GlzSd0XsIElG8nCDMysKYSErbrKkjyGjDckbCa9qtdnXtBLLKupQkGc6ewbN_Qf3J2rU9Asif3q5q-omPA4MwI0r3yJf_PG5IJlAHZ6G8FmspqwTaQF-819jPMi6iQ7OKnER66H4EHBmy0gefGigsRb2ZNeonkTUZFIfgA4ZyqArTfZE3jrx0C/s16000/3.jpg",
    intro:
      "Some outfits are made for movement, others are made for breathing deeply and feeling present.",
    content: [
      "Good style doesn’t have to shout. Nude, warm, and earthy shades create a sense of calm even on the craziest day.",
      "Choose clean silhouettes and focus on textures: soft knits, brushed cotton, suede details.",
      "Create a small ritual before leaving home: choose your outfit the evening before, prepare your accessories, put on your favorite track. This calms you down and saves time in the morning."
    ],
    quote: "Style can be your quiet space, even when the day is loud."
  },
  {
    id: "color-speaks",
    title: "Color that speaks louder than words.",
    date: "Nov 9, 2025",
    category: "Color stories",
    readingTime: "4 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieNge-ccV4gjhZr0nc4f4nnKvwSLBY9KbNKDJFU6byROZ_uVjFRC41FgQfP3A3q_rcEdE1muoAkKM6KcC8qY3msGZ3eVn3uP7IzV5lzcyHTuT6Is85xnlezpnRiHAm0DbNog2vy5rexlwfd0-XdcC11Hmsp6UE3tWCPIPSMr7qEk11e3Tngxhz-2dWkCA5/s16000/4.jpg",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieNge-ccV4gjhZr0nc4f4nnKvwSLBY9KbNKDJFU6byROZ_uVjFRC41FgQfP3A3q_rcEdE1muoAkKM6KcC8qY3msGZ3eVn3uP7IzV5lzcyHTuT6Is85xnlezpnRiHAm0DbNog2vy5rexlwfd0-XdcC11Hmsp6UE3tWCPIPSMr7qEk11e3Tngxhz-2dWkCA5/s16000/4.jpg",
    intro:
      "There are days when you don’t want to explain yourself – you want your outfit to do it for you.",
    content: [
      "Bold color is the fastest way to change the mood of a look. One bright piece – a coat, lipstick, or even just a bag – shifts everything.",
      "To keep color from feeling “too much”, pair it with simple shapes and neutral companions: black, white, denim.",
      "If you're afraid to start, add color to your shoes or accessories. It's a small but noticeable step towards a new style."
    ],
    quote: "Wearing color is a decision to be seen."
  },
  {
    id: "new-season-fresh-wardrobe",
    title: "A new season. A fresh wardrobe.",
    date: "Mar 8, 2025",
    category: "Wardrobe reset",
    readingTime: "3 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5tP_lL6UAvSsSnr66OEqLmpf3AAE-QleQKAsBmbrnCM73-_SOcOFYZi_v_Kt8BT9mNJvZj3wjlhWs0ECHsbl93mligwK5wbFoxnBofckpuZ6OqYJNeoo6LnekqUa1TdtjNL46Zj-zKn-KXffnGd_2J8QiCN3L-zoXX0GFCNPUOmM452MuW7DjUdLdiX1E/s16000/1.webp",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5tP_lL6UAvSsSnr66OEqLmpf3AAE-QleQKAsBmbrnCM73-_SOcOFYZi_v_Kt8BT9mNJvZj3wjlhWs0ECHsbl93mligwK5wbFoxnBofckpuZ6OqYJNeoo6LnekqUa1TdtjNL46Zj-zKn-KXffnGd_2J8QiCN3L-zoXX0GFCNPUOmM452MuW7DjUdLdiX1E/s16000/1.webp",
    intro:
      "The easiest way to feel different is to change what you reach for every morning.",
    content: [
      "Choose 10–12 items and place them at the front of your closet. This is your mini-wardrobe for the next 2 weeks.",
      "Mix basics with one or two “fun” pieces – an unexpected color, interesting shoes or an unusual bag.",
      "After two weeks, analyze what you wore most often - they are what show your real style today."
    ],
    quote: "Your real style lives in the clothes you wear on repeat."
  },
  {
    id: "light-reveals-you",
    title: "Light that reveals the real you.",
    date: "Apr 18, 2025",
    category: "Editorial",
    readingTime: "3 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9cI5r3PB449nekjS2axKsWFnBXlZ6SlRO9HvBCLZmAx3okOwocyREjZJv0aiilT-fgK7z-ifEdQWnresnQibT9lutNVEQgeSzNK6my23L5K5vFEqp8h4rTiG9yHPm1ZbSLDFgmwALDv1HsWSuDFcsvRbgEWFWVaaZ4sG4sGD0CBvw6g52YqG-YIOTGO_d/s16000/2.webp",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9cI5r3PB449nekjS2axKsWFnBXlZ6SlRO9HvBCLZmAx3okOwocyREjZJv0aiilT-fgK7z-ifEdQWnresnQibT9lutNVEQgeSzNK6my23L5K5vFEqp8h4rTiG9yHPm1ZbSLDFgmwALDv1HsWSuDFcsvRbgEWFWVaaZ4sG4sGD0CBvw6g52YqG-YIOTGO_d/s16000/2.webp",
    intro:
      "Color and lighting can completely change how a simple look feels on you.",
    content: [
      "Try wearing your usual outfit in three different lighting situations: daylight, warm light, and cool neon.",
      "You’ll notice how your skin, eyes, and fabrics react to the shade of light. This is a good way to understand which colors suit you best.",
      "Photo sessions aren't just for models. Even a few phone shots can help you see yourself from the outside and put together a new wardrobe."
    ],
    quote: "The right light doesn’t change you – it reveals you."
  },
  {
    id: "fresh-kicks-energy",
    title: "Fresh kicks with a twist of energy.",
    date: "Jan 11, 2021",
    category: "Sneaker culture",
    readingTime: "2 min read",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjh-_wdme_n41iw1SLyNIsiiJkmTRXyl4xpAw4k38m7KXr_gRpTffJSmpNvc6ZmlVyyZOswCUIUhyphenhyphenxfBDII9mnOBH4g95wIl7K7vFQkwF4L9V3UQJRTNzFHvQyY9xxIPdpH-OtZbCjhFlmwAZ3sfpq-fyf-VmZ0XJdtSXFhDcHL44QtZRoXpc7Bjz1MPfY/s16000/3.webp",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjh-_wdme_n41iw1SLyNIsiiJkmTRXyl4xpAw4k38m7KXr_gRpTffJSmpNvc6ZmlVyyZOswCUIUhyphenhyphenxfBDII9mnOBH4g95wIl7K7vFQkwF4L9V3UQJRTNzFHvQyY9xxIPdpH-OtZbCjhFlmwAZ3sfpq-fyf-VmZ0XJdtSXFhDcHL44QtZRoXpc7Bjz1MPfY/s16000/3.webp",
    intro:
      "Sneakers are no longer just for the gym – they’re the heart of many outfits.",
    content: [
      "Bright sneakers can become the main accent even in a basic look: jeans + white T-shirt + colored shoes.",
      "If you’re building a small rotation, start with one neutral pair and one “fun” colorway.",
      "Don’t forget about care: regular cleaning and proper storage prolong the life of your favorite pairs."
    ],
    quote: "Sometimes the outfit starts from the shoes up."
  }
];

const productsData = [
  {
    id: "tshirt",
    name: "Men's Fashion T Shirt",
    price: 92,
    category: "clothes",
    // sizes: []  ← можеш не вказувати, підтягнеться автоматично
  },
  {
    id: "hoodie",
    name: "Men's Fashion T Shirt",
    price: 92,
    category: "clothes",
  },
  {
    id: "boots",
    name: "Crimson Grip Boots",
    price: 80,
    category: "shoes",
  },
  {
    id: "pack",
    name: "Midnight Urban Pack",
    price: 75,
    category: "bags",

  },

];

const PROMO_PRODUCTS = [
  {
    id: "cola-033",
    name: "Напій Живчик 0.33л Смарт Кола ж/б",
    price: 23.30,
    oldPrice: 29.20,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8yW3lRc2KZFzyVrVFkpXoz72axhMssDI2fa4_7kG-WS33mL98kRaruDYspN0LVSHdNR4Lg9FIjvTOXkSZ_MMnjPXjxFQoJ5rKaEnt-tkQZN0WeU06ne4vsd0VYFLHq5WoHlfCR2eVhG3p4jzfun881T-bV3xyFPr3slO5UuZug7ukra24rK8UjUpGcp3q/s16000/521785.jpg",
    label: "АКЦІЯ"
  },
  {
    id: "bonjour-dessert",
    name: "Десерт Конті Bonjour 232г Полуниця вершки",
    price: 98.00,
    oldPrice: 117.50,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0cdv9A0bP0Zwj8oPX28CSlxgU4lPpUP95su2MuN9BqLxY3aY-brKsePQTKJIsatmovMqkMY6_zX3hFoTqYothoMpglmBcdrHK5i7vv-V8uwBtQcqtLu0sbf4RPH8SfknvZ1LbLonDRp0XR2rUy1qzpUjazi0xIQnj4T8WIUBXEUqQd9ujh587_d8PYEFo/s16000/15908.jpg",
    label: "АКЦІЯ"
  },
  {
    id: "wine-artemivske",
    name: "Вино Ігристе Артемівське 0.75л б/а",
    price: 272.00,
    oldPrice: 326.30,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijM3kcEJCLpFDcIOZxQkQPVEyT9iBN9Nb1BQVY2JwvFEqa4C5QZRlAZh79I4bNCfStqh3uPrFVHn9bVo36x5gWVt5CXhGUbal5vWSxcLSMB9z3jhOFOCSk3Bb3fdpXnZc5lqr1h4KwqRcrTiQoUkX6qhJH-x6xXOojXz3JDWWCGUkwQq5BxxL38-JpeN1q/s16000/main_8533.jpg",
    label: "АКЦІЯ"
  },
  {
    id: "jacobs-3in1",
    name: "Напій кавовий Jacobs 3в1 12г Інтенс",
    price: 8.60,
    oldPrice: 10.10,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_FkwFc-DXHG_Ejwn890y_3hPAM0Lm3DyIatJNrqBv4nrtU3d-Tz5gpkO02tQXh8eNfscW-qWuoLgeR330IPT6fouJJPELHhKuCAXuLoolEluFuRfeN3ocExKd3Nd893vkfHAhoNSfPDF8IFc73czNU6pCjr1UYmsUSwZrlZ_ERoza8NW-kqFTOpaHisR0/s16000/299930.jpg",
    label: "АКЦІЯ"
  },
  {
    id: "idelia",
    name: "Приправа Idelia 45г До мяса натуральна",
    price: 37.10,
    oldPrice: 43.90,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie7GT011Qtzioe_67o-3LK51vqfLb9yQsZ-bXDXYQtG8Pp6zuoNvgEz_Zj2V_7Zo2YUwXPirKDrYgv1RLya776NQU_VK-Gk5GX1Od9u0Y1zZpnJIgosRDMWbCO0feNMh95dUwXS5qGSP6uV7L2jIekPXXOB7lWh-QKBgkDnDH-VTqERSY-vOAQ9Bv1FWjT/s16000/628889.jpg",
    label: "АКЦІЯ"
  },
  {
    id: "more-products",
    type: "more",
    title: "Більше товарів",
    link: "promotions.html"
  }
];

const CATEGORY_PRODUCTS = [
  {
    id: "orange-kg",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Апельсин ваг",
    price: 67.99,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqfLyE39ANr6MJfNcKLRcP7fjzLJ1akGrsZI1bxmksNPhD3FAq1N3T5OsAKmEvh9zQzjLADYQ6yBps6HVVOnUox6GdLO_-J4FwCWzWTivw05v1qNR04hjLUrdrsz6JJV-xop2ipbnl0gN27QnpNha1XjDxH-oim7Kgvy1aU4tuhVaRHxAn9TpaEtfbRIqt/s16000/82.png",
    popularity: 95,
    description: `
    Соковиті апельсини з насиченим цитрусовим смаком.
    Чудово підходять для свіжого соку, десертів та щоденного споживання.
`
  },
  {
    id: "kiwi-kg",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Ківі ваг",
    price: 15.40,
    oldPrice: null,
    unit: "100г",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfBnOyHxFKreoFAghOcgq4WNtlvVMRw6eUVUQmSdqJRCiM7dg7heEfPdQspyc9LdVYr7ax9-iRyneIw2BDvXnW68k449wBeWbIj7wYMXx3SMnvIuWkejwXHA35GQlZdoTswPTJB3CIYoZTZ_k2BxNWwxnOkGRQeuuPXL_2o4k7FadyL9q0m2qVpZOk_tmY/s16000/1309.png",
    popularity: 88,
    description: `
    Стиглі ківі з ніжною м’якоттю та приємною кислинкою.
    Багаті на вітаміни та ідеально підходять для фруктових салатів і перекусів.
`
  },
  {
    id: "banana-kg",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Банан ваг",
    price: 75.99,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRYTBShs1fMHkNhEH2PYcmguHUvi4dZNHs8P2ktakLKRqOvj0fLo1zAPdikh7NDmeH19BOebLerTe2n1iR0HInUlKBdjrPn5r0e-JNyEeM_37UI6sz1j7R6IHWyYZoNybMcUauSNtmO6UgYu2eK8YbwprxLKzbnK8OZQXQHQrR-Xoir3VZzOuvgNcNT2yJ/s16000/main_12811.jpg",
    popularity: 99,
    description: `
    Солодкі банани з м’якою текстурою та насиченим смаком.
    Ідеальний варіант для сніданків, смузі та швидких перекусів.
`
  },
  {
    id: "lemon-kg",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Лимон ваг",
    price: 20.70,
    unit: "100г",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs4aHaQBaSGwSL4-gPj78a7aKNUbAWbRu0OZaWO9H8rVOVH3pktrtHvxMi_rTcB5evjpRtyfkK0jDlfJ9qqdrE-5nj3NiayUgYwDWvqFmm0A1Q7SDprpN8sy-JBZ_KyUNnMmA87M5w0pBjA-VfBs2r9e-Xs2ruF7jQYI9YhtXrPGVjAK6Ojxpketi_lZNX/s16000/20991.png",
    popularity: 72,

    description: `
        Соковиті лимони з яскравим цитрусовим смаком.
        Ідеально підходять для чаю, десертів, напоїв та приготування страв.
    `
  },
  {
    id: "strawberry-kg",
    category: "fruits",
    subcategory: "Ягоди",
    name: "Полуниця ваг",
    price: 185.90,
    oldPrice: 219.90,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6jw3zkWIEQmR-fmbOJKA9H7gdMmza2l15T8-u8yPwrTFCxv9y0XwJw-QODG8iltuTd36TwtSExMai5rcjiJ0B2KkDYCAIlToHNeb8AvGpq3ph3cXNlOzui2zhXPk_RBmmMBpkNq6Jtw8aAsCR4uLO-GQjYfYaCXaOZxFxPz-nXRtOjoE1IXk6CKPfo9rP/s16000/112404.png",
    popularity: 91,
    description: `
    Ароматна полуниця з яскравим смаком та соковитою м’якоттю.
    Чудово підходить для десертів, випічки та вживання у свіжому вигляді.
`
  },
  {
    id: "apple-kg",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Яблуко ваг",
    price: 42.50,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRKw3YfDOrF1Pb29HZlG6Apj2rN1jxtnTeb-TlDpGn9-5nmxh52tVb5c_6xGteBD_4EuTmAYyqGlLVd-KcJCCq3mpr8tWPpJTFxEyLP0CNPFsChAhVQxhe2tzwu-IHtfzxaPBa-hUknyWgePqUCh1Q8CSZDQpAax0i5F9qVcqPqacD2HE3Ha0S1EA3DXU1/s16000/orig_72143.png",
    popularity: 82,
    description: `
    Свіжі яблука з приємним солодко-кислим смаком.
    Підходять для перекусів, випічки та приготування натуральних соків.
`
  },
  {
    id: "avocado-pcs",
    category: "fruits",
    subcategory: "Фрукти",
    name: "Авокадо шт",
    price: 49.90,
    oldPrice: 59.90,
    unit: "шт",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzx4RWwzJ3bUDiUEjMfYauvi6_W0rDHc9G9jq-3wSUgHnxMjhMnjcb-Y0Q7Njm-IoMOekS9SsKH6Y35v7G47RwL1APTsi7-Zlgdq9iOyoIA3RnMBskMOdEYKOEUHTurJ-8_qCXwVeqgWqPoHxdh0sNp9FerT31kAlhbEf5BEv6ljrLEtV8kAdnfz6bqWmN/s16000/main_12760.jpg",
    popularity: 79,
    description: `
    Стиглий авокадо з ніжною кремовою текстурою.
    Ідеально підходить для салатів, тостів та приготування соусів.
`
  },
  {
    id: "cucumber-kg",
    category: "fruits",
    subcategory: "Овочі",
    name: "Огірок тепличний ваг",
    price: 69.90,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOp8rCnAgyTmVcXW2R9k4Jk0leqazpURDSmm0vlQuahnfEiy2aVcbrI-b73fFAzQichij5pBjkfzqnDtv-JjAB_NatMMOogWmLpwOZxjjkGTy6NSzzodG41KE9jmMqn8QK1ZAZm5YnZ5voSNjjWWHl9VNwKpjUJK0vOwbSId0qPjHZVhPI3h6Weo8ZWwAV/s16000/main_260827.jpg",
    popularity: 86,
    description: `
    Хрусткі огірки зі свіжим смаком та соковитою м’якоттю.
    Чудово смакують у салатах, закусках та домашніх стравах.
`
  },
  {
    id: "tomato-kg",
    category: "fruits",
    subcategory: "Овочі",
    name: "Помідор рожевий ваг",
    price: 89.90,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS1USwb_LXWh7yAzVlsrMOv8CPFLWd9HVJU8Lv-DEzfODt6djnTLqv61yDv8OYh0YBj6vTE93dGYcr3fHchxxYyn4bkp1VvQrcZ4ns1zMDw_rQQCWNjamJ9pr-KFiF7x19aZ3NMQSs5BMqwIPkxtaLePRBpxp8nq5_8LhUeZtecQu8leCbzq081G_YnU77/s16000/main_169431.jpg",
    popularity: 90,
    description: `
    Свіжі помідори з насиченим смаком та соковитою м’якоттю.
    Ідеально підходять для салатів, соусів та щоденного використання.
`
  },
  {
    id: "potato-kg",
    category: "fruits",
    subcategory: "Овочі",
    name: "Картопля молода ваг",
    price: 34.90,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZps35_4PLSTFRtRMsSTdRlt1UVgLYSirojPxLK41lr0m5yqTAh1c7lGVvYhC2G2GnkNDFB6BZRkjzbyohgjTGRQMI_IWRvF5hw8atpnKQOQ_rUHSaSK1RzzL5OoDVqegQEICe-cVwRV1SrCxNR4-jYSJBrdRRbk7zliGpSAfDeGO4fD_DKVapDQW-q7aD/s16000/236022.png",
    popularity: 93,
    description: `
    Молода картопля з ніжною текстурою та тонкою шкіркою.
    Чудово підходить для варіння, запікання та домашніх страв.
`
  },
  {
    id: "carrot-kg",
    category: "fruits",
    subcategory: "Овочі",
    name: "Морква ваг",
    price: 28.50,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRO2UvMrSADs3Xb7AgE7SgcgK8wz9z85ZcMLz7SzX5wpka7HMM6kEspYNXevt0LhkC3nt6ZgUDLVYxtJAA2RrYei5W91muhYirxnyqydzlaV5oGaJ8TzbYn0jcESezvPQOFcecnPptE7902YN7yz9DHSXsYRWD4JdWhxta6P3xAdAEc8rz5FbeQp7dv9-y/s16000/12819.png",
    popularity: 77,
    description: `
    Соковита морква з природною солодкістю та хрусткою текстурою.
    Підходить для салатів, супів, гарнірів та свіжих соків.
`
  },
  {
    id: "onion-kg",
    category: "fruits",
    subcategory: "Овочі",
    name: "Цибуля ріпчаста ваг",
    price: 24.90,
    oldPrice: null,
    unit: "кг",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrK7PuNpXLNNOw1Nr5PvQdp4QsDwn2oBzu3E7DXzDK_YA3OefqS7sBEDqj6XMRDPC_PIX88HSfINjkV82XhXqNxwMoYtfe0NEaLbgE3hVUiKeHqphSvUAp49520zINvwEpurNPM677zpzs77Thol3CgRapVbOfpZvkF68nO3vAkZshllMU2HJdz1NrABqQ/s16000/13435.png",
    popularity: 74,
    description: `
    Ріпчаста цибуля зі свіжим ароматом та насиченим смаком.
    Незамінний інгредієнт для супів, салатів та гарячих страв.
`
  },
  {
    id: "parsley-pack",
    category: "fruits",
    subcategory: "Зелень",
    name: "Петрушка пучок",
    price: 18.90,
    oldPrice: null,
    unit: "шт",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn2elsos58yFFz1smil2dhNHWj76_7fUvCRwEVVsDoIfH-DelHXHCvxg6D6pXkVa1cumCOBnHM0Ul8Z-whtVv0rDF9WHZkM76rRUyMTxhP0VFRVJ1t9T83ks-Hvs7WggOQwybWjxM1ubBhkJ623it6i6jRqALex4ZmFUiUEwyDBcKmpJNEznr-jt2slqZB/s16000/90249.png",
    popularity: 65,
    description: `
    Свіжа петрушка з яскравим ароматом та насиченим смаком.
    Ідеально доповнює салати, супи та м’ясні страви.
`
  },
  {
    id: "dill-pack",
    category: "fruits",
    subcategory: "Зелень",
    name: "Кріп пучок",
    price: 17.90,
    oldPrice: null,
    unit: "шт",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicYQtpcR98wN8AeuYWw3TynuVbUzsytp0CpQ5Yi-wmFIl6HoECbh5VnVL3St0fvR3WSJKTJvT4XZFOhOVMJGlJ07nfVxfJLeTweYTwG2cXwBRg4vFHPej8n3Sbz-M54s476w9EQ0MAcn3FRHh5WNTkIkZIH9XR5qGHinS__s_Tyl-kJAv6dJn9Ynl9GnUL/s16000/Krip.png",
    popularity: 68,
    description: `
    Ароматний кріп зі свіжим насиченим смаком.
    Чудово підходить для салатів, гарнірів та домашньої консервації.
`
  },
  {
    id: "dried-apricots",
    category: "fruits",
    subcategory: "Сухофрукти",
    name: "Курага ваг",
    price: 36.90,
    oldPrice: null,
    unit: "100г",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzrh7nJGXNw_NI961jwnDTo48j3nv8aQ7jg4zKOB8o5exT5JjX_by8MvqxY-GHgo1NSvd-AExSpACwrwp5MCVOMgtiNXrl6TE0z1U-FSTbp3NpObttzEeRXzDPWPODZ0ateRLtDaCNyVFNw7eIXy2knTjpLb6Biy-AIwfze127DPJcaH1k2A5p-uhMOWQb/s16000/391684702.webp",
    popularity: 61,
    description: `
    Натуральна курага з насиченим солодким смаком.
    Ідеальний варіант для корисних перекусів, десертів та випічки.
`
  }
];

const dairyProducts = [
  {
    id: 1,
    name: "Яйце Куряче столове",
    price: 4.99,
    oldPrice: null,
    category: "Яйця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVOqw7kb3jvHvqTmEqeXh1t76Rk5ONJmKWjUjl3Y3Qr_GmjY9I2wRkdK5wG09O2G8azNeOBdD7jn0NEatpIxMIIgxr1Xw-WcQpDu5-KYNU1yXAZbbTShrbCnHOYo5-HcImi6NlKGEC4qsVQnFAFV5ff6qPtRRMoiyfee01APvOw05MnzOMgfIf9GgKtZ2t/s16000/237054.jpg",
    unit: "шт",
    description: "Свіжі курячі яйця категорії C0. Ідеально підходять для сніданків, випічки та щоденного використання."
  },
  {
    id: 2,
    name: "Вершки Яготинське 10% 500г",
    price: 79,
    oldPrice: 85,
    category: "Вершки",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzA1C8ytagyhSjjavU2Q2fM-icow9rP44onY4ZFKFwhTiyzb_yV3sAHMNl0lrthyT9HXs-I0AndlyQnVYVVlfvmPEwRnzBsjiYU3trsAzIbaKMDoVyIt1nIkx1iK6y0F8tfUZPZAtBtCP2p3WWa0VynbcQhLsNhKBIsvicYGFenzrjkePYW6IksMEADePB/s16000/235847.jpg",
    unit: "",
    description: "Ніжні вершки з насиченим смаком. Підходять для кави, соусів та десертів."
  },
  {
    id: 3,
    name: "Вершки Яготинське 10% 200г",
    price: 33.4,
    oldPrice: 36,
    category: "Вершки",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsT2dpzRHJgr5EVwCw17613fzgDGMBpcNvWr7cw4Af3LlbXUAU2BAMBioiP8pT5gsQMMWe0WVTep-hr0zH73CkcSaOSHtIco17RVbVtT73XvkwOFlS7oAqJKBdifjTOn-5ogaYVHVPhwssd123VUp2T4LPgBCf1NB35dSoQ76bA-Iuq89-4wK9v-fpCiow/s16000/266252.jpg",
    unit: "",
    description: "Компактний формат вершків для щоденного використання."
  },
  {
    id: 4,
    name: "Вершки Галичина 10% 500г",
    price: 82,
    oldPrice: 88.1,
    category: "Вершки",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD1HlyJIqis2oUlTieq6U4u08pY01rzRsXi6QterwNTTJJWqwKbwguNWuMUEnor4PIkDUTVm7iCczvh8RArEoBjdUvXhdL2JoUku41Zy8rAPAHurQ3RB9f378w65AMECDUprResKFGJLyOKdTm2GI35kqJomBpSdxl8q6l5Skn1-sNtiI8JcCkyMreNPNc/s16000/350394.jpg",
    unit: "",
    description: "Натуральні вершки з м’яким молочним смаком."
  },
  {
    id: 5,
    name: "Молоко Простонаше 2.5%",
    price: 46.9,
    oldPrice: null,
    category: "Молоко",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjd3edwUB3TO0OmsKnD1ujkxTsOMXgEESI16_L7iRy_YY_IuSZ_PcMTYpdWfOtpvbzlniYwu6GE-HAsPY6Dh0_Xjo_0s2mXbfbRsC3WnrARdAoHZXkVP1OT9aJCeItVifWt_OMyzI3YvD2Z8QhSDMNZfroFdvDFlwWkU5AgpvKxDJbX9_m180pdQxtPLJNh/s16000/551543.jpg",
    unit: "",
    description: "Пастеризоване молоко для щоденного вживання."
  },
  {
    id: 6,
    name: "Молоко Галичина 2,5% 870г",
    price: 49.9,
    oldPrice: null,
    category: "Молоко",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3UfS8C8qjPs9NkphofGVrGKz4ehJhimgflonDcaBBM_nDTmdeIRcIvZecCjNyq0z1Bk4mgW5gGaOYI-DaMxNYcQ7RgYQRKyRmSqUmmLlZhUuHls1pZ4w0yFvftlTpkKUj5uWFRW6SvW0GTObSAcbUXiwLrwju2OWhHQXJImQn6cI1hyphenhyphenkcrxz9KOAAOM3a/s16000/241269.jpg",
    unit: "",
    description: "Смачне натуральне молоко високої якості."
  },
  {
    id: 7,
    name: "Сметана Простонаше 15%",
    price: 54.5,
    oldPrice: null,
    category: "Сметана",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8JbFjdBlPlr-8pZn9VOzdpUoXPUkcuY6CGPRIdOMu5EW4BmmChdIqepmFcfLrLjlXjATVGa7nAB5nMdCZ5jMsHmk-bTAcvGIYTgZYNTuBdPQXawJRozdk2OaQIwrplg83_-hDtd4UZIG1DGelie3mz0UZaPkfqVU-Tb36JsIftFSfnuIXJFI4A_RJyNFL/s16000/589491.png",
    unit: "",
    description: "Густа сметана для гарячих страв та салатів."
  },
  {
    id: 8,
    name: "Сир кисломолочний Молокія 5%",
    price: 72,
    oldPrice: 79,
    category: "Сир кисломолочний",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzL5SwoRCoi1dpyyZFSqZrbnD5LybRv76YUeFeZ3wTo_ue8zLfCgA6emqnyqfs8E03hqa12Ka7YOyM96JGr6B__vUxwKQ_6h_9NzmVc3VHHIuohbyRAv0joOLJO_X-erGVEJEonsgQMJQhdCVojwloxbK6N7Sz9Y43fD-vORgQzOsPAytjDVDO10XMxRKT/s16000/266261.jpg",
    unit: "",
    description: "Натуральний кисломолочний сир із високим вмістом білка."
  },
  {
    id: 9,
    name: "Йогурт Danone Полуниця",
    price: 29.9,
    oldPrice: null,
    category: "Йогурти",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1U92Tgs3myd66DGcLfkKfGc1BSOD3uNTzPwRco_vexQhFe55lgCduBPHlpjSQg7WKZgnaM5hX3omRhbKktyV7qBiDe5IJbarrjxFwcFkVc9PztjX9GF0ti2-H-RAD4KJPjdzXduRYGxp6WMIgcvxTDrMIGCv79vm0O6q9LklRscR1p0_5kFHcL33ZXeoz/s16000/332691.jpg",
    unit: "",
    description: "Ніжний фруктовий йогурт зі смаком полуниці."
  },
  {
    id: 10,
    name: "Йогурт Actimel Лісові Ягоди",
    price: 31.5,
    oldPrice: null,
    category: "Йогурти",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_xkUSSfk5eaNqiJAsrAfln_lNpNvR3EVuUk3xQ09Mf2eNxpveuxeAGPSuiNCUEyRDDh3qXMtpcfAF9cFrcHPRTriS_94jfR29yTNXfkG53Q41kvDgxHnWRbfI91G8BgtQ5j3rowqomPQDo0XCYEeimfzS1tFNi78K7U6M2jVe8JfK75DGgWicvQ0kwPtD/s16000/223465.jpg",
    unit: "",
    description: "Питний йогурт для щоденного раціону."
  },
  {
    id: 11,
    name: "Масло Селянське 73%",
    price: 94,
    oldPrice: null,
    category: "Масло",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDBOl_O76Nb1SJUkQNHkAMOcYrXjzmA4J28J0QQGdj84MSoD4aFgPxo6TIMQAuhljzZpsEwE6hpbNLcGmJvEIN8WlS-mHvkDGvQ3EsHxKwoU7j6z3D01mi8NO6ZpNOYwOgGCZAjmtAVnJkTJGpwp8bkkVgK8rtsWU39B0jP8X1F7UUWXaUpFdjJ1dklHL8/s16000/main_178049.jpg",
    unit: "",
    description: "Вершкове масло з натуральних вершків."
  },
  {
    id: 12,
    name: "Кефір Галичина 2.5%",
    price: 42.9,
    oldPrice: null,
    category: "Кисломолочні напої",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHN5YpAXpAgcn5otxR9VwsYXxlbRg1Cxs2BNrBRZs_BbUD0c5n_pUZ7HjmAAYVLz_QaCB9E8FVwjzOcBiIzxaOImOSMndh6_m-d0CxzVW7xxCRLfsrfs3cFHhK4VNDX-ddbAS5vN0hi-awJY61npI-Vu6M9eBzRNxrCIUCxcMD4b5UMbHqu20elMneTdol/s16000/15220.jpg",
    unit: "",
    description: "Корисний кисломолочний напій для щоденного споживання."
  },
  {
    id: 13,
    name: "Ряжанка Галичина 4%",
    price: 44.9,
    oldPrice: null,
    category: "Кисломолочні напої",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLe54aks0qaJUglx8jOzsm-8pSviYRDcUtlYyVyiczAxDgb-xbeDLapocRLhdk2-mTeO5PUYfb_x9ivnqFp_81KO48AkcVcTHRUwNnevgSfqH2PsQdghEcnEyjlf6nIxxfL0YF2FcJWYXI7aDXZsBSXidWmMOVthR4yW9Gm8PhXmrVfhzyc_ulMYKBzjAv/s16000/229572.jpg",
    unit: "",
    description: "Традиційна ряжанка з ніжним вершковим смаком."
  },
  {
    id: 14,
    name: "Сирок глазурований ванільний",
    price: 21.9,
    oldPrice: 24.5,
    category: "Сирки глазуровані",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiqMkULs8l8XpMVHafpsjh80nWaSnRbaGwk8QcWvA1Ubnskm_QnMIDnls7O8vSRhN4fYx1u2u-j8VNOEE0kMDjAIhwhODrgqYYAxFAEm9SLAeQTKOyO6kOvtCJ3-Hsp3C_i9Mphe9E3AaY7-EOmjvWtCBNYhsnG6TnhBuE_hBRqp0psj0qLq85tvILeUg7/s16000/76123.jpg",
    unit: "",
    description: "Солодкий сирок у шоколадній глазурі."
  },
  {
    id: 15,
    name: "Маргарин Вершковий",
    price: 38.5,
    oldPrice: null,
    category: "Маргарин",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAm9-YRdo5p4MuUs_nJ620BoKX599rpSVA54kmHNUlrKfvu_KQQyUKcstn3IzyglCvcH9TOWF8aK9QdK86-LxLwkSx3ISVEVT03OcIozd8VIp-1Qkszmxto_RyL4kjBXvt8LB_xI34AN6YFTkxg5fvlpbLUk1leDoU3xDkcAXT5UxbitvObjNYHpuDXEeC/s16000/main_12201.jpg",
    unit: "",
    description: "Маргарин для випічки та кулінарії."
  }
];

const meatProducts = [
  {
    id: "chicken-wings",
    name: "Курятина охолоджена Крила",
    price: 10.61,
    oldPrice: null,
    category: "М’ясо птиця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi776nrxxsYDbS9jVNnLDeKMsPGRKDgwkRR86X7wb2IgbIpQ4MzVZmYoKwJYQhyjHKZuv7vL_W9wixcHieNh4hqd5zkwTZOdwdn-R_6Y2RCjlhSpWlYPpwj2T-haH7FB6BXABi-j-70FN_R0Df4pKEV6VQ1NN80UVYOwgVRxLYlbGjQaN7FsedZ9jhxiZN8/s16000/main_1655.jpg",
    unit: "100г",
    popularity: 96,
    description: `
      Охолоджені курячі крила для запікання, смаження або приготування на грилі.
      Мають ніжне м’ясо та добре підходять для домашніх страв.
    `
  },
  {
    id: "chicken-leg",
    name: "Курятина охолоджена Гомілка",
    price: 86.60,
    oldPrice: null,
    category: "М’ясо птиця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1fYPIi1fc3uj8uqqNNuSR9oRspgsH4M7y76RQlUvlZmMwhibdj0Ie2JVAw2TyXkzitTpTo3vZ63Qx_sFs3iZ7ew-WQK7BwYVnpcPt4CeWbF_zlEZt_s2wFj0OiCa8H3Zl-YfM3KCV4fUkFJUB0K_7poiTuQH6uLL3B3wxUm9PCSfW7Blk3ALlZDRjAtDa/s16000/main_43276.jpg",
    unit: "кг",
    popularity: 91,
    description: `
      Свіжа куряча гомілка з ніжним м’ясом.
      Підходить для запікання, тушкування та щоденного приготування.
    `
  },
  {
    id: "pork-ham",
    name: "Свинина охолоджена Шинка",
    price: 19.65,
    oldPrice: null,
    category: "Свинина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJjEpyd1fDuO96zlUYPsviLXUUVus2Yuxg3iCt5Q-lPSDKnOsfqxPZIKm2rHRXhaH1w6Xgr37EE0FUQ-voCGoQADhDNN5VRMSTwxWCZo7MK3vCl96LA3BpkGBZWzjm7UCUJZRIZGk_MpHb0dphwxYGLK0Q3ym2T4FLyrFXq9ospG7epsxMHGSuufJhypcE/s16000/11304.png",
    unit: "100г",
    popularity: 89,
    description: `
      Охолоджена свиняча шинка з насиченим смаком.
      Добре підходить для запікання, смаження та приготування м’ясних страв.
    `
  },
  {
    id: "chicken-necks",
    name: "Курятина охолоджена Шиї",
    price: 63.20,
    oldPrice: null,
    category: "М’ясо птиця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8gcYyd-0aep7AXc2QXSLXXNbEMZ7kD07H3LdTtjfiD2JaeEzMYAdaIxiBxL2noCnTUD2I23EW5kCSpiE6NpZXck1_1r5foEWXxN-PRBnZhw46sjGVtDi92eCb55M8gi6U7QJZDak1q4D21ldX01VvbQVO3QW9SSKJT2m039-9q-aYcqRVESAXVYZUJsde/s16000/main_11283.jpg",
    unit: "кг",
    popularity: 74,
    description: `
      Охолоджені курячі шиї для бульйонів, супів та домашніх страв.
      Надають стравам насичений смак і аромат.
    `
  },
  {
    id: "chicken-fillet",
    name: "Філе куряче охолоджене",
    price: 159.90,
    oldPrice: 179.90,
    category: "М’ясо птиця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghLygHC_-wFc8B4E2g290pu_KJ2gNFBgHXmPZc5JbdzhVRwBTw3DsZ9k82_UKsakNP1cg3vn9kb1idX6cM26BCsZ13gvzGiD9-riQwCEPSW7EFyaw6d932iKy5pTNR8zN76KiDl2SfTqrAMI_C9QbvgCCFz45Y0oVc5YI6Foc1c-H_eP4z3vFxITZNfVy-/s16000/ab7cfcf5-41ad-4296-9a8d-d6f5cf06edf5.webp",
    unit: "кг",
    popularity: 99,
    description: `
      Ніжне охолоджене куряче філе без кістки.
      Ідеальне для салатів, дієтичних страв, запікання та смаження.
    `
  },
  {
    id: "chicken-thigh",
    name: "Стегно куряче охолоджене",
    price: 104.90,
    oldPrice: null,
    category: "М’ясо птиця",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDybozAGUO6rvnN8zvV0xtF-6Ajkh_Ptg0pV3E1nA1JOx69gGR-DrJN2UIQXowm3CJhGw8LUUpxBXMCJmMN_jqGasohnAKH9iUlVChtplKkDAyTQPrFGIWE78TKZLwQ70pxVPl8GnYxYZOy2ZixUi16DxLGlvkn-9946wvokeno8t1chuiO1_4Y8FXHUZm/s16000/537640.png",
    unit: "кг",
    popularity: 86,
    description: `
      Свіже куряче стегно з соковитим м’ясом.
      Підходить для запікання, тушкування та приготування на грилі.
    `
  },
  {
    id: "pork-neck",
    name: "Свинина охолоджена Ошийок",
    price: 189.90,
    oldPrice: 209.90,
    category: "Свинина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitSEzxX2GdLrgrX-JkxzWlkgybUx8ZTHJQUarywBX0Bmzu-Ks7lOR48nLuS4UDa-2R2tSt1YaFZwRy0_V0Suig9Ay_lb3VWaTHAOPQ3OGiplGeYmt1SA6nJPzMumWHebkCBID85T7czK24uw5KJgnZEwzzmbEjU3hGwBAzecZIrDhFI5kL-ncNqm5MQnes/s16000/main_28394.jpg",
    unit: "кг",
    popularity: 93,
    description: `
      Соковитий свинячий ошийок з м’якою структурою.
      Чудово підходить для шашлику, запікання та смаження.
    `
  },
  {
    id: "pork-ribs",
    name: "Ребра свинячі охолоджені",
    price: 149.90,
    oldPrice: null,
    category: "Свинина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Q9HzLuviMJ2glQSRhBJcZH0lzm6qsoEa1K5iLVoyM4H6C45A0n8nor_Wodk48v_2TKrpc3-4y8PGGFroGVl4mcaY_ztXUpP3GgmLCRnaKhif2_P8muRqLV3E5fn2a6RIt0_4RaxNtZgZJNKV7jbejqrLoz8ShfMIyTGWppKenmo4sR0JVyW38NmPNUiX/s16000/110613.png",
    unit: "кг",
    popularity: 82,
    description: `
      Охолоджені свинячі ребра з насиченим м’ясним смаком.
      Ідеальні для гриля, духовки та тушкування.
    `
  },
  {
    id: "beef-goulash",
    name: "Яловичина для гуляшу",
    price: 249.90,
    oldPrice: null,
    category: "Яловичина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicwGcuEsQ8cmIYyoEmuDkdE9-23-QbfZOeM2MI0t9RIULOPWohXTQs1-bMM72amZf22Cj_QWUKOCqfmm_fZaJar0lAdnsTJnrz-a68NllgvLKsledAjb0UaXJy_M-3fpT16c5DTaltvHbeukEfv3YQrCU4Y3aOkpZYGNRIwlmesE3OXUqA5RSEdGtf2JTj/s16000/43239.jpg",
    unit: "кг",
    popularity: 80,
    description: `
      Яловичина, нарізана для гуляшу та тушкованих страв.
      Має насичений смак і добре підходить для тривалого приготування.
    `
  },
  {
    id: "beef-mince",
    name: "Фарш яловичий охолоджений",
    price: 199.90,
    oldPrice: null,
    category: "Яловичина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPDL59TRMHjE7g3lwjIjMqjf5qQET5oYrKt6be8UrUVyjvKR-7RKkvcIWSLgWYaalE87oOi4LtBzvvtIZMXdJNsTJ-Tj-VJyc1ORNs86FR_Txaq0cfKII87XUu4X28yMxm7pj5uW2jIlYIVdgJCN5JktiWkFujs-9uWKAH9lMCH6xC-EZ6qRNzqB96njEf/s16000/file_98_9.jpg",
    unit: "кг",
    popularity: 88,
    description: `
      Охолоджений яловичий фарш для котлет, соусів, запіканок та начинок.
      Зручний варіант для швидкого домашнього приготування.
    `
  },
  {
    id: "veal-steak",
    name: "Телятина охолоджена Стейк",
    price: 299.90,
    oldPrice: null,
    category: "Телятина",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivqxfLeZC1fcmg9F7NdT10TkD02hOlmNUWaSaq6ZDEHDeu55mpM-VWoOVWbXW4FHOW1ihlEfiTpVCMMvS62l-owvyMw-pm-wAPU4NTOJQgKff66uPeeYUp3ss-dvNMKz7RvTM25bH-4vqfiSmpHglVo7oLLahg9LAPhJ3NE5yf-0J5_csQzF7Dhw3AF7oJ/s16000/steyk-ribay-vologoi-vitrimki-20-dniv-100-gr-23231179298405.jpg",
    unit: "кг",
    popularity: 76,
    description: `
      Ніжна охолоджена телятина для стейків та гарячих страв.
      Має делікатний смак і м’яку текстуру.
    `
  },
  {
    id: "salami",
    name: "Ковбаса салямі нарізка",
    price: 72.90,
    oldPrice: 84.90,
    category: "Ковбаси",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDBBEVwtyGxbG100bVixo2oVz6drJRpg4tcGtcVfXYI8JEmWpBvdoxP-mpI6AC4SyqlEkiyrd2_qGXtHYaVlJ7iTwx8desXYYTF1VKMKTxUZjC2-vA71cethdMKChZg1x0_W0MqMl1oyyVqDVx_T-GHHWup-9hscBXiQuLXToc60cfuUgzeBYOobAAxyKL/s16000/4_15.jpg",
    unit: "100г",
    popularity: 85,
    description: `
      Ароматна салямі з насиченим смаком.
      Підходить для бутербродів, піци, закусок та святкових нарізок.
    `
  },
  {
    id: "doctor-sausage",
    name: "Ковбаса Докторська",
    price: 129.90,
    oldPrice: null,
    category: "Ковбаси",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjASmUdNOXW3M85twGXdwn6NoSNW4KS40sBgC1yzZVhS3D1HMO713JAPUQW99BtHoibBbgAKouqnymlM9rONG3jbL9TfJhul0UKyzSoBtKp_TahN34dxC3CGNUsV39yyNXhpiMnvYCqNGQppyPKLLBL5t2i1r6fKWOyfnWKXLY-U4HQB9pFujUM4tHt7V__/s16000/main_137804.jpg",
    unit: "кг",
    popularity: 84,
    description: `
      Класична варена ковбаса з ніжним смаком.
      Добре підходить для сніданків, бутербродів та салатів.
    `
  },
  {
    id: "sausages-milk",
    name: "Сосиски Молочні",
    price: 119.90,
    oldPrice: null,
    category: "Сосиски",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYoX7WEuNamy_ZBbRKv4UTXKYxQ7HW2g15r9YEQxBo2UMaG8k2ukHRYtPxIzSqYZADQcIo0TsQRptyCs7YtNnYTzXEhTRMRlFUvQ5LJia-hBNOH3ZtFrg9DXORKG8HAa6bDjDB0_9M2J6rskaUq6k7k4GBwuLEO9FCW4qmdKUyBr4HF1O0EgM7JpEsOk78/s16000/518734.jpg",
    unit: "кг",
    popularity: 83,
    description: `
      Ніжні молочні сосиски для швидкого приготування.
      Підходять для сніданків, гарнірів та перекусів.
    `
  },
  {
    id: "ham-sliced",
    name: "Шинка нарізка охолоджена",
    price: 68.90,
    oldPrice: null,
    category: "Ковбаси",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijDRg7mcU9B9QfAuld2BYDuDB0CnXSABFbzl4Hzdl5gPeNMKnOU4z8CxsSi4BmbUam37OgRWVHL4qKUN328LxoPkDgLPRFKP3A_3dR-QD905mhQCsiH4mfqFsyoXYQvW0_TndnT7GwNukIoB8cte_PvdPLMC7v21LNwVbVxcu2MLwuuLGl-6U0XKmGAn9N/s16000/eg5gcuh4lkn6i2iaz4rvqexoo1rvokkm.jpg",
    unit: "100г",
    popularity: 78,
    description: `
      Смачна шинка у зручній нарізці.
      Ідеально підходить для сендвічів, тостів та холодних закусок.
    `
  }
];

const drinksProducts = [
  {
    id: "cola-can-033",
    name: "Напій Кока Кола 0.33л ж/б",
    price: 26.00,
    oldPrice: 32.60,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0Ycy7zozf2sdiw-2qnubdz31UcSttY4nCuNJd6Iv9iaUXFKyKXw3GMlJ8ZWgoYjyPHah0K_adVI6Hfpwq_9IZGNU18ePOSGD0iGvmMIMmuOOpCxd4MMqMUwLQkcclbPWpXtyYsNt0Y6sU6fDiCnxPKYCXNzmmKEB3HHMfikvxoNGCLjQB7wGSrjGgGi-1/s16000/main_7580.jpg",
    unit: "шт",
    popularity: 98,
    description: `
      Класичний газований напій Coca-Cola у зручній жерстяній банці.
      Добре підходить для перекусу, обіду або прохолодного освіження протягом дня.
    `
  },
  {
    id: "cola-05",
    name: "Напій Кока Кола 0.5л",
    price: 28.90,
    oldPrice: 36.20,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyGprCQ7sE6PpK3MoldYj46475i12sasQgub94lqrKjmHZ585POMM293Ff0msDtnCE0cK9r9KT_zwe7A6_LPO6hkt3rB0WkFH9toCR5rq6eESXsM0Wyh6jCQ0JauU05_aMlwdH66BpyWIGpk_BWxoaWwZgEmjQrZ8LfoUQnBbed_2Yf3BDJGTwS7tJa5XB/s16000/7581.jpg",
    unit: "шт",
    popularity: 96,
    description: `
      Популярний газований напій Coca-Cola у пляшці 0.5л.
      Має насичений смак і зручний формат для прогулянок та щоденного використання.
    `
  },
  {
    id: "schweppes-lemon-1l",
    name: "Напій Schweppes 1л Лимон",
    price: 43.90,
    oldPrice: 55.00,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl2O5gJIrePHOxvbc8Aqr7koEEWGxUhnDo31WFfPBQzLrFYUf6CSdbY_fq6z_y-jZlYXh1oE0i1D3Ty5bVFJ0V22BFIiShfjToSVf6YUkee2lTlVPpeUJmiLfar5c7uAaoFclI9LAWNYahjVDYdj6XcNoKflmRIsBo_eGwMgFuWSiW_caAqxn7iAP8YW6a/s16000/7727.jpg",
    unit: "шт",
    popularity: 91,
    description: `
      Газований напій Schweppes зі смаком лимона.
      Має освіжаючий цитрусовий смак і добре підходить для коктейлів або подачі охолодженим.
    `
  },
  {
    id: "schweppes-tonic-1l",
    name: "Напій Schweppes 1л Тонік",
    price: 43.90,
    oldPrice: 55.00,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpB2VWAXSMqtAZukcD0knxj8KT4lhqc2leIcCIKIE03woUeBUgBAw1wcLdkAfQj_v83IP5yYMA9LD3lWNJaICJKcOMSmqJxhWWnc_ExfPvX0OSKCdLbWOTG_McEBxD4SI0D3uPAvBMmK-pnc9hkUZVZelsv01Zz8Yq2lDAl5On5RlsM_iM04BIhwfIlmRx/s16000/7731.jpg",
    unit: "шт",
    popularity: 89,
    description: `
      Класичний тонік Schweppes з характерною легкою гірчинкою.
      Підходить для коктейлів, міксів та вживання у добре охолодженому вигляді.
    `
  },
  {
    id: "cola-zero-05",
    name: "Напій Coca-Cola Zero 0.5л",
    price: 29.90,
    oldPrice: null,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8_M7p7GXsEltAie9VMEd8f_OoqSjwTsD47x4uLwO_Se2VTwNb2rtjtaFrboeP-5Y0AaEtYh8Tu91I616yh_4VBkG4e__hXubXA9-j2cmq1OzA2qb0bKl11vM9HeZiLne5G1hWi-XsOOpdqiRyYOTBLpSpIcRDqb5F8-jV-Uwriwqcnr4fJgLIU8bdwr5P/s16000/240014.jpg",
    unit: "шт",
    popularity: 87,
    description: `
      Coca-Cola Zero без цукру з класичним смаком.
      Зручний варіант для тих, хто хоче освіжаючий напій без зайвих калорій.
    `
  },
  {
    id: "fanta-orange-05",
    name: "Напій Fanta Апельсин 0.5л",
    price: 28.90,
    oldPrice: null,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGMbbgovoBtj3Cfqzr_Aj-awzQiCCX1EQ8mPTaxkv3nBELMuUcD4e9m5i-CYc8ORUdNmuZDlxmt37AQsxbd_51odtLQc59T4ks84Vkn8KiHuB7KhId-qbyh0AdkbdpLw2zm3_m2o-Vhqm4RhWROQ-IpsyUMcC0A5iumB5sK3fOWWvnnuzhHWbv-822yqcq/s16000/538758.jpg",
    unit: "шт",
    popularity: 86,
    description: `
      Яскравий газований напій Fanta зі смаком апельсина.
      Добре освіжає та підходить для перекусів, свят і щоденного вживання.
    `
  },
  {
    id: "sprite-05",
    name: "Напій Sprite 0.5л",
    price: 28.90,
    oldPrice: null,
    category: "Вода солодка",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7pxSMz6vPglOkOU9WyRch2-uBaf2sb5Ygi_XD6jXFm8398-UYbgMkoAJNtxQ3YC4Kuk_sef4z6jDNp8SGaOsKUfkLv5jGhrV8Tu0Ji0zOJBEpwVKE3edutof7YrNa5Hn7I0jOuFkgpRbcRo0qpfHydVlOMFI25bLtLo6BLCILEJDlBC9Hte7zf-59Blva/s16000/538870.jpg",
    unit: "шт",
    popularity: 84,
    description: `
      Освіжаючий газований напій Sprite з лимонно-лаймовим смаком.
      Ідеальний для спекотного дня та подачі охолодженим.
    `
  },
  {
    id: "water-morshynska-15",
    name: "Вода Моршинська 1.5л негазована",
    price: 24.90,
    oldPrice: null,
    category: "Вода питна",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0nxwH6eM74-bsEowVUxwo87hcMI_gG7V0rzar_sbPsivp5YKz4CJwrQVxWghek3bfsdUwN0dx6CK_SuVRi26hk8ozxxBAxQwyAMC8qG-YJeEOQJhvTBszVweshb_Ip2UA5dcIi3_hqvdDfwBD1tmbo0k4GFp4XS83JQdF8nj75CJGEV2vg19-untgHcYU/s16000/5971.jpg",
    unit: "шт",
    popularity: 92,
    description: `
      Питна негазована вода Моршинська у великому форматі.
      Підходить для щоденного споживання вдома, на роботі або в дорозі.
    `
  },
  {
    id: "water-karpatska-15",
    name: "Вода Карпатська джерельна 1.5л",
    price: 22.90,
    oldPrice: null,
    category: "Вода питна",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcsAoWOWnupfx0i3hdAp85LtBNbBZKi9p4RIcqap_iAnunkqnE9FwhO-vXdRZN78Ruq8CjbmnCwszPwSj3BSLE1bNW6vXLFXG3mZg3nuF2ZA7Yrobf4Bu1FGIx3Dqc5i08FjYh3u2Kk2sSh5w9uJQrzgjr7kVtWtmZZaK5KkgwFQ-gLndI9O0tJS6rjxvq/s16000/5953.jpg",
    unit: "шт",
    popularity: 79,
    description: `
      Чиста питна вода з м’яким смаком.
      Добре підходить для щоденного вживання та приготування напоїв.
    `
  },
  {
    id: "borjomi-05",
    name: "Вода Боржомі 0.5л скло",
    price: 58.90,
    oldPrice: null,
    category: "Вода мінеральна",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhADlSLVyj55sDHbnvn83Rswdymn1kQaK4LjZrxzsnWMtk1eT1EHSoKaugDSeZd4UDl7UzvThGvYYWgrH9xVqrkAkB7octAQoFr5celqOACGb-DF84pNiXL1FgtsWzTDOQOHO3HcHyKetAw7tJDeqGUO8EX2M5cLbeD47-5aQYvWq7RhmYyYyxkdGneY1dy/s16000/main_5939.jpg",
    unit: "шт",
    popularity: 81,
    description: `
      Мінеральна вода Боржомі у скляній пляшці.
      Має характерний смак і підходить для вживання після їжі або протягом дня.
    `
  },
  {
    id: "juice-sadochok-1l",
    name: "Сік Садочок Апельсин 1л",
    price: 54.90,
    oldPrice: null,
    category: "Сокові напої",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-3Fmhvsw3HTw3nUqtlweXTqC5_I_s91N65jBMs26-AUHlwBQzDSC_XqAJOtT_bneM7Cw0XtV53jiUQ5jIXVo5Gg0mfJM2DSKBZf_a0DyuYrNSdnAViszOlZpLtjF8r5KlieaR7ggBusz28pzma4wKERejgQHHiV87TDWW6O9JKYqQtOE0VPqK07SK2386/s16000/cd37c351-c1f9-47a9-8692-68a088f46e9b.webp",
    unit: "шт",
    popularity: 83,
    description: `
      Апельсиновий сік з приємним фруктовим смаком.
      Підходить для сніданку, перекусів та щоденного вживання.
    `
  },
  {
    id: "juice-apple-1l",
    name: "Сік яблучний 1л",
    price: 49.90,
    oldPrice: null,
    category: "Сокові напої",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCISB4sgeKg7FZSU9PkmKUt0eWm2FNIS8ZaouvQuByQKVGve9RUF02YxmpnrunK5GbAhyphenhyphenN7v6aE7xiI0CoIuh_TtyIP7pHMGIBvfzkXJJyBB6lrE-3AavSEOtAcIoGSzRiXalgD3DG9rB2Suhl0ypPPDMOrceKF6BipDMU0fjFtr6nC6S508jQbteCVMjL/s16000/image_processing20260501-5718-4euazp.webp",
    unit: "шт",
    popularity: 77,
    description: `
      Яблучний сік з легким натуральним смаком.
      Добре підходить для сімейного столу та щоденного раціону.
    `
  },
  {
    id: "ice-tea-lemon-05",
    name: "Холодний чай Лимон 0.5л",
    price: 31.90,
    oldPrice: null,
    category: "Чай холодний",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUU-wliJU4BbSVoOFlYcyTvTip8Eg_SUgNGq00vwhSbdGRNMGfYid2AFBA3bhInI7H5ZMB6kqJcKoNMN4ywqipnA74vGTrSHMTUW71uHTTIwG_KmQBqMm0ZW1AqHWrl6ln3jrFnSReEYQqpVivCrPJz3BBNK8PMkYRNniKqKnJv7CuAhMTgkP4HSco-gjr/s16000/image_processing20250529-136-udsbx7.webp",
    unit: "шт",
    popularity: 75,
    description: `
      Освіжаючий холодний чай зі смаком лимона.
      Зручний напій для прогулянок, дороги та спекотної погоди.
    `
  },
  {
    id: "energy-burn-025",
    name: "Енергетичний напій Burn 0.25л",
    price: 39.90,
    oldPrice: 45.90,
    category: "Енергетики",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd1oRQplSERyjkNZLS6LEapT-SIdzaGmlUeEQ5UwvYUlVdwZ_h31MKIvdlREP8O8tTaankp8NxJXI1XtNW-gWfRX2XOhyphenhyphen7_Xt6sa-_Y3ozs9F91ph-ILlbeAj2vHKrzpJj64qgSMBPDIXXPUarMMAq6mV0jcHAQXowZY69pfCYqWERYzZT2M6x1wpmT2Nq/s16000/3_1_2.jpg",
    unit: "шт",
    popularity: 73,
    description: `
      Енергетичний напій у компактному форматі.
      Підходить для моментів, коли потрібна додаткова бадьорість.
    `
  },
  {
    id: "kvas-1l",
    name: "Квас хлібний 1л",
    price: 29.90,
    oldPrice: null,
    category: "Квас",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXNNSpeUHw9iyWsAhDDP2pscsjZyS5VdVVlv_Akfv7fdQcD1LZjUfFkb7icnVmCaurH_h37B_MDa0mPjHqqimf1Gj7VA835AeTxlFeZEapyRkQ5on8nvOGtnBqDdTslzr3R9mmDhxGXtNu9obN1WDgFjmkZbbksvx8pXmzCMCTjajXHuloc4WhyphenhyphenlH9PO12/s16000/image_processing20240801-1-qz0amb.webp",
    unit: "шт",
    popularity: 72,
    description: `
      Традиційний хлібний квас з приємним освіжаючим смаком.
      Добре підходить для спекотного дня та домашніх обідів.
    `
  }
];

const sweetsProducts = [
  {
    id: "barni-choco-30",
    name: "Бісквіт Барні 30г Шоколад",
    price: 17.90,
    oldPrice: 25.20,
    category: "Бісквіти",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAipwrFkRXd35hgCVFLnwU6vh5YmalAAwdl4kb4yPhXBWANY3TubC6n_wQZ71QAjdxKq6IGR2fyF2G7Jzz28jJQJLUecmmTe6stg7PaTEl4Fpc0b9V-g6ETW9iUBMozoR1Kl0gpO1xdvc01rB9Pw-VCXAwXYl67ETW1nwf7L5SBhVt49Onh2HFI0cpmPDp/s16000/133791.png",
    unit: "шт",
    popularity: 98,
    description: `
      М’який бісквіт Барні з шоколадною начинкою.
      Зручний солодкий перекус для дітей та дорослих.
    `
  },
  {
    id: "barni-milk-150",
    name: "Бісквіт Барні 150г Молочний",
    price: 64.90,
    oldPrice: 123.70,
    category: "Бісквіти",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR4sVjO1i2GQATpitvKL2Dsu9RKU052vpljoamNVBBOFdb5189bhANuwCuW-rULYPATyDGLqd2bV5IWZ2410N1Kk15GiEVl_7jHRuCgk_LFeqrcz8sAftAiwOm6Ss_3METgnMht7ZMBkKSMG_8ifuqzpB9ganutRd9C6xK6mZPNp0sFLj0FalWcHhWZ6M7/s16000/147774.png",
    unit: "шт",
    popularity: 96,
    description: `
      Набір бісквітів Барні з ніжною молочною начинкою.
      Добре підходить для сімейного перекусу або солодкого частування.
    `
  },
  {
    id: "barni-banana-30",
    name: "Бісквіт Барні 30г банан-йогурт",
    price: 17.90,
    oldPrice: 25.20,
    category: "Бісквіти",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPBPvQkzPcjiyrrgyL7SK5adG3MER0OmNQq0sOX4gnj2OpVb-80C5K6CjExQic_SAtbRbPmduBvP8WlszE5l9zVKp62Tx449AGNBZsBJ99awdckYnPGlRZ7hMrRZDLXfVGpvUpqISFNSJA6h0-cZBcQotHZ1clplLPcrAp5Bf6q-xY1Fw3uyExJr0EAj9W/s16000/170263.jpg",
    unit: "шт",
    popularity: 91,
    description: `
      Бісквіт Барні з бананово-йогуртовою начинкою.
      Має м’яку текстуру та приємний фруктовий смак.
    `
  },
  {
    id: "milka-alpine",
    name: "Шоколад Milka молочний 90г",
    price: 46.90,
    oldPrice: null,
    category: "Шоколад",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgomRclOY_0j3wpHQ1lIpAnuyabu5eV5bWKo3ZJ0PW6oihyVp7ZIMNIPvBh521n594PKueBE7iwfQSJXVR3bZxRYsXPhWONLuOAHWu4LqIPJE-FU_eAQ7y4dhqhOpR-73MGxs496IqV2IWhE7_8CXhl_5oHmsAgGKPrW6GcaO_7ak5Nf6GkE66RKuge8vvY/s16000/205503.jpg",
    unit: "шт",
    popularity: 88,
    description: `
      Ніжний молочний шоколад Milka з м’яким вершковим смаком.
      Чудово підходить до кави, чаю або як солодкий перекус.
    `
  },
  {
    id: "milka-hazelnut",
    name: "Шоколад Milka з горіхом 90г",
    price: 52.90,
    oldPrice: null,
    category: "Шоколад",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPghqVX4W03z6o4xzA3te8hzlZOztDHT3Ur1WhSuaECfF3Wr35B2Xn6gBrVbQf0qiH1iawXHbVwbjHEzEkdG6_5c7_oArGFZCefGZeUSoBp1GCdt7vV2YSXLyN5DjWrvYnASfmQMvCmsvRaDomNT4xNgzXAWqqSSYtYfELuEIAZlFNt3osWqOP3wMbNi3j/s16000/205504.jpg",
    unit: "шт",
    popularity: 84,
    description: `
      Молочний шоколад Milka з додаванням горіхів.
      Поєднує ніжну шоколадну основу та приємну хрустку текстуру.
    `
  },
  {
    id: "roschen-dark",
    name: "Шоколад Roshen чорний 80г",
    price: 39.90,
    oldPrice: null,
    category: "Шоколад",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7C1BHDuMPw5wo3AbzgfBHJ5fQ45PmDIVBkmiJRTVcuquXuiMfI-F6uHIqi8Y2EbpjKjVWcy-kGTs4SOOZL_tCM9sY9Uz3XtZkSRRPAi5A5NFKnpiMhN4q8Ij3m2HvgpNIZh9HPnzTMuYVsd8Pck9n2RC2OA-WXJPaDjjtHtdXQjFiOljMnyy_tiW6Ub9N/s16000/438478.jpg",
    unit: "шт",
    popularity: 79,
    description: `
      Чорний шоколад Roshen з насиченим какао-смаком.
      Підходить для десертів, кави та поціновувачів більш виразного смаку.
    `
  },
  {
    id: "merci-box",
    name: "Цукерки Merci асорті 250г",
    price: 189.90,
    oldPrice: 219.90,
    category: "Цукерки шоколадні",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAPw4bCXaCSlSex-E7NF9W2TK56DAmfI2Ef2NykYVIXjf25aRR1000pXsHnlsDr7pHDQ0-QKabEIclpkvJbqHSvuuFJ-VD-O5aOGK8mYCyAxEO1ZherukSCQNVNymJ8k95egHoEGLup3lE6V-4B5q3flEoFBI2lfWkVfQfTJqtJ8X6C1ZAVpecgTJsPBG5/s16000/592628203.webp",
    unit: "шт",
    popularity: 82,
    description: `
      Шоколадні цукерки Merci в асортименті.
      Гарний варіант для подарунку, святкового столу або приємного частування.
    `
  },
  {
    id: "roshen-candies",
    name: "Цукерки Roshen Стріла шоколадні 200г",
    price: 79.90,
    oldPrice: null,
    category: "Цукерки шоколадні",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzDdcR5K3JeJUIOC4b8CYnp7IfCS0GSY5gHMvIadnHDWWWYwgxoa4Ux9wCLD-312DhRVQxVSumJNwj6TAwkPF8rQxMlkbajygsgKvMqQ9Uiz_TMeRwK-P4jxwcTmRm-jWDyeBtEWr0BnyqMkQg6Z7pEcjfOo7UlQAskdZjnEudBRWQDf8bN23B02RXrnT1/s16000/232852.jpg",
    unit: "шт",
    popularity: 77,
    description: `
      Шоколадні цукерки Roshen з приємним солодким смаком.
      Підходять до чаю, кави або для сімейного частування.
    `
  },
  {
    id: "waffles-arton",
    name: "Вафлі Артек 80г",
    price: 19.90,
    oldPrice: null,
    category: "Вафлі",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeybHzcCejdkBGeXryn90CVDw1OHBYOFoRdccxWlpubgRNF6RoQgSn-pRHjvfG5XMJ9xGmUflZrUk4sfI2p_fAP-KF9cMkY4HgtvfCfth7oSpcCHx_yYtqQffEaifTD0d-tGO7StUdiY8m1s7yCQv4EotseQndo-bivv5O2m2LbIDzLrFXTphadrRRjdxL/s16000/Vafli-Artek-klasychni--80-h.png",
    unit: "шт",
    popularity: 75,
    description: `
      Хрусткі вафлі з ніжною начинкою.
      Зручний варіант для швидкого солодкого перекусу.
    `
  },
  {
    id: "waffle-cake",
    name: "Торт вафельний шоколадний 500г",
    price: 69.90,
    oldPrice: null,
    category: "Вафлі",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDql26FTclKOfXDvRNdb13H0czF7rwJtqXjnUcwpD-NuWhDEPAzF50i0Rqknp65IZXtre3WxxOMLqIYLKfuX86z2cF_f3X-o3wC2-FX2kuN0umXmMyweJSXKHHyN-r_NfY60QvmC52f3VS8JCAWxZb_xH9GwuZ92qe0pP_pIbPe1_RFdTBA_H008vN6qkG/s16000/660738619.webp",
    unit: "шт",
    popularity: 73,
    description: `
      Вафельний торт із шоколадним смаком.
      Добре підходить для домашнього чаювання або десерту після обіду.
    `
  },
  {
    id: "cracker-salty",
    name: "Крекер солоний 180г",
    price: 34.90,
    oldPrice: null,
    category: "Крекер",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgZHA6QD4BbML6lE1aEOYyTSBwHqhY2cEr4cS-MfCYmhzAee_y6RUT_-PKtBwDL9R862ipBhfsy9acpZYhCpmD_WZA7CWYoEzAIlqg_JWg0P5X_9F9ZXoiwmJCRtVQVDkovgm0Ip7Z0Qdnqby1oH8u3FuL4lfxDZ2dabJNIu_S1l5cIGLHZXy0UJgC67Ry/s16000/ca536520-6c94-46ae-93c1-3dc2c3c123bf.webp",
    unit: "шт",
    popularity: 70,
    description: `
      Хрусткий солоний крекер для перекусів.
      Підходить до чаю, супів, сирів та легких закусок.
    `
  },
  {
    id: "oreo-95",
    name: "Печиво Oreo 95г",
    price: 31.90,
    oldPrice: 39.90,
    category: "Печиво і пряники",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLBBwRK6F6J8IW_jqmc_ACC5RICR2PxfGAloPMiaRwLV9EEjYhk21jfRl7H8GqtsqPWcbzBAQA9vzxSo9BMjs8ySgHMSl5qxbLVzJ1PqjlduIdYlZO9rQnLN945lnNoaIkn4FjmxfkzV5JyC19QNZjcecHj67wlHNQIT-PM_w7Q01CjUMrbzsEWuhHV0B/s16000/Pechyvo-Oreo-95-h.jpg",
    unit: "шт",
    popularity: 93,
    description: `
      Популярне печиво Oreo з кремовою начинкою.
      Чудово смакує з молоком, кавою або як самостійний десерт.
    `
  },
  {
    id: "caramel-mix",
    name: "Карамель асорті 200г",
    price: 42.90,
    oldPrice: null,
    category: "Карамель",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaerNSeJDS3qfV9tOjpn9z275t-04-H-XLD4mb2UWTTpp4AwaYJWaHyacPmETzfjOmrFpoHaLUq95MMFTzpTrGmNqq___w8yCPGo5bs6k8-cIBeJBzUxmFwQwXEM49WHXK0oKCdApAPUkiKsQ1YbEl-BgMTbzLKW2PuLD3S0oBt86yN7saJn_z1H-Ur9Pp/s16000/image_processing20240731-1-grb96t.webp",
    unit: "шт",
    popularity: 68,
    description: `
      Карамельні цукерки в асортименті смаків.
      Підходять для щоденного частування та солодких перекусів.
    `
  },
  {
    id: "snickers-bar",
    name: "Батончик Snickers 50г",
    price: 24.90,
    oldPrice: null,
    category: "Батончики",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqeTmhAWcr8xRJuvuy-wsMH6yfDGvUFKGZl2SoFLIUW_WAt3z3Vp7NtMKbmv2096jGMs4QZFk1_hZ-n5Ir6i-I24Ew0HOE7lhf-3LrG0pTzo4lU_OANBimKVxzRSycP9evewP_4R_kTs5zyJPD7RS4nFugNSgSugo0GbLkNyS7MPfBD_PewouSuz-7lytr/s16000/207700.jpg",
    unit: "шт",
    popularity: 90,
    description: `
      Шоколадний батончик Snickers з карамеллю, нугою та арахісом.
      Ситний солодкий перекус у зручному форматі.
    `
  }
];


// Допоміжний пошук поста
function findPostById(id) {
  return BLOG_POSTS.find((post) => post.id === id);
}
