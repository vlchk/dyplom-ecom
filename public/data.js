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
  return PRODUCTS.find(function(p) { return p.id === id; }) || null;
}
