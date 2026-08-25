'use client'

export default function Deo_Noytral() {

function waitForElement(selector, callback) {
    if (typeof window !== "undefined") {
    if (document.querySelector(selector)) {
      callback();
    } else {
      setTimeout(() => waitForElement(selector, callback), 500);
    }
  }
  }
  
  waitForElement("#product-component-1676557681628", () => {
    startStore();
  });

  function startStore() {
  
    if (typeof window !== "undefined") {
    if (document.getElementById('product-component-1676557681628')) {

        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        loadScript();

        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'b47599.myshopify.com',
            storefrontAccessToken: '1111adddc5ac109c6c85495ad004424a',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '8103364952347',
              node: document.getElementById('product-component-1676557681628'),
              moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0",
                        "margin-bottom": "50px"
                      },
                      "text-align": "left"
                    },
                    "title": {
                      "font-size": "26px"
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#00965a"
                      },
                      "background-color": "#00a764",
                      ":focus": {
                        "background-color": "#00965a"
                      }
                    },
                    "price": {
                      "font-size": "18px"
                    },
                    "compareAt": {
                      "font-size": "15.299999999999999px"
                    },
                    "unitPrice": {
                      "font-size": "15.299999999999999px"
                    }
                  },
                  "layout": "horizontal",
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "description": true
                  },
                  "width": "100%",
                  "text": {
                    "button": "Legg til i handlekurv"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      ":hover": {
                        "background-color": "#00965a"
                      },
                      "background-color": "#00a764",
                      ":focus": {
                        "background-color": "#00965a"
                      }
                    },
                    "title": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold",
                      "font-size": "26px",
                      "color": "#4c4c4c"
                    },
                    "price": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "18px",
                      "color": "#4c4c4c"
                    },
                    "compareAt": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    },
                    "unitPrice": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      ":hover": {
                        "background-color": "#00965a"
                      },
                      "background-color": "#00a764",
                      ":focus": {
                        "background-color": "#00965a"
                      }
                    }
                  },
                  "text": {
                    "title": "Handlekurv",
                    "total": "Subtotal",
                    "empty": "Handlekurven din er tom.",
                    "notice": "Frakt- og rabattkoder legges til i kassen.",
                    "button": "Sjekk ut",
                    "noteDescription": "Spesielle instruksjoner for selger"
                  },
                  "contents": {
                    "note": true
                  }
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "background-color": "#00a764",
                      ":hover": {
                        "background-color": "#00965a"
                      },
                      ":focus": {
                        "background-color": "#00965a"
                      }
                    }
                  }
                }
              },
            });
          });
        }
    }
    }
    }


    return (
      <main>
        <div className="produkt">
            <div id='product-component-1676557681628'></div>
        </div>
      </main>
    )
  }
  