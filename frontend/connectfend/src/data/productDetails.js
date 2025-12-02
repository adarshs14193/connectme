// src/data/productDetails.js
import lteIcon from "../assets/4G.png";
import bacnetIcon from "../assets/BAC.png";
import mbusIcon from "../assets/Mbus.png";
import modbusIcon from "../assets/mod.png";
import gaskimg from "../assets/gaskonnect.png"
import mbus from "../assets/Mbuspic.png";
import clampon from "../assets/clampon.png";
import protocol from "../assets/protocol.png" ;
import tcp from "../assets/tcp.png" // change to your real image

const productDetails = {
  gaskonnect: {
    id: 1,
    title: "Wired Remote Reading Smart Gas Meter",
    subtitle: "GasKonnect",

    heroImage: gaskimg, // replace with actual gas meter image when available

    description: `
    Wired remote reading gas meter adopts M-BUS or RS485 Modbus 
    communication to enable remote meter reading and valve control. 
    It measures gas flow in pipelines and is equipped with a microcomputer 
    to store gas consumption, detect battery status, and monitor meter operation. 
    It helps utilities improve billing efficiency and eliminates the need 
    for manual meter reading.
  `,

    brochure: "/brochures/GASKONNECT.pdf", // or your actual brochure path

    features: [
      "Supports M-BUS or RS-485 communication (long-distance capable)",
      "Real-time meter reading with remote valve control",
      "Automatic periodic data uploading",
      "Electric suspension ball valve technology for reliable operation",
      "Low pressure loss design",
      "Powered through M-Bus (no external power supply needed)",
      "Single or double display (Register / LCD + Register)",
      "Anti-external electric & magnetic attack protection",
      "Accurate microprocessor-based gas measurement"
    ],

    advantages: [
      "Remote monitoring",
      "Reliable electric ball valve",
      "High accuracy",
      "Zero external power (via M-Bus)",
      "Tamper-protected",
      "Suitable for utility billing"
    ],
    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  }
  , mbusmaster: {
    id: 2,
    title: "UConnect – MBus Master U2601",
    subtitle: "UConnect",
    heroImage: mbus,

    description: `
    UConnect M-Bus Master (U2601) is a powerful and reliable industrial M-Bus 
    controller designed for connecting up to 250 utility meters. It converts 
    M-Bus signals to RS232, RS485 or TCP/IP, enabling seamless integration 
    with building management systems, billing software and cloud platforms. 
    The device includes overload protection, automatic load adjustment and 
    stable communication features suitable for long-term metering applications.
  `,

    brochure: "/brochures/Uconnect.pdf",

    features: [
      "Supports up to 250 M-Bus devices (depending on model)",               // Page 1
      "Converts M-Bus to RS232 / RS485 / TCP-IP",                           // Page 1
      "Automatic adjustment to M-Bus loads",                                // Page 1
      "Short-circuit & overload protection",                                // Page 1
      "DIN-rail mounting industrial design",                                // Page 1
      "Programmable TCP/IP parameters (IP & Port)",                         // Page 1
      "Stable communication up to 9600 baud rate",                          // Page 1
      "LED indicators for power & data transfer",                           // Page 1
      "Supports water, gas, BTU and electric utility meters"                // Page 2 diagram
    ],

    advantages: [
      "High Capacity (up to 250 meters)",
      "Robust Industrial Build",
      "Reliable Long-Term Operation",
      "Easy Integration with Systems",
      "Smart Protection Mechanisms",
      "Cloud & IoT Ready"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },

  tkn202b: {
    id: 3,
    title: "Technkave - Clamp on Meters",
    subtitle: "Techknave",
    heroImage: clampon,

    description: `
      Technkave TKN 202 series Wall-mount Clamp on Ultrasonic BTU/ FLOW meter 
      provides accurate thermal energy and Liquid flow measurements from outside a pipe. 
      TKN 202 series can be applied to DN25mm to DN600mm pipe sizes with long-term stable measurement.
    `,

    brochure: "/brochures/ClampOn.pdf",

    features: [
      "Measurement accuracy +-0.5 to 1%",
      "Non-Invasive with no pipe disturbance",
      "Easy installation",
      "Wide range DN25mm to DN600mm",
      "Suitable for most pipe materials",
      "Modbus RTU / TCP / BACNET / IP and MBUS support",
      "4G / GPRS modem",
      "Weatherproof enclosure IP65",
      "BTU, Mwh, Velocity, Volumetric measurements",
      "Internal data logging"
    ],

    advantages: [
      "High Performance",
      "Compact",
      "Robust",
      "Reliable",
      "Cloud Connected",
      "Industrial Grade"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },
  protocolConvertor: {
    id: 4,
    title: "UConnect – Protocol Convertors",
    subtitle: "Modbus to BACnet IP Converter",
    heroImage: protocol,   // replace when real image available

    description: `
    The UConnect Modbus to BACnet IP converter enables seamless
    communication between Modbus devices and BACnet IP systems.  
    It supports Modbus TCP and RTU simultaneously, allowing up to 64 
    Modbus devices to be converted into BACnet objects and monitored 
    from BMS, HVAC, lighting control, and energy management platforms.
  `,

    brochure: "/brochures/protocol-convertors.pdf",

    features: [
      "Supports Modbus TCP & RTU simultaneously",
      "Handles up to 64 Modbus devices",
      "BACnet IP communication support",
      "Configuration via IP web interface",
      "DIN rail mounting",
      "Stable and reliable communication",
      "Ideal for BMS, HVAC, and energy monitoring"
    ],

    advantages: [
      "High Performance",
      "Reliable Integration",
      "Industrial Grade",
      "Compact Design",
      "Easy Configuration",
      "Stable Communication"
    ],

    communicationIcons: [
      { icon: lteIcon },
      { icon: bacnetIcon },
      { icon: mbusIcon },
      { icon: modbusIcon }
    ]
  },
  serialToTcp: {
  id: 5,
  title: "Serial to TCP Convertor",
  subtitle: "U2301 – Modbus RTU to Ethernet",
  heroImage: tcp, // replace with real product image

  description: `
    The U2301 RS485 Modbus RTU to TCP Converter extends data communication 
    over Ethernet/LAN networks with secure two-way communication. It enables
    seamless transmission of Modbus slave data to centralized servers without
    requiring deep protocol knowledge. Supports multiple Modbus slave IDs,
    scaling, byte swap, polling modes, and full remote configuration.
  `,

  brochure: "/brochures/Serial-TCP-Convertors.pdf",

  features: [
    // From Page 1
    "Intelligent Modbus, Ethernet/LAN Connectivity",                         // :contentReference[oaicite:1]{index=1}
    "1 x RS-485 port for Modbus, 1 x TCP/IP port",                           // :contentReference[oaicite:2]{index=2}
    "Configure and read multiple slave IDs",                                 // :contentReference[oaicite:3]{index=3}
    "Supports data type, byte swapping and scaling",                         // :contentReference[oaicite:4]{index=4}
    "Supports Transparent Modbus or Device Polling modes",                   // :contentReference[oaicite:5]{index=5}
    "Smart inbuilt data handler ensures reliable transfer",                  // :contentReference[oaicite:6]{index=6}

    // From Page 2
    "Authorized number list for command & configuration",                    // :contentReference[oaicite:7]{index=7}
    "Configurable TCP/HTTP",
    "Remote configuration through TCP/IP",
    "LED indicators for Modbus TX/RX status",
    "Keep-Alive command for stable socket connection"
  ],

  advantages: [
    "Reliable Modbus to Ethernet connectivity",
    "Supports multiple slaves",
    "Cloud-ready integration",
    "Robust and secure communication",
    "Industrial-grade stability"
  ],

  communicationIcons: [
    { icon: lteIcon },
    { icon: bacnetIcon},
    { icon: mbusIcon},
    { icon: modbusIcon}
  ]
}


};

export default productDetails;
