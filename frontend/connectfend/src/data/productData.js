// src/data/productData.js
// Master Data Source for ConnectMe Products
import logo from "../assets/logo.png"; // Fallback image
import ufloU60Img from "../assets/uflo_u60_advanced.png";
import ufloU40CompactPdf from "../assets/brochures/uflo_u40_compact.pdf";
import ufloU40BulkPdf from "../assets/brochures/uflo_u40_bulk.pdf";
import ufloU60Pdf from "../assets/brochures/uflo_u60.pdf";
import ufloU50Pdf from "../assets/brochures/uflo_u50.pdf";
import tknSwitchPdf from "../assets/brochures/tkn2101c_switch.pdf";
import tknValvePdf from "../assets/brochures/tkn29xxc_valve.pdf";
import tkn204Pdf from "../assets/brochures/tkn204_enhanced.pdf";
import tkn205Pdf from "../assets/brochures/tkn205_insertion.pdf";
import tkn202Pdf from "../assets/brochures/tkn202_clampon.pdf";
import gimaBPdf from "../assets/brochures/gima_b.pdf";
import gimaHPdf from "../assets/brochures/gima_h.pdf";
import gimaIbPdf from "../assets/brochures/gima_ib.pdf";
import tkn2801Pdf from "../assets/brochures/tkn2801_gas.pdf";
import tkn2810xPdf from "../assets/brochures/tkn2810x_gas.pdf";
import mbusMasterPdf from "../assets/brochures/mbus_master.pdf";
import mbusLevelPdf from "../assets/brochures/mbus_level.pdf";
import mbusUsbPdf from "../assets/brochures/mbus_usb.pdf";
import edgeModulePdf from "../assets/brochures/edge_module.pdf";
import tosilockPdf from "../assets/brochures/tosilock.pdf";
import smpsPdf from "../assets/brochures/smps_24v.pdf";
import leakPdf from "../assets/brochures/leak_detection.pdf";
import bmsIntegrationPdf from "../assets/brochures/bms_integration.pdf";
import tenantBillingPdf from "../assets/brochures/tenant_billing.pdf";
import emsPlatformPdf from "../assets/brochures/ems_platform.pdf";
import vcmPlatformPdf from "../assets/brochures/vcm_platform.pdf";
import mmsPlatformPdf from "../assets/brochures/mms_platform.pdf";

// Images (using placeholders where needed, map real imports if available)
const placeholder = logo;


const productData = [
    // =========================================================================
    // METERS
    // =========================================================================
    {
        category: "Meters",
        slug: "meters",
        subcategories: [
            {
                name: "Inline Ultrasonic BTU Meters",
                slug: "inline-ultrasonic-btu",
                products: [
                    {
                        id: "uflo-u60",
                        name: "UFLO U60 Advances Series",
                        longDescription: "The UFLO U60 Advanced Series is our flagship ultrasonic BTU meter, engineered for high-precision energy management in HVAC systems. Unlike traditional mechanical meters, the U60 uses ultrasonic technology to ensure consistent accuracy over its entire lifespan with no moving parts to wear out. \nIdeally suited for district cooling and commercial building automation, it comes fully MID certified and supports seamless integration via M-Bus or Modbus protocols.",
                        description: "Uflo ultrasonic BTU Meter- U60 Advanced series.",
                        image: ufloU60Img,
                        brochure: ufloU60Pdf,
                        features: [
                            "Advanced ultrasonic flow sensing",
                            "Integrated temperature monitoring",
                            "BMS compatible (M-Bus / Modbus)",
                            "Long-life battery option"
                        ],
                        specs: {
                            size: "DN15 to DN40",
                            tempSensor: "PT1000 Jumo sensors",
                            batteryLife: "> 12 years",
                            replaceable: "Battery & Temp. Sensors",
                            certification: "MID certified"
                        },
                        tags: ["HVAC", "Advanced", "BMS Ready"]
                    },
                    {
                        id: "uflo-u50",
                        name: "UFLO U50 Compact Series",
                        longDescription: "Designed for tight spaces and residential applications, the UFLO U50 Compact Series delivers reliable ultrasonic metering in a small footprint. It is the perfect solution for apartment sub-metering, offering IP68 protection and a 10-year battery life to ensure maintenance-free operation.",
                        description: "Uflo Ultrasonic Compact BTU Meter-U50 Compact Series.",
                        image: placeholder,
                        brochure: ufloU50Pdf,
                        features: [
                            "Compact footprint",
                            "Reliable ultrasonic measurement",
                            "Cost-effective sub-metering",
                            "Easy installation"
                        ],
                        specs: {
                            size: "DN15 to DN40",
                            protection: "IP65 / IP68",
                            batteryLife: "10 Years"
                        },
                        tags: ["Residential", "Compact", "Retrofit"]
                    },
                    {
                        id: "uflo-u50-bulk",
                        name: "UFLO U50 Bulk BTU Meter",
                        description: "Uflo Ultrasonic bulk BTU Meter-U50 Compact Series.",
                        image: placeholder,
                        features: [
                            "Wide flow range support",
                            "Heavy-duty construction",
                            "High precision billing grade"
                        ],
                        specs: {
                            size: "DN50 to DN300",
                            protection: "IP65 / IP68",
                            batteryLife: "10 Years",
                            communication: "Mbus / RS485"
                        },
                        tags: ["Commercial", "Billing", "Main Line"]
                    }
                ]
            },
            {
                name: "Inline Ultrasonic Water Meters",
                slug: "inline-ultrasonic-water",
                products: [
                    {
                        id: "uflo-u40",
                        name: "UFLO U40 Compact Series",
                        longDescription: "The UFLO U40 is a smart ultrasonic water meter designed for accurate residential consumption tracking. With zero moving parts, it is immune to sediment and wear, guaranteeing class 2 accuracy for years. It features built-in leak detection and R400 dynamic range for precise low-flow measurement.",
                        description: "Uflo U40 Compact Series.",
                        image: placeholder,
                        brochure: ufloU40CompactPdf,
                        features: ["No moving parts", "Leak detection capability", "Long battery life"],
                        specs: {
                            size: "DN15 to DN40",
                            accuracy: "Class 2",
                            waterTemp: "T30 / T50",
                            rFactor: "R250 / R400"
                        },
                        tags: ["Water", "Residential", "Smart"]
                    },
                    {
                        id: "uflo-u40-bulk",
                        name: "UFLO U40 Bulk Flow Meter",
                        description: "Uflo U40 Bulk Flow Meter.",
                        image: placeholder,
                        brochure: ufloU40BulkPdf,
                        features: ["Wide dynamic range", "Durable industrial design", "Remote reading ready"],
                        specs: {
                            size: "DN50 to DN500",
                            accuracy: "Class 2",
                            waterTemp: "T30 / T50"
                        },
                        tags: ["Water", "Industrial", "Distribution"]
                    },
                    {
                        id: "uflo-u70",
                        name: "UFLO U70 Advanced Hot Water",
                        description: "Specialized ultrasonic meter for hot water systems, designed for high-temperature durability.",
                        image: placeholder,
                        features: ["High temp resistance", "Precision measurement", "District heating compatible"],
                        tags: ["Hot Water", "High Temp", "Specialized"]
                    }
                ]
            },
            {
                name: "Inline Electromagnetic Flow Meters",
                slug: "inline-electromagnetic",
                products: [
                    {
                        id: "gima-b",
                        name: "GIMA-B Type Electromagnetic Flow Meter",
                        longDescription: "The GIMA-B is a robust electromagnetic flow meter designed for conductive liquids in industrial and wastewater applications. Featuring a chemical-resistant liner and no moving parts, it handles slurries and aggressive fluids with ease, providing +/- 0.5% accuracy and zero pressure loss.",
                        description: "GI Instruments GIMA-B type Electromagnetic Flow meters.",
                        image: placeholder,
                        brochure: gimaBPdf,
                        features: ["No pressure loss", "High accuracy for conductive fluids", "Chemical resistant liner"],
                        specs: {
                            accuracy: "+/- 0.5%",
                            size: "DN6 to DN2000",
                            liner: "Rubber / PTFE / PFE",
                            communication: "Modbus RS485 / HART"
                        },
                        tags: ["Industrial", "Wastewater", "Conductive"]
                    },
                    {
                        id: "gima-h",
                        name: "GIMA-H Type Electromagnetic Flow Meter",
                        longDescription: "Engineered for hygiene-critical environments, the GIMA-H offers sanitary connections and food-grade materials suitable for the F&B and pharmaceutical industries. It is fully CIP/SIP compatible and maintains high accuracy even during rapid temperature changes.",
                        description: "GIMA-H Type Electromagnetic Flow Meter",
                        description: "GI instruments GIMA-H electromagnetic HEAT/BTU meters.",
                        image: placeholder,
                        brochure: gimaHPdf,
                        features: ["Sanitary connections", "Food-grade materials", "CIP compatible"],
                        specs: {
                            accuracy: "2%",
                            size: "DN15 to DN600",
                            liner: "Rubber / PTFE / PFE",
                            communication: "Modbus RS485 / HART",
                            rating: "IP65 / IP68"
                        },
                        tags: ["Sanitary", "Food & Bev", "Hygiene"]
                    },
                    {
                        id: "gima-ib",
                        name: "GIMA-IB Insertion Electromagnetic Flow Meter",
                        description: "Insertion mag meter for large pipes, designed for cost-effective retrofit metering.",
                        image: placeholder,
                        brochure: gimaIbPdf,
                        features: ["Hot tap installation", "Cost-effective for large pipes", "Low maintenance"],
                        specs: {
                            accuracy: "2%",
                            size: "DN100 to DN3000",
                            communication: "Modbus RS485 / HART",
                            rating: "IP65 / IP68"
                        },
                        tags: ["Retrofit", "Large Pipe", "Insertion"]
                    }
                ]
            },
            {
                name: "Clamp-on Ultrasonic BTU/Flow Meters",
                slug: "clamp-on-ultrasonic",
                products: [
                    {
                        id: "tkn202",
                        name: "Techknave TKN202 Clamp-on BTU/FLOW Meter",
                        longDescription: "The Techknave TKN202 offers a completely non-invasive metering solution, perfect for retrofitting existing buildings without cutting pipes. Its clamp-on transducers can be installed in minutes, providing accurate flow and energy measurement for energy audits and temporary monitoring.",
                        description: "Techknave Standard Clampon Ultrasonic BTU /Flow meter - (TKN202B /F).",
                        image: placeholder,
                        brochure: tkn202Pdf,
                        features: ["Non-invasive installation", "Ideal for existing buildings", "Flow and Energy modes"],
                        specs: {
                            size: "DN50 to DN2000",
                            accuracy: "+/- 1%",
                            tempSensor: "PT100",
                            communication: "RS485 / Mbus / BacNet IP / 4G"
                        },
                        tags: ["Retrofit", "Non-invasive", "Quick Install"]
                    },
                    {
                        id: "tkn204",
                        name: "Techknave TKN204 Enhanced Clamp-on BTU/Flow Meter",
                        description: "Techknave Enhanced Clampon Ultrasonic BTU /Flow meter (TKN204B /F).",
                        image: placeholder,
                        brochure: tkn204Pdf,
                        features: ["Enhanced accuracy", "Difficult pipe material support", "Advanced diagnostics"],
                        specs: {
                            size: "DN50 to DN3000",
                            accuracy: "+/- 0.5%",
                            tempSensor: "PT1000",
                            communication: "RS485 / Mbus"
                        },
                        tags: ["Precision", "Advanced", "Clamp-on"]
                    },
                    {
                        id: "tkn205",
                        name: "Techknave TKN205 Insertion BTU/Flow Meter",
                        description: "Wetted insertion transducers for ultrasonic metering, designed for maximum accuracy in large pipes.",
                        image: placeholder,
                        brochure: tkn205Pdf,
                        features: ["Direct contact measurement", "High accuracy", "Large diameter support"],
                        tags: ["Insertion", "High Accuracy", "Large Pipe"]
                    },
                    {
                        id: "tkn203",
                        name: "Techknave TKN203 Portable Flow Meter",
                        description: "Techknave Handheld Clampon Ultrasonic BTU /Flow meter.",
                        image: placeholder,
                        features: ["Carry case included", "Battery powered", "Data logging"],
                        specs: {
                            size: "DN50 to DN3000",
                            accuracy: "+/- 0.5%",
                            tempSensor: "PT1000"
                        },
                        tags: ["Portable", "Audit", "Tool"]
                    }
                ]
            },
            {
                name: "Gas Meters",
                slug: "gas-meters",
                products: [
                    {
                        id: "tkn2801c",
                        name: "Gaskonnect TKN2801C",
                        description: "AMR & Solenoid Controller with Pulse to M-Bus, designed to upgrade mechanical gas meters to smart metering.",
                        image: placeholder,
                        brochure: tkn2801Pdf,
                        features: ["Pulse counting", "Valve control", "M-Bus connectivity"],
                        tags: ["Gas", "Upgrade", "Retrofit"]
                    },
                    {
                        id: "tkn2810x",
                        name: "Gaskonnect TKN2810X (Smart Gas Meter)",
                        description: "Fully integrated smart gas meter with remote shutoff, designed for safety and automated billing.",
                        image: placeholder,
                        brochure: tkn2810xPdf,
                        features: ["Integrated valve", "Wireless communication", "Safety shutoff"],
                        tags: ["Gas", "Smart", "Safety"]
                    }
                ]
            },
            {
                name: "Mechanical Meters",
                slug: "mechanical-meters",
                products: [
                    {
                        id: "multi-jet",
                        name: "Multi-Jet Meter",
                        description: "Multi-jet Meter (DN15, DN20 & DN25) is an Economical option for residential metering.",
                        image: placeholder,
                        specs: {
                            body: "Brass",
                            flow: "1.5 to 6 m3/h",
                            protection: "Magnetic"
                        },
                        tags: ["Economical", "Residential", "Mechanical"]
                    },
                    {
                        id: "single-jet",
                        name: "Single Jet Meter",
                        description: "Single Jet Meter (DN15 to DN40) is an Economical option for residential metering.",
                        image: placeholder,
                        specs: {
                            body: "Brass / Nylon (Dry Dial)",
                            flow: "1.5 to 10 m3/h",
                            protection: "Magnetic"
                        },
                        tags: ["Economical", "Residential", "Mechanical"]
                    },
                    {
                        id: "woltmann",
                        name: "Woltmann Meter",
                        description: "Woltmann Meter (DN50 to DN300) is an Economical option for industrial metering.",
                        image: placeholder,
                        specs: {
                            body: "Cast Iron",
                            flow: "15 to 600 m3/h",
                            protection: "Magnetic"
                        },
                        tags: ["Industrial", "Mechanical", "High Flow"]
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // VALVES & SWITCHES
    // =========================================================================
    {
        category: "Valves & Switches",
        slug: "valves-switches",
        subcategories: [
            {
                name: "Smart Valve Controller (Segregated)",
                slug: "smart-valve-controller",
                products: [
                    {
                        id: "smart-mbus-valve-controller",
                        name: "Smart M-Bus Valve Controller",
                        description: "Smart M-Bus Valve Controller-Segregated.",
                        image: placeholder,
                        specs: {
                            method: "Motorized ball valve",
                            pipeSection: "DN15 to DN32",
                            terminals: "2 clip type (M-Bus & Valve)",
                            material: "Brass / SS304"
                        },
                        tags: ["M-Bus", "Controller", "BMS"]
                    },
                    {
                        id: "smart-lorawan-valve-controller",
                        name: "Smart LoRaWAN Valve Controller",
                        description: "Wireless valve controller connecting standard valves to LoRaWAN IoT networks, built for long-range remote control.",
                        image: placeholder,
                        tags: ["LoRaWAN", "Wireless", "IoT"]
                    }
                ]
            },
            {
                name: "Smart Compact Switch (Relay control)",
                slug: "smart-compact-switch",
                products: [
                    {
                        id: "smart-mbus-switch",
                        name: "Smart M-Bus Switch Compact",
                        description: "Compact relay switch for M-Bus networks, designed for remote load management over existing wires.",
                        image: placeholder,
                        brochure: tknSwitchPdf,
                        tags: ["M-Bus", "Switch", "Relay"]
                    },
                    {
                        id: "smart-lorawan-switch",
                        name: "Smart LoRaWAN Switch Compact",
                        description: "Wireless LoRaWAN relay switch, designed for turning devices on/off across large campuses.",
                        image: placeholder,
                        tags: ["LoRaWAN", "Switch", "Wireless"]
                    },
                    {
                        id: "smart-nbiot-switch",
                        name: "Smart NB-IoT Switch Compact",
                        description: "Cellular NB-IoT relay switch, designed for deep indoor penetration and city-wide control.",
                        image: placeholder,
                        tags: ["NB-IoT", "Cellular", "Switch"]
                    },
                    {
                        id: "gaskonnect-mbus-relay",
                        name: "Gaskonnect M-Bus Relay Module",
                        description: "Specialized M-Bus relay for gas safety systems, designed to actuate gas valves remotely.",
                        image: placeholder,
                        tags: ["Gas", "Safety", "M-Bus"]
                    }
                ]
            },
            {
                name: "Smart Compact Valve",
                slug: "smart-compact-valve",
                products: [
                    {
                        id: "smart-mbus-valve",
                        name: "Smart M-Bus Valve Compact",
                        description: "All-in-one motorized valve with M-Bus interface, designed for direct BMS water control.",
                        image: placeholder,
                        brochure: tknValvePdf,
                        specs: {
                            method: "Motorized ball valve",
                            pipeSection: "DN15 to DN25",
                            features: "Manual Override"
                        },
                        tags: ["Integrated", "Valve", "M-Bus"]
                    },
                    {
                        id: "smart-lorawan-valve",
                        name: "Smart LoRaWAN Valve Compact",
                        description: "Wireless motorized valve for LoRaWAN networks, designed for completely wireless fluid management.",
                        image: placeholder,
                        tags: ["Integrated", "Valve", "LoRaWAN"]
                    }
                ]
            },
            {
                name: "Integrated BTU Meter & Valve",
                slug: "integrated-btu-valve",
                products: [
                    {
                        id: "integrated-btu-valve",
                        name: "Integrated BTU Meter and Valve",
                        description: "Combined energy meter and control valve unit, designed for seamless prepaid billing and tenant management.",
                        image: placeholder,
                        features: ["Metering + Control", "Prepaid ready", "Compact install"],
                        tags: ["Hybrid", "Prepaid", "All-in-One"]
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // GATEWAYS & CONNECTIVITY
    // =========================================================================
    {
        category: "Gateways & Connectivity",
        slug: "gateways-connectivity",
        subcategories: [
            {
                name: "M-Bus Products",
                slug: "m-bus-products",
                products: [
                    {
                        id: "mbus-master",
                        name: "M-Bus Master",
                        description: "Central M-Bus master unit for powering and reading up to 250 wired meters, built for robust data collection.",
                        image: placeholder,
                        brochure: mbusMasterPdf,
                        tags: ["M-Bus", "Infrastructure", "Wired"]
                    },
                    {
                        id: "mbus-level-converter",
                        name: "M-Bus Level Converter",
                        description: "Signal converter for extending M-Bus networks and interfacing with PC/PLC systems.",
                        image: placeholder,
                        brochure: mbusLevelPdf,
                        tags: ["Converter", "Signal", "Infrastructure"]
                    },
                    {
                        id: "mbus-usb-powered",
                        name: "M-Bus USB Powered",
                        description: "Portable USB M-Bus master for laptop connection, designed for field configuration and debugging.",
                        image: placeholder,
                        brochure: mbusUsbPdf,
                        tags: ["Portable", "USB", "Tool"]
                    }
                ]
            },
            {
                name: "Converters",
                slug: "converters",
                products: [
                    {
                        id: "mbus-modbus-converter",
                        name: "M-Bus to Modbus Converter",
                        description: "Gateway that translates M-Bus meter data into Modbus RTU/TCP, built for BMS integration.",
                        image: placeholder,
                        tags: ["Gateway", "BMS", "Translation"]
                    },
                    {
                        id: "modbus-bacnet-converter",
                        name: "Modbus to Bacnet IP Converter",
                        description: "Protocol converter bridging industrial Modbus devices to building automation Bacnet IP networks.",
                        image: placeholder,
                        tags: ["BACnet", "Building Auto", "Converter"]
                    },
                    {
                        id: "mbus-lorawan-converter",
                        name: "M-Bus to LoRaWAN Converter",
                        description: "Wireless bridge that sends wired M-Bus meter data over LoRaWAN networks, designed for retrofit IoT projects.",
                        image: placeholder,
                        tags: ["IoT", "Wireless Bridge", "Retrofit"]
                    },
                    {
                        id: "pulse-lorawan-converter",
                        name: "Pulse to LoRaWAN Converter",
                        description: "IoT module that digitizes standard pulse output meters and transmits readings via LoRaWAN.",
                        image: placeholder,
                        tags: ["Pulse", "IoT", "Digitalization"]
                    }
                ]
            },
            {
                name: "Gateways",
                slug: "gateways",
                products: [
                    {
                        id: "edge-controllers",
                        name: "Edge Controllers",
                        description: "Smart edge processing unit for local data logic and control, designed for distributed intelligence.",
                        image: placeholder,
                        brochure: edgeModulePdf,
                        tags: ["Edge", "Computing", "Smart"]
                    },
                    {
                        id: "mbus-gateway",
                        name: "M-Bus Gateway",
                        description: "Dedicated gateway for pushing M-Bus data to cloud or server endpoints via TCP/IP or 4G.",
                        image: placeholder,
                        tags: ["Connectivity", "Cloud", "M-Bus"]
                    },
                    {
                        id: "modbus-gateway",
                        name: "Modbus Gateway",
                        description: "Robust gateway ensuring reliable bi-directional communication with RS485 Modbus networks.",
                        image: placeholder,
                        tags: ["Industrial", "RS485", "Modbus"]
                    },
                    {
                        id: "lorawan-gateway",
                        name: "LoRaWAN Gateway",
                        description: "Base station for LoRaWAN networks, ensuring deep indoor coverage for wireless IoT sensors.",
                        image: placeholder,
                        tags: ["IoT", "Infrastructure", "Wireless"]
                    },
                    {
                        id: "tosilock",
                        name: "TosiLock – Industrial Gateway",
                        description: "Secure industrial gateway with VPN and firewall capabilities, designed for critical infrastructure protection.",
                        image: placeholder,
                        brochure: tosilockPdf,
                        tags: ["Security", "VPN", "Industrial"]
                    }
                ]
            },
            {
                name: "Power Supplies",
                slug: "power-supplies",
                products: [
                    {
                        id: "power-supply",
                        name: "Power Supply",
                        description: "Industrial grade power supply unit for gateways and M-Bus masters, ensuring 24/7 reliability.",
                        image: placeholder,
                        brochure: smpsPdf,
                        tags: ["Power", "Accessory", "Industrial"]
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // SENSORS & ACTUATORS
    // =========================================================================
    {
        category: "Sensors & Actuators",
        slug: "sensors-actuators",
        subcategories: [
            {
                name: "Air Quality Sensor",
                slug: "air-quality",
                products: [
                    {
                        id: "iaq-sensor",
                        name: "Indoor Air Quality Sensor",
                        description: "Comprehensive sensor monitoring CO2, TVOC, and PM2.5, designed for healthy building certification.",
                        image: placeholder,
                        tags: ["Health", "IAQ", "Environment"]
                    },
                    {
                        id: "temp-humidity-sensor",
                        name: "Temperature and Humidity Sensor",
                        description: "Precision environmental sensor for HVAC control loops and comfort monitoring.",
                        image: placeholder,
                        tags: ["HVAC", "Climate", "Basic"]
                    }
                ]
            },
            {
                name: "Water Leak Detection Sensor",
                slug: "water-leak",
                products: [
                    {
                        id: "wireless-zone-leak",
                        name: "Wireless Zone Leak Sensor",
                        description: "Area-based leak detector using sensing cable, wireless for easy deployment in server rooms.",
                        image: placeholder,
                        brochure: leakPdf,
                        tags: ["Leak", "Wireless", "Zone"]
                    },
                    {
                        id: "wireless-single-leak",
                        name: "Wireless Single Point Leak Sensor",
                        description: "Spot leak detector for drip trays and specific risk points, fully wireless.",
                        image: placeholder,
                        tags: ["Leak", "Spot", "Wireless"]
                    },
                    {
                        id: "wireless-cap-level",
                        name: "Wireless Capacitive Level Sensor",
                        description: "Non-contact level sensor for tanks, wireless transmission for remote inventory management.",
                        image: placeholder,
                        tags: ["Level", "Wireless", "Tank"]
                    },
                    // ... Wired variants ...
                    {
                        id: "wired-zone-leak",
                        name: "Wired Zone Leak Sensor",
                        description: "Reliable wired area leak detection for integration with traditional BMS panels.",
                        image: placeholder,
                        tags: ["Leak", "Wired", "BMS"]
                    },
                    {
                        id: "wired-single-leak",
                        name: "Wired Single Point Leak Sensor",
                        description: "Hard-wired point sensor for critical drip detection in mechanical rooms.",
                        image: placeholder,
                        tags: ["Leak", "Wired", "Point"]
                    },
                    {
                        id: "wired-cap-level",
                        name: "Wired Capacitive Level Sensor",
                        description: "Wired continuous level monitoring probe for industrial tanks.",
                        image: placeholder,
                        tags: ["Level", "Industrial", "Wired"]
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // SOFTWARE
    // =========================================================================
    {
        category: "Software",
        slug: "software",
        subcategories: [
            {
                name: "Utility Billing",
                slug: "utility-billing",
                products: [
                    {
                        id: "bms-integration",
                        name: "BMS Integration Module",
                        description: "Software connector that bridges metering data directly into Building Management Systems.",
                        image: placeholder,
                        brochure: bmsIntegrationPdf,
                        tags: ["Integration", "BMS", "Connector"]
                    },
                    {
                        id: "desktop-tenant-billing",
                        name: "Desktop Tenant Billing Module",
                        description: "Local PC-based software for generating tenant utility bills in simple properties.",
                        image: placeholder,
                        brochure: tenantBillingPdf,
                        tags: ["Billing", "Local", "Simple"]
                    },
                    {
                        id: "enterprise-tenant-billing",
                        name: "Enterprise Tenant Billing Module",
                        description: "Cloud-based scalable billing platform for multi-site property portfolios.",
                        image: placeholder,
                        tags: ["Cloud", "Enterprise", "Multi-site"]
                    },
                    {
                        id: "prepaid-billing",
                        name: "Prepaid Billing Module",
                        description: "Pay-as-you-go metering management software, designed for revenue protection.",
                        image: placeholder,
                        tags: ["Revenue", "Prepaid", "Management"]
                    }
                ]
            },
            {
                name: "AMR and MDMS",
                slug: "amr-mdms",
                products: [
                    {
                        id: "desktop-amr",
                        name: "Desktop AMR Module",
                        description: "Automated Meter Reading tool for local data collection and export.",
                        image: placeholder,
                        tags: ["AMR", "Collection", "Local"]
                    },
                    {
                        id: "enterprise-mdms",
                        name: "Enterprise MDMS System",
                        description: "Complete Meter Data Management System for validating and storing massive utility datasets.",
                        image: placeholder,
                        tags: ["Big Data", "Utility", "Validation"]
                    },
                    {
                        id: "intelligent-amr-ai",
                        name: "Intelligent AMR AI",
                        description: "AI-powered analytics layer that detects anomalies and theft in meter data patterns.",
                        image: placeholder,
                        tags: ["AI", "Analytics", "Theft"]
                    }
                ]
            },
            {
                name: "Energy Monitoring",
                slug: "energy-monitoring",
                products: [
                    {
                        id: "ems-platform",
                        name: "EMS",
                        description: "Comprehensive Energy Management System for visualizing consumption and identifying savings.",
                        image: placeholder,
                        brochure: emsPlatformPdf,
                        tags: ["Visualization", "Green", "Savings"]
                    }
                ]
            },
            {
                name: "Valve Control Management",
                slug: "valve-control",
                products: [
                    {
                        id: "vcm-platform",
                        name: "VCM",
                        description: "Centralized dashboard for remote actuation and status monitoring of smart valves.",
                        image: placeholder,
                        brochure: vcmPlatformPdf,
                        tags: ["Control", "Remote", "Safety"]
                    }
                ]
            },
            {
                name: "Maintenance Management Software",
                slug: "maintenance",
                products: [
                    {
                        id: "mms-platform",
                        name: "MMS",
                        description: "Asset management suite for tracking meter health, calibration schedules, and maintenance tickets.",
                        image: placeholder,
                        brochure: mmsPlatformPdf,
                        tags: ["Assets", "Maintenance", "Lifecycle"]
                    }
                ]
            }
        ]
    }
];

export default productData;
