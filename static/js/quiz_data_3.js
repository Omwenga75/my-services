const quizData3 = {
  "Microsoft Office Productivity": {
    "Word Document Essentials": [
      {
        question: "You need to automatically update all chapter titles throughout a 50-page report when you change the formatting. What is the most efficient approach?",
        options: [
          "Manually select each title and change the font size",
          "Use Find & Replace to locate and reformat each title",
          "Apply the Heading 1 style to all chapter titles, then modify the style definition",
          "Copy-paste the formatting from one title to the others using Format Painter"
        ],
        correct: 2,
        explanation: "Applying a built-in style like Heading 1 to all chapter titles means you only need to modify the style definition once, and all instances update automatically throughout the document."
      },
      {
        question: "What does the Mail Merge feature in Word allow you to do?",
        options: [
          "Merge multiple Word documents into a single PDF",
          "Combine tracked changes from several reviewers into one document",
          "Generate personalized copies of a document using data from a source like an Excel spreadsheet",
          "Send emails directly from Word without using Outlook"
        ],
        correct: 2,
        explanation: "Mail Merge connects a Word template document to a data source (such as an Excel file or database) and generates personalized copies by inserting field values like names and addresses into each copy."
      }
    ],
    "Excel Formulas & Functions": [
      {
        question: "You have a price list in Sheet2 and need to look up a product price by its ID in Sheet1. The product ID may not always be in the first column. Which function is the best choice?",
        options: [
          "VLOOKUP, because it works across sheets",
          "XLOOKUP, because it does not require the lookup value to be in the first column",
          "SUMIF, because it can conditionally sum prices",
          "INDEX with no MATCH, because it returns any cell value"
        ],
        correct: 1,
        explanation: "XLOOKUP is more flexible than VLOOKUP because it can search any column and return a result from any other column, regardless of their positions. VLOOKUP requires the lookup column to be the leftmost column in the range."
      },
      {
        question: "What does the cell reference $A$1 signify in Excel?",
        options: [
          "A relative reference that adjusts when the formula is copied",
          "An absolute reference that stays fixed on cell A1 when copied",
          "A named range pointing to cell A1",
          "A reference to cell A1 on a protected sheet"
        ],
        correct: 1,
        explanation: "The dollar signs in $A$1 create an absolute reference, locking both the column (A) and the row (1) so the reference does not change when the formula is copied to other cells."
      }
    ],
    "Excel Dashboards & Data Visualization": [
      {
        question: "You have a large sales dataset and need to quickly summarize total revenue by region and product category. Which Excel feature is most appropriate?",
        options: [
          "Conditional Formatting with color scales",
          "A PivotTable with Region and Category as row/column fields and Revenue as the value",
          "Data Validation dropdown lists for each region",
          "Sparklines embedded in each row of the dataset"
        ],
        correct: 1,
        explanation: "PivotTables are specifically designed to summarize, group, and analyze large datasets by dragging fields into row, column, and value areas, making them ideal for cross-tabulating revenue by region and category."
      },
      {
        question: "What is the primary purpose of Data Validation in Excel?",
        options: [
          "To format cells based on their values automatically",
          "To restrict the type or range of data a user can enter into a cell",
          "To create dynamic chart titles that update with the data",
          "To protect the workbook from unauthorized access"
        ],
        correct: 1,
        explanation: "Data Validation allows you to set rules that restrict what users can enter into specific cells, such as limiting input to whole numbers within a range, dates, or values from a predefined dropdown list."
      }
    ],
    "PowerPoint Presentation Design": [
      {
        question: "You want to ensure that your company logo and footer appear consistently on every slide in a presentation. What should you use?",
        options: [
          "Copy and paste the logo onto each slide manually",
          "Use the Slide Master to place the logo and footer in the layout",
          "Insert the logo as a watermark using the Design tab",
          "Group the logo with each slide\u2019s content"
        ],
        correct: 1,
        explanation: "The Slide Master controls the default layout for all slides. Placing elements like logos and footers on the Slide Master ensures they appear consistently on every slide without manual duplication."
      },
      {
        question: "What does the 6\u00d76 rule in presentation design recommend?",
        options: [
          "Use no more than 6 slides per section and 6 sections per presentation",
          "Limit each slide to no more than 6 bullet points with no more than 6 words per bullet",
          "Use 6-point font for footnotes and 6 images maximum per slide",
          "Present for no longer than 6 minutes per 6 slides"
        ],
        correct: 1,
        explanation: "The 6\u00d76 rule is a design guideline that recommends no more than 6 bullet points per slide and no more than 6 words per bullet point, helping keep slides concise and readable for the audience."
      }
    ],
    "Productivity Workflows & Integration": [
      {
        question: "You have an Excel chart that needs to appear in both a Word report and a PowerPoint presentation, and it must update automatically when the Excel data changes. What linking method should you use?",
        options: [
          "Copy the chart and use Paste Special > Paste Link in both Word and PowerPoint",
          "Export the chart as an image and insert it into each application",
          "Retype the data into native Word and PowerPoint charts",
          "Save the Excel file to OneDrive and share the link in a text box"
        ],
        correct: 0,
        explanation: "Using Paste Special with the Paste Link option creates a live connection between the Excel source and the destination document. When the Excel data changes, the linked chart in Word or PowerPoint updates automatically."
      },
      {
        question: "What is the benefit of customizing the Quick Access Toolbar in Microsoft Office?",
        options: [
          "It changes the default file format for all saved documents",
          "It places frequently used commands in a always-visible toolbar for one-click access",
          "It automatically backs up documents to OneDrive at regular intervals",
          "It enables macro recording across all Office applications"
        ],
        correct: 1,
        explanation: "The Quick Access Toolbar sits above the ribbon and provides instant one-click access to commands you use frequently, saving time by eliminating the need to navigate through ribbon tabs for common actions."
      }
    ],
    "Advanced Automation & Macros": [
      {
        question: "You recorded a macro in Excel but need to modify it to include a loop that processes all rows in a dataset. Where do you edit the macro code?",
        options: [
          "In the Formula Bar by selecting the macro name",
          "In the Visual Basic Editor, opened with Alt+F11",
          "In the Macro Settings dialog under the File tab",
          "In Power Query\u2019s Advanced Editor"
        ],
        correct: 1,
        explanation: "The Visual Basic Editor (VBE), accessed with Alt+F11, is where all VBA macro code is stored and edited. You can modify recorded macros and add programming constructs like loops and conditionals here."
      },
      {
        question: "Why must a workbook be saved as .xlsm rather than .xlsx when it contains macros?",
        options: [
          "The .xlsm format compresses the file to a smaller size",
          "The .xlsx format does not support embedded VBA macro code and will strip it on save",
          "The .xlsm format encrypts the macros for security",
          "The .xlsx format is only compatible with older versions of Excel"
        ],
        correct: 1,
        explanation: "The .xlsx format is a macro-free format by design. Saving a workbook with macros as .xlsx will discard all VBA code. The .xlsm format is specifically designed to preserve macro code within the workbook."
      }
    ]
  },
  "Networking Fundamentals": {
    "Network Basics & OSI/TCP-IP Models": [
      {
        question: "A network engineer is troubleshooting a connectivity issue. The physical cable tests fine, the NIC shows link activity, but the device cannot obtain an IP address. Which OSI layer is most likely where the problem exists?",
        options: [
          "Layer 1 \u2013 Physical",
          "Layer 2 \u2013 Data Link",
          "Layer 3 \u2013 Network",
          "Layer 7 \u2013 Application"
        ],
        correct: 2,
        explanation: "Since the physical connection (Layer 1) and link activity (Layer 2) are working, but the device cannot obtain an IP address, the issue lies at Layer 3 (Network), which handles logical addressing and IP configuration."
      },
      {
        question: "Which of the following correctly describes data encapsulation as it moves down the OSI model?",
        options: [
          "Data \u2192 Frame \u2192 Packet \u2192 Segment \u2192 Bits",
          "Data \u2192 Segment \u2192 Packet \u2192 Frame \u2192 Bits",
          "Bits \u2192 Frame \u2192 Packet \u2192 Segment \u2192 Data",
          "Data \u2192 Packet \u2192 Segment \u2192 Frame \u2192 Bits"
        ],
        correct: 1,
        explanation: "As data moves down the OSI model, it is encapsulated at each layer: the Transport layer creates Segments, the Network layer creates Packets, the Data Link layer creates Frames, and the Physical layer transmits Bits."
      }
    ],
    "IP Addressing & Subnetting": [
      {
        question: "A company needs to create 6 subnets from the network 192.168.1.0/24. How many bits must be borrowed from the host portion, and how many usable hosts will each subnet support?",
        options: [
          "2 bits borrowed, 62 usable hosts per subnet",
          "3 bits borrowed, 30 usable hosts per subnet",
          "4 bits borrowed, 14 usable hosts per subnet",
          "3 bits borrowed, 32 usable hosts per subnet"
        ],
        correct: 1,
        explanation: "To create at least 6 subnets, you need 3 borrowed bits (2\u00b3 = 8 subnets). This leaves 5 host bits, giving 2\u2075 \u2013 2 = 30 usable host addresses per subnet (subtracting the network and broadcast addresses)."
      },
      {
        question: "Which of the following is a valid private IPv4 address range as defined by RFC 1918?",
        options: [
          "11.0.0.0 to 11.255.255.255",
          "172.16.0.0 to 172.31.255.255",
          "192.0.0.0 to 192.255.255.255",
          "10.0.0.0 to 10.0.255.255"
        ],
        correct: 1,
        explanation: "The RFC 1918 private address ranges are 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0\u2013172.31.255.255), and 192.168.0.0/16. The range 172.16.0.0 to 172.31.255.255 is one of the three valid private ranges."
      }
    ],
    "Routing Fundamentals": [
      {
        question: "Which dynamic routing protocol uses bandwidth and delay as its default composite metric and is a Cisco proprietary protocol?",
        options: [
          "RIP (Routing Information Protocol)",
          "OSPF (Open Shortest Path First)",
          "EIGRP (Enhanced Interior Gateway Routing Protocol)",
          "BGP (Border Gateway Protocol)"
        ],
        correct: 2,
        explanation: "EIGRP is a Cisco proprietary protocol that uses a composite metric based on bandwidth and delay by default. RIP uses hop count, OSPF uses cost (based on bandwidth), and BGP uses path attributes."
      },
      {
        question: "What is the purpose of NAT (Network Address Translation) in a network?",
        options: [
          "To encrypt traffic between internal and external networks",
          "To translate private internal IP addresses to public IP addresses for internet communication",
          "To assign IP addresses automatically to devices on the network",
          "To route packets between different VLANs on a switch"
        ],
        correct: 1,
        explanation: "NAT translates private IP addresses used within a local network to public IP addresses needed for communication over the internet, allowing multiple devices to share a limited number of public addresses."
      }
    ],
    "Switching & VLANs": [
      {
        question: "A switch port needs to carry traffic for multiple VLANs between two switches. What must be configured on this port?",
        options: [
          "The port must be set as an access port assigned to all VLANs",
          "The port must be configured as a trunk port using 802.1Q encapsulation",
          "Port security must be enabled with multiple MAC addresses",
          "STP must be disabled on the port to allow multi-VLAN traffic"
        ],
        correct: 1,
        explanation: "A trunk port uses 802.1Q tagging to carry traffic from multiple VLANs over a single physical link between switches. Access ports can only belong to a single VLAN."
      },
      {
        question: "What is the primary purpose of Spanning Tree Protocol (STP) in a switched network?",
        options: [
          "To load-balance traffic across multiple switch uplinks",
          "To prevent broadcast storms by eliminating Layer 2 loops",
          "To encrypt traffic between switches in the same VLAN",
          "To assign IP addresses to devices in different VLANs"
        ],
        correct: 1,
        explanation: "STP detects and prevents Layer 2 switching loops by placing redundant ports into a blocking state. Without STP, broadcast frames could circulate endlessly, causing broadcast storms that bring down the network."
      }
    ],
    "Wireless Networking": [
      {
        question: "An office environment experiences heavy interference from Bluetooth devices and microwaves on the wireless network. Which action would most likely improve Wi-Fi performance?",
        options: [
          "Switch all devices to the 2.4 GHz band for better range",
          "Move wireless clients to the 5 GHz band to avoid interference",
          "Reduce the transmit power of the access point",
          "Change the SSID to a hidden network"
        ],
        correct: 1,
        explanation: "Bluetooth and microwaves operate in the 2.4 GHz frequency range. Moving Wi-Fi clients to the 5 GHz band avoids this interference since it operates on a completely different frequency with more available channels."
      },
      {
        question: "Which Wi-Fi standard introduced MU-MIMO and OFDMA to improve performance in high-density environments?",
        options: [
          "802.11n (Wi-Fi 4)",
          "802.11ac (Wi-Fi 5)",
          "802.11ax (Wi-Fi 6)",
          "802.11g (Wi-Fi 3)"
        ],
        correct: 2,
        explanation: "802.11ax (Wi-Fi 6) introduced both uplink and downlink MU-MIMO along with OFDMA (Orthogonal Frequency Division Multiple Access), enabling more efficient communication with many devices simultaneously in dense environments."
      }
    ],
    "Network Security Essentials": [
      {
        question: "A security policy requires that only devices on the 10.0.1.0/24 network can access a server at 192.168.5.10 via SSH (port 22). Which type of ACL should be used?",
        options: [
          "A standard ACL, because it filters based on source IP address only",
          "An extended ACL, because it can filter based on source IP, destination IP, and port number",
          "A reflexive ACL, because it tracks connection states",
          "No ACL is needed; a firewall handles all port-based filtering"
        ],
        correct: 1,
        explanation: "An extended ACL can match traffic based on source address, destination address, protocol, and port numbers. Since the rule requires filtering by source network, destination host, and specific port (SSH/22), an extended ACL is necessary."
      },
      {
        question: "What are the three core principles of the CIA triad in information security?",
        options: [
          "Compliance, Identity, Authentication",
          "Confidentiality, Integrity, Availability",
          "Control, Inspection, Authorization",
          "Certification, Investigation, Accountability"
        ],
        correct: 1,
        explanation: "The CIA triad stands for Confidentiality (protecting data from unauthorized access), Integrity (ensuring data is not tampered with), and Availability (ensuring systems and data are accessible when needed). It is the foundational model for information security."
      }
    ]
  }
};
