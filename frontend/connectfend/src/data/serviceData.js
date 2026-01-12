import smartImg from "../assets/smart.png";
import remote1 from "../assets/remote1.png";
import remote2 from "../assets/remote2.png";
import iotl from "../assets/iotLowa.png";
import items from "../assets/items.png";
import left1 from "../assets/left1.png";
import right1 from "../assets/right1.png";
import utilityImg from "../assets/utility.png";
import bill from "../assets/bill.png";
import amc from "../assets/amc.png";
import consult from "../assets/consultancy.png";
import plc from "../assets/plc.png";
import dev from "../assets/development.png";

const serviceData = [
    {
        category: "Solutions",
        slug: "solutions",
        items: [
            {
                id: "smart-metering",
                name: "Smart Metering & Utility Billing",
                description: "UBILL is a future-ready utility metering & billing software used across 100+ commercial and residential sites. It provides complete automation for tariff management, multi-utility billing and tenant management.",
                heroImage: smartImg,
                subItems: [
                    { title: "UBILL MBusReader", desc: "Software tool for reading and collecting M-Bus meter data in real time. Supports automatic scheduling and CSV export." },
                    { title: "UBILL AMR", desc: "Automated Meter Reading system allowing remote meter data retrieval through TCP/IP, LoRaWAN, or Modbus." },
                    { title: "UBILL IBM", desc: "Integrated Billing Module for multi-utility tariffs, prepaid metering, and tenant billing automation." },
                    { title: "UBILL VCM", desc: "Valve Control Management system to remotely operate shutoff valves via cloud dashboard." },
                ],
                orderCodes: [
                    { title: "UBILL IBM Tenant Billing", code: "UBILL-TB-001" },
                    { title: "UBILL MBusReader", code: "UBILL-MBUS-READER-01" },
                    { title: "UBILL IBM V Tenant Billing & Valve Control", code: "UBILL-VTENANT-05" },
                ],
                brochure: "../files/Brochure.pdf"
            },
            {
                id: "remote-connect",
                name: "Remote Connectivity & VPN",
                description: "Secure and reliable remote access to industrial networks using VPN routers designed for industrial environments.",
                heroImage: remote1,
                content: [
                    "ConnectME offers remote connectivity solutions with use of wide range of VPN routers that are specifically designed for secure remote connectivity in industrial environments. These routers provide reliable and secure connections to remote devices and networks, allowing for seamless access and control from a common central location or cloud infrastructure.",
                    "Our VPN routers support various strong encryption VPN protocols, such as IPSec, OpenVPN, and L2TP, ensuring compatibility with different network setups to ensure confidentiality and integrity of data transmitted over the network."
                ],
                images: [remote2],
                partners: "Solutions based on TOSIBOX and EWON devices."
            },
            {
                id: "lorawan",
                name: "IoT & LoRaWAN Solutions",
                description: "Specialized private LoRaWAN network solutions for Smart Metering, Asset Tracking, and Environmental Monitoring.",
                heroImage: iotl,
                features: [
                    "Smart Metering",
                    "Smart Valves",
                    "Indoor Air Quality (Schools, Malls, Hospitals)",
                    "Asset Tracking & Monitoring",
                    "HVAC Industry",
                    "Level Monitoring",
                    "Outdoor Environmental Monitoring"
                ]
            },
            {
                id: "lorawan-sensors",
                name: "Various LoRaWAN Sensors",
                description: "Comprehensive range of LoRaWAN sensors for all monitoring needs.",
                heroImage: items,
                features: [
                    "Temperature & Humidity",
                    "Indoor Air Quality (CO / VOC)",
                    "Particles Monitor (PM 2.5 / PM4 / PM10)",
                    "Meters (Water / BTU / Electricity)",
                    "Ultrasonic Level / Differential Pressure",
                    "Analog Input / Digital IO",
                    "Motion / Light Sensors",
                    "Modbus Bridge",
                    "Water Leak Detection",
                    "Soil Moisture"
                ],
                images: [left1, right1]
            }
        ]
    },
    {
        category: "Services",
        slug: "services",
        items: [
            {
                id: "utility-maintenance",
                name: "Utility Meter Maintenance",
                description: "Ensuring meters stay healthy for accurate billing. Includes AI-enabled AMR validation and faulty meter replacements.",
                heroImage: utilityImg,
                content: [
                    "A tenant metering provides the overview and insights needed for accurate billing of water and energy consumption. Highly accurate and reliable meters combined with intuitive meter reading, correct billing platform and proper validation.",
                    "ConnectME offers meter maintenance service to ensure meters stay healthy, critical for correct billing. We do maintenance service on faulty meters replacements."
                ]
            },
            {
                id: "billing",
                name: "Billing Managed Service",
                description: "End-to-end billing management, from data grouping and invoice generation to payment portal and collection services.",
                heroImage: bill,
                content: [
                    "Our payment portal allows residents to download bills and check their account from the comfort of their own home. Billing system is a combination of software and hardware that receives service usage information.",
                    "Collection is the process of chasing past due receivables on customer account. This usually involves sending notifications to the customer and taking appropriate actions in absence of due payments."
                ]
            },
            {
                id: "amc",
                name: "AMC & Training",
                description: "End-to-End IoT Training and Maintenance Contracts.",
                heroImage: amc,
                content: [
                    "End-to-End IoT Training with hands-on experience and IoT certification using live use cases.",
                    "Onsite customizable training PLC / HMI / SCADA – Basic and advanced training courses. Drives / VFDs / Servo drives."
                ]
            },
            {
                id: "consultancy",
                name: "Technical Consultancy",
                description: "Expert consultancy for IoT protocols, Plant Optimization, Networking & Security.",
                heroImage: consult,
                content: [
                    "Specialized focusing on everything from market research and strategy consulting to hardware and software specialists to help navigate the minefield of IoT protocols.",
                    "We offer: Plant Optimization, Networking & Security, Audit trails, IoT enablement."
                ]
            },
            {
                id: "plc",
                name: "PLC & SCADA Services",
                description: "Control systems and automation services for industrial processes.",
                heroImage: plc,
                features: [
                    "Plant / machine upgrade – retrofits",
                    "PLC / SCADA / HMI – modifications",
                    "Maintenance contracts – AMC / SLA",
                    "Engineering Services",
                    "Manpower deployment"
                ]
            },
            {
                id: "development",
                name: "Development & Services",
                description: "Custom Web, Mobile, and Desktop Application Development.",
                heroImage: dev,
                content: [
                    "Application development services allow you to build consumer-facing apps for a range of digital platforms like mobile App, web, desktop.",
                    "We rely on our technological expertise and specialized industry experience to develop any type of web, mobile App, desktop, and hybrid app per your business requirements."
                ]
            }
        ]
    }
];

export default serviceData;
