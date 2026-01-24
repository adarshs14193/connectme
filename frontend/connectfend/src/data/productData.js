// src/data/productData.js
// Master Data Source for ConnectMe Products
import logo from "../assets/logo.png"; // Fallback image
import ufloU60Img from "../assets/uflo_u60_advanced.png";
import gimaBImg from "../assets/products/gima_b_electromagnetic.png";
import ufloU50BulkImg from "../assets/products/uflo_u50_bulk.png";
import ufloU50CompactImg from "../assets/products/uflo_u50_compact.png";
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
                        description: "Uflo ultrasonic BTU Meter- U60 Advanced series.",
                        image: ufloU60Img,
                        brochure: ufloU60Pdf,
                        specs: {
                            size: "DN15 to DN40",
                            tempSensor: "PT1000 Jumo sensors",
                            batteryLife: "> 12 years",
                            replaceable: "Battery & Temp. Sensors",
                            certification: "MID certified"
                        },
                        tags: ["HVAC", "Advanced", "BMS Ready"]
                        ,
                        features: [
                            "Anti- Interference, Micro Power Consumption Technology.",
                            "Low Pressure Loss.",
                            "High Accuracy class & High Stability.",
                            "Horizontally or vertically mount, easily do it.",
                            "Heating /cooling Metering.",
                            "Built-in Battery, extremely low energy consumption, no need to replace battery during the meter life long period.",
                            "Smart alarm of low battery, temperature sensor error, short circuit, flow Sensor error.",
                            "Smart data error correcting technology , effective interference resistance, ensuring stable data.",
                            "Communication Interface - Mbus, Modbus RS-485, NB-IoT",
                            "Replaceable Batteries and detachable Temperature Sensors",
                            "Size DN15-DN40",
                            "MID certified"
                        ],
                        longDescription: "The Uflo U60 advanced series is a BTU meter/energy meter that measures energy consumption in liquid heating/cooling systems by calculating energy based on flow rate and temperature difference.  Its static ultrasonic technology is based on the measurement of the\r\ntransit time. It has high accuracy and provides real-time data display and transmission via various communication protocols. The U60 meters can be installed with various flow and temperature sensors in multiple configurations depending on the application and site requirements.",
                    },
                    {
                        id: "uflo-u50",
                        name: "UFLO U50 Compact Series",
                        description: "Uflo Ultrasonic Compact BTU Meter-U50 Compact Series.",
                        image: ufloU50CompactImg,
                        brochure: ufloU50Pdf,
                        specs: {
                            size: "DN15 to DN40",
                            protection: "IP65 / IP68",
                            batteryLife: "10 Years"
                        },
                        tags: ["Residential", "Compact", "Retrofit"]
                        ,
                        features: [
                            "Anti- Interference, Micro Power Consumption Technology.",
                            "Low Pressure Loss.",
                            "Horizontally or vertically mount, easily do it.",
                            "Heating /cooling Metering.",
                            "Built-in Battery, extremely low energy consumption, no need to replace battery during the meter life long period.",
                            "Smart alarm of low battery, temperature sensor error, short circuit, flow Sensor error.",
                            "Communication Interface - Mbus, WMBus. Modbus RS-485 & LoRaWAN",
                            "Size DN15-DN40"
                        ],
                        longDescription: "The Uflo U50 compact series is a BTU meter/energy \r\nmeter that measures energy consumption in liquid \r\nheating/cooling systems by calculating energy based \r\non flow rate and temperature difference. It has high \r\naccuracy and provides real-time data display and\r\n transmission via various communication protocols. \r\nThe U60 meters can be installed with various flow \r\nand temperature sensors in multiple configurations\r\n depending on the application and site requirements.Suitable for heat/cold metering of unit residentila \r\n buildings to meet the demands for accurate metering & \r\nsettlemnt of end-users, and widely used in residential\r\n apartments, house, distric heating stations, cental air\r\n conditioning & related systems.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "uflo-u50-bulk",
                        name: "UFLO U50 Bulk BTU Meter",
                        description: "Uflo Ultrasonic bulk BTU Meter-U50 Compact Series.",
                        image: ufloU50BulkImg,
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
                        description: "Uflo U40 Compact Series.",
                        image: placeholder,
                        brochure: ufloU40CompactPdf,
                        specs: {
                            size: "DN15 to DN40",
                            accuracy: "Class 2",
                            waterTemp: "T30 / T50",
                            rFactor: "R250 / R400"
                        },
                        tags: ["Water", "Residential", "Smart"]
                        ,
                        features: [
                            "Large R value up to 500:1 (Default R250).\r\nLow Starting Flowrate (as low as 0.0015m3/h).\r\nLeak & burst alarmSelf-Diagnosis: flow sensor fault, temperature sensor fault, the overflow, lowbattery alarm. \r\nAccurate Flow measurement algorithm.",
                            "IR interface, compatible with IR handheld reader. \r\nPower supply option Built in lithium battery (default) Optional DC7.5-24V external power supply in case of Rs485.\r\nBidirectional flow measurement. \r\nCommunication Interface - Mbus, WMBus, Modbus RS-485, LoRaWAN & NB-IOT.\r\nOptional- inbuilt pressure switch and Shut off valve."
                        ],
                        longDescription: "Uflo U40 compact residential ultrasonic water meters offer high accuracy (upto R500) with no moving parts, featuring integrated smart communication (M-Bus, LoRaWAN, wM-Bus, NB-IoT, RS485) for remote reading, leak detection, and long battery life. \r\nAvailable in compact designs for various pipe sizes (DN15-DN50). The device is able to detect small flows and contributes to the rational use and saving of water resources.\r\nOptional variant we offer inbuilt pressure switch with shut off valve. The inbuilt shutoff valve operated on pressure burst / low flow leak detection.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "uflo-u40-bulk",
                        name: "UFLO U40 Bulk Flow Meter",
                        description: "Uflo U40 Bulk Flow Meter.",
                        image: placeholder,
                        brochure: ufloU40BulkPdf,
                        specs: {
                            size: "DN50 to DN500",
                            accuracy: "Class 2",
                            waterTemp: "T30 / T50"
                        },
                        tags: ["Water", "Industrial", "Distribution"]
                        ,
                        features: [
                            "Double pipes measuring, high accuracy and reliability.\r\nRedundant: The meter can operate properly when there is blockage or fault with one of the two pipes.\r\nSmart alarm of flow Sensor error, temperature sensor error, Short circuit, overload, low battery\r\nPatented flow measuring method and and smart data error correcting technology, super accuracy and stability.\r\nHigh resolution 9 digits LCD display.\r\nTwo-way measurement of water flow: forward flow and reverse flow;\r\nPressure sensor optional, for measuring water supply pressure in the pipes network\r\nBuilt-in 4G or NB-loT communication mode available\r\nOptical communication port interface supporting handheld infrared meter reading tool for on-site meter reading."
                        ],
                        longDescription: "Uflo U40 bulk meters is an advanced and highly accurate R400 Ultrasonic water Meter used for bulk Metering in Utility, Industry, Waterworks or Agriculture. This meter comes in the range of DN50 to DN300 with Flange connection. It has Dual channel measurement with high accuracy and excellent stability.  The meter featuring integrated smart communication (M-Bus, LoRaWAN, wM-Bus, NB-IoT, RS485) for remote reading.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "uflo-u70",
                        name: "UFLO U70 Advanced Hot Water",
                        description: "Specialized ultrasonic meter for hot water systems, designed for high-temperature durability.",
                        image: placeholder,
                        tags: ["Hot Water", "High Temp", "Specialized"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
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
                        image: gimaBImg,
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
                ,
                features: [
                    "MBus Operated Smart Shut off Valve\r\n* Battery Operated with ultra-Low consumption (15 years life span)\r\n* Valve Sizes - DN15 / DN20 / DN25 / DN32\r\n* Complaint with all Mbus Masters\r\n* Industrial Grade (PN16, IP66)\r\n* Real time valve status monitoring\r\n* Valve control (ON / OFF commands via Mbus)"
                ],
                longDescription: "Techknave MBus Shut off valve TKN 2201 is a battery - operated SMART VALVE used for opening and closing the valve through MBus control telegram. TKN 2201 MBus SMART VALVE shall be used in Sub-metering solutions, Building management Applications, Facility management companies for remote disconnection. MBus controller and Valve are segregated units. Techknave Mbus smart valves improve the efficiency, safety, and reliability of various industrial processes, leading to cost savings and better outcomes.\r\nThe Controller Unit (CU) has on-board terminals for connection to M-BUS loop & supply to Valve unit. The replaceable lithium battery has autonomy of 15+ years .. The CU provide Open/ Close status, Low battery status in real time monitoring. Controller Tamper status and Manual Override (ON/OFF button inside CU) features are optional to add.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "MBus Switch compact unit with relay contact suitable for 2 / 3 & 4-wire SPST &\r\n   SPDT type shutoff valve\r\n* Externally powered valve 230VAC Controlled through MBUS compact switch\r\n* Valve sizes - DN15 to DN200\r\n* Complaint with all leading M-Bus master (EN-13757)\r\n* Industrial grade - ABS, IP66\r\n* Provison with valve feedback monitoring\r\n* Valve Control (ON/OFF commands via MBus)\r\n* Tamper alert & Indication LED (Valve position / Error status)\r\n* Compatible & operated through IBM billing software / VCM software"
                        ],
                        longDescription: "The new Techknave M-Bus switch compact is M-Bus slave relay ourput module with potential free NO/NC contact with valve positon feedback monitoring suitable to operate powered 2-way shut off valve. The compact switch has 17 on-board easy plug-in terminals for Incoming power / Valve power out / Valve feedback / M-Bus looping & optional Pulse inputs. The M-Bus switch along with powered valves shall be used n submetering solutions, building management applcations, faclity management companies for remote. disconnection of liquid flow\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Operating temperature ranges -5 ° C to +60°C\r\n* Real time clock with tamper logging options\r\n* 1 Relay output with NO/NC\r\n* Solenoid valve control Module\r\n* Controls Solenoid valve through UBill IBM / UBill AMR Software"
                        ],
                        longDescription: "GAS KONNECT TKN2801R / TKN2803R is a set of smart relay devices designed to integrate with GAS SOLENOIDs in Domestic gas distribution networks. These devices essentially convert existing gas solenoids into network operated smart solenoids.\n\nSpecifcations\n\nCopy from Brochure",
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
                ,
                features: [
                    "MBus operated smart shut off valve\r\n* Battery operated (16+ Years , Replaceable lithium type C battery)\r\n* Valve Sizes—DN20, DN25, DN32, DN40\r\n* Complaint with most MBus masters\r\n* Polarity reversal protection\r\n* Industrial Grade (PN16, IP68)\r\n* Controller with RTC\r\n* Suitable for potable / Chilled / Hot water\r\n* Full open / Full Close - Physical reed switch\r\n feedback"
                ],
                longDescription: "Techknave MBus smart valve compact TKN29XX is operated on MBus wired protocol and used for opening and\r\nclosing of valve. Can be used in Sub-metering solutions, Building\r\nmanagement Applications, Facility management companies for remote disconnection. Mbus smart valve compact improve the efficiency, safety and reliability of varies industrial processes,\r\nleading to cost savings and better outcomes.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Supports sertal & TOP connection M-Bus connection.\r\n* Automatic meter search & crention of meter list\r\n* Fast scanringspeed\r\n* Editing meter list\r\n* Easy Troubleshooting af M-ous networcs & nodes\r\nExport to Excel"
                        ],
                        longDescription: "M-Bus Reader is easy to use PC software for the read-out of meters according to the EN1434 and EN13757 standards in an M-Bus network. M-Bus READER supports all M-Bus converters. Free demo is available with unlimited nodes for serial and 50 nodes for TCP.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "mbus-level-converter",
                        name: "M-Bus Level Converter",
                        description: "Signal converter for extending M-Bus networks and interfacing with PC/PLC systems.",
                        image: placeholder,
                        brochure: mbusLevelPdf,
                        tags: ["Converter", "Signal", "Infrastructure"]
                        ,
                        features: [
                            "MAX number of M-Bus devices: 125/ 250\r\n* RS485 transmission direcƟon: automaƟc\r\n* M-Bus short connecƟon protecƟon: yes\r\n* Power supply: 90-250V ~, 50-60Hz (U2701P—Add on power supply)"
                        ],
                        longDescription: "U2601 M-Bus Level Converter is an interface between M-Bus meter networks and Billing /AMR systems. U2601 comes with standard RS485 M-Bus port. Adding U2601T-TCP makes the U2601 Level converter to TCP enabled. Supports 125 / 250 slave devices connected to M-Bus Level Converter.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "mbus-usb-powered",
                        name: "M-Bus USB Powered",
                        description: "Portable USB M-Bus master for laptop connection, designed for field configuration and debugging.",
                        image: placeholder,
                        brochure: mbusUsbPdf,
                        tags: ["Portable", "USB", "Tool"]
                        ,
                        features: [
                            "USB Powered (5V, 500mA)\r\n* conforms to European EN1434-3 standard\r\n* USB Over Voltage / Over Current\r\n* MBus Short circuit / Over Load\r\n* Maximum slaves Up to 20 Slaves"
                        ],
                        longDescription: "This USB to M-Bus master consists of serial communication module,\r\npower module, modem module, indication module and protection module.The power supply module takes power directly from the USB port without additional power input; the modem module is self-developed, with strong load capacity, good reception performance and high communication rate; the indication module indicates the power status of the master and the data sending and receiving status, as well as the short-circuit and overload of the\r\nbus;\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "MAX number of M-Bus devices: 100\r\n* RS485 transmission direction: automatic\r\n* M-Bus short connection protection: yes\r\n* Modbus TCP IP conversion: Automatic\r\n* Mounting type: on DIN rail"
                        ],
                        longDescription: "M-Bus Master to Modbus Converter is dedicated to convert M-Bus signal\r\nto Modbus RS485/TCP-IP . Up to 100 M-Bus devices can be connected to\r\nthis device\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "modbus-bacnet-converter",
                        name: "Modbus to Bacnet IP Converter",
                        description: "Protocol converter bridging industrial Modbus devices to building automation Bacnet IP networks.",
                        image: placeholder,
                        tags: ["BACnet", "Building Auto", "Converter"]
                        ,
                        features: [
                            "Manage Modbus TCP and RTU simultaneously\r\n* Support 2x RS485 channels (2x32 RTU devices)\r\n* BACnet IP configuration through IP web interface\r\n* Mounting type: on DIN rail"
                        ],
                        longDescription: "A Modbus to BACnet IP Converter enable the communication of\r\nModbus devices over BACnet protocol. 64 Modbus devices data\r\ncan be converted into BACnet object and can be accessed from\r\nBACnet IP network. The data can be monitored from BMS, HVAC\r\ncontrol, Lighting control, and energy Management software.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "mbus-lorawan-converter",
                        name: "M-Bus to LoRaWAN Converter",
                        description: "Wireless bridge that sends wired M-Bus meter data over LoRaWAN networks, designed for retrofit IoT projects.",
                        image: placeholder,
                        tags: ["IoT", "Wireless Bridge", "Retrofit"]
                        ,
                        features: [
                            "LoRaWAN class C\r\n• Read data from devices via the built in Modbus (RTU),\r\n M-Bus (Wired), Digital or Analog Input. \r\n• LoRaWAN protocol 1.0.3\r\n• IP20"
                        ],
                        longDescription: "CloudGate Probe is a compact DIN rail mountable metering device that can connect devices over Modbus (RS-485), M-bus, Digital & Analog Input to a LoRaWAN or Cellular (NB-IoT/LTECatM)networks. This permits to monitor assets and buildings remotely in a convenient way.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "pulse-lorawan-converter",
                        name: "Pulse to LoRaWAN Converter",
                        description: "IoT module that digitizes standard pulse output meters and transmits readings via LoRaWAN.",
                        image: placeholder,
                        tags: ["Pulse", "IoT", "Digitalization"]
                        ,
                        features: [
                            "Automatically read Gas Flow and volume data\r\n* Integrated battery with life expectancy of 10+ years\r\n* Operating temperature ranges -5 ° C to +60°C\r\n* Real time clock with historical data logging options\r\n* Data storing options incase of power failure/ Battery failure\r\n* 2 Digital inputs configurable (Pulse Read / standard DI)"
                        ],
                        longDescription: "Gas Konnect TKN2803P is a set of pulse to network enabled gas metering AMR device, which convert the pulse output from gas meter to respective network protocol\r\nmessage telegram details.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Supports standard protocols like MBUS and also proprietary protocols  on RS232 & RS485 ports.\r\n* Monitors serial ports continuously and captures data for processing  and communication to servers on desired\r\nprotocol.\r\n* Periodical or event based communication to servers."
                        ],
                        longDescription: "The Edge Module is an intelligent device designed to acquire data from Multiple Protocols and transmit it securely to a server via HTTPS. It features an RS232 & RS485 port and can be configured to query these clients, specifying details such as secondary addresses and server information. Configurable settings include the number of clients, communication intervals, timeouts, and polling attempts, all managed through provided software. The terminal polls the devices at set intervals, retries on failures, and successfully sends data to the server using HTTPS.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "mbus-gateway",
                        name: "M-Bus Gateway",
                        description: "Dedicated gateway for pushing M-Bus data to cloud or server endpoints via TCP/IP or 4G.",
                        image: placeholder,
                        tags: ["Connectivity", "Cloud", "M-Bus"]
                        ,
                        features: [
                            "The RS485 to TCP converter typically has its own IP address on the network. \r\n* Users can configure the IP address settings to allow the converter  to communicate with other devices on the same network.\r\n* Some RS485 to TCP converters come with configuration options that allow users to set parameters such as baud rate, data bits, stop bits, and parity to match the requirements of the connected serial device."
                        ],
                        longDescription: "ConnectME RS485 to TCP converter, also known as a serial to\r\nEthernet converter, is a device that facilitates communication between devices or systems using RS485 serial communication and TCP/IP (Transmission Control Protocol/Internet Protocol) over Ethernet networks. The purpose of this converter is to enable serial devices that use the RS485 protocol to communicate over a TCP/IP network.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "modbus-gateway",
                        name: "Modbus Gateway",
                        description: "Robust gateway ensuring reliable bi-directional communication with RS485 Modbus networks.",
                        image: placeholder,
                        tags: ["Industrial", "RS485", "Modbus"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "lorawan-gateway",
                        name: "LoRaWAN Gateway",
                        description: "Base station for LoRaWAN networks, ensuring deep indoor coverage for wireless IoT sensors.",
                        image: placeholder,
                        tags: ["IoT", "Infrastructure", "Wireless"]
                        ,
                        features: [
                            "Kerlink Indoor: \r\n• Indoor LoRa® Gateway\r\n• Ingress protection (IP30)\r\n• Backhaul connectivity: Wi-Fi 2.4GHz and Ethernet (RJ45)\r\n• Supported LoRaWAN® regional parameters: EU863-870, IN865-\r\n867, RU864-870, US902-928, AU915-928, AS923, KR920-923\r\n\r\nKerlink Outdoor:\r\n• Outdoor LoRa® Gateway,\r\n• Carrier grade casing (IP67) for industrial use\r\n• Backhaul connectivity: 4G Worldwide module with 3G/2G\r\nfallback and Ethernet (RJ45)\r\n• Supported LoRaWAN® regional parameters: EU863-870, IN865-\r\n867, RU864-870, US902-928, AU915-928, AS923, KR920-923\r\n\r\nCloudGate Mini:\r\n• Worldwide LTE Cat 4 Programmable Multicarrier Gateway with 3G fallback\r\n• A wide variety of wired interfaces with pre-installed versatile IO card\r\n• Optional WiFi and LoRaWAN in rear expansion slot\r\n• Secure remote access to Ethernet-connected devices\r\n• Optional battery backup"
                        ],
                        longDescription: "Kerlink Indoor:\r\nThe “Wirnet™ iFemtoCell” is the ideal gateway to support your smart\r\ncity, smart building or every smart project that requests dedicated\r\nindoor coverage and/or network densification, providing both a unique\r\nsuperior coverage and operational excellence.\r\n\r\nKerlink Outdoor:\r\nThe “Wirnet™ iStation” is the ideal gateway to support your smart\r\ncity, smart industry or any other smart project, combining simplicity of\r\ninstallation, unique superior coverage and operational excellence.\r\n\r\nCloudGate Mini:\r\nCloudGate mini provides remote access over a secure VPN tunnel to the Ethernet device(s) connected to its LAN Ethernet ports. CloudGate 4.0 next generation CloudGate 4.0 IoT gateways were designed with CloudGate’s signature features; including ruggedized design housing, industrial grade temperature ranges, timed wake-up and ignition sensing, sim connection, passive and active GPS antenna support and all are LuvitRED enabled.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "tosilock",
                        name: "TosiLock – Industrial Gateway",
                        description: "Secure industrial gateway with VPN and firewall capabilities, designed for critical infrastructure protection.",
                        image: placeholder,
                        brochure: tosilockPdf,
                        tags: ["Security", "VPN", "Industrial"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Isolation class\r\n* 1SU~6SU narrow width\r\n* 85~264VAC input (277VAC operational)\r\n* No load power consumption <0.3W\r\n* Pass LPS (Limited power source)\r\n* DC output voltage adjustable\r\n* Protections : Short circuit / Overload / Over voltage\r\n* Over voltage category III"
                        ],
                        longDescription: "A Switched-Mode Power Supply (SMPS) is a type of power supply that converts electrical power efficiently from one voltage level to another, usually from a higher voltage (85~264VAC ) to a lower DC voltage 24V DC.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "temp-humidity-sensor",
                        name: "Temperature and Humidity Sensor",
                        description: "Precision environmental sensor for HVAC control loops and comfort monitoring.",
                        image: placeholder,
                        tags: ["HVAC", "Climate", "Basic"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "POWER SUPPLY Gateway : 24V 2A DC, Sensors : Battery Powered\r\n* 2 meters (Default) Extendable up to 10 meters of sensor wire length\r\n* LoRa WAN (Wireless Low power) communication\r\n* Leak, Temperature, Humidity & Battery Percentage monitoring."
                        ],
                        longDescription: "Thewater leak detection sensor uses LoRa technology to detect leaks and send data wirelessly. It periodically transmits battery level, humidity, and temperature information. A LoRa Gateway collects data from multiple sensors. The gateway forwards the data to the Uconnect Cloud platform via 4G or Wi-Fi. The cloud platform generates alerts and sends notifications through the WhatsApp API.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "wireless-single-leak",
                        name: "Wireless Single Point Leak Sensor",
                        description: "Spot leak detector for drip trays and specific risk points, fully wireless.",
                        image: placeholder,
                        tags: ["Leak", "Spot", "Wireless"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "wireless-cap-level",
                        name: "Wireless Capacitive Level Sensor",
                        description: "Non-contact level sensor for tanks, wireless transmission for remote inventory management.",
                        image: placeholder,
                        tags: ["Level", "Wireless", "Tank"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "UBILL IBM/AMR have provision to integrate to BMS System ( Push / Pull meter data over BACnet IP ).\r\n• UBILL BMS module runs over top of UBILL IBM/AMR software installed in the desktop PC.\r\n• UBILL BMS module to be purchased along with IBM or AMR software license.\r\n• BMS module compatible with most BMS system (Honeywell, Siemens, Schneider, Johnson\r\ncontrols, Niagara etc."
                        ],
                        longDescription: "UBILL is a future ready Utility Metering solutions from CONNECTME SOLUTIONS providing\r\nimproved Operational efficiency, reduced operation cost and greater customer experience in\r\nmetering and billing sector.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "desktop-tenant-billing",
                        name: "Desktop Tenant Billing Module",
                        description: "Local PC-based software for generating tenant utility bills in simple properties.",
                        image: placeholder,
                        brochure: tenantBillingPdf,
                        tags: ["Billing", "Local", "Simple"]
                        ,
                        features: [
                            "Multi-protocol handling - MBUS/MODBUS/BACNET/DLMS/MANUAL IMPORT\r\n* Live reading dashboard with customizable parameter selection\r\n* Customizable report for meter readings, billing, payment including live charts (more than 50 reports structure)\r\n* BMS integration (to & from data exchange)\r\n* Multi meters billing (Electricity/ GAS/ Water/ Chilled water/ Hot water) in single bill\r\n* 3D dashboards for bill and payment comparison (monthly/yearly)\r\n* Smart valve interface for disconnection/reconnection"
                        ],
                        longDescription: "UBILL IBM - IBM (Integrated Billing Module) is Windows based desktop application for Automatic Meter reading and Automated Billing of water, gas, heat, cold, electricity and other meters. UBILL IBM (Integrated Billing Module) is leading utility billing application for any utility service provider, property manager, water distribution companies, district cooling/ heating sub-metering companies or Municipalities - Its ALL in ONE with AMR (Automated Meter reading), Meter Data validation, Invoicing, reporting, accounting, automatic bill mailing, and lot more usable functionality.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "enterprise-tenant-billing",
                        name: "Enterprise Tenant Billing Module",
                        description: "Cloud-based scalable billing platform for multi-site property portfolios.",
                        image: placeholder,
                        tags: ["Cloud", "Enterprise", "Multi-site"]
                        ,
                        features: [
                            "MDMS (Meter Data management system) with advanced analytical methods including robust VEE algorithma covaring AMR & Meter data validations.\r\n* Customer advanced billing module with Automated biling, Multi metera multiple tarff assignirents along with Customerk tenant management to handle billing adjustment 5 disputed bills\r\n* Customizable Accounting module to match work flow with multi-user admin login privilage rights and API interface library to SAP/Oracle and other third-party user ERP systems.\r\n* Ticketing system for customer serice request and maintenance teams."
                        ],
                        longDescription: "(BM Enterprise is u full spectrum of Energy related Smart metering solutions from ConnectME solutions. The application built on loT big data platform deployed either on cloud or On-premises solutions.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "prepaid-billing",
                        name: "Prepaid Billing Module",
                        description: "Pay-as-you-go metering management software, designed for revenue protection.",
                        image: placeholder,
                        tags: ["Revenue", "Prepaid", "Management"]
                        ,
                        features: [
                            "Auto Cutoff feature based on the recharge amount balance and consumption.\r\n* Multi Tarrif/multi-Slab assignments.\r\n* Multi payment gateway integration.\r\n* Customer login for consumption and payment\r\n* Consumption based usage alerts including low balance."
                        ],
                        longDescription: "UBILL prepayment solution provides the end customer a seamless energy payment experience by integrating utility meters, network infra for data collection, Head end system, payment gateways and\r\nUtility companies' customer management for accounting, consumption history & top-ups. Our Prepaid billing solution is customization based on the utility companies' requirements with BLOCK CHAIN enabled for all data transactions including meter data collection and payment transactions.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "➢ Customized meter name setting\r\n➢ Import meter list\r\n➢ Manual editing of the meter list\r\n➢ Meter data sort and search option\r\n➢ Meter communication interval selection\r\n➢ Data export in EXCEL CSV format\r\n➢ Support serial and TCP/IP communication.\r\n➢ Customized Time Scheduled option for data interface\r\n➢ Data monitoring and export"
                        ],
                        longDescription: "IBM-AMR is easy to use PC software for the read-out of meters and for automatic export of meter data in BACnet, csv, txt, api, FTP, and to database. IBM-AMR supports M-Bus, BACnet, Modbus converters and can integrate data to BMS system.\n\nSpecifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "enterprise-mdms",
                        name: "Enterprise MDMS System",
                        description: "Complete Meter Data Management System for validating and storing massive utility datasets.",
                        image: placeholder,
                        tags: ["Big Data", "Utility", "Validation"]
                        ,
                        features: [

                        ],
                        longDescription: "Specifcations\n\nCopy from Brochure",
                    },
                    {
                        id: "intelligent-amr-ai",
                        name: "Intelligent AMR AI",
                        description: "AI-powered analytics layer that detects anomalies and theft in meter data patterns.",
                        image: placeholder,
                        tags: ["AI", "Analytics", "Theft"]
                        ,
                        features: [
                            "➢ BACnet interface to BMS\r\n➢ Customized meter name setting\r\n➢ Import meter list\r\n➢ Manual editing of the meter list\r\n➢ Meter data sort and search option\r\n➢ Meter communication interval selection\r\n➢ Data export in EXCEL CSV format\r\n➢ Support serial and TCP/IP communication.\r\n➢ Customized Time Scheduled option for data interface\r\n➢ Data monitoring and export"
                        ],
                        longDescription: "IBM-AMR is easy to use PC software for the read-out of meters and for automatic export of meter data in BACnet, csv, txt, api, FTP, and to database. IBM-AMR supports M-Bus, BACnet, Modbus converters and can integrate data to BMS system.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Sustainable Energy Management\r\n* Data Acquisition & Comprehensive Data management\r\n* Energy Dashboards\r\n* Intuitive User interface & Visualization\r\n* Compliance assurance & reporting\r\n* Performance benchmarking\r\n* Alerts & Notifications\r\n* Long term value creation"
                        ],
                        longDescription: "UENERGY EMS is cutting-edge platform designed to streamline and optimize customers sustainability initiatives, ensuring compliance with industry regulations while maximizing efficiency and reducing environmental impact. UENERGY helps organizations track, analyze, and optimize their energy consumption and performance. These software solutions typically offer a range of features to monitor energy usage in real-time, identify areas for improvement, and implement strategies to increase efficiency and reduce costs.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "❖ Attractive Dashboard\r\n❖ Live Monitor & Control with Chart\r\n❖ Bulk Valve ON & OFF\r\n❖ Bulk Valve Import & Export Option\r\n❖ Report Generation in Single Click\r\n❖ Multiuser Login\r\n❖ FAQ’s and Live Guide for User Friendly\r\n❖ Auto Email Option and Scheduler for different level Users\r\n❖ WhatsApp/ SMS Alert Optional\r\n❖ Auto upgradation of New Features from the Server\r\nAutomatically if connected to the internet."
                        ],
                        longDescription: "VCM is a Global MBUS Valves control software used to control, schedule and manage valve ON/OFF operations of multiple buildings.\n\nSpecifcations\n\nCopy from Brochure",
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
                        ,
                        features: [
                            "Maintenance Works\r\n* Schedule Tasks\r\n* Ticketing System\r\n* Alerts (WhatsApp, Mail. etc.)\r\n* Maintenance Cost Reports\r\n* Material Inventory\r\n* Vendor Login for preventive\r\n  maintenance plans\r\n* Attendance to manage resources"
                        ],
                        longDescription: "ConnectME Maintenance Management System is a web based tool designed to help organizations manage their maintenance operations more efficiently. It provides a centralized system for managing maintenance activities, assets, and inventory,\r\nallowing organizations to improve maintenance efficiency, reduce downtime, and minimize costs.\n\nSpecifcations\n\nCopy from Brochure",
                    }
                ]
            }
        ]
    }
];

export default productData;
