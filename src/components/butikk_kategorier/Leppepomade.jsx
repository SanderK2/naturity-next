'use client'

export default function KategoriLeppepomade() {

  
  function waitForElement(selector, callback) {
    if (typeof window !== "undefined") {
    if (document.querySelector(selector)) {
      callback();
    } else {
      setTimeout(() => waitForElement(selector, callback), 500);
    }
  }
  }
  
  waitForElement("#LepVanligeProdukter", () => {
    startStore();
  });

  
function startStore() {
  
  if (typeof window !== "undefined") {
  if (document.getElementById('LepVanligeProdukter')) {
  
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  loadScript();
  
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementById('varer')).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'b47599.myshopify.com',
      storefrontAccessToken: '1111adddc5ac109c6c85495ad004424a',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
/*       ui.createComponent('product', {
        id: '8103364952347',
        node: document.getElementById('product-component-1675885365925'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
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
      }
    },
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
      ui.createComponent('product', {
        id: '8103370391835',
        node: document.getElementById('product-component-1676888170187'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
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
      }
    },
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
      }); */

      // ! ::: NY PRODUKT ARRAY ::: !

      var buttonTemplate = '<span class="nyhet" style="background-color: #7BB8FF; color: #ffffff; padding: 7px; border-radius: 10px;">NYHET</span><div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div> <!-- <div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button onclick="window.parent.postMessage(`runFunction`, `*`);" style="background-color: #00a764; display: inline-block; margin: 20px auto 0; margin-top: 0; color: #fff; font-size: 15px; padding: 12px 40px; letter-spacing: .3px; border-radius: 3px; cursor: pointer; -webkit-transition: background 200ms ease; transition: background 200ms ease; max-width: 100%; text-overflow: ellipsis; overflow: hidden; line-height: 1.2; border: 0;">Se produktside</button></div> -->';

      ui.createComponent('productSet', {
        id: [],
        node: document.getElementById('LepNyeProdukter'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
  "product": {
    "templates": {
    "button": buttonTemplate
  },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
      },
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
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "Vis produkt"
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
      }
    },
    "text": {
      "button": "Legg til i handlekurv"
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
/*]]>*/

      // ! --- VANLIG PRODUKT ARRAY --- !

      var buttonTemplate = '<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div> <!-- <div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button onclick="window.parent.postMessage(`runFunction`, `*`);" style="background-color: #00a764; display: inline-block; margin: 20px auto 0; margin-top: 0; color: #fff; font-size: 15px; padding: 12px 40px; letter-spacing: .3px; border-radius: 3px; cursor: pointer; -webkit-transition: background 200ms ease; transition: background 200ms ease; max-width: 100%; text-overflow: ellipsis; overflow: hidden; line-height: 1.2; border: 0;">Se produktside</button></div> -->';

      ui.createComponent('productSet', {
        id: [8562248515867],
        node: document.getElementById('LepVanligeProdukter'),
        moneyFormat: '%7B%7Bamount_with_comma_separator%7D%7D%20kr',
        options: {
  "product": {
    "templates": {
    "button": buttonTemplate
  },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
      },
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
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "Vis produkt"
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
      }
    },
    "text": {
      "button": "Legg til i handlekurv"
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
      }
      );}); 
    
  }
  }}}

  return (
    <main>
      <div id='LepNyeProdukter'></div>
      <div id='LepVanligeProdukter'></div>
    </main>
  )
}
