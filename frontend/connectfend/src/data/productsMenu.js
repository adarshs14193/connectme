const productsMenu = {

  hardware: [
    {
      category: "GasKonnect",
      items: [
        { label: "MBus Gas Solenoid Valve Controller & Pulse Reader", slug: "gaskonnect" }
      ]
    },
    {
      category: "UConnect",
      items: [
        { label: "MBUS Master (U2601)", slug: "mbusmaster" },
        { label: "Protocol Convertors (U240x)", slug: "protocolConvertor" },
        { label: "Serial to TCP Convertors", slug: "serialToTcp" },
        { label: "4G Cloud Gateways", slug: "4g-cloud" },
        { label: "USB MBUS Master - U2601U-S20", slug: "u2601u-s20" },
        { label: "Power Supply - U2701P", slug: "u2701p-supply" }
      ]
    },
    {
      category: "UFLO",
      items: [
        { label: "U90 Electromagnetic Flow Meter (U902X)", slug: "u902x" },
        { label: "U50 Compact BTU Meter (U501X)", slug: "u501x" }
      ]
    },
  ],

  techknave: [
    { label: "ClampOn BTU / FLOW Meter (TKN202B)", slug: "tkn202b" },
    { label: "Electromagnetic Flow Meter – TKN2041-DNXXX", slug: "tkn2041" },
    { label: "Portable Clamp On Flow Meter – TKN2031", slug: "tkn2031" },
    { label: "Battery-operated shutoff valve (TKN2201)", slug: "tkn2201" },
    { label: "Battery-operated shutoff valve (TKN2101)", slug: "tkn2101" },
  ],

  software: [
    {
      category: "UBill",
      items: [
        { label: "UBill M-Bus Reader", slug: "ubill-mbus" },
        { label: "UBill IBM (Integrated Billing Module)", slug: "ubill-ibm" },
        { label: "UBill AMR", slug: "ubill-amr" },
        { label: "UBill Enterprise", slug: "ubill-enterprise" },
        { label: "UBill VCM", slug: "ubill-vcm" },
        { label: "UBill Prepaid", slug: "ubill-prepaid" },
        { label: "UBill BMS", slug: "ubill-bms" }
      ]
    },
    {
      category: "UEnergy",
      items: [{ label: "UEnergy Dashboard", slug: "uenergy" }]
    },
    {
      category: "UManage",
      items: [{ label: "UManage Software", slug: "umanage" }]
    }
  ]
};

export default productsMenu;
