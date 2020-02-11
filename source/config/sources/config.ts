import { InputConfig } from "../Type";

export default {
  "adslots": {
    "123": {
      "id": 123,
      "size": "300*200",
      "adslotname": "top",
      "providersid": "AMZP002,APPNXP003,OPNXP004,RUBIC005,PUBM006,SONOB007"
    },
    "124": {
      "id": 124,
      "size": "300*200",
      "adslotname": "rec",
      "providersid": "AMZP002,APPNXP003,OPNXP004,RUBIC005,PUBM006,SONOB007"
    }
  },
  "providers": {
    "AMZP002": {
      "id": "AMZP002",
      "providername": "Amazon",
      "entrypoint": "AmazonAdapter"
    },
    "APPNXP003": {
      "id": "APPNXP003",
      "providername": "Appnexus",
      "entrypoint": "AppnexusAdapter"
    },
    "OPNXP004": {
      "id": "OPNXP004",
      "providername": "Openx",
      "entrypoint": "OpenxAdapter"
    },
    "PUBM006": {
      "id": "PUBM006",
      "providername": "Pubmatics",
      "entrypoint": "AdExchange"
    },
    "RUBIC005": {
      "id": "RUBIC005",
      "providername": "Rubicon",
      "entrypoint": "AdExchange"
    },
    "SONOB007": {
      "id": "SONOB007",
      "providername": "Sonobi",
      "entrypoint": "AdExchange"
    }
  },
  "providersmap": {
    "123": {
      "AMZP002": {
        "id": "AMZP002",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "AMZFRB"
      },
      "APPNXP003": {
        "id": "APPNXP003",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "APNXFRB"
      },
      "OPNXP004": {
        "id": "OPNXP004",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "OPNXFRB"
      },
      "PUBM006": {
        "id": "PUBM006",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "PUBMFRB"
      },
      "RUBIC005": {
        "id": "RUBIC005",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "RUBCFRB"
      },
      "SONOB007": {
        "id": "SONOB007",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "SONBFRB"
      }
    },
    "124": {
      "AMZP002": {
        "id": "AMZP002",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "AMZFRB"
      },
      "APPNXP003": {
        "id": "APPNXP003",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "APNXFRB"
      },
      "OPNXP004": {
        "id": "OPNXP004",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "OPNXFRB"
      },
      "PUBM006": {
        "id": "PUBM006",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "PUBMFRB"
      },
      "RUBIC005": {
        "id": "RUBIC005",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "RUBCFRB"
      },
      "SONOB007": {
        "id": "SONOB007",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "SONBFRB"
      }
    }
  }
} as InputConfig;



/*

{
  "adslots": {
    "123": {
      "id": 123,
      "size": "300,200",
      "adslotname": "top",
      "providersid": "AMZP002,APPNXP003,OPNXP004"
    },
    "124": {
      "id": 124,
      "size": "300,200",
      "adslotname": "rec",
      "providersid": "AMZP002,APPNXP003,OPNXP004"
    }
  },
  "providers": {
    "AMZP002": {
      "id": "AMZP002",
      "providername": "Amazon",
      "entrypoint":"AmazonAdapter",
    },
    "APPNXP003": {
      "id": "APPNXP003",
      "providername": "Appnexus",
      "entrypoint":"AppnexusAdapter",
    },
    "OPNXP004": {
      "id": "OPNXP004",
      "providername": "Openx",
      "entrypoint":"OpenxAdapter",
    }
  },
  "providersmap": {
    "123": {
      "AMZP002": {
        "id": "AMZP002",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "AMZ_FRB002"
      },
      "APPNXP003": {
        "id": "APPNXP003",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "APNX_FRB003"
      },
      "OPNXP004": {
        "id": "OPNXP004",
        "revshare": 4,
        "epc": 321,
        "bidprice": 3,
        "ecc": "OPNX_FRB002"
      }
    },
    "124": {
      "AMZP002": {
        "id": "AMZP002",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "AMZ_FRB002"
      },
      "APPNXP003": {
        "id": "APPNXP003",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "APNX_FRB003"
      },
      "OPNXP004": {
        "id": "OPNXP004",
        "revshare": 5,
        "epc": 421,
        "bidprice": 4,
        "ecc": "OPNX_FRB002"
      }
    }    
  }
}

{
  
}



*/