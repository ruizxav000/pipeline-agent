import React, { useState, useRef, useEffect, createContext, useContext, useCallback } from "react";

const PR = [{"Rank":1,"Priority":"CRITICAL","Account Name":"Michigan Medicine","Opty Number":"OPTY5290280","BU":"Customer Service Management, IT Service Management", "Pipeline $": 700000,"Stage":"4 - Economic Buyer Identified (30%)","Close Date":"2026-07-16","Days Out":155,"District":"Midwest Healthcare","Acct #":"ACCT0014575","Account Owner":"Olivia Shaw","Priority Score":10,"Action Required":"Immediate: schedule next step this week"},{"Rank":2,"Priority":"CRITICAL","Account Name":"Nordic Consulting Partners Inc","Opty Number":"OPTY5282058","BU":"Customer Service Management", "Pipeline $": 350000,"Stage":"4 - Economic Buyer Identified (30%)","Close Date":"2026-12-04","Days Out":296,"District":"Midwest Healthcare","Acct #":"ACCT0075470","Account Owner":"Mac Johnson","Priority Score":9,"Action Required":"Immediate: schedule next step this week"},{"Rank":3,"Priority":"CRITICAL","Account Name":"Tenet Business Services Corporation","Opty Number":"OPTY5296828","BU":"App Engine Core", "Pipeline $": 75000,"Stage":"4 - Economic Buyer Identified (30%)","Close Date":"2026-12-14","Days Out":306,"District":"South Healthcare","Acct #":"ACCT0008670","Account Owner":"Sean Fahey","Priority Score":9,"Action Required":"Immediate: schedule next step this week"},{"Rank":4,"Priority":"CRITICAL","Account Name":"NYU Langone Health","Opty Number":"OPTY5268072","BU":"Healthcare and Life Sciences", "Pipeline $": 22000,"Stage":"4 - Economic Buyer Identified (30%)","Close Date":"2026-12-19","Days Out":311,"District":"Northeast Healthcare","Acct #":"ACCT0002835","Account Owner":"Matthew Curran","Priority Score":9,"Action Required":"Immediate: schedule next step this week"},{"Rank":5,"Priority":"CRITICAL","Account Name":"Singing River Heath System","Opty Number":"OPTY5294361","BU":"Platform Security", "Pipeline $": 44060,"Stage":"4 - Present Solution (20%)","Close Date":"2026-05-14","Days Out":92,"District":"South Healthcare","Acct #":"ACCT0057658","Account Owner":"Jay Fogarty","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":6,"Priority":"CRITICAL","Account Name":"Beacon Health System Inc","Opty Number":"OPTY5287512","Stage":"4 - Present Solution (20%)","Close Date":"2026-06-04","Days Out":113,"District":"Midwest Healthcare","Acct #":"ACCT0027760","Account Owner":"Mac Johnson","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":7,"Priority":"CRITICAL","Account Name":"UC Health LLC","Opty Number":"OPTY5288434","BU":"Security Operations", "Pipeline $": 122400,"Stage":"4 - Present Solution (20%)","Close Date":"2026-06-09","Days Out":118,"District":"Midwest Healthcare","Acct #":"ACCT0006677","Account Owner":"Mac Johnson","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":8,"Priority":"CRITICAL","Account Name":"Franciscan Missionaries Of Our Lady Health System Inc","Opty Number":"OPTY5289729","BU":"Customer Service Management","Pipeline $":50000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-11-25","Days Out":264,"District":"South Healthcare","Acct #":"ACCT0006981","Account Owner":"Kirk Small","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":9,"Priority":"CRITICAL","Account Name":"Virtua Health, Inc.","Opty Number":"OPTY5299598","BU":"Integrated Risk Management", "Pipeline $": 75000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-09-16","Days Out":194,"District":"Northeast Healthcare","Acct #":"ACCT0002968","Account Owner":"John Banyra","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":10,"Priority":"CRITICAL","Account Name":"Kaleida Health","Opty Number":"OPTY5272937","BU":"Healthcare and Life Sciences", "Pipeline $": 65000,"Stage":"4 - Present Solution (20%)","Close Date":"2027-03-31","Days Out":390,"District":"Northeast Healthcare","Acct #":"ACCT0002745","Account Owner":"Jeffrey Richardson","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":11,"Priority":"CRITICAL","Account Name":"Children's Health System Of Texas","Opty Number":"OPTY5268992","Stage":"4 - Present Solution (20%)","Close Date":"2026-06-24","Days Out":133,"District":"South Healthcare","Acct #":"ACCT0014320","Account Owner":"Haley Vaclavik","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":12,"Priority":"CRITICAL","Account Name":"Integris Health Inc","Opty Number":"OPTY5239185","BU":"HR Service Delivery","Pipeline $":80000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-07-30","Days Out":146,"District":"South Healthcare","Acct #":"ACCT0000698","Account Owner":"Sean Fahey","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":13,"Priority":"CRITICAL","Account Name":"Deaconess Health System Inc","Opty Number":"OPTY5258523","BU":"Asset Management", "Pipeline $": 144900,"Stage":"4 - Present Solution (20%)","Close Date":"2026-07-23","Days Out":162,"District":"Midwest Healthcare","Acct #":"ACCT0008036","Account Owner":"Mac Johnson","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":14,"Priority":"CRITICAL","Account Name":"Louisiana Children's Medical Center","Opty Number":"OPTY5300714","BU":"Business Continuity Management, Integrated Risk Management","Pipeline $":91000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-08-06","Days Out":176,"District":"South Healthcare","Acct #":"ACCT0053696","Account Owner":"Kirk Small","Priority Score":8,"Action Required":"Immediate: schedule next step this week"},{"Rank":15,"Priority":"CRITICAL","Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5290383","BU":"Integrated Risk Management", "Pipeline $": 99000,"Stage":"3 - Objectives (10%)","Close Date":"2026-10-16","Days Out":224,"District":"South Healthcare","Acct #":"ACCT0014038","Account Owner":"Haley Vaclavik","Priority Score":7,"Action Required":"Immediate: schedule next step this week"},{"Rank":16,"Priority":"CRITICAL","Account Name":"Franciscan Missionaries Of Our Lady Health System Inc","Opty Number":"OPTY5275144","BU":"Workflow Data Fabric","Pipeline $":40000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-10-31","Days Out":262,"District":"South Healthcare","Acct #":"ACCT0006981","Account Owner":"Kirk Small","Priority Score":7,"Action Required":"Immediate: schedule next step this week"},{"Rank":17,"Priority":"CRITICAL","Account Name":"Franciscan Missionaries Of Our Lady Health System Inc","Opty Number":"OPTY5289730","BU":"AI Control Tower, Integrated Risk Management", "Pipeline $": 150000,"Stage":"4 - Present Solution (20%)","Close Date":"2026-11-12","Days Out":274,"District":"South Healthcare","Acct #":"ACCT0006981","Account Owner":"Kirk Small","Priority Score":7,"Action Required":"Immediate: schedule next step this week"},{"Rank":18,"Priority":"CRITICAL","Account Name":"MetroPlus Health Plan","Opty Number":"OPTY5280039","BU":"IT Service Management", "Pipeline $": 55800,"Stage":"4 - Present Solution (20%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0076265","Account Owner":"Kirsten Giordano","Priority Score":7,"Action Required":"Immediate: schedule next step this week"},{"Rank":19,"Priority":"HIGH","Account Name":"MD Anderson Cancer Center at the University of Texas","Opty Number":"OPTY5301782","BU":"Integrated Risk Management", "Pipeline $": 99000,"Stage":"3 - Objectives (10%)","Close Date":"2026-08-19","Days Out":166,"District":"South Healthcare","Acct #":"ACCT0076438","Account Owner":"Haley Vaclavik","Priority Score":6,"Action Required":"Advance stage or confirm close date"},{"Rank":20,"Priority":"HIGH","Account Name":"COREWELL HEALTH","Opty Number":"OPTY5269500","BU":"IT Service Management","Pipeline $":178000,"Stage":"3 - Objectives (10%)","Close Date":"2026-09-15","Days Out":193,"District":"Midwest Healthcare","Acct #":"ACCT0006295","Account Owner":"Marty Huizinga","Priority Score":6,"Action Required":"Advance stage or confirm close date"},{"Rank":21,"Priority":"HIGH","Account Name":"Baptist Healthcare System","Opty Number":"OPTY5290342","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"3 - Objectives (10%)","Close Date":"2026-10-30","Days Out":238,"District":"Midwest Healthcare","Acct #":"ACCT0003163","Account Owner":"Robin Long","Priority Score":6,"Action Required":"Advance stage or confirm close date"},{"Rank":22,"Priority":"HIGH","Account Name":"Tenet Business Services Corporation","Opty Number":"OPTY5291445","BU":"HR Service Delivery", "Pipeline $": 330000,"Stage":"3 - Objectives (10%)","Close Date":"2026-06-26","Days Out":135,"District":"South Healthcare","Acct #":"ACCT0008670","Account Owner":"Sean Fahey","Priority Score":6,"Action Required":"Advance stage or confirm close date"},{"Rank":23,"Priority":"HIGH","Account Name":"RWJBH Corporate Services, Inc.","Opty Number":"OPTY5270491","BU":"—", "Pipeline $": 75000,"Stage":"3 - Objectives (10%)","Close Date":"2026-08-31","Days Out":178,"District":"Northeast Healthcare","Acct #":"ACCT0012093","Account Owner":"John Banyra","Priority Score":6,"Action Required":"Advance stage or confirm close date"},{"Rank":24,"Priority":"HIGH","Account Name":"Michigan Medicine","Opty Number":"OPTY5287755","BU":"Workflow Data Fabric","Pipeline $":100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-16","Days Out":285,"District":"Midwest Healthcare","Acct #":"ACCT0014575","Account Owner":"Olivia Shaw","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":25,"Priority":"HIGH","Account Name":"Mount Sinai Health System, Inc.","Opty Number":"OPTY5278483","BU":"Workplace Service Delivery", "Pipeline $": 129000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-10","Days Out":126,"District":"Northeast Healthcare","Acct #":"ACCT0056465","Account Owner":"Kirsten Giordano","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":26,"Priority":"HIGH","Account Name":"Memorial Sloan-Kettering Cancer Center","Opty Number":"OPTY5267400","BU":"Healthcare and Life Sciences", "Pipeline $": 75000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-19","Days Out":288,"District":"Northeast Healthcare","Acct #":"ACCT0004546","Account Owner":"Matthew Curran","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":27,"Priority":"HIGH","Account Name":"WellStar Health System Inc","Opty Number":"OPTY5296637","BU":"Field Service Management", "Pipeline $": 14400,"Stage":"2 - Discovery (5%)","Close Date":"2026-04-23","Days Out":48,"District":"South Healthcare","Acct #":"ACCT0000512","Account Owner":"Jay Fogarty","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":28,"Priority":"HIGH","Account Name":"Cooper Health Systems","Opty Number":"OPTY5283316","BU":"IT Service Management","Pipeline $":100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-18","Days Out":196,"District":"Northeast Healthcare","Acct #":"ACCT0002629","Account Owner":"Matthew Curran","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":29,"Priority":"HIGH","Account Name":"Children's Health System Of Texas","Opty Number":"OPTY5291550","BU":"Healthcare and Life Sciences", "Pipeline $": 500000,"Stage":"3 - Objectives (10%)","Close Date":"2026-08-14","Days Out":184,"District":"South Healthcare","Acct #":"ACCT0014320","Account Owner":"Haley Vaclavik","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":30,"Priority":"HIGH","Account Name":"Michigan Medicine","Opty Number":"OPTY5304224","BU":"App Engine Core", "Pipeline $": 147000,"Stage":"3 - Objectives (10%)","Close Date":"2026-08-21","Days Out":191,"District":"Midwest Healthcare","Acct #":"ACCT0014575","Account Owner":"Olivia Shaw","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":31,"Priority":"HIGH","Account Name":"Mount Sinai Medical Center Of Florida Inc","Opty Number":"OPTY5233043","BU":"IT Business Management, IT Service Management, Workflow Data Fabric", "Pipeline $": 111600,"Stage":"3 - Objectives (10%)","Close Date":"2026-08-27","Days Out":197,"District":"South Healthcare","Acct #":"ACCT0010393","Account Owner":"Kristin Richardson","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":32,"Priority":"HIGH","Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5301781","BU":"Integrated Risk Management","Pipeline $":99000,"Stage":"3 - Objectives (10%)","Close Date":"2026-10-09","Days Out":240,"District":"South Healthcare","Acct #":"ACCT0014038","Account Owner":"Haley Vaclavik","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":33,"Priority":"HIGH","Account Name":"Orlando Health Inc","Opty Number":"OPTY5260790","BU":"Healthcare and Life Sciences", "Pipeline $": 223200,"Stage":"3 - Objectives (10%)","Close Date":"2026-10-30","Days Out":261,"District":"South Healthcare","Acct #":"ACCT0009637","Account Owner":"Kristin Richardson","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":34,"Priority":"HIGH","Account Name":"Trilogy Health Services LLC","Opty Number":"OPTY5290440","BU":"Asset Management", "Pipeline $": 125000,"Stage":"3 - Objectives (10%)","Close Date":"2026-11-18","Days Out":280,"District":"Midwest Healthcare","Acct #":"ACCT0130494","Account Owner":"Sarah Ezell","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":35,"Priority":"HIGH","Account Name":"Trilogy Health Services LLC","Opty Number":"OPTY5290441","BU":"Asset Management", "Pipeline $": 125000,"Stage":"3 - Objectives (10%)","Close Date":"2026-11-18","Days Out":280,"District":"Midwest Healthcare","Acct #":"ACCT0130494","Account Owner":"Sarah Ezell","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":36,"Priority":"HIGH","Account Name":"Mount Sinai Health System, Inc.","Opty Number":"OPTY5274811","BU":"HR Service Delivery","Pipeline $":250000,"Stage":"3 - Objectives (10%)","Close Date":"2026-11-25","Days Out":287,"District":"Northeast Healthcare","Acct #":"ACCT0056465","Account Owner":"Kirsten Giordano","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":37,"Priority":"HIGH","Account Name":"Bronson Health Care Group Inc","Opty Number":"OPTY5286814","BU":"IT Service Management", "Pipeline $": 400000,"Stage":"3 - Objectives (10%)","Close Date":"2026-12-31","Days Out":323,"District":"Midwest Healthcare","Acct #":"ACCT0001010","Account Owner":"Marty Huizinga","Priority Score":5,"Action Required":"Advance stage or confirm close date"},{"Rank":38,"Priority":"MEDIUM","Account Name":"Indiana University Health Inc","Opty Number":"OPTY5266418","BU":"IT Service Management","Pipeline $":100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-05-13","Days Out":91,"District":"Midwest Healthcare","Acct #":"ACCT0015723","Account Owner":"Patrick Stanly","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":39,"Priority":"MEDIUM","Account Name":"SUNY Upstate Medical University","Opty Number":"OPTY5283974","BU":"AI Control Tower, Integrated Risk Management", "Pipeline $": 155000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-09","Days Out":278,"District":"Northeast Healthcare","Acct #":"ACCT0009422","Account Owner":"Jeffrey Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":40,"Priority":"MEDIUM","Account Name":"Children's Healthcare Of Atlanta Inc","Opty Number":"OPTY5275292","BU":"IT Service Management","Pipeline $":174960,"Stage":"2 - Discovery (5%)","Close Date":"2026-05-22","Days Out":100,"District":"South Healthcare","Acct #":"ACCT0000563","Account Owner":"Jay Fogarty","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":41,"Priority":"MEDIUM","Account Name":"Orlando Health Inc","Opty Number":"OPTY5279511","BU":"IT Service Management", "Pipeline $": 240556,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-03","Days Out":242,"District":"South Healthcare","Acct #":"ACCT0009637","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":42,"Priority":"MEDIUM","Account Name":"NYC Health + Hospitals Metropolitan","Opty Number":"OPTY5285571","BU":"Source To Pay Operations", "Pipeline $": 50000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-14","Days Out":161,"District":"Northeast Healthcare","Acct #":"ACCT0118819","Account Owner":"Kirsten Giordano","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":43,"Priority":"MEDIUM","Account Name":"Community Foundation of Northwest Indiana, Inc. d/b/a Powers Health","Opty Number":"OPTY5260046","BU":"Healthcare and Life Sciences", "Pipeline $": 150000,"Stage":"2 - Discovery (5%)","Close Date":"2027-01-27","Days Out":327,"District":"Midwest Healthcare","Acct #":"ACCT0014809","Account Owner":"Mac Johnson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":44,"Priority":"MEDIUM","Account Name":"St. Elizabeth Healthcare","Opty Number":"OPTY5267451","Stage":"2 - Discovery (5%)","Close Date":"2026-06-08","Days Out":117,"District":"Midwest Healthcare","Acct #":"ACCT0014933","Account Owner":"Robin Long","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":45,"Priority":"MEDIUM","Account Name":"Teledoc Health Inc","Opty Number":"OPTY5288326","BU":"IT Service Management", "Pipeline $": 90000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-28","Days Out":175,"District":"Northeast Healthcare","Acct #":"ACCT0212106","Account Owner":"Kirsten Giordano","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":46,"Priority":"MEDIUM","Account Name":"Baptist Healthcare System","Opty Number":"OPTY5289361","Stage":"2 - Discovery (5%)","Close Date":"2026-06-12","Days Out":121,"District":"Midwest Healthcare","Acct #":"ACCT0003163","Account Owner":"Robin Long","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":47,"Priority":"MEDIUM","Account Name":"Southcoast Health System, Inc.","Opty Number":"OPTY5271062","Stage":"2 - Discovery (5%)","Close Date":"2026-06-15","Days Out":124,"District":"Northeast Healthcare","Acct #":"ACCT0002901","Account Owner":"Jack Lowell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":48,"Priority":"MEDIUM","Account Name":"Memorial Hermann Hospital System","Opty Number":"OPTY5290068","BU":"Data Foundation","Pipeline $":200000,"Stage":"2 - Discovery (5%)","Close Date":"2026-06-16","Days Out":125,"District":"South Healthcare","Acct #":"ACCT0008797","Account Owner":"Haley Vaclavik","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":49,"Priority":"MEDIUM","Account Name":"Temple University Health System Inc","Opty Number":"OPTY5297344","BU":"HR Service Delivery", "Pipeline $": 400000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-31","Days Out":147,"District":"Northeast Healthcare","Acct #":"ACCT0004750","Account Owner":"Matthew Curran","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":50,"Priority":"MEDIUM","Account Name":"St Jude Children's Research Hospital Inc","Opty Number":"OPTY5290396","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-06-17","Days Out":126,"District":"Midwest Healthcare","Acct #":"ACCT0013355","Account Owner":"Sarah Ezell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":51,"Priority":"MEDIUM","Account Name":"Florida Health Sciences Center, Inc., d/b/a Tampa General Hospital","Opty Number":"OPTY5239569","BU":"IT Business Management", "Pipeline $": 284041,"Stage":"2 - Discovery (5%)","Close Date":"2027-03-18","Days Out":377,"District":"South Healthcare","Acct #":"ACCT0006746","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":52,"Priority":"MEDIUM","Account Name":"Yale-New Haven Health System","Opty Number":"OPTY5260327","Stage":"2 - Discovery (5%)","Close Date":"2026-06-20","Days Out":129,"District":"Northeast Healthcare","Acct #":"ACCT0005953","Account Owner":"Curt Owen","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":53,"Priority":"MEDIUM","Account Name":"Hartford HealthCare Corp","Opty Number":"OPTY5291736","BU":"App Engine Core", "Pipeline $": 147000,"Stage":"2 - Discovery (5%)","Close Date":"2026-06-24","Days Out":133,"District":"Northeast Healthcare","Acct #":"ACCT0002456","Account Owner":"Benjamin Casey","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":54,"Priority":"MEDIUM","Account Name":"University Health System San Antonio","Opty Number":"OPTY5275790","BU":"Source To Pay Operations", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-06-24","Days Out":133,"District":"South Healthcare","Acct #":"ACCT0008677","Account Owner":"Sean Fahey","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":55,"Priority":"MEDIUM","Account Name":"TriHealth Inc","Opty Number":"OPTY5268321","Stage":"2 - Discovery (5%)","Close Date":"2026-06-26","Days Out":135,"District":"Midwest Healthcare","Acct #":"ACCT0014340","Account Owner":"Mac Johnson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":56,"Priority":"MEDIUM","Account Name":"Thomas Jefferson University","Opty Number":"OPTY5292680","BU":"HR Service Delivery", "Pipeline $": 500000,"Stage":"2 - Discovery (5%)","Close Date":"2027-10-29","Days Out":602,"District":"Northeast Healthcare","Acct #":"ACCT0002932","Account Owner":"Steve Cannon","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":57,"Priority":"MEDIUM","Account Name":"University of Miami Health System","Opty Number":"OPTY5268116","BU":"Field Service Management", "Pipeline $": 49554,"Stage":"2 - Discovery (5%)","Close Date":"2027-03-18","Days Out":377,"District":"South Healthcare","Acct #":"ACCT0004247","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":58,"Priority":"MEDIUM","Account Name":"Yale-New Haven Health System","Opty Number":"OPTY5272351","Stage":"2 - Discovery (5%)","Close Date":"2026-06-30","Days Out":139,"District":"Northeast Healthcare","Acct #":"ACCT0005953","Account Owner":"Curt Owen","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":59,"Priority":"MEDIUM","Account Name":"Geisinger System Services","Opty Number":"OPTY5270429","BU":"Asset Management", "Pipeline $": 150000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-01","Days Out":140,"District":"Northeast Healthcare","Acct #":"ACCT0006707","Account Owner":"Steve Cannon","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":60,"Priority":"MEDIUM","Account Name":"Geisinger System Services","Opty Number":"OPTY5270431","BU":"Asset Management","Pipeline $":150000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-01","Days Out":140,"District":"Northeast Healthcare","Acct #":"ACCT0006707","Account Owner":"Steve Cannon","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":61,"Priority":"MEDIUM","Account Name":"Baptist Memorial Health Care Corporation","Opty Number":"OPTY5294493","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-07","Days Out":146,"District":"Midwest Healthcare","Acct #":"ACCT0003166","Account Owner":"Sarah Ezell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":62,"Priority":"MEDIUM","Account Name":"Penn Medicine","Opty Number":"OPTY5295268","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-10","Days Out":149,"District":"Northeast Healthcare","Acct #":"ACCT0144507","Account Owner":"Steve Cannon","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":63,"Priority":"MEDIUM","Account Name":"Life Care Centers of America","Opty Number":"OPTY5297416","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-22","Days Out":161,"District":"Midwest Healthcare","Acct #":"ACCT0003057","Account Owner":"Sarah Ezell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":64,"Priority":"MEDIUM","Account Name":"Methodist Le Bonheur Healthcare","Opty Number":"OPTY5297415","BU":"HR Service Delivery", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-22","Days Out":161,"District":"Midwest Healthcare","Acct #":"ACCT0013327","Account Owner":"Sarah Ezell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":65,"Priority":"MEDIUM","Account Name":"St Jude Children's Research Hospital Inc","Opty Number":"OPTY5298029","Stage":"2 - Discovery (5%)","Close Date":"2026-07-24","Days Out":163,"District":"Midwest Healthcare","Acct #":"ACCT0013355","Account Owner":"Sarah Ezell","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":66,"Priority":"MEDIUM","Account Name":"Baptist Healthcare System","Opty Number":"OPTY5298900","BU":"Workflow Data Fabric","Pipeline $":89000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-29","Days Out":168,"District":"Midwest Healthcare","Acct #":"ACCT0003163","Account Owner":"Robin Long","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":67,"Priority":"MEDIUM","Account Name":"New York City Health And Hospitals Corp","Opty Number":"OPTY5299231","BU":"IT Service Management", "Pipeline $": 178000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-30","Days Out":169,"District":"Northeast Healthcare","Acct #":"ACCT0005269","Account Owner":"Kirsten Giordano","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":68,"Priority":"MEDIUM","Account Name":"Baptist Health of Northeast Florida","Opty Number":"OPTY5299820","BU":"AI Control Tower, Integrated Risk Management","Pipeline $":75000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-30","Days Out":169,"District":"South Healthcare","Acct #":"ACCT0006893","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":69,"Priority":"MEDIUM","Account Name":"UF Health Shands At The University Of Florida","Opty Number":"OPTY5282251","BU":"IT Business Management", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-30","Days Out":169,"District":"South Healthcare","Acct #":"ACCT0118937","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":70,"Priority":"MEDIUM","Account Name":"UF Health Shands At The University Of Florida","Opty Number":"OPTY5282256","BU":"IT Business Management","Pipeline $":50000,"Stage":"2 - Discovery (5%)","Close Date":"2026-07-30","Days Out":169,"District":"South Healthcare","Acct #":"ACCT0118937","Account Owner":"Kristin Richardson","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":71,"Priority":"MEDIUM","Account Name":"WellStar Health System Inc","Opty Number":"OPTY5303935","BU":"IT Operations Management", "Pipeline $": 1000000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-07","Days Out":177,"District":"South Healthcare","Acct #":"ACCT0000512","Account Owner":"Jay Fogarty","Priority Score":4,"Action Required":"Plan discovery/demo cadence"},{"Rank":72,"Priority":"LOW","Account Name":"University of Miami Health System","Opty Number":"OPTY5290133","BU":"Field Service Management", "Pipeline $": 219225,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-13","Days Out":183,"District":"South Healthcare","Acct #":"ACCT0004247","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":73,"Priority":"LOW","Account Name":"Community Foundation of Northwest Indiana, Inc. d/b/a Powers Health","Opty Number":"OPTY5260700","BU":"HR Service Delivery","Pipeline $":176000,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-18","Days Out":257,"District":"Midwest Healthcare","Acct #":"ACCT0014809","Account Owner":"Mac Johnson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":74,"Priority":"LOW","Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5283242","BU":"Healthcare and Life Sciences", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-16","Days Out":224,"District":"South Healthcare","Acct #":"ACCT0014038","Account Owner":"Haley Vaclavik","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":75,"Priority":"LOW","Account Name":"University Of Rochester Medical Center","Opty Number":"OPTY5303104","BU":"Field Service Management", "Pipeline $": 170000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-18","Days Out":188,"District":"Northeast Healthcare","Acct #":"ACCT0012122","Account Owner":"Jeffrey Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":76,"Priority":"LOW","Account Name":"Baptist Healthcare System","Opty Number":"OPTY5304207","BU":"Workflow Data Fabric","Pipeline $":89000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-21","Days Out":191,"District":"Midwest Healthcare","Acct #":"ACCT0003163","Account Owner":"Robin Long","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":77,"Priority":"LOW","Account Name":"Memorial Sloan-Kettering Cancer Center","Opty Number":"OPTY5253682","BU":"Asset Management, IT Business Management", "Pipeline $": 222500,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-21","Days Out":191,"District":"Northeast Healthcare","Acct #":"ACCT0004546","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":78,"Priority":"LOW","Account Name":"Geisinger System Services","Opty Number":"OPTY5272330","BU":"AI Control Tower, Integrated Risk Management","Pipeline $":151000,"Stage":"2 - Discovery (5%)","Close Date":"2026-08-21","Days Out":191,"District":"Northeast Healthcare","Acct #":"ACCT0006707","Account Owner":"Steve Cannon","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":79,"Priority":"LOW","Account Name":"St Jude Children's Research Hospital Inc","Opty Number":"OPTY5278233","BU":"Security Operations", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-01","Days Out":202,"District":"Midwest Healthcare","Acct #":"ACCT0013355","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":80,"Priority":"LOW","Account Name":"Christ Hospital","Opty Number":"OPTY5275997","BU":"HR Service Delivery", "Pipeline $": 200000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-15","Days Out":216,"District":"Midwest Healthcare","Acct #":"ACCT0007936","Account Owner":"Robin Long","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":81,"Priority":"LOW","Account Name":"UW Health","Opty Number":"OPTY5267940","BU":"Customer Service Management", "Pipeline $": 167000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-18","Days Out":219,"District":"Midwest Healthcare","Acct #":"ACCT0010261","Account Owner":"Patrick Stanly","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":82,"Priority":"LOW","Account Name":"Houston Methodist","Opty Number":"OPTY5260438","Stage":"2 - Discovery (5%)","Close Date":"2026-09-21","Days Out":222,"District":"South Healthcare","Acct #":"ACCT0002339","Account Owner":"Haley Vaclavik","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":83,"Priority":"LOW","Account Name":"UF Health Shands At The University Of Florida","Opty Number":"OPTY5295011","BU":"HR Service Delivery","Pipeline $":482000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-25","Days Out":226,"District":"South Healthcare","Acct #":"ACCT0118937","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":84,"Priority":"LOW","Account Name":"Geisinger System Services","Opty Number":"OPTY5270423","BU":"HR Service Delivery", "Pipeline $": 550000,"Stage":"2 - Discovery (5%)","Close Date":"2026-09-11","Days Out":189,"District":"Northeast Healthcare","Acct #":"ACCT0006707","Account Owner":"Steve Cannon","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":85,"Priority":"LOW","Account Name":"Brookdale Senior Living Inc","Opty Number":"OPTY5303742","BU":"IT Operations Management", "Pipeline $": 150000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-08","Days Out":239,"District":"Midwest Healthcare","Acct #":"ACCT0001288","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":86,"Priority":"LOW","Account Name":"Kaleida Health","Opty Number":"OPTY5303761","BU":"IT Operations Management","Pipeline $":100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-08","Days Out":239,"District":"Northeast Healthcare","Acct #":"ACCT0002745","Account Owner":"Jeffrey Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":87,"Priority":"LOW","Account Name":"Penn State Health","Opty Number":"OPTY5303631","BU":"IT Operations Management", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-08","Days Out":239,"District":"Northeast Healthcare","Acct #":"ACCT0002847","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":88,"Priority":"LOW","Account Name":"University Hospitals","Opty Number":"OPTY5303619","BU":"IT Operations Management","Pipeline $":150000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-08","Days Out":239,"District":"Midwest Healthcare","Acct #":"ACCT0003473","Account Owner":"Olivia Shaw","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":89,"Priority":"LOW","Account Name":"Bayada Home Health Care Inc","Opty Number":"OPTY5303449","BU":"IT Operations Management", "Pipeline $": 200000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-08","Days Out":239,"District":"Northeast Healthcare","Acct #":"ACCT0010489","Account Owner":"Steve Cannon","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":90,"Priority":"LOW","Account Name":"Jackson Health System","Opty Number":"OPTY5289420","BU":"Customer Service Management", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-09","Days Out":240,"District":"South Healthcare","Acct #":"ACCT0006767","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":91,"Priority":"LOW","Account Name":"Covenant Health","Opty Number":"OPTY5274564","BU":"Security Operations", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-14","Days Out":245,"District":"Midwest Healthcare","Acct #":"ACCT0009668","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":92,"Priority":"LOW","Account Name":"Covenant Health","Opty Number":"OPTY5290447","BU":"Source To Pay Operations", "Pipeline $": 42000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-14","Days Out":245,"District":"Midwest Healthcare","Acct #":"ACCT0009668","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":93,"Priority":"LOW","Account Name":"Ballad Health","Opty Number":"OPTY5290453","BU":"HR Service Delivery","Pipeline $":250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-20","Days Out":251,"District":"Midwest Healthcare","Acct #":"ACCT0006858","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":94,"Priority":"LOW","Account Name":"Community Health Network Inc","Opty Number":"OPTY5260696","BU":"Asset Management", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-22","Days Out":253,"District":"Midwest Healthcare","Acct #":"ACCT0000238","Account Owner":"Mac Johnson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":95,"Priority":"LOW","Account Name":"The Cleveland Clinic Foundation","Opty Number":"OPTY5271235","BU":"Security Operations", "Pipeline $": 97500,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-22","Days Out":253,"District":"Midwest Healthcare","Acct #":"ACCT0004055","Account Owner":"Olivia Shaw","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":96,"Priority":"LOW","Account Name":"UPMC","Opty Number":"OPTY5254999","BU":"Asset Management","Pipeline $":250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-22","Days Out":253,"District":"Midwest Healthcare","Acct #":"ACCT0010054","Account Owner":"Marty Huizinga","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":97,"Priority":"LOW","Account Name":"Orlando Health Inc","Opty Number":"OPTY5279513","BU":"Customer Service Management", "Pipeline $": 375448,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-23","Days Out":254,"District":"South Healthcare","Acct #":"ACCT0009637","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":98,"Priority":"LOW","Account Name":"Shriners Hospitals for Children","Opty Number":"OPTY5297460","BU":"Field Service Management","Pipeline $":64887,"Stage":"2 - Discovery (5%)","Close Date":"2026-10-30","Days Out":261,"District":"South Healthcare","Acct #":"ACCT0009555","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":99,"Priority":"LOW","Account Name":"St Luke's Health Network","Opty Number":"OPTY5303959","BU":"IT Operations Management", "Pipeline $": 500000,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-13","Days Out":275,"District":"Northeast Healthcare","Acct #":"ACCT0007180","Account Owner":"Steve Cannon","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":100,"Priority":"LOW","Account Name":"University of Miami Health System","Opty Number":"OPTY5275784","BU":"Asset Management", "Pipeline $": 150000,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-18","Days Out":280,"District":"South Healthcare","Acct #":"ACCT0004247","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":101,"Priority":"LOW","Account Name":"Trilogy Health Services LLC","Opty Number":"OPTY5290443","BU":"Asset Management","Pipeline $":89000,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-18","Days Out":280,"District":"Midwest Healthcare","Acct #":"ACCT0130494","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":102,"Priority":"LOW","Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5291442","BU":"HR Service Delivery", "Pipeline $": 320000,"Stage":"2 - Discovery (5%)","Close Date":"2026-11-20","Days Out":282,"District":"South Healthcare","Acct #":"ACCT0014038","Account Owner":"Haley Vaclavik","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":103,"Priority":"LOW","Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5289338","BU":"IT Service Management", "Pipeline $": 99000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-01","Days Out":293,"District":"South Healthcare","Acct #":"ACCT0014038","Account Owner":"Haley Vaclavik","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":104,"Priority":"LOW","Account Name":"North Mississippi Medical Center, Inc.","Opty Number":"OPTY5296337","BU":"Integrated Risk Management","Pipeline $":390000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-04","Days Out":296,"District":"South Healthcare","Acct #":"ACCT0007973","Account Owner":"Jay Fogarty","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":105,"Priority":"LOW","Account Name":"New York Presbyterian Hospital","Opty Number":"OPTY5303957","BU":"IT Service Management", "Pipeline $": 750000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-08","Days Out":300,"District":"Northeast Healthcare","Acct #":"ACCT0004565","Account Owner":"Kirsten Giordano","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":106,"Priority":"LOW","Account Name":"University of Miami Health System","Opty Number":"OPTY5291448","BU":"IT Service Management", "Pipeline $": 368000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-11","Days Out":303,"District":"South Healthcare","Acct #":"ACCT0004247","Account Owner":"Kristin Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":107,"Priority":"LOW","Account Name":"Genesis HealthCare Inc","Opty Number":"OPTY5296594","BU":"IT Service Management", "Pipeline $": 100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-11","Days Out":303,"District":"Northeast Healthcare","Acct #":"ACCT0004324","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":108,"Priority":"LOW","Account Name":"Vanderbilt University Medical Center","Opty Number":"OPTY5290446","BU":"HR Service Delivery","Pipeline $":167000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-16","Days Out":308,"District":"Midwest Healthcare","Acct #":"ACCT0006665","Account Owner":"Sarah Ezell","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":109,"Priority":"LOW","Account Name":"Trinity Health Corp","Opty Number":"OPTY5252928","BU":"Integrated Risk Management", "Pipeline $": 500000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-17","Days Out":309,"District":"Midwest Healthcare","Acct #":"ACCT0001567","Account Owner":"Marty Huizinga","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":110,"Priority":"LOW","Account Name":"Cooper Health Systems","Opty Number":"OPTY5289347","BU":"IT Service Management", "Pipeline $": 50000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0002629","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":111,"Priority":"LOW","Account Name":"Guthrie Healthcare System","Opty Number":"OPTY5286046","Stage":"2 - Discovery (5%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0010546","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":112,"Priority":"LOW","Account Name":"University Of Rochester Medical Center","Opty Number":"OPTY5302465","BU":"Integrated Risk Management", "Pipeline $": 250000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0012122","Account Owner":"Jeffrey Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":113,"Priority":"LOW","Account Name":"Albany Med Health System a/k/a Albany Medical Center","Opty Number":"OPTY5299587","BU":"Integrated Risk Management", "Pipeline $": 116000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0015836","Account Owner":"Jeffrey Richardson","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":114,"Priority":"LOW","Account Name":"Reading Hospital","Opty Number":"OPTY5260890","BU":"Integrated Risk Management","Pipeline $":100000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-18","Days Out":310,"District":"Northeast Healthcare","Acct #":"ACCT0098066","Account Owner":"Matthew Curran","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":115,"Priority":"LOW","Account Name":"Bronson Health Care Group Inc","Opty Number":"OPTY5267226","BU":"Integrated Risk Management", "Pipeline $": 125000,"Stage":"2 - Discovery (5%)","Close Date":"2026-12-31","Days Out":323,"District":"Midwest Healthcare","Acct #":"ACCT0001010","Account Owner":"Marty Huizinga","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":116,"Priority":"LOW","Account Name":"Louisiana Children's Medical Center","Opty Number":"OPTY5287329","Stage":"2 - Discovery (5%)","Close Date":"2027-04-27","Days Out":440,"District":"South Healthcare","Acct #":"ACCT0053696","Account Owner":"Kirk Small","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":117,"Priority":"LOW","Account Name":"Texas Health Resources Inc","Opty Number":"OPTY5282040","BU":"HR Service Delivery", "Pipeline $": 50000,"Stage":"2 - Discovery (5%)","Close Date":"2027-05-05","Days Out":448,"District":"South Healthcare","Acct #":"ACCT0005813","Account Owner":"Sean Fahey","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":118,"Priority":"LOW","Account Name":"Ochsner Clinic Foundation d/b/a Ochsner Health System","Opty Number":"OPTY5296648","BU":"HR Service Delivery", "Pipeline $": 53500,"Stage":"2 - Discovery (5%)","Close Date":"2027-05-14","Days Out":457,"District":"South Healthcare","Acct #":"ACCT0008709","Account Owner":"Kirk Small","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank":119,"Priority":"LOW","Account Name":"Memorial Healthcare System","Opty Number":"OPTY5302529","BU":"HR Service Delivery", "Pipeline $": 472800,"Stage":"2 - Discovery (5%)","Close Date":"2027-05-27","Days Out":470,"District":"South Healthcare","Acct #":"ACCT0010386","Account Owner":"Rafe Brown","Priority Score":3,"Action Required":"Monitor; build relationship"},{"Rank": 9000, "Priority": "LOW", "Priority Score": 3, "Account Name": "Wellspan Health", "Opty Number": "OPTY5299893", "BU": "Security Operations", "Stage": "4a - Present Solution", "Close Date": "2026-12-18", "Days Out": 288, "District": "Northeast Healthcare", "Acct #": "ACCT0000229", "Account Owner": "Steve Cannon", "Action Required": "Review opportunity"},{"Rank": 9001, "Priority": "LOW", "Priority Score": 3, "Account Name": "Community Health Network Inc", "Opty Number": "OPTY5258175", "BU": "Security Operations", "Pipeline $": 300000, "Stage": "2 - Discovery", "Close Date": "2027-02-25", "Days Out": 357, "District": "Midwest Healthcare", "Acct #": "ACCT0000238", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9003, "Priority": "LOW", "Priority Score": 3, "Account Name": "Trinity Health Corp", "Opty Number": "OPTY5269508", "BU": "IT Service Management", "Stage": "3 - Objectives", "Close Date": "2026-12-30", "Days Out": 300, "District": "Midwest Healthcare", "Acct #": "ACCT0001567", "Account Owner": "Marty Huizinga", "Action Required": "Review opportunity"},{"Rank": 9004, "Priority": "LOW", "Priority Score": 3, "Account Name": "Trinity Health Corp", "Opty Number": "OPTY5309539", "BU": "HR Service Delivery", "Pipeline $": 250000, "Stage": "2 - Discovery", "Close Date": "2026-09-18", "Days Out": 197, "District": "Midwest Healthcare", "Acct #": "ACCT0001567", "Account Owner": "Marty Huizinga", "Action Required": "Review opportunity"},{"Rank": 9005, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "CHRISTUS Health", "Opty Number": "OPTY5305656", "BU": "Integrated Risk Management", "Pipeline $": 195000, "Stage": "3 - Objectives", "Close Date": "2026-07-22", "Days Out": 139, "District": "South Healthcare", "Acct #": "ACCT0002330", "Account Owner": "Kirk Small", "Action Required": "Review opportunity"},{"Rank": 9006, "Priority": "LOW", "Priority Score": 3, "Account Name": "Boston Children's Hospital", "Opty Number": "OPTY5306996", "BU": "IT Service Management", "Pipeline $": 178000, "Stage": "2 - Discovery", "Close Date": "2026-12-25", "Days Out": 295, "District": "Northeast Healthcare", "Acct #": "ACCT0002603", "Account Owner": "Benjamin Casey", "Action Required": "Review opportunity"},{"Rank": 9007, "Priority": "HIGH", "Priority Score": 6, "Account Name": "NYU Langone Health", "Opty Number": "OPTY5229826", "Stage": "3 - Objectives", "Close Date": "2026-06-24", "Days Out": 111, "District": "Northeast Healthcare", "Acct #": "ACCT0002835", "Account Owner": "Matthew Curran", "Action Required": "Review opportunity"},{"Rank": 9008, "Priority": "LOW", "Priority Score": 3, "Account Name": "Penn State Health", "Opty Number": "OPTY5270482", "BU": "IT Service Management", "Pipeline $": 4500, "Stage": "3 - Objectives", "Close Date": "2026-12-19", "Days Out": 289, "District": "Northeast Healthcare", "Acct #": "ACCT0002847", "Account Owner": "Matthew Curran", "Action Required": "Review opportunity"},{"Rank": 9009, "Priority": "LOW", "Priority Score": 3, "Account Name": "Virtua Health, Inc.", "Opty Number": "OPTY5236448", "BU": "Field Service Management", "Pipeline $": 99000, "Stage": "2 - Discovery", "Close Date": "2026-09-09", "Days Out": 188, "District": "Northeast Healthcare", "Acct #": "ACCT0002968", "Account Owner": "John Banyra", "Action Required": "Review opportunity"},{"Rank": 9010, "Priority": "LOW", "Priority Score": 3, "Account Name": "Virtua Health, Inc.", "Opty Number": "OPTY5236452", "BU": "Healthcare and Life Sciences", "Stage": "2 - Discovery", "Close Date": "2026-09-16", "Days Out": 195, "District": "Northeast Healthcare", "Acct #": "ACCT0002968", "Account Owner": "John Banyra", "Action Required": "Review opportunity"},{"Rank": 9011, "Priority": "LOW", "Priority Score": 3, "Account Name": "Virtua Health, Inc.", "Opty Number": "OPTY5260889", "BU": "IT Service Management", "Pipeline $": 100000, "Stage": "2 - Discovery", "Close Date": "2026-09-18", "Days Out": 197, "District": "Northeast Healthcare", "Acct #": "ACCT0002968", "Account Owner": "John Banyra", "Action Required": "Review opportunity"},{"Rank": 9012, "Priority": "LOW", "Priority Score": 3, "Account Name": "Nationwide Children's Hospital", "Opty Number": "OPTY5267238", "BU": "Customer Service Management, Healthcare and Life Sciences", "Pipeline $": 300000, "Stage": "4a - Present Solution", "Close Date": "2026-09-23", "Days Out": 202, "District": "Midwest Healthcare", "Acct #": "ACCT0003193", "Account Owner": "Robin Long", "Action Required": "Review opportunity"},{"Rank": 9013, "Priority": "HIGH", "Priority Score": 5, "Account Name": "Nationwide Children's Hospital", "Opty Number": "OPTY5300565", "BU": "App Engine Core, IntegrationHub, Workflow Data Fabric", "Pipeline $": 72492, "Stage": "4a - Present Solution", "Close Date": "2026-08-06", "Days Out": 154, "District": "Midwest Healthcare", "Acct #": "ACCT0003193", "Account Owner": "Robin Long", "Action Required": "Review opportunity"},{"Rank": 9015, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "The Cleveland Clinic Foundation", "Opty Number": "OPTY5290108", "BU": "Source To Pay Operations", "Pipeline $": 45000, "Stage": "2 - Discovery", "Close Date": "2026-08-05", "Days Out": 153, "District": "Midwest Healthcare", "Acct #": "ACCT0004055", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9016, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "The Cleveland Clinic Foundation", "Opty Number": "OPTY5304240", "BU": "AI Control Tower, Integrated Risk Management", "Stage": "2 - Discovery", "Close Date": "2026-08-21", "Days Out": 169, "District": "Midwest Healthcare", "Acct #": "ACCT0004055", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9017, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Childrens Hospital Of Philadelphia", "Opty Number": "OPTY5308833", "BU": "HR Service Delivery", "Pipeline $": 300000, "Stage": "2 - Discovery", "Close Date": "2026-07-31", "Days Out": 148, "District": "Northeast Healthcare", "Acct #": "ACCT0004305", "Account Owner": "Steve Cannon", "Action Required": "Review opportunity"},{"Rank": 9018, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Montefiore Einstein, Inc.", "Opty Number": "OPTY5308821", "BU": "Legal Service Delivery", "Pipeline $": 200000, "Stage": "2 - Discovery", "Close Date": "2026-07-31", "Days Out": 148, "District": "Northeast Healthcare", "Acct #": "ACCT0004549", "Account Owner": "John Banyra", "Action Required": "Review opportunity"},{"Rank": 9019, "Priority": "HIGH", "Priority Score": 5, "Account Name": "Bon Secours Mercy Health Inc", "Opty Number": "OPTY5296579", "BU": "Customer Service Management, Healthcare and Life Sciences", "Pipeline $": 167000, "Stage": "4a - Present Solution", "Close Date": "2026-07-17", "Days Out": 134, "District": "Midwest Healthcare", "Acct #": "ACCT0005388", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9020, "Priority": "HIGH", "Priority Score": 5, "Account Name": "Bon Secours Mercy Health Inc", "Opty Number": "OPTY5300144", "BU": "Integrated Risk Management", "Stage": "4a - Present Solution", "Close Date": "2026-08-05", "Days Out": 153, "District": "Midwest Healthcare", "Acct #": "ACCT0005388", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9021, "Priority": "CRITICAL", "Priority Score": 10, "Account Name": "BayCare Health System", "Opty Number": "OPTY5268035", "BU": "Customer Service Management", "Pipeline $": 182450, "Stage": "2 - Discovery", "Close Date": "2026-04-24", "Days Out": 50, "District": "South Healthcare", "Acct #": "ACCT0006187", "Account Owner": "Rafe Brown", "Action Required": "Review opportunity"},{"Rank": 9022, "Priority": "LOW", "Priority Score": 3, "Account Name": "Kettering Health", "Opty Number": "OPTY5307216", "BU": "IT Service Management", "Stage": "2 - Discovery", "Close Date": "2026-09-09", "Days Out": 188, "District": "Midwest Healthcare", "Acct #": "ACCT0006667", "Account Owner": "Robin Long", "Action Required": "Review opportunity"},{"Rank": 9023, "Priority": "LOW", "Priority Score": 3, "Account Name": "Kettering Health", "Opty Number": "OPTY5309536", "BU": "HR Service Delivery", "Pipeline $": 250000, "Stage": "2 - Discovery", "Close Date": "2026-09-18", "Days Out": 197, "District": "Midwest Healthcare", "Acct #": "ACCT0006667", "Account Owner": "Robin Long", "Action Required": "Review opportunity"},{"Rank": 9024, "Priority": "CRITICAL", "Priority Score": 10, "Account Name": "ProMedica Health Systems Inc", "Opty Number": "OPTY5261084", "BU": "Asset Management", "Stage": "2 - Discovery", "Close Date": "2026-05-14", "Days Out": 70, "District": "Midwest Healthcare", "Acct #": "ACCT0006710", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9025, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "ProMedica Health Systems Inc", "Opty Number": "OPTY5304236", "BU": "App Engine Core", "Pipeline $": 147000, "Stage": "2 - Discovery", "Close Date": "2026-08-21", "Days Out": 169, "District": "Midwest Healthcare", "Acct #": "ACCT0006710", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9026, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "ProMedica Health Systems Inc", "Opty Number": "OPTY5304237", "BU": "App Engine Core", "Stage": "2 - Discovery", "Close Date": "2026-08-21", "Days Out": 169, "District": "Midwest Healthcare", "Acct #": "ACCT0006710", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9028, "Priority": "LOW", "Priority Score": 3, "Account Name": "Premier Health Partners", "Opty Number": "OPTY5280043", "BU": "Customer Service Management, Healthcare and Life Sciences", "Pipeline $": 150000, "Stage": "2 - Discovery", "Close Date": "2026-11-26", "Days Out": 266, "District": "Midwest Healthcare", "Acct #": "ACCT0006863", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9029, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Children's Hospital Medical Center of Akron", "Opty Number": "OPTY5280952", "BU": "AI Control Tower, Asset Management", "Pipeline $": 960, "Stage": "2 - Discovery", "Close Date": "2026-07-07", "Days Out": 124, "District": "Midwest Healthcare", "Acct #": "ACCT0007401", "Account Owner": "Robin Long", "Action Required": "Review opportunity"},{"Rank": 9030, "Priority": "LOW", "Priority Score": 3, "Account Name": "United Regional Health Care System", "Opty Number": "OPTY5267778", "BU": "Customer Service Management, Healthcare and Life Sciences", "Stage": "3 - Objectives", "Close Date": "2026-09-18", "Days Out": 197, "District": "South Healthcare", "Acct #": "ACCT0008340", "Account Owner": "Kirk Small", "Action Required": "Review opportunity"},{"Rank": 9031, "Priority": "LOW", "Priority Score": 3, "Account Name": "Tenet Business Services Corporation", "Opty Number": "OPTY5268033", "BU": "Customer Service Management", "Pipeline $": 200000, "Stage": "2 - Discovery", "Close Date": "2026-12-14", "Days Out": 284, "District": "South Healthcare", "Acct #": "ACCT0008670", "Account Owner": "Sean Fahey", "Action Required": "Review opportunity"},{"Rank": 9032, "Priority": "LOW", "Priority Score": 3, "Account Name": "Memorial Hermann Hospital System", "Opty Number": "OPTY5267981", "BU": "Customer Service Management", "Stage": "3 - Objectives", "Close Date": "2026-09-18", "Days Out": 197, "District": "South Healthcare", "Acct #": "ACCT0008797", "Account Owner": "Haley Vaclavik", "Action Required": "Review opportunity"},{"Rank": 9033, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Franciscan Alliance Inc", "Opty Number": "OPTY5294738", "BU": "Security Operations", "Pipeline $": 212000, "Stage": "2 - Discovery", "Close Date": "2026-07-28", "Days Out": 145, "District": "Midwest Healthcare", "Acct #": "ACCT0008959", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9034, "Priority": "HIGH", "Priority Score": 5, "Account Name": "Health & Hospital Corp", "Opty Number": "OPTY5295948", "BU": "Workflow Data Fabric", "Stage": "4a - Present Solution", "Close Date": "2026-07-15", "Days Out": 132, "District": "Midwest Healthcare", "Acct #": "ACCT0009520", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9035, "Priority": "LOW", "Priority Score": 3, "Account Name": "RWJBH Corporate Services, Inc.", "Opty Number": "OPTY5175733", "BU": "Government", "Pipeline $": 200000, "Stage": "3 - Objectives", "Close Date": "2026-09-24", "Days Out": 203, "District": "Northeast Healthcare", "Acct #": "ACCT0012093", "Account Owner": "John Banyra", "Action Required": "Review opportunity"},{"Rank": 9036, "Priority": "LOW", "Priority Score": 3, "Account Name": "Baylor Scott & White Health LLC", "Opty Number": "OPTY5106600", "BU": "Field Service Management", "Pipeline $": 144000, "Stage": "4a - Present Solution", "Close Date": "2027-06-29", "Days Out": 481, "District": "South Healthcare", "Acct #": "ACCT0012212", "Account Owner": "Kirk Small", "Action Required": "Review opportunity"},{"Rank": 9037, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Roswell Park Cancer Institute", "Opty Number": "OPTY5245823", "BU": "IT Service Management", "Stage": "2 - Discovery", "Close Date": "2026-07-16", "Days Out": 133, "District": "Northeast Healthcare", "Acct #": "ACCT0014458", "Account Owner": "Jeffrey Richardson", "Action Required": "Review opportunity"},{"Rank": 9038, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Michigan Medicine", "Opty Number": "OPTY5304233", "BU": "AI Control Tower, Integrated Risk Management", "Pipeline $": 116000, "Stage": "2 - Discovery", "Close Date": "2026-08-21", "Days Out": 169, "District": "Midwest Healthcare", "Acct #": "ACCT0014575", "Account Owner": "Olivia Shaw", "Action Required": "Review opportunity"},{"Rank": 9039, "Priority": "HIGH", "Priority Score": 5, "Account Name": "Beacon Health System Inc", "Opty Number": "OPTY5305529", "BU": "Source To Pay Operations", "Stage": "4a - Present Solution", "Close Date": "2026-09-01", "Days Out": 180, "District": "Midwest Healthcare", "Acct #": "ACCT0027760", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9040, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Baptist Health of Montgomery", "Opty Number": "OPTY5291523", "BU": "IT Service Management", "Pipeline $": 45000, "Stage": "2 - Discovery", "Close Date": "2026-07-16", "Days Out": 133, "District": "South Healthcare", "Acct #": "ACCT0053132", "Account Owner": "Jay Fogarty", "Action Required": "Review opportunity"},{"Rank": 9041, "Priority": "LOW", "Priority Score": 3, "Account Name": "Louisiana Children's Medical Center", "Opty Number": "OPTY5282037", "BU": "IT Operations Management", "Stage": "4a - Present Solution", "Close Date": "2027-01-14", "Days Out": 315, "District": "South Healthcare", "Acct #": "ACCT0053696", "Account Owner": "Kirk Small", "Action Required": "Review opportunity"},{"Rank": 9042, "Priority": "MEDIUM", "Priority Score": 4, "Account Name": "Nordic Consulting Partners Inc", "Opty Number": "OPTY6011511", "BU": "Healthcare and Life Sciences", "Pipeline $": 180000, "Stage": "2 - Discovery", "Close Date": "2026-08-19", "Days Out": 167, "District": "Midwest Healthcare", "Acct #": "ACCT0075470", "Account Owner": "Mac Johnson", "Action Required": "Review opportunity"},{"Rank": 9043, "Priority": "LOW", "Priority Score": 3, "Account Name": "Teladoc Inc", "Opty Number": "OPTY5286425", "BU": "Workplace Service Delivery", "Stage": "2 - Discovery", "Close Date": "2027-01-29", "Days Out": 330, "District": "Northeast Healthcare", "Acct #": "ACCT0076577", "Account Owner": "Kirsten Giordano", "Action Required": "Review opportunity"},{"Rank": 9044, "Priority": "LOW", "Priority Score": 3, "Account Name": "SolutionHealth", "Opty Number": "OPTY5266330", "BU": "IT Service Management", "Pipeline $": 178000, "Stage": "2 - Discovery", "Close Date": "2026-09-25", "Days Out": 204, "District": "Northeast Healthcare", "Acct #": "ACCT0180055", "Account Owner": "Jack Lowell", "Action Required": "Review opportunity"}];

const SA = [{"Account Name":"Michigan Medicine","Opty Number":"OPTY5290280","BU":"Customer Service Management, IT Service Management","Close Date":"2026-07-16","Days Out":155,"District":"Midwest Healthcare","Priority":"CRITICAL","Account Owner":"Olivia Shaw","Next Step":"Negotiate terms → drive to Closed Won","Notes":"XR 2/11: Updated EB+Champ into buying group"},{"Account Name":"Nordic Consulting Partners Inc","Opty Number":"OPTY5282058","BU":"Customer Service Management","Close Date":"2026-12-04","Days Out":296,"District":"Midwest Healthcare","Priority":"CRITICAL","Account Owner":"Mac Johnson","Next Step":"Negotiate terms → drive to Closed Won","Notes":""},{"Account Name":"Tenet Business Services Corporation","Opty Number":"OPTY5296828","BU":"App Engine Core","Close Date":"2026-12-14","Days Out":306,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Sean Fahey","Next Step":"Negotiate terms → drive to Closed Won","Notes":""},{"Account Name":"NYU Langone Health","Opty Number":"OPTY5268072","BU":"Healthcare and Life Sciences","Close Date":"2026-12-19","Days Out":311,"District":"Northeast Healthcare","Priority":"CRITICAL","Account Owner":"Matthew Curran","Next Step":"Negotiate terms → drive to Closed Won","Notes":"XR 2/11: Working w/ Callen on notes. EB + Champ ID'd"},{"Account Name":"Singing River Heath System","Opty Number":"OPTY5294361","BU":"Platform Security","Close Date":"2026-05-14","Days Out":92,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Jay Fogarty","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Updated opty sum. w/ Buying Group"},{"Account Name":"Beacon Health System Inc","Opty Number":"OPTY5287512","Close Date":"2026-06-04","Days Out":113,"District":"Midwest Healthcare","Priority":"CRITICAL","Account Owner":"Mac Johnson","Next Step":"Identify EB → get executive sponsorship","Notes":""},{"Account Name":"UC Health LLC","Opty Number":"OPTY5288434","BU":"Security Operations","Close Date":"2026-06-09","Days Out":118,"District":"Midwest Healthcare","Priority":"CRITICAL","Account Owner":"Mac Johnson","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Customer wants demo; need more discovery"},{"Account Name":"Franciscan Missionaries Of Our Lady Health System Inc","Opty Number":"OPTY5289729","BU":"Customer Service Management","Close Date":"2026-11-25","Days Out":264,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Kirk Small","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Reaching out to Kirk Small"},{"Account Name":"Virtua Health, Inc.","Opty Number":"OPTY5299598","BU":"Integrated Risk Management","Close Date":"2026-09-16","Days Out":194,"District":"Northeast Healthcare","Priority":"CRITICAL","Account Owner":"John Banyra","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Reaching out to John Banyra"},{"Account Name":"Kaleida Health","Opty Number":"OPTY5272937","BU":"Healthcare and Life Sciences","Close Date":"2027-03-31","Days Out":390,"District":"Northeast Healthcare","Priority":"CRITICAL","Account Owner":"Jeffrey Richardson","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Demo scheduled w/ Andy and Kelly. ID'd EB+Champ"},{"Account Name":"Children's Health System Of Texas","Opty Number":"OPTY5268992","Close Date":"2026-06-24","Days Out":133,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Haley Vaclavik","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Reaching out to HaleyV. + Sav"},{"Account Name":"Integris Health Inc","Opty Number":"OPTY5239185","BU":"HR Service Delivery","Close Date":"2026-07-30","Days Out":146,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Sean Fahey","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Reach out to Sean"},{"Account Name":"Deaconess Health System Inc","Opty Number":"OPTY5258523","BU":"Asset Management","Close Date":"2026-07-23","Days Out":162,"District":"Midwest Healthcare","Priority":"CRITICAL","Account Owner":"Mac Johnson","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Reaching out to Mac; Champ ID'd- Danny Scott"},{"Account Name":"Louisiana Children's Medical Center","Opty Number":"OPTY5300714","BU":"Business Continuity Management, Integrated Risk Management","Close Date":"2026-08-06","Days Out":176,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Kirk Small","Next Step":"Identify EB → get executive sponsorship","Notes":"XR 2/11: Buying Group updated. Champ ID'd- Cathy S."},{"Account Name":"Cook Children's Health Care System","Opty Number":"OPTY5290383","BU":"Integrated Risk Management","Close Date":"2026-10-16","Days Out":224,"District":"South Healthcare","Priority":"CRITICAL","Account Owner":"Haley Vaclavik","Next Step":"Demo/present solution → validate technical fit","Notes":"XR 2/11: Updated opty sum. Connect w/ Haley"},{"Account Name":"MD Anderson Cancer Center","Opty Number":"OPTY5301782","BU":"Integrated Risk Management","Close Date":"2026-08-19","Days Out":166,"District":"South Healthcare","Priority":"HIGH","Account Owner":"Haley Vaclavik","Next Step":"Demo/present solution → validate technical fit","Notes":"XR 2/20: Demos complete; Stage 5"},{"Account Name":"COREWELL HEALTH","Opty Number":"OPTY5269500","BU":"IT Service Management","Close Date":"2026-09-15","Days Out":193,"District":"Midwest Healthcare","Priority":"HIGH","Account Owner":"Marty Huizinga","Next Step":"Demo/present solution → validate technical fit","Notes":"XR 2/20: Opty sum updated; renewal"},{"Account Name":"Baptist Healthcare System","Opty Number":"OPTY5290342","BU":"HR Service Delivery","Close Date":"2026-10-30","Days Out":238,"District":"Midwest Healthcare","Priority":"HIGH","Account Owner":"Robin Long","Next Step":"Demo/present solution → validate technical fit","Notes":"XR 2/12: Robin engaged"}];

const CI = [{"Account Name":"Brookdale Senior Living Inc","Opty Number":"OPTY5290413","Stage":"Closed No Decision","Close Date":"2026-06-17","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"},{"Account Name":"Memorial Hermann Hospital System","Opty Number":"OPTY5268124","Stage":"Closed No Decision","Close Date":"2026-04-18","District":"South Healthcare","Account Owner":"Haley Vaclavik","Recommendation":"Assess reactivation potential"},{"Account Name":"Baptist Health South Florida inc","Opty Number":"OPTY5296617","Stage":"Closed No Decision","Close Date":"2026-05-22","District":"South Healthcare","Account Owner":"Rafe Brown","Recommendation":"Assess reactivation potential"},{"Account Name":"Baptist Memorial","Opty Number":"OPTY5290403","Stage":"Closed No Decision","Close Date":"2026-06-17","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"},{"Account Name":"West Tennessee Healthcare","Opty Number":"OPTY5288777","Stage":"Closed No Decision","Close Date":"2026-06-10","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"},{"Account Name":"Quorum Health Corp","Opty Number":"OPTY5282105","Stage":"Closed No Decision","Close Date":"2026-05-05","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"},{"Account Name":"Trilogy Health Services LLC","Opty Number":"OPTY5290406","Stage":"Closed No Decision","Close Date":"2026-06-17","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"},{"Account Name":"Trilogy Health Services LLC","Opty Number":"OPTY5290438","Stage":"Closed No Decision","Close Date":"2026-06-17","District":"Midwest Healthcare","Account Owner":"Sarah Ezell","Recommendation":"Assess reactivation potential"}];

const ORIG_PRIORITY = Object.fromEntries(PR.map(o => [o["Opty Number"], o.Priority]));
const PRIORITY_ORDER = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

function buildSystem(effPR, notes, closedOverrides) {
  const today = new Date().toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"});
  const livePR = effPR.map(o => ({ ...o, Notes: notes[o["Opty Number"]] || "" }));
  const today2 = new Date(); today2.setHours(0,0,0,0);
  const liveSA = SA.map(o => {
    const cd = o["Close Date"] ? new Date(o["Close Date"]) : null;
    const dOut = cd ? Math.ceil((cd - today2) / 86400000) : o["Days Out"];
    return { ...o, "Days Out": dOut, Stage: normalizeStageData(o.Stage), Notes: notes[o["Opty Number"]] || o.Notes || "" };
  });
  const crit = effPR.filter(o => o.Priority === "CRITICAL").length;
  const high = effPR.filter(o => o.Priority === "HIGH").length;
  return `You are Xavier Ruiz's pipeline intelligence agent for his HCLS portfolio at ServiceNow.

XAVIER'S ROLE - READ THIS CAREFULLY:
Xavier is a Customer Acceleration Associate (CAA) at ServiceNow focused on Healthcare & Life Sciences. The CAA role is laser-focused on pipeline maturation - re-engaging inactive or at-risk opportunities, deepening buying group engagement, and accelerating deals to close. For context, ServiceNow currently has $1.16B in stalled pipeline across 7,280 deals that haven't progressed in over six months but are still forecasted to close within the next four quarters. Unlocking even a fraction of this value is a massive opportunity for growth.

Xavier's primary motion is identifying deals where the customer has gone quiet or engagement has stalled, then re-engaging the customer directly to restore momentum. He works alongside AEs but owns the re-engagement conversation. He supports deals all the way through to close - don't limit recommendations by stage.

XAVIER'S ACTIVE QUEUE = optys where customer engagement has gone cold or there's been no meaningful progress recently.
An opty is moving (de-prioritize it) when Notes indicate:
- A discovery call is scheduled or recently happened with the customer
- A demo has been scheduled or completed with the customer
- An RFP or proposal is under active review
- A follow-up meeting with the customer is confirmed
- There is active customer engagement and the deal is progressing
Account Owner = AE. XR notes = Xavier's field notes prefixed "XR M/DD:".

PIPELINE (data as of Feb 11, 2026; today is ${today}) - 161 active optys:
Priority Ranked LIVE: ${JSON.stringify(livePR)}
Stage Advancement LIVE: ${JSON.stringify(liveSA)}
Closed/Inactive: ${JSON.stringify(CI)}

Districts: South (42), Midwest (40), Northeast (37). Priority: CRITICAL(${crit}), HIGH(${high}).
Be direct. Lead with the answer. Tell Xavier what to DO.
When listing optys include: Account, Opty #, Stage, Close Date, AE.
When recommending actions for Xavier, ALWAYS end with a section formatted exactly like this:
## YOUR NEXT STEPS:
1. [First action]
2. [Second action]
3. [Third action]
This format allows Xavier to log each step individually with one click.
When recommending Xavier's top actions: ALWAYS check Notes first. Prioritize deals where the customer has gone quiet or engagement has stalled. Skip optys with recent confirmed customer activity.

BULK OPERATIONS - READ CAREFULLY:
When Xavier asks you to update, check off, or change something for multiple optys at once (e.g. "update all of Mac Johnson's notes", "check off all Sarah Ezell's opty summaries", "mark all Northeast optys as LOW"), you MUST:
1. First, list out EVERY opty that qualifies - count them explicitly: "Found X optys for [AE/criteria]:"
2. Then write ALL the required tags for ALL of them - do not stop partway through
3. Finally confirm: "Done - applied to all X optys."
If you realize you are running long, NEVER stop partway. Complete every tag. It is better to write less prose and more tags than to explain yourself and miss optys.
When in doubt about whether an opty qualifies, include it.

IMPORTANT - NOTE UPDATES: When Xavier adds or updates a note, you MUST write BOTH tags:
1. [NOTE_UPDATE:OPTY_NUMBER:note text here]
2. [PRIORITY_UPDATE:OPTY_NUMBER:NEW_PRIORITY]
Never write a NOTE_UPDATE without a PRIORITY_UPDATE.

PRIORITY DECISION RULES after a note update:
- Set LOW if: demo scheduled/done, RFP submitted, call booked, meeting confirmed, AE engaged - opty is UNSTALLED
- Set MEDIUM if: some activity but outcome unclear, waiting on customer
- Set HIGH if: stalled, close date within 120 days, champion ID'd but no EB
- Set CRITICAL if: stalled, close date within 90 days, AND originally CRITICAL in source data
- NEVER elevate to CRITICAL if opty was not originally CRITICAL

STANDALONE PRIORITY UPDATES: When Xavier explicitly asks to change priority, write [PRIORITY_UPDATE:OPTY_NUMBER:NEW_PRIORITY].

RANK UPDATES: Xavier can manually reorder optys within their priority tier.
If Xavier asks to change a stage (e.g. "move OPTY to Stage 3" or "that deal is now in Discovery"), write [STAGE_UPDATE:OPTY_NUMBER:FULL_STAGE_NAME].
If Xavier asks to check off or mark an opty summary as submitted/complete (e.g. "check off OPTY123", "mark opty summary done for Michigan Medicine", "I submitted the opty summary for OPTY5290280"), write [SUMMARY_CHECK:OPTY_NUMBER] for each one. You can write multiple on separate lines.
Valid stages: "1 - Opportunity", "2 - Discovery", "3 - Objectives", "4a - Present Solution", "4b - Economic Buyer Identified", "5 - Economic Buyer Validation", "6 - Validation Completed", "7 - Deal Imminent".

RANK UPDATES: Xavier can manually reorder optys within their priority tier.
If Xavier says things like "move OPTY to rank 3", "that's not my top priority right now", "deprioritize X within critical", or asks to change the order - write [RANK_UPDATE:OPTY_NUMBER:NEW_RANK].
The rank is the absolute position in the full list (e.g. rank 1 = top of entire pipeline, rank 4 = 4th overall).
You CAN move an opty to any rank - this is a positional override, NOT a priority change.
This is different from changing CRITICAL/HIGH/MEDIUM/LOW - the priority level stays the same, just the order within the list changes.
Always confirm both changes. Use today's actual date in XR M/DD: prefix.

MANUALLY CLOSED OPTYS: ${Object.keys(closedOverrides||{}).length} optys have been manually moved to Closed/Inactive.
If Xavier asks to close an opty, write [CLOSE_OPTY:OPTY_NUMBER:STAGE] where STAGE is one of: Closed Won, Closed Lost, Closed No Decision. It will be moved out of active pipeline automatically.

--- SERVICENOW SALES SKILLS ---

SKILL 4 - MEETING PREP (Re-engagement Call Preparation)
Use when Xavier asks: help me prep for my call, what should I say to, talking points for, how do I re-engage.

TWO MODES - auto-detect:
QUICK MODE (under 15 min or quick/fast requested): 3-5 talking points under 300 words. Lead with re-engagement hook, one proof point, clear ask.
COMPREHENSIVE MODE (default): Full brief with:
1. CONTACT SNAPSHOT - Name, title, known priorities
2. RE-ENGAGEMENT HOOK - Specific reason to reconnect relevant to THEM. Reference what happened last and bridge to now.
3. KEY TALKING POINTS (3-5) - What to say and why it matters to this contact
4. OBJECTION ANTICIPATION - 1-2 likely pushbacks and how to handle
5. THE ASK - One specific low-friction next step (call, EB intro, site visit)

CAA GUIDANCE: Lead with curiosity not urgency. Name the stall - "It looks like things went quiet after [event] - what shifted?" is stronger than pretending the silence did not happen. Reference stage, close date, last activity note. Goal is one concrete next step, not a close.

SKILL 5 - DISCOVERY AND RE-ENGAGEMENT QUESTIONS
Use when Xavier asks: what should I ask, discovery questions for, help me qualify, how do I re-open this deal.

FOR STALLED DEALS - generate questions across three categories:

DIAGNOSE THE STALL (pick 2-3):
- What changed on your end after [last touchpoint]?
- Where does this project stand internally right now?
- Has the business problem we discussed shifted or evolved?
- What would it take to get this back on the calendar?
- Is there a competing priority that pushed this down the list?

RE-QUALIFY THE OPPORTUNITY (pick 2-3):
- Is the problem we originally discussed still causing pain?
- Who is still actively involved in evaluating this?
- Has budget or timeline shifted since we last spoke?
- What does success look like for you by end of [quarter/year]?

BUILD MOMENTUM (pick 1-2):
- What would be most useful for me to bring to the next conversation?
- If I could solve [specific pain from notes], would that be worth a 30-minute call?
- Who else needs to be in the conversation for this to move forward?

ECONOMIC BUYER QUESTIONS (always try to surface):
- Who ultimately owns the budget decision for something like this?
- Beyond your team, who else has a stake in this outcome?
- What does the approval process look like for a purchase this size?

Mark 2-3 as POWER QUESTIONS - the ones most likely to unlock the deal.

SKILL 1 - AGENTIC NARRATIVE COACH
Use when Xavier needs to position ServiceNow's AI story with a stalled customer or re-engage at the executive level.

The FY26 Corporate Narrative has four phases:

PHASE 1 - SET THE STAGE (The Patchwork Enterprise Problem):
Despite record AI investment, enterprise AI maturity went backwards. Departmental SaaS apps and GenAI Copilots were deployed on broken foundations. You cannot automate intelligence on top of broken execution. The problem is not intelligence - it is execution.

PHASE 2 - REFRAME (We Were Built For This):
AI can tell you what to do but cannot do the work. Companies need the probabilistic intelligence of AI combined with the deterministic controls of enterprise workflows. ServiceNow has run workflows for 20 years - 80 billion workflows per year, 85% of Fortune 500, 97% renewal rate. Everyone else is trying to teach their AI about enterprise context. We already have it.

PHASE 3 - THE AI CONTROL TOWER:
SENSE: Unified data so AI sees across all 400+ enterprise apps. DECIDE: AI reasons with full enterprise context, not generic training data. ACT: Autonomous workflows that actually execute work - not recommend it. GOVERN: AI-native security and control at the speed of execution. ServiceNow goes beyond agentic AI to autonomous workflows - without constant human intervention, but never without human control.

PHASE 4 - THE PROOF:
AstraZeneca: 30,000 hours/year saved. Bell Canada: 90% of dispatch tasks automated. Avalara: 800 hours/month saved by security team. These are Fortune 500 production deployments, not pilots.

---

SKILL 2 - AI CONTROL TOWER COMPETE
Use when a prospect is evaluating alternatives or when a competitor is in the room.

vs. Standalone LLMs (OpenAI, Anthropic, Google): They recommend. They do not act. No enterprise context, no workflow execution, no governance. ServiceNow is the execution layer that puts LLM intelligence to work. They are the brain - we are the nervous system and the hands.

vs. Low-code builders (PowerApps, Copilot Studio): Fast prototyping but creates app sprawl and governance nightmares. Breaks at enterprise scale. ServiceNow App Engine gives business teams guardrails to build within approved frameworks - one platform, one data model, one security posture.

vs. Data Platforms (Snowflake, Databricks): They tell you what happened. They do not do anything about it. ServiceNow takes the insight and executes - SENSE their data, DECIDE, ACT, GOVERN. They are the source of truth. We are what happens next.

vs. Agent Frameworks (LangChain, AutoGen): Requires deep engineering, no enterprise security built in, starts from zero. ServiceNow has 20 years of enterprise workflow DNA. 80 billion workflows already running. No custom engineering needed to get AI to understand your enterprise context.

---

SKILL 3 - SENSE-DECIDE-ACT-GOVERN EXPLAINER
Use when explaining the ServiceNow platform architecture to technical buyers or economic buyers.

SENSE: Breaks down silos across 400+ enterprise apps. AI has full operational context, not just a slice. Without SENSE, AI reasons in the dark.

DECIDE: AI reasoning grounded in your actual enterprise context - your policies, your workflows, your history. Not pattern matching on generic data. Full picture reasoning.

ACT: The layer no other AI vendor has. Workflows execute across every department and system. Autonomous but governed. This is what turns AI insight into business outcomes.

GOVERN: AI-native governance built in from the start. Role-based access, audit trails, compliance controls, human override - all at workflow speed. Autonomy without loss of control.

HEALTHCARE-SPECIFIC PROOF POINTS: Clinical operations automation. Staff onboarding 35% faster. Regulatory compliance tracking built on the same platform as ITSM. Interoperability and Epic/Oracle Health integration context.`;
}

const ThemeCtx = createContext(null);
const NotesCtx = createContext(null);
const ChatCtx = createContext(null);
const PriorityCtx = createContext(null);
const StepsCtx = createContext(null);
const NavCtx = createContext(null);
const SummaryCtx = createContext(null);
const PipelineAmtCtx = createContext(null);
const CloseDateCtx = createContext(null);

const T_DARK = {
  dark:true, pageBg:"#0a1520", surface:"#0d1b28", surface2:"#0f1e2b", sidebar:"#0f1e2b",
  border:"#1a3044", borderSubtle:"#142233",
  textPrimary:"#e8f0f5", textSecondary:"#b8cdd9", textMuted:"#5a8a9f", textFaint:"#3d6477",
  linkColor:"#81B5A1",
  pc:{ CRITICAL:{bg:"#3d0f0f",text:"#f87171"}, HIGH:{bg:"#3d1a05",text:"#fb923c"}, MEDIUM:{bg:"#2a2005",text:"#fbbf24"}, LOW:{bg:"#132030",text:"#81B5A1"} },
  daysBadge:(d)=>d<=90?{bg:"#3d0f0f",tx:"#f87171"}:d<=180?{bg:"#3d1a05",tx:"#fb923c"}:{bg:"#132030",tx:"#81B5A1"},
  dist:{
    "South Healthcare":{base:{bg:"#1f1208",tx:"#fb923c",border:"#7c3512"},active:{bg:"#ea580c",tx:"white",border:"#ea580c"},dot:"#ea580c"},
    "Midwest Healthcare":{base:{bg:"#071a0f",tx:"#4ade80",border:"#0d4020"},active:{bg:"#16a34a",tx:"white",border:"#16a34a"},dot:"#16a34a"},
    "Northeast Healthcare":{base:{bg:"#071525",tx:"#60a5fa",border:"#0d2d56"},active:{bg:"#2563eb",tx:"white",border:"#2563eb"},dot:"#2563eb"},
  },
  stage:{
    "7 - Deal Imminent":{bg:"#2d1a00",tx:"#fb923c"},
    "6 - Validation Completed":{bg:"#0d2d2d",tx:"#2dd4bf"},
    "5 - Economic Buyer Validation":{bg:"#0d1f38",tx:"#93c5fd"},
    "4b - Economic Buyer Identified":{bg:"#082530",tx:"#5bb8d4"},
    "4a - Present Solution":{bg:"#2a2005",tx:"#fbbf24"},
    "3 - Objectives":{bg:"#071525",tx:"#60a5fa"},
    "2 - Discovery":{bg:"#1a1a2e",tx:"#a78bfa"},
    "1 - Opportunity":{bg:"#1a1212",tx:"#f87171"},
  },
  stageAdv:{
    "Finalize terms → drive to close":{bg:"#2d1a00",tx:"#fb923c",icon:"🚀"},
    "Confirm commitments → prepare close plan":{bg:"#0d2d2d",tx:"#2dd4bf",icon:"✅"},
    "EB validation → resolve objections":{bg:"#0d1f38",tx:"#93c5fd",icon:"🛡️"},
    "Engage EB → build executive alignment":{bg:"#082530",tx:"#5bb8d4",icon:"🎯"},
    "Demo/present → validate technical fit":{bg:"#2a2005",tx:"#fbbf24",icon:"🖥️"},
    "Define objectives & success criteria":{bg:"#071525",tx:"#60a5fa",icon:"📋"},
    "Qualify pain → uncover buying drivers":{bg:"#1a1a2e",tx:"#a78bfa",icon:"🔍"},
    "Initial engagement → qualify opportunity":{bg:"#1a1212",tx:"#f87171",icon:"💡"},
  },
  notesBg:"#071a12", notesBorder:"#0d3d28", notesText:"#e8f0f5", notesLink:"#81B5A1",
  chatBg:"#0a1520", msgUser:"linear-gradient(135deg,#032D42,#023a56)", msgAssistant:"#0f2535", msgAssistantBorder:"#1a3044",
  inputBg:"#0a1520", inputBorder:"#1a3044",
  repActiveBg:"#0d2a1c", repActiveText:"#63DF4E", repActiveBorder:"#63DF4E", repItemBg:"#0f1e2b",
  closedAlertBg:"#2d0a0a", closedAlertBorder:"#7f1d1d", closedAlertText:"#f87171",
  chipBg:"#0f1e2b", chipBorder:"#1a3044", chipText:"#5a8a9f",
  welcomeChipBg:"#0f1e2b", welcomeChipBorder:"#1a3044", welcomeChipText:"#b8cdd9",
};
const T_LIGHT = {
  dark:false, pageBg:"#f0f2f5", surface:"#ffffff", surface2:"#f9fafb", sidebar:"#ffffff",
  border:"#e5e7eb", borderSubtle:"#f0f0f0",
  textPrimary:"#111827", textSecondary:"#374151", textMuted:"#6b7280", textFaint:"#9ca3af",
  linkColor:"#044355",
  pc:{ CRITICAL:{bg:"#fee2e2",text:"#991b1b"}, HIGH:{bg:"#ffedd5",text:"#9a3412"}, MEDIUM:{bg:"#fefce8",text:"#854d0e"}, LOW:{bg:"#f3f4f6",text:"#6b7280"} },
  daysBadge:(d)=>d<=90?{bg:"#fee2e2",tx:"#991b1b"}:d<=180?{bg:"#ffedd5",tx:"#9a3412"}:{bg:"#f3f4f6",tx:"#6b7280"},
  dist:{
    "South Healthcare":{base:{bg:"#fff7ed",tx:"#9a3412",border:"#fed7aa"},active:{bg:"#ea580c",tx:"white",border:"#ea580c"},dot:"#ea580c"},
    "Midwest Healthcare":{base:{bg:"#f0fdf4",tx:"#166534",border:"#bbf7d0"},active:{bg:"#16a34a",tx:"white",border:"#16a34a"},dot:"#16a34a"},
    "Northeast Healthcare":{base:{bg:"#eff6ff",tx:"#1e40af",border:"#bfdbfe"},active:{bg:"#2563eb",tx:"white",border:"#2563eb"},dot:"#2563eb"},
  },
  stage:{
    "7 - Deal Imminent":{bg:"#fff7ed",tx:"#c2410c"},
    "6 - Validation Completed":{bg:"#ccfbf1",tx:"#0f766e"},
    "5 - Economic Buyer Validation":{bg:"#dbeafe",tx:"#1d4ed8"},
    "4b - Economic Buyer Identified":{bg:"#e0f4f8",tx:"#044355"},
    "4a - Present Solution":{bg:"#fef9c3",tx:"#854d0e"},
    "3 - Objectives":{bg:"#dbeafe",tx:"#1e40af"},
    "2 - Discovery":{bg:"#f5f3ff",tx:"#7c3aed"},
    "1 - Opportunity":{bg:"#fee2e2",tx:"#991b1b"},
  },
  stageAdv:{
    "Finalize terms → drive to close":{bg:"#fff7ed",tx:"#c2410c",icon:"🚀"},
    "Confirm commitments → prepare close plan":{bg:"#ccfbf1",tx:"#0f766e",icon:"✅"},
    "EB validation → resolve objections":{bg:"#dbeafe",tx:"#1d4ed8",icon:"🛡️"},
    "Engage EB → build executive alignment":{bg:"#e0f4f8",tx:"#044355",icon:"🎯"},
    "Demo/present → validate technical fit":{bg:"#fef9c3",tx:"#854d0e",icon:"🖥️"},
    "Define objectives & success criteria":{bg:"#dbeafe",tx:"#1e40af",icon:"📋"},
    "Qualify pain → uncover buying drivers":{bg:"#f5f3ff",tx:"#7c3aed",icon:"🔍"},
    "Initial engagement → qualify opportunity":{bg:"#fee2e2",tx:"#991b1b",icon:"💡"},
  },
  notesBg:"#E8F5F1", notesBorder:"#81B5A1", notesText:"#032D42", notesLink:"#044355",
  chatBg:"#f0f4f8", msgUser:"linear-gradient(135deg,#032D42,#023a56)", msgAssistant:"#ffffff", msgAssistantBorder:"#e5e7eb",
  inputBg:"#f9fafb", inputBorder:"#e5e7eb",
  repActiveBg:"#e0f0ea", repActiveText:"#63DF4E", repActiveBorder:"#63DF4E", repItemBg:"#ffffff",
  closedAlertBg:"#fef2f2", closedAlertBorder:"#fecaca", closedAlertText:"#991b1b",
  chipBg:"#ffffff", chipBorder:"#e5e7eb", chipText:"#4b5563",
  welcomeChipBg:"#ffffff", welcomeChipBorder:"#e5e7eb", welcomeChipText:"#374151",
};

const TABS = [
  {id:"chat",label:"💬 Chat"},{id:"priority",label:"🏆 Priority Ranked"},
  {id:"urgency",label:"📅 Close Date Urgency"},{id:"district",label:"📍 By District"},
  {id:"stage",label:"⚡ Stage Advancement"},{id:"rep",label:"👤 Per Rep"},
  {id:"pipeline",label:"💰 Pipeline $"},
  {id:"nextsteps",label:"✅ Next Steps"},{id:"closed",label:"🔴 Closed / Inactive"},
  {id:"brainbreak",label:"🎮 Brain Break"},
];

const CHIP_GROUPS = [
  {label:"🎯 Prioritize",chips:["Top 5 actions this week","CRITICAL optys closest to closing","Optys closing before June 30"]},
  {label:"👤 People",chips:["Mac Johnson's full book","Kirk Small's full book","AEs ranked by CRITICAL count"]},
  {label:"📍 Territory",chips:["South district summary","Multi-opty accounts","My XR 2/11 notes"]},
  {label:"✉️ Outreach",chips:["Draft outreach to Kirk on Franciscan","Optys with no notes","Outreach to Mac Johnson on Beacon Health"]},
];

const CHIP_POOL = [
  "What's truly stalled this week?","Top 5 actions this week","CRITICAL optys with no recent notes","Optys closing before June 30",
  "Mac Johnson's full book","Kirk Small's full book","AEs ranked by CRITICAL count","Who has the most stalled deals?",
  "South district summary","Multi-opty accounts","Northeast stalled deals","Midwest CRITICAL breakdown",
  "Draft outreach to Kirk on Franciscan","Optys with no notes","Which AE should I call first today?","Help me prep for a discovery call",
];

const GREETINGS = [
  // Motivational / Action-oriented
  "Let's get some stalled deals moving again, Xavier.",
  "Let's move the needle today, Xavier.",
  "Your pipeline's waiting. Let's dig in, Xavier.",
  "Another day, another stall to bust. What's first?",
  "Good to have you back, Xavier. Pipeline's loaded.",
  "Time to re-engage some customers who've gone quiet, Xavier.",
  "Those customers won't re-engage themselves. Where do we start?",
  "Let's make some noise in the pipeline today, Xavier.",
  "Some customers have gone quiet. Let's figure out who needs a re-engagement.",
  "Back at it, Xavier. What's the focus today?",
  "Pipeline won't manage itself. Let's go.",
  "Good to see you, Xavier. Lots to work through.",
  "Another chance to get a stalled customer back in the conversation.",
  "Let's find the stuck deals and get them moving.",
  "Your accounts are counting on you, Xavier.",
  "Time to check in on the pipeline. Ready?",
  "What's the one deal we're moving today, Xavier?",
  "Stalls don't fix themselves. Let's dig in.",
  "Momentum starts with one deal. Let's find it.",
  "Today's goal: leave one less stall than yesterday.",
  "Let's find the customers who've gone dark and bring them back.",
  "Which AE needs your help the most today?",
  "The pipeline is full. Let's make it move.",
  "Before we dive in - what does winning look like today?",
  "Quality over quantity. Which deals actually need you?",
  "You've got 119 optys and customers who need a reason to re-engage. Let's work.",
  "Your AEs are lucky to have you in their corner, Xavier.",
  "Let's focus on the deals that matter most.",
  "What's been stalled the longest? Let's start there.",
  "Every re-engaged deal starts with one good conversation. Let's plan yours.",
];

const FUN_FACTS = [
  {fact:"The average B2B deal involves 6-10 decision makers - knowing your champion isn't enough.",tag:"Sales Intel"},
  {fact:"Deals with an identified Economic Buyer close 2x faster than those without.",tag:"Sales Intel"},
  {fact:"Multi-threaded deals - 3+ contacts engaged - are 3x less likely to go dark.",tag:"Sales Intel"},
  {fact:"78% of buyers purchase from the vendor who responds first with relevant content.",tag:"Buyer Behavior"},
  {fact:"The average rep gives up after 2 follow-ups. Most deals close after 5+ touches.",tag:"Sales Intel"},
  {fact:"Deals that stall at Stage 3 for 60+ days have a 70% lower win rate. Early unstalling is critical.",tag:"Pipeline Health"},
  {fact:"The #1 reason deals stall: the champion doesn't have executive air cover. Find the EB early.",tag:"Pipeline Health"},
  {fact:"A deal without a confirmed close date is a wish, not a forecast.",tag:"Pipeline Health"},
  {fact:"If you haven't spoken to your champion in 30+ days, assume the deal is stalled.",tag:"Pipeline Health"},
  {fact:"Win rates drop by 15% for every additional month a deal spends past its original close date.",tag:"Pipeline Health"},
  {fact:"Reactivating a closed-no-decision opty costs 60% less than generating a new opportunity.",tag:"Pipeline Health"},
  {fact:"Healthcare IT procurement cycles average 12-18 months - patience is a competitive advantage.",tag:"HCLS Insight"},
  {fact:"In healthcare, the CIO rarely has final say alone - expect a committee of 5-8 decision makers.",tag:"HCLS Insight"},
  {fact:"CFO buy-in is increasingly required for IT deals over $500K in healthcare.",tag:"HCLS Insight"},
  {fact:"67% of healthcare executives say interoperability is their #1 IT priority through 2026.",tag:"HCLS Insight"},
  {fact:"Epic and Oracle Health hold 85%+ of the large hospital EHR market - know how ServiceNow complements them.",tag:"HCLS Insight"},
  {fact:"Health system IT budgets are typically set in Q3 for the following fiscal year.",tag:"HCLS Insight"},
  {fact:"ServiceNow's ITSM platform serves 80% of Fortune 500 healthcare companies.",tag:"Platform Value"},
  {fact:"Customers with 3+ ServiceNow workflows have a 97% renewal rate.",tag:"Platform Value"},
  {fact:"ServiceNow integrates with over 1,000 third-party tools including Epic, Workday, and Salesforce.",tag:"Platform Value"},
  {fact:"MEDDPICC-qualified deals have a 35% higher win rate than unqualified pipeline.",tag:"Process"},
  {fact:"A same-day follow-up email after a discovery call is the #1 most impactful sales habit.",tag:"Process"},
  {fact:"A compelling event with a hard deadline is the single strongest predictor of a deal closing on time.",tag:"Process"},
  {fact:"ServiceNow's GBA motion is uniquely positioned: you unstall deals, not close them.",tag:"GBA Insight"},
  {fact:"AEs with CAA support generate 18% more pipeline than those working alone.",tag:"GBA Insight"},
  {fact:"Deals that were previously Closed No Decision have a 3x higher win rate on re-engagement.",tag:"GBA Insight"},
  {fact:"The best salespeople treat rejection as data, not defeat.",tag:"Mindset"},
  {fact:"Your pipeline is a lagging indicator. Your daily activity is a leading indicator.",tag:"Mindset"},
  {fact:"The term 'pipeline' in sales comes from the oil industry's literal pipeline of product moving to market.",tag:"Fun Fact"},
  {fact:"It takes 8 touchpoints on average to get a first meeting with a cold prospect.",tag:"Fun Fact"},
  {fact:"The first CRM was a Rolodex. The average Fortune 500 company now uses 130+ SaaS tools.",tag:"Fun Fact"},
];


function dynUrl(opty) {
  return `https://servicenow.crm.dynamics.com/main.aspx?appid=e8cacfe5-4ec9-49e2-a1a8-0fa6f9f3059d&forceUCI=1&pagetype=search&searchText=${opty}&searchType=0`;
}

const STAGE_NORMALIZE = {
  "4 - Economic Buyer Identified (30%)": "4b - Economic Buyer Identified",
  "4 - Present Solution (20%)": "4a - Present Solution",
  "3 - Objectives (10%)": "3 - Objectives",
  "2 - Discovery (5%)": "2 - Discovery",
  "1 - Prospect (0%)": "1 - Opportunity",
  "5 - Proof of Value (60%)": "5 - Economic Buyer Validation",
  "Closed Won": "Closed Won",
  "Closed Lost": "Closed Lost",
  "Closed No Decision": "Closed No Decision",
};

function normalizeStageData(stage) {
  return STAGE_NORMALIZE[stage] || stage;
}

function useEffPR() {
  const { priorityOverrides, closedOverrides, rankOverrides, stageOverrides } = useContext(PriorityCtx);
  const { closeDateOverrides } = useContext(CloseDateCtx);
  const today = new Date(); today.setHours(0,0,0,0);
  const overridden = PR
    .filter(o => !closedOverrides?.[o["Opty Number"]])
    .map(o => {
      const rawDate = closeDateOverrides?.[o["Opty Number"]] || o["Close Date"];
      const closeDate = rawDate ? new Date(rawDate) : null;
      const daysOut = closeDate ? Math.ceil((closeDate - today) / 86400000) : o["Days Out"];
      return { ...o, "Close Date": rawDate || o["Close Date"], "Days Out": daysOut, Priority: priorityOverrides[o["Opty Number"]] || o.Priority, Stage: normalizeStageData(stageOverrides?.[o["Opty Number"]] || o.Stage) };
    });

  // Base sort: priority tier, then days out
  const baseSorted = [...overridden].sort((a, b) => {
    const pd = PRIORITY_ORDER[a.Priority] - PRIORITY_ORDER[b.Priority];
    return pd !== 0 ? pd : a["Days Out"] - b["Days Out"];
  });

  // Apply rank overrides: pull overridden optys out and reinsert at desired position
  if (!rankOverrides || Object.keys(rankOverrides).length === 0) {
    return baseSorted.map((o, i) => ({ ...o, Rank: i + 1 }));
  }
  const overriddenOptys = new Set(Object.keys(rankOverrides));
  let remaining = baseSorted.filter(o => !overriddenOptys.has(o["Opty Number"]));
  const toInsert = baseSorted
    .filter(o => overriddenOptys.has(o["Opty Number"]))
    .sort((a, b) => (rankOverrides[a["Opty Number"]] || 999) - (rankOverrides[b["Opty Number"]] || 999));
  // Insert each at its desired rank (1-indexed, clamped)
  for (const o of toInsert) {
    const pos = Math.max(0, Math.min((rankOverrides[o["Opty Number"]] || 1) - 1, remaining.length));
    remaining.splice(pos, 0, o);
  }
  return remaining.map((o, i) => ({ ...o, Rank: i + 1 }));
}

function Badge({ priority, opty }) {
  const T = useContext(ThemeCtx);
  const { updatePriority, priorityOverrides } = useContext(PriorityCtx);
  const [open, setOpen] = useState(false);
  const c = T.pc[priority] || T.pc.LOW;
  const PRIORITIES = ["CRITICAL","HIGH","MEDIUM","LOW"];
  if (open) return (
    <span style={{display:"inline-flex",flexDirection:"column",gap:2,position:"relative"}}>
      {PRIORITIES.map(p => {
        const pc = T.pc[p];
        return (
          <button key={p} onClick={(e)=>{e.stopPropagation();if(opty)updatePriority(opty,p);setOpen(false);}}
            style={{fontSize:10,padding:"1px 8px",background:pc.bg,color:pc.text,border:`1px solid ${pc.text}44`,borderRadius:99,cursor:"pointer",fontWeight:700,textAlign:"left",whiteSpace:"nowrap",opacity:p===priority?1:0.7}}>
            {p===priority?"● ":"○ "}{p}
          </button>
        );
      })}
      <button onClick={(e)=>{e.stopPropagation();setOpen(false);}} style={{fontSize:9,padding:"1px 6px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textFaint,cursor:"pointer",marginTop:1}}>cancel</button>
    </span>
  );
  return (
    <span onClick={(e)=>{e.stopPropagation();if(opty)setOpen(true);}} title={opty?"Click to change priority":priority}
      style={{background:c.bg,color:c.text,fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99,cursor:opty?"pointer":"default",userSelect:"none"}}>
      {priority}
    </span>
  );
}

function getDynamicAction(o, notes, summaryChecks) {
  const rawNote = notes?.[o["Opty Number"]] || o.Notes || "";
  const note = rawNote.toLowerCase();
  const stage = o.Stage || "";
  const days = o["Days Out"] ?? 999;
  const priority = o.Priority || "LOW";
  const ae = o["Account Owner"] || "the AE";
  const acct = o["Account Name"] || "this account";
  const hasSummary = !!summaryChecks?.[o["Opty Number"]];

  // Extract last XR note date and content if present
  const xrMatch = rawNote.match(/XR (\d+\/\d+):\s*([^;|\n]+)/i);
  const lastNote = xrMatch ? xrMatch[2].trim() : null;
  const noteDate = xrMatch ? xrMatch[1] : null;

  // Parse days since last XR note
  let daysSinceNote = null;
  if (noteDate) {
    const [m, d] = noteDate.split("/").map(Number);
    const noteYear = new Date().getFullYear();
    const noteTs = new Date(noteYear, m - 1, d);
    const now = new Date(); now.setHours(0,0,0,0);
    daysSinceNote = Math.floor((now - noteTs) / 86400000);
    if (daysSinceNote < 0) daysSinceNote += 365; // prior year
  }

  // Note content signals
  const reaching    = /reaching out|reach out/i.test(rawNote);
  const demoPending = /customer wants demo|demo scheduled|demo set/i.test(rawNote);
  const waitingDemo = /need more discovery|waiting on|need to schedule/i.test(rawNote);
  const ebChampId   = /eb\+champ|champ id|eb id|economic buyer id|buying group/i.test(rawNote);
  const activeAE    = /working w\/|working with|working on notes/i.test(rawNote);
  const blocked     = /on hold|budget freeze|no budget|deprioritized|paused/i.test(rawNote);
  const champOnly   = /champ id|champion id/i.test(rawNote) && !/eb id|economic buyer/i.test(rawNote);
  const stale       = daysSinceNote !== null && daysSinceNote > 21;
  const fresh       = daysSinceNote !== null && daysSinceNote <= 7;

  // Opty Summary not logged
  if (!hasSummary) {
    if (days <= 90) return `Submit Opty Summary for ${acct} before next touchpoint`;
    if (days <= 180) return `Log Opty Summary — due before this deal progresses further`;
  }

  // Blocked deals
  if (blocked) return `Monitor ${acct} — blocked on budget/priority; re-engage when cycle opens`;

  // Fresh note with active AE coordination
  if (fresh && activeAE) return `Continue coordination with ${ae} — note is recent, maintain momentum`;

  // Reaching out to AE — follow up if stale
  if (reaching && stale) {
    const target = rawNote.match(/reaching out to ([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/i)?.[1] || ae;
    return `Follow up with ${target} — no response logged since ${noteDate}`;
  }
  if (reaching && !stale) {
    const target = rawNote.match(/reaching out to ([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/i)?.[1] || ae;
    return `Await response from ${target} — outreach sent ${noteDate || "recently"}`;
  }

  // Demo signals
  if (demoPending && !waitingDemo) return `Prep for demo at ${acct} — confirm attendees, agenda, and value story`;
  if (demoPending && waitingDemo) return `Schedule discovery call at ${acct} before demo — gaps still open`;

  // Stage-specific with context
  if (stage.startsWith("7")) return `Close ${acct} — deal is imminent, confirm contracting timeline with ${ae}`;
  if (stage.startsWith("6")) return `Push ${acct} to close — validation done, what's holding up the decision?`;
  if (stage.startsWith("5")) return `EB validation in progress at ${acct} — prepare exec-level value story for ${ae}`;

  if (stage.startsWith("4b")) {
    if (ebChampId) return `EB and champion ID'd at ${acct} — work with ${ae} to schedule executive alignment call`;
    return `EB identified at ${acct} — engage economic buyer directly, schedule alignment call this week`;
  }

  if (stage.startsWith("4a")) {
    if (days <= 60) return `Urgently re-engage ${acct} — in Stage 4a with ${days} days to close, needs EB identification`;
    if (ebChampId) return `Post-demo at ${acct} — confirm technical fit and advance to EB validation with ${ae}`;
    return `Post-demo follow-up at ${acct} — confirm fit, identify EB, align on next milestone`;
  }

  if (stage.startsWith("3")) {
    if (champOnly) return `Champion ID'd at ${acct} — work with ${ae} to get EB into the conversation`;
    if (days <= 90) return `Objectives stage at ${acct} with ${days}d to close — accelerate to solution presentation`;
    return `Re-engage ${acct} at Stage 3 — define success criteria and present solution to buying group`;
  }

  if (stage.startsWith("2")) {
    if (days <= 60) return `Discovery stalled at ${acct} with only ${days}d left — contact customer this week, deal at risk`;
    if (days <= 120) return `Re-engage ${acct} for discovery — use a recent healthcare trigger or benchmark to open the door`;
    if (stale) return `${acct} has gone quiet since ${noteDate || "last touch"} — send a no-reply-needed outreach to restart`;
    return `Advance discovery at ${acct} — qualify pain, identify champion, get executive stakeholder in the room`;
  }

  if (stage.startsWith("1")) return `Qualify ${acct} — get discovery call on the calendar with ${ae}`;

  // Fallback by priority + days
  if (priority === "CRITICAL" && days <= 30) return `Immediate action on ${acct} — ${days} days to close and no recent activity logged`;
  if (priority === "CRITICAL") return `Contact ${ae} about ${acct} this week — CRITICAL priority with close in ${days} days`;
  if (priority === "HIGH") return `Schedule re-engagement call at ${acct} within 2 weeks — HIGH priority, ${days}d to close`;
  if (priority === "MEDIUM") return `Plan outreach cadence for ${acct} — ${days}d to close, medium urgency`;
  return `Monitor ${acct} — watch for trigger events or stakeholder movement`;
}

function ActionCell({ o }) {
  const T = useContext(ThemeCtx);
  const { notes } = useContext(NotesCtx);
  const { summaryChecks } = useContext(SummaryCtx);
  const [open, setOpen] = useState(false);
  const action = getDynamicAction(o, notes, summaryChecks);
  if (open) return (
    <td style={{padding:"4px 8px",position:"relative"}}>
      <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,padding:"10px 12px",minWidth:220,maxWidth:320,boxShadow:"0 4px 16px rgba(0,0,0,.3)",position:"relative",zIndex:10}}>
        <div style={{fontSize:11,color:T.textPrimary,lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",marginBottom:8}}>{action}</div>
        <div style={{display:"flex",gap:6,justifyContent:"flex-end"}}>
          <button onClick={(e)=>{e.stopPropagation();setOpen(false);}} style={{fontSize:10,padding:"2px 10px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:4,cursor:"pointer",fontWeight:700}}>close</button>
        </div>
      </div>
    </td>
  );
  return (
    <td style={{padding:"7px 8px",verticalAlign:"middle",minWidth:140}}>
      <div style={{display:"flex",flexDirection:"column",gap:4}}>
        <span style={{fontSize:11,color:T.textSecondary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:160}} title={action}>{action}</span>
        <button onClick={(e)=>{e.stopPropagation();setOpen(true);}} style={{fontSize:10,padding:"1px 7px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer",alignSelf:"flex-start"}}>view</button>
      </div>
    </td>
  );
}

function DaysBadge({ days }) {
  const T = useContext(ThemeCtx);
  const {bg,tx} = T.daysBadge(days);
  return <span style={{background:bg,color:tx,fontSize:11,fontWeight:700,padding:"2px 7px",borderRadius:4}}>{days}d</span>;
}

function Table({ cols, rows, emptyMsg="No data", inCollapsible=false }) {
  const T = useContext(ThemeCtx);
  const evenBg = T.dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)";
  const clonedRows = rows.map((row, i) => {
    if (!row || !row.props) return row;
    const existing = row.props.style || {};
    return React.cloneElement(row, {
      style: { ...existing, background: i % 2 === 0 ? "transparent" : evenBg }
    });
  });
  return (
    <div style={{background:T.surface,borderRadius:inCollapsible?"0 0 8px 8px":10,border:`1px solid ${T.border}`,overflowX:"auto",overflowY:"visible"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
        <thead style={{background:"#032D42",position:"sticky",top:0,zIndex:1}}>
          <tr>{cols.map(c=><th key={c} style={{padding:"8px 12px",textAlign:"left",color:"rgba(255,255,255,0.85)",fontWeight:700,borderBottom:"2px solid #044355",whiteSpace:"nowrap",fontSize:11}}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length===0?<tr><td colSpan={cols.length} style={{padding:24,textAlign:"center",color:T.textFaint}}>{emptyMsg}</td></tr>:clonedRows}
        </tbody>
      </table>
    </div>
  );
}

function salesNavUrl(name) {
  return `https://www.linkedin.com/sales/search/people?keywords=${encodeURIComponent(name)}&titleIncluded=IT%20Director%2CCIO%2CCTO%2CVP&doFetchHeroCard=false`;
}

function CloseBtn({ opty }) {
  const T = useContext(ThemeCtx);
  const { closeOpty } = useContext(PriorityCtx);
  const [open, setOpen] = useState(false);
  const CLOSED_STAGES = [
    { label:"Closed Won", color:"#16a34a", bg:"rgba(22,163,74,.12)", border:"rgba(22,163,74,.3)" },
    { label:"Closed Lost", color:"#f87171", bg:"rgba(248,113,113,.08)", border:"rgba(248,113,113,.2)" },
    { label:"Closed No Decision", color:"#fb923c", bg:"rgba(251,146,60,.08)", border:"rgba(251,146,60,.2)" },
  ];
  if (open) return (
    <span style={{display:"inline-flex",alignItems:"center",gap:3,flexWrap:"wrap"}}>
      {CLOSED_STAGES.map(s => (
        <button key={s.label} onClick={(e)=>{e.stopPropagation();closeOpty(opty, s.label);setOpen(false);}}
          style={{fontSize:10,padding:"1px 7px",background:s.bg,color:s.color,border:`1px solid ${s.border}`,borderRadius:99,cursor:"pointer",fontWeight:700,whiteSpace:"nowrap"}}>
          {s.label.replace("Closed ","")}
        </button>
      ))}
      <button onClick={(e)=>{e.stopPropagation();closeOpty(opty,"Inactive");setOpen(false);}}
        style={{fontSize:10,padding:"1px 7px",background:"rgba(148,163,184,.1)",color:"#94a3b8",border:"1px solid rgba(148,163,184,.25)",borderRadius:99,cursor:"pointer",fontWeight:700,whiteSpace:"nowrap"}}>
        Inactive
      </button>
      <button onClick={(e)=>{e.stopPropagation();setOpen(false);}}
        style={{fontSize:10,padding:"1px 6px",background:"transparent",color:T.textFaint,border:`1px solid ${T.border}`,borderRadius:99,cursor:"pointer"}}>✕</button>
    </span>
  );
  return (
    <button onClick={(e)=>{e.stopPropagation();setOpen(true);}} title="Close or mark Inactive"
      style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:10,color:"#f87171",background:"rgba(248,113,113,.08)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(248,113,113,.2)",whiteSpace:"nowrap",cursor:"pointer"}}>
      Close
    </button>
  );
}

function StagePill({ stage, opty }) {
  const T = useContext(ThemeCtx);
  const { goToStage } = useContext(NavCtx);
  const { updateStage } = useContext(PriorityCtx);
  const [open, setOpen] = useState(false);
  const c = T.stage[stage] || { bg: T.surface2, tx: T.textMuted };
  const label = stage.replace(/ \(\d+%\)/, "");
  const STAGES_LIST = [
    "7 - Deal Imminent",
    "6 - Validation Completed",
    "5 - Economic Buyer Validation",
    "4b - Economic Buyer Identified",
    "4a - Present Solution",
    "3 - Objectives",
    "2 - Discovery",
    "1 - Opportunity",
  ];
  if (open) return (
    <span style={{display:"inline-flex",flexDirection:"column",gap:2}} onClick={e=>e.stopPropagation()}>
      {STAGES_LIST.map(s => {
        const sc = T.stage[s] || { bg: T.surface2, tx: T.textMuted };
        const sl = s.replace(/ \(\d+%\)/, "");
        return (
          <button key={s} onClick={(e)=>{e.stopPropagation();if(opty)updateStage(opty,s);setOpen(false);}}
            style={{fontSize:10,padding:"1px 8px",background:sc.bg,color:sc.tx,border:`1px solid ${sc.tx}33`,borderRadius:99,cursor:"pointer",fontWeight:700,textAlign:"left",whiteSpace:"nowrap",opacity:s===stage?1:0.75}}>
            {s===stage?"● ":"○ "}{sl}
          </button>
        );
      })}
      <button onClick={(e)=>{e.stopPropagation();setOpen(false);}} style={{fontSize:9,padding:"1px 6px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textFaint,cursor:"pointer",marginTop:1}}>cancel</button>
    </span>
  );
  return (
    <span
      onClick={(e)=>{e.stopPropagation();if(opty){setOpen(true);}else{goToStage(stage);}}}
      title={opty ? "Click to change stage" : "View all " + label + " optys"}
      style={{background:c.bg,color:c.tx,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,whiteSpace:"nowrap",cursor:"pointer",border:`1px solid ${c.tx}22`,display:"inline-block",userSelect:"none"}}>
      {label}
    </span>
  );
}

function DistrictPill({ district }) {
  const T = useContext(ThemeCtx);
  const { goToDistrict } = useContext(NavCtx);
  const dc = T.dist[district];
  if (!dc) return <span style={{fontSize:10,color:T.textMuted}}>{district?.replace(" Healthcare","")}</span>;
  return (
    <span onClick={()=>goToDistrict(district)} title={"View " + district + " district"}
      style={{background:dc.base.bg,color:dc.base.tx,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:99,whiteSpace:"nowrap",cursor:"pointer",border:`1px solid ${dc.base.border}`}}>
      {district.replace(" Healthcare","")}
    </span>
  );
}

function AELink({ name }) {
  const T = useContext(ThemeCtx);
  const { goToRep } = useContext(NavCtx);
  return (
    <span onClick={()=>goToRep(name)} title={"View " + name + "'s book"}
      style={{color:T.linkColor,cursor:"pointer",fontWeight:600,textDecoration:"underline dotted",textUnderlineOffset:2}}>
      {name}
    </span>
  );
}


function AccountCell({ name, opty }) {
  const T = useContext(ThemeCtx);
  return (
    <td style={{padding:"7px 12px"}}>
      <div style={{fontWeight:600,color:T.textPrimary,maxWidth:180,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={name}>{name}</div>
      <div style={{display:"flex",alignItems:"center",gap:6,marginTop:2,flexWrap:"wrap"}}>
        <a href={dynUrl(opty)} target="_blank" rel="noreferrer"title="Open in Microsoft Dynamics" style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:10,color:T.linkColor,fontFamily:"monospace",textDecoration:"none",background:"rgba(129,181,161,.1)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(129,181,161,.25)",whiteSpace:"nowrap"}}>
          <svg width="8" height="8" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
            <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
            <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
          </svg>
          {opty} ↗
        </a>
        <a href={salesNavUrl(name)} target="_blank" rel="noreferrer" title="Search on Sales Navigator" style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:10,color:"#0077b5",textDecoration:"none",background:"rgba(0,119,181,.12)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(0,119,181,.25)",whiteSpace:"nowrap"}}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          SalesNav
        </a>
      </div>
    </td>
  );
}

function PipelineCell({ o }) {
  const T = useContext(ThemeCtx);
  const { pipelineAmts, updatePipelineAmt } = useContext(PipelineAmtCtx);
  const [editing, setEditing] = useState(false);
  const opty = o["Opty Number"];
  // User override takes priority, then data field, then null
  const stored = pipelineAmts[opty];
  const base = o["Pipeline $"];
  const amount = stored !== undefined ? stored : (base !== undefined ? base : null);
  const [draft, setDraft] = useState("");

  const fmt = (n) => n == null ? "—" : "$" + Number(n).toLocaleString("en-US", {maximumFractionDigits:0});

  if (editing) return (
    <td style={{padding:"4px 8px",minWidth:110}} onClick={e=>e.stopPropagation()}>
      <div style={{display:"flex",gap:4,alignItems:"center"}}>
        <span style={{fontSize:11,color:T.textFaint}}>$</span>
        <input autoFocus value={draft} onChange={e=>setDraft(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"){updatePipelineAmt(opty,draft);setEditing(false);}if(e.key==="Escape")setEditing(false);}}
          placeholder="amount" style={{width:80,fontSize:11,padding:"3px 6px",background:T.inputBg,border:`1px solid #63DF4E`,borderRadius:4,color:T.textPrimary,outline:"none"}} />
        <button onClick={()=>{updatePipelineAmt(opty,draft);setEditing(false);}} style={{fontSize:10,padding:"2px 6px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:4,cursor:"pointer",fontWeight:700}}>✓</button>
        <button onClick={()=>setEditing(false)} style={{fontSize:10,padding:"2px 6px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:4,color:T.textMuted,cursor:"pointer"}}>✕</button>
      </div>
    </td>
  );
  return (
    <td style={{padding:"7px 8px",textAlign:"right",whiteSpace:"nowrap",verticalAlign:"middle"}} onClick={e=>e.stopPropagation()}>
      <span style={{fontSize:11,color:amount ? T.textSecondary : T.textFaint,fontVariantNumeric:"tabular-nums"}}
        title="Click to edit">{fmt(amount)}</span>
      <button onClick={(e)=>{e.stopPropagation();setDraft(amount!=null?String(amount):"");setEditing(true);}}
        style={{fontSize:9,padding:"1px 5px",marginLeft:4,background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textFaint,cursor:"pointer",verticalAlign:"middle"}}>edit</button>
    </td>
  );
}

function CloseDateCell({ o }) {
  const T = useContext(ThemeCtx);
  const { closeDateOverrides, updateCloseDate } = useContext(CloseDateCtx);
  const [editing, setEditing] = useState(false);
  const opty = o["Opty Number"];
  const override = closeDateOverrides[opty];
  const display = override || o["Close Date"];
  const [draft, setDraft] = useState("");

  // Compute live days out from displayed date
  const today = new Date(); today.setHours(0,0,0,0);
  const cd = display ? new Date(display) : null;
  const daysOut = cd ? Math.ceil((cd - today) / 86400000) : null;
  const isOverridden = !!override;

  if (editing) return (
    <td style={{padding:"4px 8px",minWidth:130}} onClick={e=>e.stopPropagation()}>
      <div style={{display:"flex",gap:4,alignItems:"center"}}>
        <input type="date" autoFocus value={draft} onChange={e=>setDraft(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"){updateCloseDate(opty,draft);setEditing(false);}if(e.key==="Escape")setEditing(false);}}
          style={{fontSize:11,padding:"3px 6px",background:T.inputBg,border:`1px solid #63DF4E`,borderRadius:4,color:T.textPrimary,outline:"none"}} />
        <button onClick={()=>{updateCloseDate(opty,draft);setEditing(false);}} style={{fontSize:10,padding:"2px 6px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:4,cursor:"pointer",fontWeight:700}}>✓</button>
        <button onClick={()=>setEditing(false)} style={{fontSize:10,padding:"2px 6px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:4,color:T.textMuted,cursor:"pointer"}}>✕</button>
      </div>
    </td>
  );
  const dayColor = daysOut == null ? T.textFaint
    : daysOut <= 30  ? (T.dark ? "#f87171" : "#dc2626")
    : daysOut <= 90  ? (T.dark ? "#fb923c" : "#ea580c")
    : daysOut <= 180 ? (T.dark ? "#fbbf24" : "#d97706")
    : T.textMuted;

  return (
    <td style={{padding:"7px 8px",whiteSpace:"nowrap",verticalAlign:"middle"}} onClick={e=>e.stopPropagation()}>
      <div style={{display:"flex",flexDirection:"column",gap:1}}>
        <span style={{fontSize:11,color:isOverridden?"#63DF4E":T.textSecondary,fontWeight:isOverridden?700:400}} title={isOverridden?"Overridden from CRM date — click edit to update":undefined}>
          {display||"—"}
        </span>
        {daysOut!=null&&<span style={{fontSize:10,fontWeight:700,color:dayColor}}>{daysOut}d</span>}
      </div>
      <button onClick={(e)=>{e.stopPropagation();setDraft(display||"");setEditing(true);}}
        style={{fontSize:9,padding:"1px 5px",marginTop:2,background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textFaint,cursor:"pointer",display:"block"}}>edit</button>
    </td>
  );
}

function TruncCell({ text, maxW = 110 }) {
  const T = useContext(ThemeCtx);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);
  const btnRef = useRef(null);
  const isEmpty = !text || text === "—";
  const isMultiple = !isEmpty && text.includes(",");
  const toggle = (e) => {
    e.stopPropagation();
    if (!open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      const popW = 340;
      const left = r.left + popW > window.innerWidth - 8 ? Math.max(8, window.innerWidth - popW - 8) : r.left;
      setPos({ top: r.bottom + 4, left });
    }
    setOpen(v => !v);
  };
  return (
    <td style={{padding:"7px 12px",fontSize:11,color:T.textSecondary,maxWidth:isMultiple?maxW:undefined}}>
      <div style={{display:"flex",alignItems:"center",gap:4}}>
        <span style={isMultiple?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}:{}} title={text||"—"}>{text||"—"}</span>
        {isMultiple && (
          <button ref={btnRef} onClick={toggle}
            style={{flexShrink:0,fontSize:9,padding:"1px 5px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:open?"#63DF4E":T.textFaint,cursor:"pointer",lineHeight:1.4}}>
            {open?"✕":"view"}
          </button>
        )}
      </div>
      {open && pos && (
        <div onClick={e=>e.stopPropagation()} style={{position:"fixed",top:pos.top,left:pos.left,zIndex:9999,background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,padding:"10px 12px",minWidth:220,maxWidth:340,boxShadow:"0 6px 24px rgba(0,0,0,.35)",fontSize:11,color:T.textPrimary,lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word"}}>
          {text}
        </div>
      )}
    </td>
  );
}

function OptyCheckbox({ opty }) {
  const T = useContext(ThemeCtx);
  const { summaryChecks, toggleSummary } = useContext(SummaryCtx);
  const checked = !!summaryChecks[opty];
  return (
    <td style={{padding:"7px 12px",textAlign:"center"}}>
      <div onClick={e=>{e.stopPropagation();toggleSummary(opty);}} title={checked?"Opty Summary submitted":"Opty Summary not submitted"}
        style={{width:18,height:18,borderRadius:4,border:`2px solid ${checked?"#63DF4E":T.border}`,background:checked?"#63DF4E":"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all .15s",flexShrink:0}}>
        {checked && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="#032D42" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
    </td>
  );
}

function CallPrepCell({ o }) {
  const T = useContext(ThemeCtx);
  const { notes } = useContext(NotesCtx);
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const { closeDateOverrides } = useContext(CloseDateCtx);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState(null);

  const closeDate = closeDateOverrides[o["Opty Number"]] || o["Close Date"];
  const today = new Date(); today.setHours(0,0,0,0);
  const daysOut = closeDate ? Math.ceil((new Date(closeDate) - today) / 86400000) : o["Days Out"];
  const stored = pipelineAmts[o["Opty Number"]];
  const pipeAmt = stored !== undefined ? stored : (o["Pipeline $"] !== undefined ? o["Pipeline $"] : null);
  const fmtAmt = pipeAmt ? "$" + Number(pipeAmt).toLocaleString("en-US", {maximumFractionDigits:0}) : "unknown";
  const existingNotes = notes[o["Opty Number"]] || o.Notes || "";

  const generate = async () => {
    setLoading(true);
    setBrief(null);
    const staleLabel = daysOut > 545 ? "18+ months stale — treat as a cold first call, no reference to prior engagement" :
                       daysOut > 270 ? "6–18 months dark — acknowledge the gap lightly, don't assume they remember details" :
                       "< 6 months — warm revival, reference prior conversation naturally";

    const bu = o.BU || "Unknown";
    const prompt = `You are helping Xavier Ruiz, a Customer Acceleration Associate at ServiceNow, prepare for a re-engagement call with a healthcare customer that has gone dark.

ACCOUNT DETAILS:
- Account: ${o["Account Name"]}
- Opty #: ${o["Opty Number"]}
- Business Unit(s): ${bu}
- Stage: ${o["Stage"]}
- Close Date: ${closeDate} (${daysOut} days out)
- Pipeline $: ${fmtAmt}
- District: ${o["District"]}
- AE: ${o["Account Owner"]}
- Priority: ${o["Priority"]}
- Staleness: ${staleLabel}
- Xavier's notes: ${existingNotes || "None logged"}

PRODUCT LINE CONTEXT: The opty line items are "${bu}". Tailor discovery questions and opening framing to the likely buyer persona and pain points for these specific products at a health system. For example: IT Service Management = IT operations leader / CIO; Integrated Risk Management or AI Control Tower = compliance/risk officer / CISO; HR Service Delivery = CHRO/HR ops; Customer Service Management or Healthcare and Life Sciences = patient services / contact center leader; Security Operations = CISO / VP Security; Asset Management or IT Business Management = IT asset manager / CFO; IT Operations Management = IT infrastructure VP; Field Service Management = facilities/operations leader; Workflow Data Fabric or App Engine Core = enterprise architect / platform owner; Source To Pay Operations = procurement / supply chain leader. If multiple product lines, note the cross-functional stakeholder angle.

Xavier's role: He is NOT an AE. He re-engages customers directly where the deal has gone cold. The AE is just a source of context. This call is with the CUSTOMER, not the AE.

Generate a concise call prep brief with exactly these sections:

## OPENING LINE
One sentence to open the call. Match the staleness tier — warm revival if recent, neutral if 6-18mo, fresh intro if 18mo+. No fluff.

## THEIR LIKELY SITUATION
2-3 bullets on what a health system at this stage typically cares about right now. Ground it in healthcare operational reality (staffing, cost pressure, digital transformation, compliance). Be specific.

## 3 DISCOVERY QUESTIONS
Questions calibrated to their stage and what Xavier needs to uncover. Focus on: current pain, decision-making process, what stalled the deal. Avoid generic questions.

## WHAT WIN LOOKS LIKE
One sentence — what does advancing this deal actually require from this call?

## WATCH OUT FOR
One risk or flag Xavier should be ready for given stage, staleness, and any notes.

Be direct and concise. No preamble. No "here is your brief" opener. Start immediately with ## OPENING LINE.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }]
        })
      });
      const d = await res.json();
      setBrief(d.content?.map(b => b.text || "").join("") || "No response.");
    } catch(e) {
      setBrief("Error generating brief. Try again.");
    }
    setLoading(false);
  };

  const [popPos, setPopPos] = useState(null);
  const prepBtnRef = useRef(null);
  const openPrep = (e) => {
    e.stopPropagation();
    if (prepBtnRef.current) {
      const r = prepBtnRef.current.getBoundingClientRect();
      const popW = 420;
      const left = r.left + popW > window.innerWidth - 8 ? Math.max(8, window.innerWidth - popW - 8) : r.left;
      const top = r.bottom + 4 + 450 > window.innerHeight ? Math.max(8, r.top - 454) : r.bottom + 4;
      setPopPos({ top, left });
    }
    setOpen(true);
  };

  return (
    <td style={{padding:"7px 8px",verticalAlign:"middle",textAlign:"center"}} onClick={e=>e.stopPropagation()}>
      <button ref={prepBtnRef} onClick={openPrep} style={{fontSize:10,padding:"3px 9px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer",whiteSpace:"nowrap",display:"inline-flex",alignItems:"center",gap:4}}>
        ☎️
      </button>
      {open && popPos && (
        <div onClick={e=>e.stopPropagation()} style={{position:"fixed",top:popPos.top,left:popPos.left,zIndex:9999,background:T.surface,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 16px",width:420,maxWidth:"calc(100vw - 16px)",boxShadow:"0 8px 32px rgba(0,0,0,.45)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <span style={{fontSize:11,fontWeight:700,color:T.textPrimary}}>☎️ Call Prep · {o["Account Name"].split(" ").slice(0,3).join(" ")}</span>
            <button onClick={()=>setOpen(false)} style={{fontSize:11,color:T.textMuted,background:"transparent",border:"none",cursor:"pointer",padding:"2px 6px"}}>✕</button>
          </div>
          {loading && (
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"12px 0",color:T.textMuted,fontSize:12}}>
              <span style={{animation:"spin 1s linear infinite",display:"inline-block"}}>⟳</span> Generating brief...
            </div>
          )}
          {brief && (
            <div style={{fontSize:12,color:T.textPrimary,lineHeight:1.65,whiteSpace:"pre-wrap",maxHeight:420,overflowY:"auto"}}>
              {brief.split(/^(##\s.+)$/m).map((part, i) => {
                if (part.startsWith("## ")) return <div key={i} style={{fontWeight:700,color:"#63DF4E",marginTop:i>0?12:0,marginBottom:3,fontSize:11,textTransform:"uppercase",letterSpacing:"0.04em"}}>{part.replace("## ","")}</div>;
                return <div key={i} style={{color:T.textSecondary}}>{part}</div>;
              })}
            </div>
          )}
          {!loading && !brief && (
            <div style={{textAlign:"center",padding:"16px 0"}}>
              <div style={{fontSize:12,color:T.textMuted,marginBottom:12}}>AI-generated brief using account context, stage, staleness, and your notes.</div>
              <button onClick={generate} style={{fontSize:12,padding:"7px 20px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700}}>Generate Brief</button>
            </div>
          )}
          {!loading && brief && (
            <div style={{marginTop:12,display:"flex",gap:6,justifyContent:"flex-end"}}>
              <button onClick={generate} style={{fontSize:10,padding:"3px 10px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer"}}>↻ Regenerate</button>
              <button onClick={()=>setOpen(false)} style={{fontSize:10,padding:"3px 10px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:99,cursor:"pointer",fontWeight:700}}>Done</button>
            </div>
          )}
        </div>
      )}
    </td>
  );
}

function NoteCell({ opty }) {
  const T = useContext(ThemeCtx);
  const { notes, updateNote } = useContext(NotesCtx);
  const [mode, setMode] = useState(null);
  const [draft, setDraft] = useState("");
  const [notePopPos, setNotePopPos] = useState(null);
  const viewBtnRef = useRef(null);
  const note = notes[opty] || "";
  const startEdit = (e) => { e.stopPropagation(); setDraft(note); setMode("edit"); };
  const openView = (e) => {
    e.stopPropagation();
    if (viewBtnRef.current) {
      const r = viewBtnRef.current.getBoundingClientRect();
      const popW = 320;
      const left = r.left + popW > window.innerWidth - 8 ? Math.max(8, window.innerWidth - popW - 8) : r.left;
      setNotePopPos({ top: r.bottom + 4, left });
    }
    setMode("view");
  };
  const save = () => { updateNote(opty, draft.trim()); setMode(null); };
  if (mode==="view") return (
    <td style={{padding:"7px 8px",verticalAlign:"middle",minWidth:140}}>
      <div style={{display:"flex",flexDirection:"column",gap:4}}>
        <span style={{fontSize:11,color:T.linkColor,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:160}} title={note}>{note}</span>
        <div style={{display:"flex",gap:4}}>
          <button onClick={(e)=>{e.stopPropagation();setMode(null);}} style={{fontSize:10,padding:"1px 7px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer"}}>close</button>
          <button onClick={startEdit} style={{fontSize:10,padding:"1px 7px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer"}}>edit</button>
        </div>
      </div>
      {notePopPos && (
        <div onClick={e=>e.stopPropagation()} style={{position:"fixed",top:notePopPos.top,left:notePopPos.left,zIndex:9999,background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,padding:"10px 12px",minWidth:220,maxWidth:320,boxShadow:"0 4px 16px rgba(0,0,0,.3)"}}>
          <div style={{fontSize:11,color:T.textPrimary,lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",marginBottom:8}}>{note||"No note yet."}</div>
          <div style={{display:"flex",gap:6,justifyContent:"flex-end"}}>
            <button onClick={(e)=>{e.stopPropagation();setDraft(note);setMode("edit");}} style={{fontSize:10,padding:"2px 10px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:4,color:T.textMuted,cursor:"pointer"}}>edit</button>
            <button onClick={(e)=>{e.stopPropagation();setMode(null);}} style={{fontSize:10,padding:"2px 10px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:4,cursor:"pointer",fontWeight:700}}>close</button>
          </div>
        </div>
      )}
    </td>
  );
  if (mode==="edit") return (
    <td style={{padding:"4px 8px",minWidth:220}}>
      <textarea autoFocus value={draft} onChange={e=>setDraft(e.target.value)} rows={3} onKeyDown={e=>{if(e.key==="Escape")setMode(null);}} style={{width:"100%",fontSize:11,padding:"6px 8px",background:T.surface2,border:`1px solid #63DF4E`,borderRadius:6,color:T.textPrimary,outline:"none",resize:"vertical",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:6,marginTop:4}}>
        <button onClick={save} style={{fontSize:10,padding:"2px 8px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:4,cursor:"pointer",fontWeight:700}}>Save</button>
        <button onClick={()=>setMode(null)} style={{fontSize:10,padding:"2px 8px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:4,color:T.textMuted,cursor:"pointer"}}>Cancel</button>
      </div>
    </td>
  );
  if (!note) return <td onClick={startEdit} title="Click to add note" style={{padding:"7px 12px",cursor:"text",fontSize:11,color:T.textFaint,fontStyle:"italic",minWidth:100}}>add note...</td>;
  return (
    <td style={{padding:"7px 8px",verticalAlign:"middle",minWidth:140}}>
      <div style={{display:"flex",flexDirection:"column",gap:4}}>
        <span style={{fontSize:11,color:T.linkColor,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:160}} title={note}>{note}</span>
        <div style={{display:"flex",gap:4}}>
          <button ref={viewBtnRef} onClick={openView} style={{fontSize:10,padding:"1px 7px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer"}}>view</button>
          <button onClick={startEdit} style={{fontSize:10,padding:"1px 7px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textMuted,cursor:"pointer"}}>edit</button>
        </div>
      </div>
    </td>
  );
}

function renderMd(text) {
  return text
    .replace(/\[NOTE_UPDATE:[^\]]+\]\n?/gi,"").replace(/\[PRIORITY_UPDATE:[^\]]+\]\n?/gi,"").replace(/\[CLOSE_OPTY:[^\]]+\]\n?/gi,"").replace(/\[RANK_UPDATE:[^\]]+\]\n?/gi,"").replace(/\[STAGE_UPDATE:[^\]]+\]\n?/gi,"").replace(/\[SUMMARY_CHECK:[^\]]+\]\n?/gi,"")
    .replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")
    .replace(/(OPTY\d+)/g,`<a href="https://servicenow.crm.dynamics.com/main.aspx?appid=e8cacfe5-4ec9-49e2-a1a8-0fa6f9f3059d&forceUCI=1&pagetype=search&searchText=$1&searchType=0" target="_blank" rel="noreferrer" style="color:#81B5A1;font-family:monospace;text-decoration:none;font-weight:600;">$1 &#x2197;</a>`)
    .split("\n").map(l=>l===""?'<div style="height:6px"></div>':`<div style="margin-bottom:2px">${l.replace(/^[-*]\s/,"* ")}</div>`).join("");
}

function SidebarChatEntry({ c, isActive, onLoad, onDelete, onRename, T }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(c.name);
  return (
    <div style={{padding:"10px 14px",borderBottom:`1px solid ${T.borderSubtle}`,background:isActive?T.repActiveBg:"transparent",borderLeft:`3px solid ${isActive?"#63DF4E":"transparent"}`,cursor:"pointer",position:"relative"}} className="sidebar-entry"
      onClick={()=>{ if(!editing) onLoad(c); }}>
      {editing
        ? <input autoFocus value={editName} onChange={e=>setEditName(e.target.value)}
            onKeyDown={e=>{if(e.key==="Enter"){onRename(c.id,editName.trim()||c.name);setEditing(false);}if(e.key==="Escape")setEditing(false);}}
            onBlur={()=>{onRename(c.id,editName.trim()||c.name);setEditing(false);}}
            onClick={e=>e.stopPropagation()}
            style={{width:"100%",fontSize:12,fontWeight:600,padding:"2px 4px",background:T.surface,border:`1px solid #63DF4E`,borderRadius:4,color:T.textPrimary,outline:"none",boxSizing:"border-box"}} />
        : <div style={{fontSize:12,fontWeight:600,color:isActive?"#63DF4E":T.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingRight:36}}>{c.name}</div>
      }
      <div style={{fontSize:10,color:T.textFaint,marginTop:2}}>{new Date(c.savedAt).toLocaleDateString("en-US",{month:"short",day:"numeric"})} . {c.msgs.length} msgs</div>
      <div style={{position:"absolute",right:8,top:"50%",transform:"translateY(-50%)",display:"flex",gap:4}} onClick={e=>e.stopPropagation()}>
        <button onClick={()=>{setEditing(true);setEditName(c.name);}} style={{background:"transparent",border:"none",color:T.textFaint,cursor:"pointer",fontSize:12,padding:"2px",opacity:0.6}}>✏️</button>
        <button onClick={()=>onDelete(c.id)} style={{background:"transparent",border:"none",color:"#f87171",cursor:"pointer",fontSize:12,padding:"2px",opacity:0.7}}>✕</button>
      </div>
    </div>
  );
}

function SavedChatEntry({ c, onLoad, onDelete, onRename, T }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(c.name);
  return (
    <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",borderBottom:`1px solid ${T.borderSubtle}`}}>
      <div style={{flex:1,minWidth:0,cursor:"pointer"}} onClick={()=>onLoad(c)}>
        {editing
          ? <input autoFocus value={editName} onChange={e=>setEditName(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter"){onRename(c.id,editName.trim()||c.name);setEditing(false);}if(e.key==="Escape")setEditing(false);}}
              onBlur={()=>{onRename(c.id,editName.trim()||c.name);setEditing(false);}}
              onClick={e=>e.stopPropagation()}
              style={{width:"100%",fontSize:13,fontWeight:600,padding:"2px 6px",background:T.surface,border:`1px solid #63DF4E`,borderRadius:4,color:T.textPrimary,outline:"none"}} />
          : <div style={{fontWeight:600,fontSize:13,color:T.textPrimary,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.name}</div>
        }
        <div style={{fontSize:11,color:T.textFaint}}>{new Date(c.savedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})} . {c.msgs.length} messages</div>
      </div>
      <button onClick={(e)=>{e.stopPropagation();setEditing(true);setEditName(c.name);}} title="Rename" style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:6,color:T.textMuted,fontSize:11,padding:"2px 7px",cursor:"pointer",flexShrink:0}}>✏️</button>
      <button onClick={(e)=>{e.stopPropagation();onDelete(c.id);}} style={{background:"transparent",border:`1px solid #7f1d1d`,borderRadius:6,color:"#f87171",fontSize:11,padding:"2px 8px",cursor:"pointer",flexShrink:0}}>✕</button>
    </div>
  );
}

function Chat() {
  const T = useContext(ThemeCtx);
  const { addStep } = useContext(StepsCtx);
  const { notes, updateNote } = useContext(NotesCtx);
  const { updatePriority, storageReady, closedOverrides, closeOpty, updateRank, updateStage } = useContext(PriorityCtx);
  const { toggleSummary, summaryChecks } = useContext(SummaryCtx);
  const effPR = useEffPR();
  const { msgs, setMsgs, history, autoSaveId, savedChats, setSavedChats, persistSaved } = useContext(ChatCtx);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [logModal, setLogModal] = useState(null);
  const bottom = useRef();
  const sessionSeed = useRef(Math.random());

  useEffect(() => { if (msgs.length > 0) bottom.current?.scrollIntoView({behavior:"smooth"}); }, [msgs]);

  const { navTo } = useContext(NavCtx);
  const todayDate = new Date();
  const todayStr = todayDate.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});
  const critCount = effPR.filter(o=>o.Priority==="CRITICAL").length;
  const highCount = effPR.filter(o=>o.Priority==="HIGH").length;
  const earliest = [...effPR].sort((a,b)=>a["Days Out"]-b["Days Out"])[0];
  const mediumCount = effPR.filter(o=>o.Priority==="MEDIUM").length;
  const lowCount    = effPR.filter(o=>o.Priority==="LOW").length;
  const STAT_CARDS = [
    {value: storageReady ? String(critCount)   : "...", label:"CRITICAL", sub:"Needs action now",    bg:"linear-gradient(135deg,#7f1d1d,#991b1b)", icon:"🚨", tab:"priority", filter:"CRITICAL"},
    {value: storageReady ? String(highCount)   : "...", label:"HIGH",     sub:"Advance or confirm",  bg:"linear-gradient(135deg,#7c2d12,#9a3412)", icon:"⚠️", tab:"priority", filter:"HIGH"},
    {value: storageReady ? String(mediumCount) : "...", label:"MEDIUM",   sub:"Plan discovery cadence", bg:"linear-gradient(135deg,#78400a,#92400e)", icon:"📋", tab:"priority", filter:"MEDIUM"},
    {value: storageReady ? String(lowCount)    : "...", label:"LOW",      sub:"Monitor & build",     bg:"linear-gradient(135deg,#0c2a3a,#0e3347)", icon:"👁️", tab:"priority", filter:"LOW"},
  ];
  // Time-aware greeting selection
  const welcomeGreeting = (() => {
    const day = todayDate.getDay(); // 0=Sun,1=Mon...5=Fri,6=Sat
    const date = todayDate.getDate();
    const month = todayDate.getMonth();
    const daysInMonth = new Date(todayDate.getFullYear(), month+1, 0).getDate();
    const isMonday = day === 1;
    const isFriday = day === 5;
    const isMidWeek = day === 2 || day === 3 || day === 4;
    const isEndOfMonth = daysInMonth - date <= 3;
    const isEndOfQuarter = (month === 2 || month === 5 || month === 8 || month === 11) && daysInMonth - date <= 7;

    // Pool time-specific greetings first, fall back to general ones
    const timePool = [];
    if (isMonday) timePool.push(
      "Start of the week energy. Let's build momentum early.",
      "Monday. Pipeline's loaded and the week is open. Let's go.",
      "New week, fresh shot at moving some deals. Where do we start?"
    );
    if (isFriday) timePool.push(
      "End of week push. Let's close out strong, Xavier.",
      "Friday. Let's make sure nothing critical slips into the weekend.",
      "Last push of the week — what still needs to move before EOD?"
    );
    if (isMidWeek) timePool.push(
      "Mid-week check-in. What's moved? What's stuck?",
      "Midweek. Good time to check pulse on the critical deals.",
      "Week's half over. Let's make sure we're on track."
    );
    if (isEndOfQuarter) timePool.push(
      "Quarter end approaching. What needs attention before it closes?",
      "Quarter's almost done. Let's protect what's close to closing.",
      "End of quarter — every movement matters now."
    );
    if (isEndOfMonth && !isEndOfQuarter) timePool.push(
      "Month's almost done. What needs attention before it closes?",
      "Last few days of the month. Let's make them count."
    );

    // General greetings (non-time-specific)
    const generalPool = GREETINGS.filter(g =>
      !g.includes("week") && !g.includes("quarter") && !g.includes("month") &&
      !g.includes("Monday") && !g.includes("Friday") && !g.includes("Mid-week")
    );

    const pool = timePool.length > 0 ? timePool : generalPool;
    return pool[Math.floor((date + Math.floor(sessionSeed.current * 100)) % pool.length)];
  })();
  const welcomeFact = FUN_FACTS[Math.abs(Math.floor((todayDate.getDate() * 3 + sessionSeed.current * 50) % FUN_FACTS.length))];

  // --- Dynamic chips based on live pipeline state ---
  const sessionChips = useRef(null);
  if (!sessionChips.current) {
    const chips = [];
    const today = new Date(); today.setHours(0,0,0,0);

    // 1. Most urgent deal right now
    const critical = effPR.filter(o => o.Priority === "CRITICAL").sort((a,b) => a["Days Out"] - b["Days Out"]);
    if (critical.length > 0) {
      const top = critical[0];
      chips.push(`What should I do with ${top["Account Name"]} right now?`);
    }

    // 2. Deals closing soonest
    const closing30 = effPR.filter(o => o["Days Out"] >= 0 && o["Days Out"] <= 30);
    const closing90 = effPR.filter(o => o["Days Out"] >= 0 && o["Days Out"] <= 90);
    if (closing30.length > 0) chips.push(`I have ${closing30.length} deals closing in 30 days — what needs attention?`);
    else if (closing90.length > 0) chips.push(`Walk me through the ${closing90.length} deals closing in 90 days`);

    // 3. AE with most stalled CRITICAL/HIGH
    const aeCounts = {};
    effPR.filter(o => o.Priority === "CRITICAL" || o.Priority === "HIGH").forEach(o => {
      aeCounts[o["Account Owner"]] = (aeCounts[o["Account Owner"]] || 0) + 1;
    });
    const topAE = Object.entries(aeCounts).sort((a,b) => b[1]-a[1])[0];
    if (topAE) chips.push(`${topAE[0]} has ${topAE[1]} high-priority stalled deals — what's the plan?`);

    // 4. Optys with no notes (biggest blind spots)
    const noNotes = effPR.filter(o => !(notes?.[o["Opty Number"]] || o.Notes || "").trim());
    if (noNotes.length > 0) {
      const worst = noNotes.filter(o => o.Priority === "CRITICAL" || o.Priority === "HIGH").slice(0,1)[0] || noNotes[0];
      chips.push(`${noNotes.length} optys have no notes — start with ${worst["Account Name"]}`);
    }

    // 5. Deals in Stage 4a/4b with no EB identified
    const needsEB = effPR.filter(o => (o.Stage.startsWith("4a") || o.Stage.startsWith("4b")) &&
      !/eb id|economic buyer|buying group/i.test(notes?.[o["Opty Number"]] || o.Notes || ""));
    if (needsEB.length > 0) chips.push(`${needsEB.length} Stage 4 deals still missing an Economic Buyer — who do I start with?`);

    // 6. Missing Opty Summaries on high priority deals
    const missingSum = effPR.filter(o => (o.Priority === "CRITICAL" || o.Priority === "HIGH") && !summaryChecks?.[o["Opty Number"]]);
    if (missingSum.length > 0) chips.push(`${missingSum.length} high-priority deals still need an Opty Summary — which ones?`);

    // 7. District with most stalled deals
    const distCounts = {};
    effPR.filter(o => o.Priority === "CRITICAL" || o.Priority === "HIGH").forEach(o => {
      const d = (o.District || "").replace(" Healthcare","");
      distCounts[d] = (distCounts[d] || 0) + 1;
    });
    const topDist = Object.entries(distCounts).sort((a,b) => b[1]-a[1])[0];
    if (topDist) chips.push(`Give me a full breakdown of ${topDist[0]} — ${topDist[1]} stalled deals`);

    // 8. Fallback generics if not enough chips
    const fallbacks = [
      "What's my top priority re-engagement this week?",
      "Which deals are most at risk of closing lost?",
      "Help me draft a re-engagement message for my most stalled deal",
      "Who are the AEs I need to connect with most urgently?",
      "Which accounts have the most optys?",
    ];
    let fi = 0;
    while (chips.length < 4 && fi < fallbacks.length) { chips.push(fallbacks[fi++]); }

    // Shuffle and pick 4, rotating by day so they change daily
    const seed = todayDate.getDate() + Math.floor(sessionSeed.current * 10);
    const shuffled = chips.sort((a,b) => ((a.charCodeAt(0) + seed) % 7) - ((b.charCodeAt(0) + seed) % 7));
    sessionChips.current = shuffled.slice(0, 4);
  }

  // --- Dynamic chip groups built from live pipeline state ---
  const dynamicChipGroups = (() => {
    const groups = [];
    const ae = (o) => o["Account Owner"] || "";

    // 🎯 Prioritize — based on real urgency
    const critOptys = effPR.filter(o => o.Priority === "CRITICAL").sort((a,b) => a["Days Out"]-b["Days Out"]);
    const highOptys = effPR.filter(o => o.Priority === "HIGH").sort((a,b) => a["Days Out"]-b["Days Out"]);
    const closing30 = effPR.filter(o => o["Days Out"] >= 0 && o["Days Out"] <= 30);
    const noNotes = effPR.filter(o => !(notes?.[o["Opty Number"]] || o.Notes || "").trim());
    const prioritizeChips = [];
    if (critOptys.length > 0) prioritizeChips.push(`Walk me through my ${critOptys.length} CRITICAL deals`);
    if (closing30.length > 0) prioritizeChips.push(`${closing30.length} deals closing in 30 days — prioritize them for me`);
    else if (highOptys.length > 0) prioritizeChips.push(`Top 5 HIGH priority deals to re-engage this week`);
    if (noNotes.length > 0) prioritizeChips.push(`${noNotes.length} optys have no notes — which are most at risk?`);
    prioritizeChips.push("What's my single most important action today?");
    if (prioritizeChips.length > 0) groups.push({label:"🎯 Prioritize", chips: prioritizeChips.slice(0,3)});

    // 👤 People — AEs with the most urgent work
    const aeHighCount = {};
    effPR.filter(o => o.Priority === "CRITICAL" || o.Priority === "HIGH").forEach(o => {
      aeHighCount[ae(o)] = (aeHighCount[ae(o)] || 0) + 1;
    });
    const topAEs = Object.entries(aeHighCount).sort((a,b) => b[1]-a[1]).slice(0,3);
    const peopleChips = topAEs.map(([name, n]) => `${name.split(" ")[0]} has ${n} stalled deals — what should I say?`);
    if (peopleChips.length > 0) groups.push({label:"👤 People", chips: peopleChips.slice(0,3)});

    // 📍 Territory — district-specific insights
    const distMap = {};
    effPR.forEach(o => { const d = (o.District||"").replace(" Healthcare",""); distMap[d] = (distMap[d]||[]).concat(o); });
    const territoryChips = Object.entries(distMap)
      .sort((a,b) => b[1].filter(o=>o.Priority==="CRITICAL"||o.Priority==="HIGH").length - a[1].filter(o=>o.Priority==="CRITICAL"||o.Priority==="HIGH").length)
      .slice(0,3)
      .map(([d, optys]) => {
        const urgent = optys.filter(o=>o.Priority==="CRITICAL"||o.Priority==="HIGH").length;
        return `${d}: ${urgent} urgent deals out of ${optys.length} total — break it down`;
      });
    if (territoryChips.length > 0) groups.push({label:"📍 Territory", chips: territoryChips.slice(0,3)});

    // ✉️ Outreach — specific accounts that need contact
    const needsOutreach = effPR
      .filter(o => o.Priority === "CRITICAL" || (o.Priority === "HIGH" && o["Days Out"] <= 120))
      .filter(o => {
        const n = (notes?.[o["Opty Number"]] || o.Notes || "").toLowerCase();
        return !n.includes("scheduled") && !n.includes("demo set") && !n.includes("confirmed");
      })
      .sort((a,b) => a["Days Out"]-b["Days Out"])
      .slice(0,3);
    const outreachChips = needsOutreach.map(o =>
      `Draft a re-engagement message for ${o["Account Name"]} (${o.Stage.replace(/ \(\d+%\)/,"").replace(/^\d+[ab]? - /,"")})`
    );
    if (outreachChips.length > 0) groups.push({label:"✉️ Outreach", chips: outreachChips.slice(0,3)});

    return groups;
  })();

  const clearChat = () => {
    setMsgs([]); history.current = []; autoSaveId.current = null;
    window.storage.set("pipeline_chat", JSON.stringify({msgs:[],history:[]}), true).catch(console.error);
  };

  // -- Saved Chats (managed by ChatCtx in App) --------------------------------
  const [showSaved, setShowSaved] = useState(false);

  const loadChat = (entry) => {
    setMsgs(entry.msgs);
    history.current = entry.history || [];
    autoSaveId.current = entry.id; // continue auto-saving into this entry
    setShowSaved(false);
  };

  const deleteSaved = (id) => {
    if (autoSaveId.current === id) autoSaveId.current = null;
    persistSaved(savedChats.filter(c => c.id !== id));
  };

  const renameChat = (id, newName) => {
    persistSaved(savedChats.map(c => c.id === id ? { ...c, name: newName } : c));
  };

  const ask = async (text) => {
    const q = text || input.trim();
    if (!q || loading) return;
    setInput(""); setLoading(true);
    history.current.push({role:"user",content:q});
    setMsgs(m=>[...m,{role:"user",content:q}]);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({model:"claude-sonnet-4-20250514", max_tokens:8000, system:buildSystem(effPR,notes,closedOverrides), messages:history.current})
      });
      const d = await res.json();
      let reply = d.content?.map(b=>b.text||"").join("")||"No response.";
      if (d.stop_reason === "max_tokens" && (reply.includes("[NOTE_UPDATE") || reply.includes("[PRIORITY_UPDATE") || reply.includes("[SUMMARY_CHECK") || reply.includes("[STAGE_UPDATE"))) {
        history.current.push({role:"assistant",content:reply});
        const contRes = await fetch("https://api.anthropic.com/v1/messages", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:4000,system:buildSystem(effPR,notes,closedOverrides),messages:[...history.current,{role:"user",content:"Continue — you were cut off. Write ALL remaining tags for any optys not yet processed. Do not repeat tags already written."}]})}); const d2=await contRes.json(); reply=reply+"\n"+(d2.content?.map(b=>b.text||"").join("")||""); history.current.pop();
      }
      history.current.push({role:"assistant",content:reply});
      setMsgs(m=>[...m,{role:"assistant",content:reply}]);
      const noteRx = /\[NOTE_UPDATE:(OPTY\d+):([^\]]+)\]/gi;
      let nm; let noteFound=false;
      while ((nm=noteRx.exec(reply))!==null) { updateNote(nm[1], nm[2].trim()); noteFound=true; }
      const prioRx = /\[PRIORITY_UPDATE:(OPTY\d+):(CRITICAL|HIGH|MEDIUM|LOW)\]/gi;
      let pm;
      while ((pm=prioRx.exec(reply))!==null) { updatePriority(pm[1], pm[2].toUpperCase()); }
      const closeRx = /\[CLOSE_OPTY:(OPTY\d+):?([^\]]*)?\]/gi;
      let cm;
      while ((cm=closeRx.exec(reply))!==null) { closeOpty(cm[1], cm[2]?.trim()||"Closed No Decision"); }
      const rankRx = /\[RANK_UPDATE:(OPTY\d+):(\d+)\]/gi;
      let rm;
      while ((rm=rankRx.exec(reply))!==null) { updateRank(rm[1], rm[2]); }
      const stageRx = /\[STAGE_UPDATE:(OPTY\d+):([^\]]+)\]/gi;
      let sm;
      while ((sm=stageRx.exec(reply))!==null) { updateStage(sm[1], sm[2].trim()); }
      const summaryRx = /\[SUMMARY_CHECK:(OPTY\d+)\]/gi;
      let sumM;
      while ((sumM=summaryRx.exec(reply))!==null) { toggleSummary(sumM[1]); }
      if (!noteFound) {
        const notePatterns = [
          /update(?:d)?(?:\s+the)?\s+note(?:s)?\s+(?:for|on)\s+(OPTY\d+)[:\s\-]+([^\n.]+)/i,
          /(?:add|set|log)\s+(?:a\s+)?note(?:s)?\s+(?:for|on|to)\s+(OPTY\d+)[:\s\-]+([^\n.]+)/i,
        ];
        for (const p of notePatterns) { const mm=q.match(p); if(mm&&mm[2].trim().length>3){updateNote(mm[1],mm[2].trim());break;} }
      }
    } catch { setMsgs(m=>[...m,{role:"assistant",content:"Something went wrong. Try again."}]); }
    setLoading(false);
  };

  const showWelcome = msgs.length === 0;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{display:"flex",flex:1,overflow:"hidden",background:T.chatBg,position:"relative"}}>
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.snchip:hover{border-color:#63DF4E!important;color:#032D42!important;background:#e8f8e4!important}.snsend:hover:not(:disabled){background:#4dcc3d!important}.logbtn:hover{background:#063d28!important;border-color:#63DF4E!important;color:#63DF4E!important}`}</style>

      {/* ── Saved Chats Sidebar ── */}
      <div style={{width:sidebarOpen?240:0,minWidth:sidebarOpen?240:0,flexShrink:0,borderRight:`1px solid ${T.border}`,background:T.sidebar,display:"flex",flexDirection:"column",overflow:"hidden",transition:"width .3s ease, min-width .3s ease",position:"relative"}}>
        <div style={{padding:"12px 14px 8px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${T.border}`,flexShrink:0}}>
          <span style={{fontWeight:700,fontSize:13,color:T.textPrimary}}>💬 Chats</span>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            <button onClick={()=>{ autoSaveId.current=null; clearChat(); }} style={{fontSize:11,padding:"4px 10px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:99,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>+ New</button>
            <button onClick={()=>setSidebarOpen(false)} title="Collapse" style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:6,color:T.textFaint,cursor:"pointer",fontSize:13,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"}}>‹</button>
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto"}}>
          {savedChats.length===0
            ? <div style={{padding:"20px 14px",fontSize:12,color:T.textFaint,textAlign:"center",lineHeight:1.6}}>No saved chats yet.<br/>Start a conversation and it'll appear here.</div>
            : savedChats.map(c=>(
                <SidebarChatEntry key={c.id} c={c} isActive={autoSaveId.current===c.id} onLoad={loadChat} onDelete={deleteSaved} onRename={renameChat} T={T} />
              ))
          }
        </div>
      </div>

      {/* Expand handle when sidebar is closed */}
      {!sidebarOpen && (
        <button onClick={()=>setSidebarOpen(true)} title="Open chats" style={{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",zIndex:10,background:T.surface,border:`1px solid ${T.border}`,borderLeft:"none",borderRadius:"0 6px 6px 0",padding:"12px 6px",cursor:"pointer",color:T.textMuted,fontSize:13,display:"flex",flexDirection:"column",alignItems:"center",gap:4,boxShadow:"2px 0 8px rgba(0,0,0,.15)"}}>
          <span style={{fontSize:10,writingMode:"vertical-rl",color:T.textFaint,letterSpacing:"0.05em"}}>CHATS</span>
          <span>›</span>
        </button>
      )}
      <div style={{display:"flex",flexDirection:"column",flex:1,overflow:"hidden",position:"relative"}}>
      {logModal && <LogNextStepModal context={logModal.content} prefillAction={logModal.prefillAction} onSave={(step)=>{addStep(step);setLogModal(null);}} onClose={()=>setLogModal(null)} />}
      <div style={{flex:1,overflowY:"auto",padding:"16px 20px",display:"flex",flexDirection:"column",gap:12}}>
        {showWelcome ? (
          <div style={{animation:"fadeUp .4s ease"}}>
            <div style={{textAlign:"center",padding:"24px 16px 16px"}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,boxShadow:"0 4px 14px rgba(3,45,66,.4)"}}>🤖</div>
              <div style={{fontSize:11,fontWeight:600,color:T.textFaint,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6}}>{todayStr}</div>
              <div style={{fontWeight:800,fontSize:20,color:T.textPrimary,marginBottom:10}}>{welcomeGreeting}</div>
              <div style={{display:"inline-flex",alignItems:"flex-start",gap:10,maxWidth:460,margin:"0 auto",background:T.notesBg,border:`1px solid ${T.notesBorder}`,borderRadius:10,padding:"10px 14px",textAlign:"left"}}>
                <span style={{fontSize:16,flexShrink:0,marginTop:1}}>💡</span>
                <div>
                  <div style={{fontSize:10,fontWeight:700,color:T.notesLink,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:3}}>{welcomeFact.tag}</div>
                  <div style={{fontSize:12,color:T.notesText,lineHeight:1.5}}>{welcomeFact.fact}</div>
                </div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,maxWidth:700,margin:"16px auto 20px"}}>
              {STAT_CARDS.map(s=>(
                <div key={s.label} onClick={()=>navTo(s.tab, s.filter)} style={{background:s.bg,borderRadius:12,padding:"14px 14px 12px",color:"white",boxShadow:"0 4px 12px rgba(0,0,0,.2)",cursor:"pointer",transition:"transform .15s, box-shadow .15s"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,.35)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,.2)";}}>
                  <div style={{fontSize:20,marginBottom:4}}>{s.icon}</div>
                  <div style={{fontWeight:800,fontSize:22,lineHeight:1}}>{s.value}</div>
                  <div style={{fontWeight:700,fontSize:11,marginTop:3}}>{s.label}</div>
                  <div style={{fontSize:10,opacity:0.75,marginTop:2}}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div style={{maxWidth:700,margin:"0 auto"}}>
              {/* Quick Actions row */}
              <div style={{marginBottom:10}}>
                <div style={{fontSize:11,fontWeight:700,color:T.textFaint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>⚡ Quick Actions</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {sessionChips.current.map(c=><button key={c} className="snchip" onClick={()=>ask(c)} style={{fontSize:12,padding:"6px 13px",border:`1px solid ${T.welcomeChipBorder}`,borderRadius:99,background:T.welcomeChipBg,color:T.welcomeChipText,cursor:"pointer",transition:"all .15s",whiteSpace:"nowrap"}}>{c}</button>)}
                </div>
              </div>
              {/* Groups in a horizontal grid */}
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px 16px"}}>
                {dynamicChipGroups.map(g=>(
                  <div key={g.label}>
                    <div style={{fontSize:10,fontWeight:700,color:T.textFaint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:5}}>{g.label}</div>
                    <div style={{display:"flex",flexDirection:"column",gap:4}}>
                      {g.chips.map(c=><button key={c} className="snchip" onClick={()=>ask(c)} style={{fontSize:11,padding:"5px 11px",border:`1px solid ${T.welcomeChipBorder}`,borderRadius:99,background:T.welcomeChipBg,color:T.welcomeChipText,cursor:"pointer",transition:"all .15s",textAlign:"left",whiteSpace:"normal",lineHeight:1.3}}>{c}</button>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {msgs.map((m,i)=>(
              <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.role==="user"?"flex-end":"flex-start",gap:4,animation:"fadeUp .2s ease"}}>
                <div style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",alignItems:"flex-end",gap:8,width:"100%"}}>
                  {m.role==="assistant"&&<div style={{width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>🤖</div>}
                  <div style={{maxWidth:560,fontSize:13,lineHeight:1.6,padding:"11px 15px",borderRadius:16,background:m.role==="user"?T.msgUser:T.msgAssistant,color:m.role==="user"?"white":T.textPrimary,border:m.role==="assistant"?`1px solid ${T.msgAssistantBorder}`:"none",borderBottomRightRadius:m.role==="user"?4:16,borderBottomLeftRadius:m.role==="assistant"?4:16}} dangerouslySetInnerHTML={{__html:m.role==="assistant"?renderMd(m.content):m.content}} />
                  {m.role==="user"&&<div style={{width:28,height:28,borderRadius:"50%",background:"#374151",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"white",fontWeight:700,flexShrink:0}}>XR</div>}
                </div>
                {m.role==="assistant"&&(()=>{
                  // Parse "## YOUR NEXT STEPS:" or "## NEXT STEPS:" section
                  const nsMatch = m.content.match(/##\s*(?:YOUR\s+)?NEXT\s+STEPS?:?\s*\n([\s\S]*?)(?:\n##|\n---|\n\*\*\*|$)/i);
                  if (nsMatch) {
                    const lines = nsMatch[1].split('\n').filter(l => l.trim());
                    const steps = lines
                      .filter(l => /^\s*\d+[\.\)]\s+/.test(l))
                      .map(l => l.replace(/^\s*\d+[\.\)]\s*/, '').replace(/\*\*/g,'').trim())
                      .filter(s => s.length > 5);
                    if (steps.length > 0) return (
                      <div style={{marginLeft:36,marginTop:2,display:"flex",flexDirection:"column",gap:4}}>
                        {steps.map((step, si) => (
                          <button key={si} className="logbtn" onClick={()=>setLogModal({content:m.content, prefillAction:step, msgIndex:i})}
                            style={{fontSize:11,padding:"4px 10px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,color:T.textFaint,cursor:"pointer",transition:"all .15s",textAlign:"left",display:"flex",alignItems:"center",gap:6}}>
                            <span style={{color:"#63DF4E",fontWeight:700,flexShrink:0}}>{si+1}.</span>
                            <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:400}}>{step}</span>
                            <span style={{marginLeft:"auto",flexShrink:0,opacity:0.5}}>+ log</span>
                          </button>
                        ))}
                      </div>
                    );
                  }
                  // Fallback: single log button
                  return <button className="logbtn" onClick={()=>setLogModal({content:m.content,msgIndex:i})} style={{marginLeft:36,fontSize:11,padding:"3px 10px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:T.textFaint,cursor:"pointer",transition:"all .15s"}}>+ Log next step</button>;
                })()}
              </div>
            ))}
            {loading&&(
              <div style={{display:"flex",alignItems:"flex-end",gap:8}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>🤖</div>
                <div style={{background:T.msgAssistant,border:`1px solid ${T.msgAssistantBorder}`,borderRadius:16,borderBottomLeftRadius:4,padding:"12px 16px",display:"flex",gap:5}}>
                  {[0,1,2].map(i=><div key={i} style={{width:7,height:7,borderRadius:"50%",background:"#81B5A1",animation:"bounce 1.2s infinite",animationDelay:`${i*.2}s`}} />)}
                </div>
              </div>
            )}
          </>
        )}
        <div ref={bottom} />
      </div>
      <div style={{padding:"12px 20px 16px",borderTop:`1px solid ${T.border}`,background:T.surface}}>
        {/* Saved chats panel */}
        {showSaved && (
          <div style={{marginBottom:12,background:T.surface2,border:`1px solid ${T.border}`,borderRadius:10,overflow:"hidden"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:`1px solid ${T.border}`}}>
              <span style={{fontWeight:700,fontSize:13,color:T.textPrimary}}>💾 Saved Chats</span>
              <button onClick={()=>setShowSaved(false)} style={{background:"transparent",border:"none",color:T.textFaint,cursor:"pointer",fontSize:16,lineHeight:1}}>✕</button>
            </div>
            {savedChats.length===0
              ? <div style={{padding:"16px 14px",fontSize:12,color:T.textFaint,textAlign:"center"}}>No saved chats yet. Start a conversation and it'll auto-save here.</div>
              : <div style={{maxHeight:220,overflowY:"auto"}}>
                  {savedChats.map(c=><SavedChatEntry key={c.id} c={c} onLoad={loadChat} onDelete={deleteSaved} onRename={renameChat} T={T} />)}
                </div>
            }
          </div>
        )}
        {/* Save name prompt removed - chats auto-save */}

        {!showWelcome&&(
          <div style={{display:"flex",gap:8,overflowX:"auto",marginBottom:10}}>
            {dynamicChipGroups.flatMap(g=>g.chips).slice(0,6).map(c=><button key={c} className="snchip" onClick={()=>ask(c)} style={{whiteSpace:"nowrap",fontSize:11,padding:"4px 11px",border:`1px solid ${T.chipBorder}`,borderRadius:99,background:T.chipBg,color:T.chipText,cursor:"pointer",flexShrink:0,transition:"all .15s"}}>{c}</button>)}
          </div>
        )}
        <div style={{display:"flex",gap:10,background:T.inputBg,border:`2px solid ${T.inputBorder}`,borderRadius:14,padding:"10px 14px"}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()} placeholder="Ask about any account, AE, district, or opty..." style={{flex:1,fontSize:13,border:"none",outline:"none",background:"none",color:T.textPrimary}} />
          <button className="snsend" onClick={()=>ask()} disabled={loading||!input.trim()} style={{background:"#63DF4E",color:"#032D42",border:"none",borderRadius:10,padding:"7px 16px",fontSize:12,fontWeight:700,cursor:"pointer",opacity:loading||!input.trim()?0.35:1,whiteSpace:"nowrap"}}>Send ↑</button>
          {!showWelcome&&<button onClick={()=>{ clearChat(); }} title="End chat" style={{background:"transparent",border:`1px solid #7f1d1d`,borderRadius:10,padding:"7px 10px",fontSize:12,color:"#f87171",cursor:"pointer"}}>End</button>}
        </div>
      </div>
      </div>
    </div>
  );
}

function extractNextStep(content) {
  // Strip bracket commands
  const clean = content.replace(/\[[A-Z_]+:[^\]]+\]/g, "").trim();

  // Look for numbered next step patterns: "1.", "**1.**", "Step 1:", etc.
  const numberedMatch = clean.match(/(?:^|\n)\s*(?:\*{0,2}1[\.\)]\*{0,2}|step\s*1:?)\s*\*{0,2}([^\n]{10,200})/i);
  if (numberedMatch) return numberedMatch[1].replace(/\*\*/g, "").trim();

  // Look for "Next Step(s):" label followed by content
  const nextStepLabel = clean.match(/next steps?:?\s*\n?\s*(?:-|\*|•|1\.|\*\*1\.\*\*)?\s*([^\n]{10,200})/i);
  if (nextStepLabel) return nextStepLabel[1].replace(/\*\*/g, "").trim();

  // Look for "Recommended action:" or "Action:" patterns
  const actionLabel = clean.match(/(?:recommended\s+)?action:?\s*([^\n]{10,200})/i);
  if (actionLabel) return actionLabel[1].replace(/\*\*/g, "").trim();

  // Look for bullet/dash lines that contain action verbs
  const bulletMatch = clean.match(/(?:^|\n)\s*[-•*]\s*(?:\*\*)?(?:Schedule|Call|Email|Reach out|Follow up|Set up|Book|Prepare|Send|Review|Connect|Engage|Draft|Confirm|Update|Log|Request|Identify|Build)[^\n]{5,180}/i);
  if (bulletMatch) return bulletMatch[0].replace(/^[\s\-•*]+/, "").replace(/\*\*/g, "").trim();

  // Last resort: first sentence that contains an action verb
  const sentences = clean.split(/[.\n]/).map(s => s.trim()).filter(s => s.length > 15);
  const actionSentence = sentences.find(s => /\b(schedule|call|email|reach|follow|set up|book|prepare|send|review|connect|engage|draft|confirm|update|request|identify)\b/i.test(s));
  return actionSentence ? actionSentence.replace(/\*\*/g, "").trim() : "";
}

function LogNextStepModal({ context, prefillAction, onSave, onClose }) {
  const T = useContext(ThemeCtx);
  const optyMatch = context.match(/OPTY\d+/);
  const acctMatch = context.match(/\*\*([^*]+)\*\*/);
  const suggestedAction = prefillAction || extractNextStep(context);
  const [form, setForm] = useState({account:acctMatch?acctMatch[1].replace(/\(.*\)/,"").trim():"",opty:optyMatch?optyMatch[0]:"",action:suggestedAction,owner:"",dueDate:"",priority:"HIGH",source:context.slice(0,200)});
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  return (
    <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.65)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:14,width:"100%",maxWidth:460,padding:20,boxShadow:"0 20px 60px rgba(0,0,0,.5)"}}>
        <div style={{fontWeight:700,fontSize:15,color:T.textPrimary,marginBottom:4}}>Log Next Step</div>
        <div style={{fontSize:11,color:T.textFaint,marginBottom:14,fontStyle:"italic",borderLeft:"3px solid #63DF4E",paddingLeft:8}}>{context.replace(/\*\*/g,"").replace(/\[[^\]]+\]/g,"").slice(0,120)}{context.length>120?"...":""}</div>
        <div style={{marginBottom:10}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}>
            <div style={{fontSize:11,fontWeight:600,color:T.textMuted,textTransform:"uppercase"}}>Action Required *</div>
            {suggestedAction && <span style={{fontSize:10,color:"#63DF4E",fontWeight:600}}>✦ auto-filled from response</span>}
          </div>
          <textarea value={form.action} onChange={e=>set("action",e.target.value)} placeholder="What needs to happen?" rows={2} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${suggestedAction?"#63DF4E":T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",resize:"none",boxSizing:"border-box"}} />
        </div>
        <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
          {[{label:"Account",key:"account",ph:"Account name"},{label:"Opty #",key:"opty",ph:"OPTY1234567"},{label:"Owner",key:"owner",ph:"AE or your name"}].map(f=>(
            <div key={f.key} style={{flex:1,minWidth:120}}>
              <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>{f.label}</div>
              <input value={form[f.key]} onChange={e=>set(f.key,e.target.value)} placeholder={f.ph} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",boxSizing:"border-box"}} />
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:10,marginBottom:14}}>
          <div style={{flex:1}}>
            <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>Due Date (SLA)</div>
            <input type="date" value={form.dueDate} onChange={e=>set("dueDate",e.target.value)} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{flex:1}}>
            <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>Priority</div>
            <select value={form.priority} onChange={e=>set("priority",e.target.value)} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none"}}>
              {["CRITICAL","HIGH","MEDIUM","LOW"].map(p=><option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
          <button onClick={onClose} style={{padding:"8px 16px",fontSize:13,background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,color:T.textMuted,cursor:"pointer"}}>Cancel</button>
          <button onClick={()=>form.action.trim()&&onSave({...form,id:Date.now(),status:"open",createdAt:new Date().toISOString()})} disabled={!form.action.trim()} style={{padding:"8px 20px",fontSize:13,fontWeight:700,background:"#63DF4E",color:"#032D42",border:"none",borderRadius:8,cursor:"pointer",opacity:form.action.trim()?1:0.4}}>Save Next Step</button>
        </div>
      </div>
    </div>
  );
}

function NextSteps() {
  const T = useContext(ThemeCtx);
  const {steps,addStep,updateStep,deleteStep} = useContext(StepsCtx);
  const [showForm,setShowForm] = useState(false);
  const [editId,setEditId] = useState(null);
  const [filterStatus,setFilterStatus] = useState("open");
  const [form,setForm] = useState({account:"",opty:"",action:"",owner:"",dueDate:"",priority:"HIGH",source:""});
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const today = new Date().toISOString().slice(0,10);
  const getDaysUntil = (d) => { if(!d) return null; return Math.ceil((new Date(d)-new Date(today))/86400000); };
  const SlaStatus = ({dueDate}) => {
    const days = getDaysUntil(dueDate);
    if(days===null) return <span style={{color:T.textFaint,fontSize:11}}>No SLA set</span>;
    if(days<0) return <span style={{background:"#3d0f0f",color:"#f87171",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>Overdue {Math.abs(days)}d</span>;
    if(days===0) return <span style={{background:"#3d1a05",color:"#fb923c",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>Due today</span>;
    if(days<=3) return <span style={{background:"#3d1a05",color:"#fb923c",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>{days}d left</span>;
    if(days<=7) return <span style={{background:"#2a2005",color:"#fbbf24",fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:99}}>{days}d left</span>;
    return <span style={{background:T.surface2,color:T.textMuted,fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:99}}>{days}d left</span>;
  };
  const filtered = steps.filter(s=>filterStatus==="all"||filterStatus==="open"||s.status===filterStatus).sort((a,b)=>{if(a.status==="done"&&b.status!=="done")return 1;if(a.status!=="done"&&b.status==="done")return -1;if(!a.dueDate&&!b.dueDate)return 0;if(!a.dueDate)return 1;if(!b.dueDate)return -1;return new Date(a.dueDate)-new Date(b.dueDate);});
  const openCount = steps.filter(s=>s.status==="open").length;
  const overdueCount = steps.filter(s=>s.status==="open"&&getDaysUntil(s.dueDate)!==null&&getDaysUntil(s.dueDate)<0).length;
  const dueSoonCount = steps.filter(s=>s.status==="open"&&getDaysUntil(s.dueDate)!==null&&getDaysUntil(s.dueDate)>=0&&getDaysUntil(s.dueDate)<=3).length;
  const startEdit = (step) => { setForm({account:step.account,opty:step.opty,action:step.action,owner:step.owner,dueDate:step.dueDate,priority:step.priority,source:step.source||""}); setEditId(step.id); setShowForm(true); };
  const handleSave = () => {
    if(!form.action.trim()) return;
    if(editId){updateStep(editId,form);}else{addStep({...form,id:Date.now(),status:"open",createdAt:new Date().toISOString()});}
    setForm({account:"",opty:"",action:"",owner:"",dueDate:"",priority:"HIGH",source:""}); setEditId(null); setShowForm(false);
  };
  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg}}>
      <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
        {overdueCount>0&&<div style={{background:"#3d0f0f",color:"#f87171",fontSize:12,fontWeight:700,padding:"6px 14px",borderRadius:8}}>Overdue: {overdueCount}</div>}
        {dueSoonCount>0&&<div style={{background:"#3d1a05",color:"#fb923c",fontSize:12,fontWeight:700,padding:"6px 14px",borderRadius:8}}>Due soon: {dueSoonCount}</div>}
        <div style={{background:T.surface2,color:T.textMuted,fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:8,border:`1px solid ${T.border}`}}>Open: {openCount}</div>
        <div style={{background:T.surface2,color:T.textMuted,fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:8,border:`1px solid ${T.border}`}}>Done: {steps.filter(s=>s.status==="done").length}</div>
        <div style={{marginLeft:"auto",display:"flex",gap:8}}>
          {["open","done","all"].map(f=><button key={f} onClick={()=>setFilterStatus(f)} style={{fontSize:11,padding:"5px 12px",borderRadius:99,border:`1px solid ${filterStatus===f?"#63DF4E":T.border}`,background:filterStatus===f?"#063d28":T.surface,color:filterStatus===f?"#63DF4E":T.textMuted,cursor:"pointer",fontWeight:filterStatus===f?700:500}}>{f.charAt(0).toUpperCase()+f.slice(1)}</button>)}
          <button onClick={()=>{setEditId(null);setForm({account:"",opty:"",action:"",owner:"",dueDate:"",priority:"HIGH",source:""});setShowForm(true);}} style={{fontSize:12,padding:"5px 16px",borderRadius:99,background:"#63DF4E",color:"#032D42",border:"none",cursor:"pointer",fontWeight:700}}>+ Add</button>
        </div>
      </div>
      {showForm&&(
        <div style={{background:T.surface,border:`1px solid #63DF4E`,borderRadius:12,padding:16,marginBottom:16}}>
          <div style={{fontWeight:700,fontSize:14,color:T.textPrimary,marginBottom:12}}>{editId?"Edit Next Step":"New Next Step"}</div>
          <div style={{marginBottom:10}}>
            <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>Action Required *</div>
            <textarea value={form.action} onChange={e=>set("action",e.target.value)} placeholder="What needs to happen?" rows={2} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",resize:"none",boxSizing:"border-box"}} />
          </div>
          <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
            {[{label:"Account",key:"account",ph:"Account name"},{label:"Opty #",key:"opty",ph:"OPTY1234567"},{label:"Owner",key:"owner",ph:"AE or your name"}].map(f=>(
              <div key={f.key} style={{flex:1,minWidth:130}}>
                <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>{f.label}</div>
                <input value={form[f.key]} onChange={e=>set(f.key,e.target.value)} placeholder={f.ph} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",boxSizing:"border-box"}} />
              </div>
            ))}
            <div style={{flex:1,minWidth:130}}>
              <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>Due Date</div>
              <input type="date" value={form.dueDate} onChange={e=>set("dueDate",e.target.value)} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none",boxSizing:"border-box"}} />
            </div>
            <div style={{flex:1,minWidth:110}}>
              <div style={{fontSize:11,fontWeight:600,color:T.textMuted,marginBottom:4,textTransform:"uppercase"}}>Priority</div>
              <select value={form.priority} onChange={e=>set("priority",e.target.value)} style={{width:"100%",fontSize:13,padding:"8px 10px",background:T.surface2,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none"}}>
                {["CRITICAL","HIGH","MEDIUM","LOW"].map(p=><option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
            <button onClick={()=>{setShowForm(false);setEditId(null);}} style={{padding:"7px 16px",fontSize:13,background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,color:T.textMuted,cursor:"pointer"}}>Cancel</button>
            <button onClick={handleSave} disabled={!form.action.trim()} style={{padding:"7px 20px",fontSize:13,fontWeight:700,background:"#63DF4E",color:"#032D42",border:"none",borderRadius:8,cursor:"pointer",opacity:form.action.trim()?1:0.4}}>{editId?"Update":"Save"}</button>
          </div>
        </div>
      )}
      {filtered.length===0?(
        <div style={{textAlign:"center",color:T.textFaint,fontSize:13,paddingTop:48}}>{filterStatus==="done"?"No completed steps yet.":filterStatus==="all"?"No steps yet.":"No steps yet. Use chat or + Add to create one."}</div>
      ):(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {filtered.map(step=>{
            const c=T.pc[step.priority]||T.pc.LOW;
            const isOverdue=step.status==="open"&&getDaysUntil(step.dueDate)!==null&&getDaysUntil(step.dueDate)<0;
            return (
              <div key={step.id} style={{background:T.surface,border:`1px solid ${isOverdue?"#7f1d1d":T.border}`,borderRadius:10,padding:"12px 14px",opacity:step.status==="done"?0.6:1}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                  <button onClick={()=>updateStep(step.id,{status:step.status==="done"?"open":"done"})} style={{width:20,height:20,borderRadius:4,border:`2px solid ${step.status==="done"?"#63DF4E":T.border}`,background:step.status==="done"?"#63DF4E":"transparent",cursor:"pointer",flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center",color:"#032D42",fontSize:12,fontWeight:900}}>{step.status==="done"?"✓":""}</button>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600,fontSize:13,color:step.status==="done"?T.textFaint:T.textPrimary,textDecoration:step.status==="done"?"line-through":"none",marginBottom:6}}>{step.action}</div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                      <span style={{background:c.bg,color:c.text,fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:99}}>{step.priority}</span>
                      {step.account&&<span style={{fontSize:11,color:T.textSecondary,fontWeight:600}}>{step.account}</span>}
                      {step.opty&&<a href={dynUrl(step.opty)} target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:10,color:T.linkColor,fontFamily:"monospace",textDecoration:"none",background:"rgba(129,181,161,.1)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(129,181,161,.25)",whiteSpace:"nowrap"}}><svg width="8" height="8" viewBox="0 0 23 23" fill="none"><rect x="1" y="1" width="10" height="10" fill="#f25022"/><rect x="12" y="1" width="10" height="10" fill="#7fba00"/><rect x="1" y="12" width="10" height="10" fill="#00a4ef"/><rect x="12" y="12" width="10" height="10" fill="#ffb900"/></svg>{step.opty} ↗</a>}
                      {step.owner&&<span style={{fontSize:11,color:T.textMuted}}>Owner: {step.owner}</span>}
                      <SlaStatus dueDate={step.dueDate} />
                    </div>
                    {step.createdAt&&<div style={{marginTop:4,fontSize:10,color:T.textFaint}}>Added {new Date(step.createdAt).toLocaleDateString()}</div>}
                  </div>
                  <div style={{display:"flex",gap:6,flexShrink:0}}>
                    <button onClick={()=>startEdit(step)} style={{fontSize:11,padding:"3px 10px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:6,color:T.textMuted,cursor:"pointer"}}>Edit</button>
                    <button onClick={()=>deleteStep(step.id)} style={{fontSize:11,padding:"3px 10px",background:"transparent",border:"1px solid #7f1d1d",borderRadius:6,color:"#f87171",cursor:"pointer"}}>✕</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PriorityRanked() {
  const T = useContext(ThemeCtx);
  const effPR = useEffPR();
  const { priorityFilter, setPriorityFilter } = useContext(NavCtx);
  const [filter, setFilter] = useState(priorityFilter || "ALL");
  const [search, setSearch] = useState("");

  // Sync when navigated to with a filter from home cards
  useEffect(() => {
    if (priorityFilter && priorityFilter !== "ALL") {
      setFilter(priorityFilter);
      setPriorityFilter("ALL"); // reset so navigating away and back doesn't re-apply
    }
  }, [priorityFilter]);
  const counts = {ALL:effPR.length,CRITICAL:effPR.filter(o=>o.Priority==="CRITICAL").length,HIGH:effPR.filter(o=>o.Priority==="HIGH").length,MEDIUM:effPR.filter(o=>o.Priority==="MEDIUM").length,LOW:effPR.filter(o=>o.Priority==="LOW").length};
  const sq = search.toLowerCase();
  const rows = effPR.filter(o=>(filter==="ALL"||o.Priority===filter)&&(!search||o["Account Name"].toLowerCase().includes(sq)||o["Account Owner"].toLowerCase().includes(sq)||o["Opty Number"].toLowerCase().includes(sq)));
  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg}}>
      <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
        {["ALL","CRITICAL","HIGH","MEDIUM","LOW"].map(p=>{
          const active=filter===p;
          const c=T.pc[p]||{};
          return (
            <button key={p} onClick={()=>setFilter(p)} style={{
              fontSize:11, padding:"5px 12px", borderRadius:99, cursor:"pointer", fontWeight:600,
              background: active ? (p==="ALL" ? "#032D42" : c.bg) : T.surface,
              color: active ? (p==="ALL" ? "white" : c.text) : (p==="ALL" ? T.textMuted : c.text),
              border: active ? `1px solid ${p==="ALL"?"#032D42":c.bg}` : `1px solid ${p==="ALL"?T.border:c.bg}`,
              opacity: active ? 1 : 0.65,
            }}>
              {p} ({counts[p]})
            </button>
          );
        })}        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, AE, or OPTY#..." style={{marginLeft:"auto",fontSize:12,padding:"5px 12px",border:`1px solid ${T.border}`,borderRadius:8,outline:"none",width:180,background:T.surface,color:T.textPrimary}} />
      </div>
      <Table cols={["#","Account","BU","Priority","Stage","Close Date","District","AE","Pipeline $","Notes","Call Prep","Summary"]} rows={rows.map((o,i)=>(
        <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
          <td style={{padding:"7px 12px",color:T.textFaint,fontWeight:700}}>{o.Rank}</td>
          <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
          <TruncCell text={o.BU||"—"} />
          <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
          <td style={{padding:"7px 12px",minWidth:200}}><div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"nowrap"}}><StagePill stage={o.Stage} opty={o["Opty Number"]} /><CloseBtn opty={o["Opty Number"]} /></div></td>
          <CloseDateCell o={o} />
          <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
          <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
          <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
        </tr>
      ))} />
    </div>
  );
}

function CloseUrgency() {
  const T = useContext(ThemeCtx);
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const [search, setSearch] = useState("");
  const allOptys = useEffPR().sort((a,b)=>a["Days Out"]-b["Days Out"]);
  const sq = search.toLowerCase();
  const effPR = sq ? allOptys.filter(o => o["Account Name"].toLowerCase().includes(sq) || o["Account Owner"].toLowerCase().includes(sq) || o["Opty Number"].toLowerCase().includes(sq)) : allOptys;

  const getAmt = (o) => { const s=pipelineAmts[o["Opty Number"]]; const b=o["Pipeline $"]; const v=s!==undefined?s:(b!==undefined?b:null); return (v!=null&&v>0)?Number(v):null; };
  const groupPipeline = (group) => { const t=group.reduce((s,o)=>{const a=getAmt(o);return a?s+a:s;},0); return t>0?(t>=1000000?"$"+(t/1000000).toFixed(1)+"M":t>=1000?"$"+Math.round(t/1000)+"K":"$"+t):null; };

  const windows = [
    {label:"🚨 ≤30 days",filter:o=>o["Days Out"]<=30,darkColor:"#f87171",lightColor:"#dc2626"},
    {label:"⚠️ 31-90 Days",filter:o=>o["Days Out"]>30&&o["Days Out"]<=90,darkColor:"#fb923c",lightColor:"#ea580c"},
    {label:"📌 91-180 Days",filter:o=>o["Days Out"]>90&&o["Days Out"]<=180,darkColor:"#fbbf24",lightColor:"#d97706"},
    {label:"📋 181+ Days",filter:o=>o["Days Out"]>180,darkColor:T.textMuted,lightColor:T.textMuted},
  ].map(w=>({...w,color:T.dark?w.darkColor:w.lightColor}));
  const [collapsed, setCollapsed] = useState(()=>Object.fromEntries(windows.map(w=>[w.label,effPR.filter(w.filter).length===0])));
  const toggle = (label) => setCollapsed(prev=>({...prev,[label]:!prev[label]}));
  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg,display:"flex",flexDirection:"column",gap:12}}>
      <div style={{display:"flex",justifyContent:"flex-end"}}> 
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, AE, or OPTY#..." style={{fontSize:12,padding:"5px 12px",border:`1px solid ${T.border}`,borderRadius:8,outline:"none",width:220,background:T.surface,color:T.textPrimary}} />
      </div>
      {windows.map(w=>{
        const group=effPR.filter(w.filter);
        const pipe=groupPipeline(group);
        const isCollapsed=collapsed[w.label];
        return (
          <div key={w.label}>
            <div onClick={()=>toggle(w.label)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:T.surface,border:`1px solid ${T.border}`,borderRadius:isCollapsed?8:"8px 8px 0 0",cursor:"pointer",userSelect:"none"}}>
              <span style={{fontWeight:700,fontSize:13,color:w.color}}>{w.label}</span>
              <span style={{fontSize:11,color:T.textFaint,background:T.surface2,padding:"2px 8px",borderRadius:99,border:`1px solid ${T.border}`}}>{group.length} optys</span>
              {pipe&&<span style={{fontSize:11,fontWeight:800,color:"#63DF4E",background:"rgba(99,223,78,0.1)",padding:"2px 10px",borderRadius:99,border:"1px solid rgba(99,223,78,0.25)",fontVariantNumeric:"tabular-nums"}}>{pipe}</span>}
              <span style={{marginLeft:"auto",color:T.textFaint,fontSize:12,fontWeight:700,transition:"transform .2s",display:"inline-block",transform:isCollapsed?"rotate(-90deg)":"rotate(0deg)"}}>▼</span>
            </div>
            <div style={{maxHeight:isCollapsed?"0":"9999px",overflow:isCollapsed?"hidden":"auto",transition:"max-height 0.5s ease",borderRadius:"0 0 8px 8px"}}>
              {group.length===0
                ?<div style={{fontSize:12,color:T.textFaint,padding:"10px 14px",background:T.surface,border:`1px solid ${T.border}`,borderTop:"none"}}>No opportunities in this window</div>
                :<Table inCollapsible cols={["Account","BU","Priority","Stage","Close Date","District","AE","Pipeline $","Notes","Call Prep","Summary"]} rows={group.map((o,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
                    <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
                    <TruncCell text={o.BU||"—"} />
                    <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
                    <td style={{padding:"7px 12px",minWidth:200}}><div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"nowrap"}}><StagePill stage={o.Stage} opty={o["Opty Number"]} /><CloseBtn opty={o["Opty Number"]} /></div></td>
                    <CloseDateCell o={o} />
                    <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
                    <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
                    <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
                  </tr>
                ))} />
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ByDistrict() {
  const T = useContext(ThemeCtx);
  const effPR = useEffPR();
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const { districtFilter, setDistrictFilter } = useContext(NavCtx);
  const [activeDistrict, setActiveDistrict] = useState("South Healthcare");
  useEffect(()=>{ if(districtFilter){ setActiveDistrict(districtFilter); setDistrictFilter(null); } },[districtFilter]);
  const [activePriority, setActivePriority] = useState(null);
  const group = effPR.filter(o=>o.District===activeDistrict);
  const stageCounts = group.reduce((acc,o)=>{const s=o.Stage.replace(/^\d+ - /,"").split(" (")[0];acc[s]=(acc[s]||0)+1;return acc;},{});
  const priorityCounts = group.reduce((acc,o)=>{acc[o.Priority]=(acc[o.Priority]||0)+1;return acc;},{});
  const filtered = activePriority?group.filter(o=>o.Priority===activePriority):group;

  const getAmt = (o) => { const s=pipelineAmts[o["Opty Number"]]; const b=o["Pipeline $"]; const v=s!==undefined?s:(b!==undefined?b:null); return (v!=null&&v>0)?Number(v):null; };
  const distPipeline = (d) => { const total=effPR.filter(o=>o.District===d).reduce((s,o)=>{const a=getAmt(o);return a?s+a:s;},0); return total>0?(total>=1000000?"$"+(total/1000000).toFixed(1)+"M":total>=1000?"$"+Math.round(total/1000)+"K":"$"+total):null; };

  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg}}>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        {["South Healthcare","Midwest Healthcare","Northeast Healthcare"].map(d=>{
          const count=effPR.filter(o=>o.District===d).length;
          const critCount=effPR.filter(o=>o.District===d&&o.Priority==="CRITICAL").length;
          const pipe=distPipeline(d);
          const active=activeDistrict===d;const dc=T.dist[d];const s=active?dc.active:dc.base;
          return (
            <button key={d} onClick={()=>{setActiveDistrict(d);setActivePriority(null);}} style={{flex:1,padding:"12px 14px",borderRadius:12,border:`2px solid ${s.border}`,background:s.bg,cursor:"pointer",textAlign:"left",boxShadow:active?"0 4px 12px rgba(0,0,0,.15)":"none"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><div style={{width:8,height:8,borderRadius:"50%",background:active?"white":dc.dot}} /><div style={{fontWeight:700,fontSize:13,color:s.tx}}>{d.replace(" Healthcare","")}</div></div>
              <div style={{fontSize:11,color:s.tx,opacity:active?0.85:0.75}}>{count} optys · <span style={{fontWeight:700}}>{critCount} CRITICAL</span></div>
              {pipe&&<div style={{fontSize:12,fontWeight:800,color:active?"#63DF4E":s.tx,marginTop:4,opacity:active?1:0.8}}>{pipe} pipeline</div>}
            </button>
          );
        })}
      </div>
      <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
        {["CRITICAL","HIGH","MEDIUM","LOW"].filter(p=>priorityCounts[p]).map(p=>{const c=T.pc[p];const isActive=activePriority===p;return <button key={p} onClick={()=>setActivePriority(isActive?null:p)} style={{background:c.bg,color:c.text,fontSize:12,fontWeight:700,padding:"6px 14px",borderRadius:8,border:`2px solid ${isActive?c.text:"transparent"}`,cursor:"pointer"}}>{p}: {priorityCounts[p]}</button>;})}
        {activePriority&&<button onClick={()=>setActivePriority(null)} style={{fontSize:11,color:T.textMuted,background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,padding:"5px 12px",cursor:"pointer"}}>✕ Clear</button>}
        <div style={{marginLeft:"auto",fontSize:11,color:T.textFaint}}>{filtered.length} of {group.length} optys</div>
        {Object.entries(stageCounts).map(([s,n])=><div key={s} style={{background:T.surface2,color:T.textMuted,fontSize:11,padding:"6px 12px",borderRadius:8,border:`1px solid ${T.border}`}}>{s}: {n}</div>)}
      </div>
      <Table cols={["#","Account","BU","Priority","Stage","Close Date","District","AE","Pipeline $","Notes","Call Prep","Summary"]} rows={filtered.map((o,i)=>(
        <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
          <td style={{padding:"7px 12px",color:T.textFaint,fontWeight:700}}>{o.Rank}</td>
          <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
          <TruncCell text={o.BU||"—"} />
          <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
          <td style={{padding:"7px 12px",minWidth:200}}><div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"nowrap"}}><StagePill stage={o.Stage} opty={o["Opty Number"]} /><CloseBtn opty={o["Opty Number"]} /></div></td>
          <CloseDateCell o={o} />
          <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
          <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
          <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
        </tr>
      ))} emptyMsg="No opportunities match this filter" />
    </div>
  );
}

function StageAdvancement() {
  const T = useContext(ThemeCtx);
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const allOptys = useEffPR();
  const [search, setSearch] = useState("");
  const sq = search.toLowerCase();
  const effPR = sq ? allOptys.filter(o => o["Account Name"].toLowerCase().includes(sq) || o["Account Owner"].toLowerCase().includes(sq) || o["Opty Number"].toLowerCase().includes(sq)) : allOptys;
  const { stageFilter, setStageFilter } = useContext(NavCtx);
  const stageOrder = ["7 - Deal Imminent","6 - Validation Completed","5 - Economic Buyer Validation","4b - Economic Buyer Identified","4a - Present Solution","3 - Objectives","2 - Discovery","1 - Opportunity"];
  const nextStepMap = {"7 - Deal Imminent":"Finalize terms → drive to close","6 - Validation Completed":"Confirm commitments → prepare close plan","5 - Economic Buyer Validation":"EB validation → resolve objections","4b - Economic Buyer Identified":"Engage EB → build executive alignment","4a - Present Solution":"Demo/present → validate technical fit","3 - Objectives":"Define objectives & success criteria","2 - Discovery":"Qualify pain → uncover buying drivers","1 - Opportunity":"Initial engagement → qualify opportunity"};
  const [collapsed, setCollapsed] = useState(()=>Object.fromEntries(stageOrder.map(s=>[s,!allOptys.some(o=>o.Stage===s)])));
  const toggle = (stage) => setCollapsed(prev => ({...prev, [stage]: !prev[stage]}));
  const stageRefs = useRef({});
  useEffect(() => {
    if (stageFilter) {
      setCollapsed(prev => ({ ...prev, [stageFilter]: false }));
      setTimeout(() => { stageRefs.current[stageFilter]?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 150);
      setStageFilter(null);
    }
  }, [stageFilter]);

  const getAmt = (o) => { const s=pipelineAmts[o["Opty Number"]]; const b=o["Pipeline $"]; const v=s!==undefined?s:(b!==undefined?b:null); return (v!=null&&v>0)?Number(v):null; };
  const groupPipeline = (group) => { const t=group.reduce((s,o)=>{const a=getAmt(o);return a?s+a:s;},0); return t>0?(t>=1000000?"$"+(t/1000000).toFixed(1)+"M":t>=1000?"$"+Math.round(t/1000)+"K":"$"+t):null; };

  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg,display:"flex",flexDirection:"column",gap:12}}>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, AE, or OPTY#..." style={{fontSize:12,padding:"5px 12px",border:`1px solid ${T.border}`,borderRadius:8,outline:"none",width:220,background:T.surface,color:T.textPrimary}} />
      </div>
      {stageOrder.filter(s=>effPR.some(o=>o.Stage===s)).map(stage=>{
        const group=effPR.filter(o=>o.Stage===stage).sort((a,b)=>a["Days Out"]-b["Days Out"]);
        const advKey=nextStepMap[stage];
        const asc=T.stageAdv[advKey]||{bg:T.surface2,tx:T.textMuted,icon:"📋"};
        const isCollapsed=collapsed[stage];
        const pipe=groupPipeline(group);
        return (
          <div key={stage} ref={el => stageRefs.current[stage] = el}>
            <div onClick={()=>toggle(stage)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:asc.bg,border:`1px solid ${T.border}`,borderBottom:isCollapsed?`1px solid ${T.border}`:"none",borderRadius:isCollapsed?8:"8px 8px 0 0",cursor:"pointer",userSelect:"none",marginBottom:0}}>
              <span style={{fontSize:18}}>{asc.icon}</span>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:13,color:asc.tx}}>{stage} - {group.length} {group.length===1?"opportunity":"opportunities"}</div>
                <div style={{fontSize:11,color:asc.tx,opacity:0.7,marginTop:1}}>Next step: {advKey}</div>
              </div>
              {pipe&&<span style={{fontSize:11,fontWeight:800,color:"#63DF4E",background:"rgba(99,223,78,0.12)",padding:"3px 10px",borderRadius:99,border:"1px solid rgba(99,223,78,0.25)",fontVariantNumeric:"tabular-nums",flexShrink:0}}>{pipe}</span>}
              <span style={{color:asc.tx,opacity:0.7,fontSize:12,fontWeight:700,transition:"transform .2s",display:"inline-block",transform:isCollapsed?"rotate(-90deg)":"rotate(0deg)"}}>▼</span>
            </div>
            <div style={{maxHeight:isCollapsed?"0":"2000px",overflow:"hidden",transition:"max-height 0.5s ease",borderRadius:"0 0 8px 8px"}}>
              <Table inCollapsible cols={["Account","BU","Priority","Close Date","District","AE","Pipeline $","Notes","Call Prep","Summary"]} rows={group.map((o,i)=>(
                <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
                  <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
                  <TruncCell text={o.BU||"—"} />
                  <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
                  <CloseDateCell o={o} />
                  <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
                  <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
                  <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
                </tr>
              ))} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PerRep() {
  const T = useContext(ThemeCtx);
  const effPR = useEffPR();
  const {notes: sharedNotes} = useContext(NotesCtx);
  const { repFilter, setRepFilter } = useContext(NavCtx);
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const reps = [...new Set(effPR.map(o=>o["Account Owner"]))].sort();
  const repStats = reps.map(rep=>{
    const optys=effPR.filter(o=>o["Account Owner"]===rep);
    const pipe=optys.reduce((s,o)=>{const sv=pipelineAmts[o["Opty Number"]];const bv=o["Pipeline $"];const v=sv!==undefined?sv:(bv!==undefined?bv:null);const n=(v!=null&&v>0)?Number(v):null;return n?s+n:s;},0);
    const fmtP=pipe>=1000000?"$"+(pipe/1000000).toFixed(1)+"M":pipe>=1000?"$"+Math.round(pipe/1000)+"K":null;
    return {name:rep,total:optys.length,critical:optys.filter(o=>o.Priority==="CRITICAL").length,high:optys.filter(o=>o.Priority==="HIGH").length,medium:optys.filter(o=>o.Priority==="MEDIUM").length,low:optys.filter(o=>o.Priority==="LOW").length,district:optys[0]?.District?.replace(" Healthcare","")||"",pipeline:fmtP};
  }).sort((a,b)=>b.total-a.total);
  const [selectedRep, setSelectedRep] = useState(null);
  useEffect(()=>{ if(repFilter){ setSelectedRep(repFilter); setRepFilter(null); } },[repFilter]);
  const [collapsedDistricts, setCollapsedDistricts] = useState(()=>["South Healthcare","Midwest Healthcare","Northeast Healthcare"].filter(d=>effPR.filter(o=>o.District===d).length===0));
  const toggleDistrict = (d) => setCollapsedDistricts(prev=>prev.includes(d)?prev.filter(x=>x!==d):[...prev,d]);
  const repOptys = selectedRep?effPR.filter(o=>o["Account Owner"]===selectedRep).sort((a,b)=>a.Rank-b.Rank):[];
  const repNotes = selectedRep?effPR.filter(o=>o["Account Owner"]===selectedRep&&sharedNotes[o["Opty Number"]]).map(o=>({...o,Notes:sharedNotes[o["Opty Number"]]})):[];

  const getAmt = (o) => {
    const stored = pipelineAmts[o["Opty Number"]];
    const base = o["Pipeline $"];
    const val = stored !== undefined ? stored : (base !== undefined ? base : null);
    return (val != null && val > 0) ? Number(val) : null;
  };
  const repPipeline = repOptys.reduce((s, o) => { const a = getAmt(o); return a ? s + a : s; }, 0);
  const fmtPipeline = (n) => n >= 1000000 ? "$" + (n/1000000).toFixed(1) + "M" : n >= 1000 ? "$" + Math.round(n/1000) + "K" : n > 0 ? "$" + n : null;

  const districtSummary = ["South Healthcare","Midwest Healthcare","Northeast Healthcare"].map(d=>{
    const dOptys = effPR.filter(o=>o.District===d);
    const dc = T.dist[d];
    return {
      name: d.replace(" Healthcare",""),
      total: dOptys.length,
      critical: dOptys.filter(o=>o.Priority==="CRITICAL").length,
      high: dOptys.filter(o=>o.Priority==="HIGH").length,
      medium: dOptys.filter(o=>o.Priority==="MEDIUM").length,
      low: dOptys.filter(o=>o.Priority==="LOW").length,
      reps: [...new Set(dOptys.map(o=>o["Account Owner"]))].length,
      topRep: repStats.filter(r=>r.district===d.replace(" Healthcare","")).sort((a,b)=>b.critical-a.critical)[0],
      dc,
    };
  });
  return (
    <div style={{display:"flex",flex:1,overflow:"hidden"}}>
      <div style={{width:230,flexShrink:0,borderRight:`1px solid ${T.border}`,overflowY:"auto",background:T.sidebar}}>
        {["South Healthcare","Midwest Healthcare","Northeast Healthcare"].map(district=>{
          const distReps=repStats.filter(r=>r.district===district.replace(" Healthcare",""));
          const distCrit=distReps.reduce((s,r)=>s+r.critical,0);
          const distTotal=distReps.reduce((s,r)=>s+r.total,0);
          const dc=T.dist[district];const isCollapsed=collapsedDistricts.includes(district);
          return (
            <div key={district}>
              <div onClick={()=>toggleDistrict(district)} style={{padding:"8px 14px",background:dc.base.bg,borderBottom:`1px solid ${dc.base.border}`,position:"sticky",top:0,zIndex:1,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",userSelect:"none"}}>
                <div>
                  <div style={{fontWeight:700,fontSize:11,color:dc.base.tx,textTransform:"uppercase",letterSpacing:"0.05em"}}>{district.replace(" Healthcare","")}</div>
                  <div style={{fontSize:10,color:dc.base.tx,opacity:0.75}}>{distReps.length} reps . {distTotal} optys{distCrit>0?` . ${distCrit} CRIT`:""}</div>
                </div>
                <span style={{color:dc.base.tx,fontSize:11,opacity:0.7,transition:"transform .2s",display:"inline-block",transform:isCollapsed?"rotate(-90deg)":"rotate(0deg)"}}>▼</span>
              </div>
              <div style={{maxHeight:isCollapsed?"0":"2000px",overflow:"hidden",transition:"max-height 0.5s ease"}}>
                {distReps.map(r=>{
                const active=selectedRep===r.name;
                return (
                  <div key={r.name} onClick={()=>setSelectedRep(r.name)} style={{padding:"10px 14px",borderBottom:`1px solid ${T.borderSubtle}`,cursor:"pointer",background:active?T.repActiveBg:T.repItemBg,borderLeft:`3px solid ${active?T.repActiveBorder:"transparent"}`}}>
                    <div style={{fontWeight:700,fontSize:13,color:active?T.repActiveText:T.textPrimary,marginBottom:3}}>{r.name}</div>
                    <div style={{fontSize:11,color:T.textFaint,marginBottom:5}}>{r.total} optys{r.pipeline?` · `+r.pipeline:""}</div>
                    <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                      {r.critical>0&&<span style={{background:T.pc.CRITICAL.bg,color:T.pc.CRITICAL.text,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.critical}C</span>}
                      {r.high>0&&<span style={{background:T.pc.HIGH.bg,color:T.pc.HIGH.text,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.high}H</span>}
                      {r.medium>0&&<span style={{background:T.pc.MEDIUM.bg,color:T.pc.MEDIUM.text,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.medium}M</span>}
                      {r.low>0&&<span style={{background:T.pc.LOW.bg,color:T.pc.LOW.text,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.low}L</span>}
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg}}>
        {selectedRep?(
          <>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,background:T.surface,padding:"12px 16px",borderRadius:10,border:`1px solid ${T.border}`}}>
              <button onClick={()=>setSelectedRep(null)} title="Back to leaderboard"
                style={{width:32,height:32,borderRadius:"50%",background:T.surface2,border:`1px solid ${T.border}`,cursor:"pointer",color:T.textMuted,fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                ←
              </button>
              <div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",color:"#63DF4E",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:15,flexShrink:0}}>{selectedRep.split(" ").map(n=>n[0]).join("")}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:15,color:T.textPrimary}}>{selectedRep}</div>
                <div style={{fontSize:12,color:T.textMuted}}>{repOptys[0]?.District} . {repOptys.length} active optys</div>
              </div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                {["CRITICAL","HIGH","MEDIUM","LOW"].map(p=>{const n=repOptys.filter(o=>o.Priority===p).length;if(!n)return null;const c=T.pc[p];return <div key={p} style={{background:c.bg,color:c.text,fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:8,textAlign:"center"}}><div>{n}</div><div style={{fontSize:9,fontWeight:500}}>{p}</div></div>;})}
                {fmtPipeline(repPipeline) && (
                  <div style={{background:"rgba(99,223,78,0.12)",border:"1px solid rgba(99,223,78,0.3)",borderRadius:8,padding:"4px 12px",textAlign:"center"}}>
                    <div style={{fontSize:14,fontWeight:800,color:"#63DF4E",fontVariantNumeric:"tabular-nums"}}>{fmtPipeline(repPipeline)}</div>
                    <div style={{fontSize:9,fontWeight:600,color:"rgba(99,223,78,0.7)",textTransform:"uppercase",letterSpacing:"0.04em"}}>Pipeline</div>
                  </div>
                )}
              </div>
            </div>
            {repNotes.length>0&&(
              <div style={{background:T.notesBg,border:`1px solid ${T.notesBorder}`,borderRadius:10,padding:"10px 14px",marginBottom:14}}>
                <div style={{fontWeight:700,fontSize:12,color:T.notesText,marginBottom:6}}>📝 Your Notes</div>
                {repNotes.map((o,i)=>(
                  <div key={i} style={{fontSize:12,color:T.notesText,marginBottom:i<repNotes.length-1?6:0,paddingBottom:i<repNotes.length-1?6:0,borderBottom:i<repNotes.length-1?`1px solid ${T.notesBorder}`:"none"}}>
                    <a href={dynUrl(o["Opty Number"])} target="_blank" rel="noreferrer"style={{display:"inline-flex",alignItems:"center",gap:3,fontFamily:"monospace",color:T.notesLink,textDecoration:"none",fontWeight:600,background:"rgba(129,181,161,.1)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(129,181,161,.25)",whiteSpace:"nowrap"}}><svg width="8" height="8" viewBox="0 0 23 23" fill="none"><rect x="1" y="1" width="10" height="10" fill="#f25022"/><rect x="12" y="1" width="10" height="10" fill="#7fba00"/><rect x="1" y="12" width="10" height="10" fill="#00a4ef"/><rect x="12" y="12" width="10" height="10" fill="#ffb900"/></svg>{o["Opty Number"]} ↗</a>{" "}<span style={{fontWeight:600}}>{o["Account Name"]}</span>{" - "}{o.Notes}
                  </div>
                ))}
              </div>
            )}
            <Table cols={["#","Account","BU","Priority","Stage","Close Date","Pipeline $","Notes","Call Prep","Summary"]} rows={repOptys.map((o,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
                <td style={{padding:"7px 12px",color:T.textFaint,fontWeight:700}}>{o.Rank}</td>
                <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
                <TruncCell text={o.BU||"—"} />
                <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
                <td style={{padding:"7px 12px",minWidth:200}}><div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"nowrap"}}><StagePill stage={o.Stage} opty={o["Opty Number"]} /><CloseBtn opty={o["Opty Number"]} /></div></td>
                <CloseDateCell o={o} />
                <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
              </tr>
            ))} />
          </>
        ):(
          <div style={{padding:16,overflowY:"auto"}}>
            {/* Header */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
              <div style={{fontWeight:800,fontSize:16,color:T.textPrimary}}>Rep Standings</div>
              <div style={{display:"flex",gap:6}}>
                {["CRITICAL","HIGH","MEDIUM","LOW"].map(p=>{const n=effPR.filter(o=>o.Priority===p).length;const c=T.pc[p];return <div key={p} style={{background:c.bg,color:c.text,fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:8,textAlign:"center"}}><div style={{fontSize:13,lineHeight:1}}>{n}</div><div style={{fontSize:9,marginTop:1,opacity:0.8}}>{p}</div></div>;})}
              </div>
            </div>

            {/* Podium - top 3 */}
            {repStats.length >= 1 && (() => {
              const podiumOrder = repStats.length >= 2
                ? [repStats[1], repStats[0], repStats.length >= 3 ? repStats[2] : null]
                : [null, repStats[0], null];
              const medals = [{rank:2,color:"#9ca3af",h:80},{rank:1,color:"#f59e0b",h:110},{rank:2,color:"#cd7f32",h:60}];
              const realRanks = [1,0,2]; // index into repStats for each podium slot
              return (
                <>
                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:8,marginBottom:0,padding:"0 8px"}}>
                  {podiumOrder.map((r,slotIdx)=>{
                    if(!r) return <div key={slotIdx} style={{flex:1}} />;
                    const rankNum = realRanks[slotIdx] + 1;
                    const medalColors = {1:{bg:"linear-gradient(135deg,#92680a,#ffd700)",tx:"#032D42"},2:{bg:"linear-gradient(135deg,#6b7280,#d1d5db)",tx:"#032D42"},3:{bg:"linear-gradient(135deg,#7c4a1e,#cd7f32)",tx:"#032D42"}};
                    const mc = medalColors[rankNum]||medalColors[3];
                    const podiumH = rankNum===1?130:rankNum===2?105:85;
                    const fullDistrict = r.district+" Healthcare";
                    const dc = T.dist[fullDistrict]||T.dist["Midwest Healthcare"];
                    const avatarSize = rankNum===1?52:42;
                    return (
                      <div key={r.name} onClick={()=>setSelectedRep(r.name)} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer"}}>
                        {/* Avatar + name above podium */}
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginBottom:8}}>
                          <div style={{width:avatarSize,height:avatarSize,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",border:`3px solid ${dc.dot}`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:rankNum===1?18:14,color:dc.dot,boxShadow:rankNum===1?"0 0 16px rgba(245,158,11,.4)":"none"}}>
                            {r.name.split(" ").map(n=>n[0]).join("")}
                          </div>
                          <div style={{fontWeight:700,fontSize:rankNum===1?13:11,color:T.textPrimary,textAlign:"center",maxWidth:90,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.name.split(" ")[0]}</div>
                          <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center"}}>
                            {r.critical>0&&<span style={{background:T.pc.CRITICAL.bg,color:T.pc.CRITICAL.text,fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:99}}>{r.critical}C</span>}
                            {r.high>0&&<span style={{background:T.pc.HIGH.bg,color:T.pc.HIGH.text,fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:99}}>{r.high}H</span>}
                          </div>
                        </div>
                        {/* Podium block */}
                        <div style={{width:"100%",height:podiumH,background:T.dark?"linear-gradient(180deg,#0d1b28,#0a1520)":rankNum===1?"linear-gradient(180deg,#fef9c3,#fef08a)":rankNum===2?"linear-gradient(180deg,#f3f4f6,#e5e7eb)":"linear-gradient(180deg,#fde8d0,#fcd9b6)",border:`1px solid ${T.border}`,borderBottom:"none",borderRadius:"6px 6px 0 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:0,gap:4}}>
                          <div style={{fontSize:24}}>{ rankNum===1?"🥇":rankNum===2?"🥈":"🥉" }</div>
                          <div style={{fontSize:10,color:T.dark?"rgba(255,255,255,0.7)":T.textMuted,fontWeight:600}}>{r.total} optys</div>
                          <div style={{display:"flex",height:3,width:"70%",borderRadius:99,overflow:"hidden",gap:1}}>
                            {r.critical>0&&<div style={{flex:r.critical,background:"#f87171"}} />}
                            {r.high>0&&<div style={{flex:r.high,background:"#fb923c"}} />}
                            {r.medium>0&&<div style={{flex:r.medium,background:"#fbbf24"}} />}
                            {r.low>0&&<div style={{flex:r.low,background:"#81B5A1"}} />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{height:6,background:T.dark?"linear-gradient(90deg,#0a1520,#0d1b28,#0a1520)":"linear-gradient(90deg,#e5e7eb,#d1d5db,#e5e7eb)",borderRadius:"0 0 4px 4px",marginBottom:24}} />
                </>
              );
            })()}

            {/* Rest of the reps */}
            {repStats.length > 3 && (
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                <div style={{fontSize:11,fontWeight:700,color:T.textFaint,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>All Reps</div>
                {repStats.slice(3).map((r,i)=>{
                  const fullDistrict=r.district+" Healthcare";
                  const dc=T.dist[fullDistrict]||T.dist["Midwest Healthcare"];
                  return (
                    <div key={r.name} onClick={()=>setSelectedRep(r.name)}
                      style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,padding:"9px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:10,transition:"border-color .15s"}}
                      onMouseEnter={e=>e.currentTarget.style.borderColor="#63DF4E"}
                      onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>
                      <span style={{fontSize:11,fontWeight:700,color:T.textFaint,minWidth:20,textAlign:"right"}}>{i+4}</span>
                      <div style={{width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",border:`2px solid ${dc.dot}`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:11,color:dc.dot,flexShrink:0}}>
                        {r.name.split(" ").map(n=>n[0]).join("")}
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:600,fontSize:12,color:T.textPrimary,marginBottom:2}}>{r.name}</div>
                        <DistrictPill district={fullDistrict} />
                      </div>
                      <div style={{display:"flex",gap:4,alignItems:"center",flexShrink:0}}>
                        {r.critical>0&&<span style={{background:T.pc.CRITICAL.bg,color:T.pc.CRITICAL.text,fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.critical}C</span>}
                        {r.high>0&&<span style={{background:T.pc.HIGH.bg,color:T.pc.HIGH.text,fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.high}H</span>}
                        {r.medium>0&&<span style={{background:T.pc.MEDIUM.bg,color:T.pc.MEDIUM.text,fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.medium}M</span>}
                        {r.low>0&&<span style={{background:T.pc.LOW.bg,color:T.pc.LOW.text,fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:99}}>{r.low}L</span>}
                        <span style={{fontSize:10,color:T.textFaint,marginLeft:2}}>{r.total}</span>
                      </div>
                      <div style={{display:"flex",height:3,width:60,borderRadius:99,overflow:"hidden",flexShrink:0}}>
                        {r.critical>0&&<div style={{flex:r.critical,background:"#f87171"}} />}
                        {r.high>0&&<div style={{flex:r.high,background:"#fb923c"}} />}
                        {r.medium>0&&<div style={{flex:r.medium,background:"#fbbf24"}} />}
                        {r.low>0&&<div style={{flex:r.low,background:"#81B5A1"}} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


// -- WORD BANK for scramble --------------------------------------------------
const SALES_WORDS = [
  {word:"PIPELINE",hint:"Your book of business"},
  {word:"DISCOVERY",hint:"First meeting to uncover pain"},
  {word:"CHAMPION",hint:"Your internal advocate"},
  {word:"STALLED",hint:"What Xavier unstalls"},
  {word:"PROPOSAL",hint:"Formal written offer"},
  {word:"FORECASTING",hint:"Predicting future revenue"},
  {word:"OBJECTION",hint:"Customer pushback to handle"},
  {word:"RENEWAL",hint:"Extending an existing contract"},
  {word:"ADOPTION",hint:"Customer using the platform"},
  {word:"EXPANSION",hint:"Growing an existing account"},
  {word:"EXECUTIVE",hint:"Economic buyer level"},
  {word:"MEDDICC",hint:"Sales qualification framework"},
  {word:"STAKEHOLDER",hint:"Person with a vested interest"},
  {word:"HEALTHCARE",hint:"Xavier's vertical"},
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// -- SNAKE GAME --------------------------------------------------------------
const GRID = 20;
const CELL = 18;

function SnakeGame() {
  const T = useContext(ThemeCtx);
  const initSnake = [{x:10,y:10},{x:9,y:10},{x:8,y:10}];
  const initFood = {x:15,y:10};
  const [snake, setSnake] = useState(initSnake);
  const [food, setFood] = useState(initFood);
  const [dir, setDir] = useState({x:1,y:0});
  const [status, setStatus] = useState("idle"); // idle | playing | dead
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const dirRef = useRef({x:1,y:0});
  const statusRef = useRef("idle");
  const snakeRef = useRef(initSnake);
  const foodRef = useRef(initFood);
  const scoreRef = useRef(0);
  const frameRef = useRef(null);

  const randomFood = (s) => {
    let f;
    do { f = {x:Math.floor(Math.random()*GRID), y:Math.floor(Math.random()*GRID)}; }
    while (s.some(c=>c.x===f.x&&c.y===f.y));
    return f;
  };

  const tick = useCallback(() => {
    if (statusRef.current !== "playing") return;
    const d = dirRef.current;
    const s = snakeRef.current;
    const head = {x:s[0].x+d.x, y:s[0].y+d.y};
    if (head.x<0||head.x>=GRID||head.y<0||head.y>=GRID||s.some(c=>c.x===head.x&&c.y===head.y)) {
      statusRef.current = "dead";
      setStatus("dead");
      return;
    }
    const ateFood = head.x===foodRef.current.x && head.y===foodRef.current.y;
    const newSnake = ateFood ? [head,...s] : [head,...s.slice(0,-1)];
    if (ateFood) {
      const newScore = scoreRef.current + 10;
      scoreRef.current = newScore;
      setScore(newScore);
      setHighScore(h => Math.max(h, newScore));
      const newFood = randomFood(newSnake);
      foodRef.current = newFood;
      setFood(newFood);
    }
    snakeRef.current = newSnake;
    setSnake([...newSnake]);
    frameRef.current = setTimeout(tick, 130);
  }, []);

  const start = () => {
    const s = [{x:10,y:10},{x:9,y:10},{x:8,y:10}];
    const f = randomFood(s);
    snakeRef.current = s; foodRef.current = f;
    dirRef.current = {x:1,y:0}; scoreRef.current = 0;
    setSnake(s); setFood(f); setDir({x:1,y:0}); setScore(0);
    statusRef.current = "playing"; setStatus("playing");
    clearTimeout(frameRef.current);
    frameRef.current = setTimeout(tick, 130);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      if (statusRef.current === "idle" || statusRef.current === "dead") { start(); return; }
      const map = {ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};
      const nd = map[e.key];
      if (nd.x !== -dirRef.current.x || nd.y !== -dirRef.current.y) {
        dirRef.current = nd; setDir(nd);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); clearTimeout(frameRef.current); };
  }, []);

  useEffect(() => () => clearTimeout(frameRef.current), []);

  const snakeSet = new Set(snake.map(c=>`${c.x},${c.y}`));

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        <div style={{fontSize:13,color:T.textMuted}}>Score: <strong style={{color:T.textPrimary}}>{score}</strong></div>
        <div style={{fontSize:13,color:T.textMuted}}>Best: <strong style={{color:"#63DF4E"}}>{highScore}</strong></div>
      </div>
      <div style={{position:"relative",width:GRID*CELL,height:GRID*CELL,background:T.surface2,border:`2px solid ${T.border}`,borderRadius:8,overflow:"hidden",cursor:"pointer"}} onClick={()=>{if(status!=="playing")start();}}>
        {/* grid dots */}
        {status==="idle"&&<div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,zIndex:2,background:"rgba(0,0,0,.5)"}}>
          <div style={{fontSize:32}}>🐍</div>
          <div style={{fontWeight:800,fontSize:16,color:"white"}}>SNAKE</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.6)"}}>Click or press arrow key to start</div>
        </div>}
        {status==="dead"&&<div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,zIndex:2,background:"rgba(0,0,0,.6)"}}>
          <div style={{fontSize:28}}>💀</div>
          <div style={{fontWeight:800,fontSize:16,color:"#f87171"}}>GAME OVER</div>
          <div style={{fontSize:13,color:"white"}}>Score: {score}</div>
          <div style={{fontSize:11,color:"rgba(255,255,255,.6)"}}>Click to play again</div>
        </div>}
        {/* food */}
        <div style={{position:"absolute",left:food.x*CELL+2,top:food.y*CELL+2,width:CELL-4,height:CELL-4,borderRadius:"50%",background:"#f87171",boxShadow:"0 0 6px #f87171"}} />
        {/* snake */}
        {snake.map((c,i)=>(
          <div key={i} style={{position:"absolute",left:c.x*CELL+1,top:c.y*CELL+1,width:CELL-2,height:CELL-2,borderRadius:i===0?5:3,background:i===0?"#63DF4E":"#3a9e6e",boxShadow:i===0?"0 0 6px #63DF4E":"none",transition:"none"}} />
        ))}
      </div>
      {/* mobile controls */}
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
        <button onClick={()=>{if(statusRef.current!=="playing"){start();return;}const nd={x:0,y:-1};if(nd.x!==-dirRef.current.x||nd.y!==-dirRef.current.y){dirRef.current=nd;setDir(nd);}}} style={{width:40,height:40,borderRadius:8,background:T.surface,border:`1px solid ${T.border}`,cursor:"pointer",fontSize:16,color:T.textPrimary}}>▲</button>
        <div style={{display:"flex",gap:4}}>
          <button onClick={()=>{if(statusRef.current!=="playing"){start();return;}const nd={x:-1,y:0};if(nd.x!==-dirRef.current.x||nd.y!==-dirRef.current.y){dirRef.current=nd;setDir(nd);}}} style={{width:40,height:40,borderRadius:8,background:T.surface,border:`1px solid ${T.border}`,cursor:"pointer",fontSize:16,color:T.textPrimary}}>◀</button>
          <button onClick={()=>{if(statusRef.current!=="playing"){start();return;}const nd={x:0,y:1};if(nd.x!==-dirRef.current.x||nd.y!==-dirRef.current.y){dirRef.current=nd;setDir(nd);}}} style={{width:40,height:40,borderRadius:8,background:T.surface,border:`1px solid ${T.border}`,cursor:"pointer",fontSize:16,color:T.textPrimary}}>▼</button>
          <button onClick={()=>{if(statusRef.current!=="playing"){start();return;}const nd={x:1,y:0};if(nd.x!==-dirRef.current.x||nd.y!==-dirRef.current.y){dirRef.current=nd;setDir(nd);}}} style={{width:40,height:40,borderRadius:8,background:T.surface,border:`1px solid ${T.border}`,cursor:"pointer",fontSize:16,color:T.textPrimary}}>▶</button>
        </div>
      </div>
    </div>
  );
}

// -- WORD SCRAMBLE -----------------------------------------------------------
function WordScramble() {
  const T = useContext(ThemeCtx);
  const [idx, setIdx] = useState(()=>Math.floor(Math.random()*SALES_WORDS.length));
  const [scrambled, setScrambled] = useState("");
  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("playing"); // playing | correct | wrong
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const entry = SALES_WORDS[idx];

  useEffect(()=>{
    setScrambled(shuffle(entry.word.split("")).join(""));
    setGuess(""); setStatus("playing"); setShowHint(false);
  }, [idx]);

  const check = () => {
    if (guess.toUpperCase()===entry.word) {
      setStatus("correct"); setStreak(s=>s+1);
    } else {
      setStatus("wrong"); setStreak(0);
    }
  };

  const next = () => setIdx(Math.floor(Math.random()*SALES_WORDS.length));

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16,maxWidth:400}}>
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <div style={{fontSize:13,color:T.textMuted}}>Streak: <strong style={{color:"#63DF4E"}}>{streak} 🔥</strong></div>
      </div>
      <div style={{background:T.surface2,border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 28px",textAlign:"center",width:"100%"}}>
        <div style={{fontSize:11,color:T.textFaint,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8}}>Unscramble this sales term</div>
        <div style={{fontSize:32,fontWeight:800,letterSpacing:8,color:T.textPrimary,fontFamily:"monospace",marginBottom:4}}>{scrambled}</div>
        <div style={{fontSize:11,color:T.textFaint}}>{entry.word.length} letters</div>
        {showHint&&<div style={{marginTop:8,fontSize:12,color:"#fbbf24",fontStyle:"italic"}}>💡 {entry.hint}</div>}
      </div>
      {status==="correct"&&<div style={{fontSize:13,fontWeight:700,color:"#63DF4E"}}>✓ Correct! Nice work.</div>}
      {status==="wrong"&&<div style={{fontSize:13,fontWeight:700,color:"#f87171"}}>✗ Nope - it was <strong>{entry.word}</strong></div>}
      <input
        value={guess} onChange={e=>setGuess(e.target.value.toUpperCase())}
        onKeyDown={e=>{if(e.key==="Enter"&&status==="playing")check();}}
        placeholder="Type your answer..." disabled={status!=="playing"}
        style={{width:"100%",fontSize:18,padding:"10px 14px",background:T.surface,border:`2px solid ${status==="correct"?"#63DF4E":status==="wrong"?"#f87171":T.border}`,borderRadius:10,color:T.textPrimary,outline:"none",textAlign:"center",fontWeight:700,letterSpacing:4,boxSizing:"border-box",fontFamily:"monospace"}}
      />
      <div style={{display:"flex",gap:10}}>
        {status==="playing"&&<>
          <button onClick={check} disabled={!guess} style={{padding:"8px 20px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:8,fontWeight:700,fontSize:13,cursor:"pointer",opacity:guess?1:0.4}}>Submit</button>
          <button onClick={()=>setShowHint(true)} style={{padding:"8px 16px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,color:T.textMuted,fontSize:13,cursor:"pointer"}}>💡 Hint</button>
          <button onClick={next} style={{padding:"8px 16px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,color:T.textMuted,fontSize:13,cursor:"pointer"}}>Skip</button>
        </>}
        {status!=="playing"&&<button onClick={next} style={{padding:"8px 24px",background:"#63DF4E",color:"#032D42",border:"none",borderRadius:8,fontWeight:700,fontSize:13,cursor:"pointer"}}>Next Word →</button>}
      </div>
    </div>
  );
}

// -- BRAIN BREAK TAB ---------------------------------------------------------
function BrainBreak() {
  const T = useContext(ThemeCtx);
  const [game, setGame] = useState("snake");
  return (
    <div style={{flex:1,overflowY:"auto",padding:24,background:T.pageBg,display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
      <div>
        <div style={{textAlign:"center",marginBottom:4}}>
          <div style={{fontWeight:800,fontSize:18,color:T.textPrimary}}>🎮 Brain Break</div>
          <div style={{fontSize:12,color:T.textMuted}}>Step away from the pipeline for a minute</div>
        </div>
      </div>
      <div style={{display:"flex",gap:10}}>
        {[{id:"snake",label:"🐍 Snake"},{id:"scramble",label:"🔤 Word Scramble"}].map(g=>(
          <button key={g.id} onClick={()=>setGame(g.id)} style={{padding:"8px 20px",borderRadius:99,border:`2px solid ${game===g.id?"#63DF4E":T.border}`,background:game===g.id?"#063d28":T.surface,color:game===g.id?"#63DF4E":T.textMuted,fontWeight:game===g.id?700:500,fontSize:13,cursor:"pointer"}}>{g.label}</button>
        ))}
      </div>
      {game==="snake"&&<SnakeGame />}
      {game==="scramble"&&<WordScramble />}
    </div>
  );
}

function PipelineDashboard() {
  const T = useContext(ThemeCtx);
  const effPR = useEffPR();
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const { notes } = useContext(NotesCtx);
  const [sortBy, setSortBy] = useState("amount"); // amount | priority | close
  const [filterAE, setFilterAE] = useState("ALL");
  const [filterPriority, setFilterPriority] = useState("ALL");
  const [search, setSearch] = useState("");

  const fmtK = (n) => n == null ? "—" : n >= 1000000 ? "$" + (n/1000000).toFixed(1) + "M" : n >= 1000 ? "$" + Math.round(n/1000) + "K" : "$" + n;

  // Resolve amount for each opty
  const getAmt = (o) => {
    const stored = pipelineAmts[o["Opty Number"]];
    const base = o["Pipeline $"];
    const val = stored !== undefined ? stored : (base !== undefined ? base : null);
    return (val != null && val > 0) ? val : null;
  };

  const withAmt = effPR.map(o => ({...o, _amt: getAmt(o)}));
  const hasAmt = withAmt.filter(o => o._amt != null);
  const totalPipeline = hasAmt.reduce((s, o) => s + o._amt, 0);
  const coveredCount = hasAmt.length;
  const uncoveredCount = effPR.length - coveredCount;

  // AE filter list
  const allAEs = ["ALL", ...Array.from(new Set(effPR.map(o => o["Account Owner"] || "Unknown"))).sort()];

  // By AE breakdown
  const aeMap = {};
  hasAmt.forEach(o => {
    const ae = o["Account Owner"] || "Unknown";
    if (!aeMap[ae]) aeMap[ae] = {ae, total: 0, count: 0, optys: []};
    aeMap[ae].total += o._amt;
    aeMap[ae].count++;
    aeMap[ae].optys.push(o);
  });
  const aeList = Object.values(aeMap).sort((a,b) => b.total - a.total);

  // By stage
  const stageMap = {};
  hasAmt.forEach(o => {
    const s = (o.Stage || "").replace(/ \(\d+%\)/, "").replace(/^\d+[ab]? - /, "");
    if (!stageMap[s]) stageMap[s] = {stage: s, total: 0, count: 0};
    stageMap[s].total += o._amt;
    stageMap[s].count++;
  });
  const stageList = Object.values(stageMap).sort((a,b) => b.total - a.total);

  // By district
  const distMap = {};
  hasAmt.forEach(o => {
    const d = (o.District || "Unknown").replace(" Healthcare","");
    if (!distMap[d]) distMap[d] = {dist: d, total: 0, count: 0};
    distMap[d].total += o._amt;
    distMap[d].count++;
  });
  const distList = Object.values(distMap).sort((a,b) => b.total - a.total);
  const distMax = distList[0]?.total || 1;

  // Filtered & sorted deal list
  const sq = search.toLowerCase();
  const filtered = hasAmt
    .filter(o => filterAE === "ALL" || (o["Account Owner"] || "") === filterAE)
    .filter(o => filterPriority === "ALL" || o.Priority === filterPriority)
    .filter(o => !sq || o["Account Name"].toLowerCase().includes(sq) || (o["Account Owner"]||"").toLowerCase().includes(sq) || o["Opty Number"].toLowerCase().includes(sq))
    .sort((a,b) => {
      if (sortBy === "amount") return b._amt - a._amt;
      if (sortBy === "low") return a._amt - b._amt;
      if (sortBy === "close") return a["Days Out"] - b["Days Out"];
      const po = {CRITICAL:0,HIGH:1,MEDIUM:2,LOW:3};
      return (po[a.Priority]||3) - (po[b.Priority]||3);
    });

  const statCard = (label, value, sub) => (
    <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:10,padding:"14px 18px",flex:1,minWidth:120}}>
      <div style={{fontSize:11,color:T.textFaint,marginBottom:4,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div>
      <div style={{fontSize:22,fontWeight:800,color:"#63DF4E",fontVariantNumeric:"tabular-nums"}}>{value}</div>
      {sub && <div style={{fontSize:10,color:T.textMuted,marginTop:2}}>{sub}</div>}
    </div>
  );

  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg,display:"flex",flexDirection:"column",gap:14}}>

      {/* Stat cards */}
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        {statCard("Total Pipeline", fmtK(totalPipeline), `across ${coveredCount} deals`)}
        {statCard("Avg Deal Size", fmtK(coveredCount ? Math.round(totalPipeline/coveredCount) : 0), "deals with $ data")}
        {statCard("Coverage", `${coveredCount}/${effPR.length}`, `${uncoveredCount} missing amounts`)}
        {statCard("Top Deal", fmtK(hasAmt.sort((a,b)=>b._amt-a._amt)[0]?._amt), hasAmt.sort((a,b)=>b._amt-a._amt)[0]?.["Account Name"]?.split(" ").slice(0,2).join(" "))}
      </div>

      {/* Charts row */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>

        {/* By AE */}
        <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:10,padding:14}}>
          <div style={{fontSize:12,fontWeight:700,color:T.textPrimary,marginBottom:10}}>💰 Pipeline by AE</div>
          {aeList.slice(0,8).map(({ae, total, count}) => {
            const pct = Math.round((total / totalPipeline) * 100);
            return (
              <div key={ae} style={{marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}>
                  <span style={{color:T.textSecondary,fontWeight:600}}>{ae.split(" ")[0]}</span>
                  <span style={{color:"#63DF4E",fontVariantNumeric:"tabular-nums",fontWeight:700}}>{fmtK(total)}</span>
                </div>
                <div style={{height:6,background:T.surface2,borderRadius:99,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#63DF4E,#3db82e)",borderRadius:99,transition:"width .3s"}} />
                </div>
                <div style={{fontSize:9,color:T.textFaint,marginTop:1}}>{count} deals · {pct}%</div>
              </div>
            );
          })}
        </div>

        {/* By District */}
        <div style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:10,padding:14}}>
          <div style={{fontSize:12,fontWeight:700,color:T.textPrimary,marginBottom:10}}>📍 Pipeline by District</div>
          {distList.map(({dist, total, count}) => {
            const pct = Math.round((total / distMax) * 100);
            return (
              <div key={dist} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}>
                  <span style={{color:T.textSecondary,fontWeight:600}}>{dist}</span>
                  <span style={{color:"#63DF4E",fontVariantNumeric:"tabular-nums",fontWeight:700}}>{fmtK(total)}</span>
                </div>
                <div style={{height:8,background:T.surface2,borderRadius:99,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#3b82f6,#1d4ed8)",borderRadius:99}} />
                </div>
                <div style={{fontSize:9,color:T.textFaint,marginTop:1}}>{count} deals</div>
              </div>
            );
          })}

          <div style={{marginTop:12,borderTop:`1px solid ${T.border}`,paddingTop:10}}>
            <div style={{fontSize:12,fontWeight:700,color:T.textPrimary,marginBottom:8}}>⚡ By Stage</div>
            {stageList.map(({stage, total, count}) => (
              <div key={stage} style={{display:"flex",justifyContent:"space-between",fontSize:11,padding:"3px 0",borderBottom:`1px solid ${T.borderSubtle}`}}>
                <span style={{color:T.textMuted}}>{stage}</span>
                <span style={{color:T.textSecondary,fontVariantNumeric:"tabular-nums"}}>{fmtK(total)} <span style={{color:T.textFaint}}>({count})</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deal list */}
      <div style={{background:T.pageBg}}>
        <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
          {["ALL","CRITICAL","HIGH","MEDIUM","LOW"].map(p=>{
            const active = filterAE === "ALL" ? (sortBy === "amount" ? true : false) : false; // priority pills
            // priority filter pills — reuse same style as PriorityRanked
            const isPriFilter = true;
            const c = T.pc[p] || {};
            const isActive = filterPriority === p;
            return (
              <button key={p} onClick={()=>setFilterPriority(p)} style={{
                fontSize:11, padding:"5px 12px", borderRadius:99, cursor:"pointer", fontWeight:600,
                background: isActive ? (p==="ALL" ? "#032D42" : c.bg) : T.surface,
                color: isActive ? (p==="ALL" ? "white" : c.text) : (p==="ALL" ? T.textMuted : c.text),
                border: isActive ? `1px solid ${p==="ALL"?"#032D42":c.bg}` : `1px solid ${p==="ALL"?T.border:c.bg}`,
                opacity: isActive ? 1 : 0.65,
              }}>
                {p} ({p==="ALL" ? hasAmt.length : hasAmt.filter(o=>o.Priority===p).length})
              </button>
            );
          })}
          <div style={{display:"flex",gap:4,marginLeft:8}}>
            {["amount","low","close"].map(s=>(
              <button key={s} onClick={()=>setSortBy(s)} style={{
                fontSize:11, padding:"5px 12px", borderRadius:99, cursor:"pointer", fontWeight:600,
                background: sortBy===s ? "#032D42" : T.surface,
                color: sortBy===s ? "white" : T.textMuted,
                border: `1px solid ${sortBy===s ? "#032D42" : T.border}`,
                opacity: sortBy===s ? 1 : 0.65,
              }}>
                {s==="amount"?"$ High→Low":s==="low"?"$ Low→High":"Closes Soon"}
              </button>
            ))}
          </div>
          <select value={filterAE} onChange={e=>setFilterAE(e.target.value)} style={{fontSize:12,padding:"5px 10px",background:T.surface,border:`1px solid ${T.border}`,borderRadius:8,color:T.textPrimary,outline:"none"}}>
            {allAEs.map(ae=><option key={ae} value={ae}>{ae==="ALL"?"All AEs":ae}</option>)}
          </select>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, AE, or OPTY#..." style={{marginLeft:"auto",fontSize:12,padding:"5px 12px",border:`1px solid ${T.border}`,borderRadius:8,outline:"none",width:200,background:T.surface,color:T.textPrimary}} />
        </div>
        <Table cols={["#","Account","BU","Priority","Stage","Close Date","District","AE","Pipeline $","Notes","Call Prep","Summary"]} rows={filtered.map((o,i)=>(
          <tr key={o["Opty Number"]} style={{borderBottom:`1px solid ${T.borderSubtle}`}}>
            <td style={{padding:"7px 12px",color:T.textFaint,fontWeight:700}}>{i+1}</td>
            <AccountCell name={o["Account Name"]} opty={o["Opty Number"]} />
            <TruncCell text={o.BU||"—"} />
            <td style={{padding:"7px 12px"}}><Badge priority={o.Priority} opty={o["Opty Number"]} /></td>
            <td style={{padding:"7px 12px",minWidth:200}}><div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"nowrap"}}><StagePill stage={o.Stage} opty={o["Opty Number"]} /><CloseBtn opty={o["Opty Number"]} /></div></td>
            <CloseDateCell o={o} />
            <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
            <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
            <PipelineCell o={o} /><NoteCell opty={o["Opty Number"]} /><CallPrepCell o={o} /><OptyCheckbox opty={o["Opty Number"]} />
          </tr>
        ))} />
        {filtered.length === 0 && <div style={{padding:24,textAlign:"center",color:T.textFaint,fontSize:13}}>No deals with pipeline data match this filter.</div>}
      </div>
    </div>
  );
}

function ClosedInactive() {
  const T = useContext(ThemeCtx);
  const { closedOverrides, reopenOpty } = useContext(PriorityCtx);

  // Merge static CI + manually closed optys
  const manuallyClosedRows = Object.entries(closedOverrides || {}).map(([opty, data]) => ({
    "Account Name": data.accountName,
    "Opty Number": opty,
    "Stage": data.stage || "Closed - Manual",
    "Close Date": data.closeDate,
    "District": data.district,
    "Account Owner": data.accountOwner,
    "Recommendation": "Manually closed",
    isManual: true,
  }));
  const allClosed = [...CI, ...manuallyClosedRows];

  const byAE = allClosed.reduce((a,o)=>{a[o["Account Owner"]]=(a[o["Account Owner"]]||0)+1;return a;},{});
  const topAE = Object.entries(byAE).sort((a,b)=>b[1]-a[1])[0];
  return (
    <div style={{flex:1,overflowY:"auto",padding:16,background:T.pageBg}}>
      <div style={{background:T.closedAlertBg,border:`1px solid ${T.closedAlertBorder}`,borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12,color:T.closedAlertText}}>
        <strong>{allClosed.length} Closed / Inactive</strong>{allClosed.length > 0 ? ` — ${CI.length} original closed, ${manuallyClosedRows.filter(r=>r.Stage!=="Inactive").length} manually closed, ${manuallyClosedRows.filter(r=>r.Stage==="Inactive").length} inactive. ${topAE ? topAE[0] + " owns " + topAE[1] + "." : ""}` : " — None yet."}
      </div>
      <Table cols={["Account","Opty #","Stage","Close Date","District","AE","Recommendation","Notes","Summary",""]} rows={allClosed.map((o,i)=>(
        <tr key={i} style={{borderBottom:`1px solid ${T.borderSubtle}`,opacity:o.isManual?1:0.85}}>
          <td style={{padding:"7px 12px",fontWeight:600,color:T.textPrimary,maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={o["Account Name"]}>{o["Account Name"]}</td>
          <td style={{padding:"7px 12px"}}>
            <a href={dynUrl(o["Opty Number"])} target="_blank" rel="noreferrer"style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:10,color:T.linkColor,fontFamily:"monospace",textDecoration:"none",background:"rgba(129,181,161,.1)",padding:"1px 6px",borderRadius:99,border:"1px solid rgba(129,181,161,.25)",whiteSpace:"nowrap"}}>
              <svg width="8" height="8" viewBox="0 0 23 23" fill="none"><rect x="1" y="1" width="10" height="10" fill="#f25022"/><rect x="12" y="1" width="10" height="10" fill="#7fba00"/><rect x="1" y="12" width="10" height="10" fill="#00a4ef"/><rect x="12" y="12" width="10" height="10" fill="#ffb900"/></svg>
              {o["Opty Number"]} ↗
            </a>
          </td>
          <td style={{padding:"7px 12px",minWidth:160}}>
            {(() => {
              const s = o.Stage || "";
              const isInactive = s === "Inactive";
              const bg = isInactive ? "rgba(148,163,184,.1)" : s.includes("Won") ? "rgba(22,163,74,.15)" : s.includes("Lost") ? "#2d0a0a" : "#2a1a05";
              const tx = isInactive ? "#94a3b8" : s.includes("Won") ? "#4ade80" : s.includes("Lost") ? "#f87171" : "#fb923c";
              return <span style={{background:bg,color:tx,fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:99,whiteSpace:"nowrap",display:"inline-block"}}>{s}</span>;
            })()}
          </td>
          <CloseDateCell o={o} />
          <td style={{padding:"7px 12px"}}><DistrictPill district={o.District} /></td>
          <td style={{padding:"7px 12px"}}><AELink name={o["Account Owner"]} /></td>
          <td style={{padding:"7px 12px",fontSize:11,color:o.Stage==="Inactive"?"#94a3b8":o.Stage?.includes("Won")?"#4ade80":o.Stage?.includes("Lost")?"#f87171":"#fb923c",fontWeight:600}}>{o.isManual ? o.Stage : o.Recommendation}</td>
          <NoteCell opty={o["Opty Number"]} /><OptyCheckbox opty={o["Opty Number"]} />
          <td style={{padding:"7px 12px"}}>
            {o.isManual && (
              <button onClick={()=>reopenOpty(o["Opty Number"])} title="Move back to active pipeline" style={{fontSize:10,padding:"2px 8px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:"#63DF4E",cursor:"pointer",whiteSpace:"nowrap",fontWeight:600}}>
                ↩ Reactivate
              </button>
            )}
          </td>
        </tr>
      ))} />
    </div>
  );
}


function FloatingChat() {
  const T = useContext(ThemeCtx);
  const { tab } = useContext(NavCtx);
  const { notes, updateNote } = useContext(NotesCtx);
  const { updatePriority, closedOverrides, closeOpty, updateRank, updateStage } = useContext(PriorityCtx);
  const { msgs, setMsgs, history, autoSaveId } = useContext(ChatCtx);
  const effPR = useEffPR();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({behavior:"smooth"}); }, [msgs, loading]);

  if (tab === "chat") return null;

  const ask = async (text) => {
    const q = text || input.trim();
    if (!q || loading) return;
    setInput(""); setLoading(true);
    history.current.push({role:"user",content:q});
    setMsgs(m=>[...m,{role:"user",content:q}]);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({model:"claude-sonnet-4-20250514", max_tokens:8000, system:buildSystem(effPR,notes,closedOverrides), messages:history.current})
      });
      const d = await res.json();
      const reply = d.content?.map(b=>b.text||"").join("")||"No response.";
      history.current.push({role:"assistant",content:reply});
      setMsgs(m=>[...m,{role:"assistant",content:reply}]);
      const noteRx = /\[NOTE_UPDATE:(OPTY\d+):([^\]]+)\]/gi; let nm;
      while ((nm=noteRx.exec(reply))!==null) { updateNote(nm[1], nm[2].trim()); }
      const prioRx = /\[PRIORITY_UPDATE:(OPTY\d+):(CRITICAL|HIGH|MEDIUM|LOW)\]/gi; let pm;
      while ((pm=prioRx.exec(reply))!==null) { updatePriority(pm[1], pm[2].toUpperCase()); }
      const closeRx = /\[CLOSE_OPTY:(OPTY\d+):?([^\]]*)?\]/gi; let cm;
      while ((cm=closeRx.exec(reply))!==null) { closeOpty(cm[1], cm[2]?.trim()||"Closed No Decision"); }
      const rankRx = /\[RANK_UPDATE:(OPTY\d+):(\d+)\]/gi; let rm;
      while ((rm=rankRx.exec(reply))!==null) { updateRank(rm[1], rm[2]); }
      const stageRx2 = /\[STAGE_UPDATE:(OPTY\d+):([^\]]+)\]/gi; let sm2;
      while ((sm2=stageRx2.exec(reply))!==null) { updateStage(sm2[1], sm2[2].trim()); }
      const summaryRx2 = /\[SUMMARY_CHECK:(OPTY\d+)\]/gi; let sumM2;
      while ((sumM2=summaryRx2.exec(reply))!==null) { toggleSummary(sumM2[1]); }
    } catch { setMsgs(m=>[...m,{role:"assistant",content:"Something went wrong. Try again."}]); }
    setLoading(false);
  };

  return (
    <div style={{position:"fixed",bottom:20,right:20,zIndex:1000,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10}}>
      {/* Chat panel */}
      {open && (
        <div style={{width:340,height:440,background:T.surface,border:`1px solid ${T.border}`,borderRadius:16,boxShadow:"0 8px 32px rgba(0,0,0,.35)",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {/* Header */}
          <div style={{background:"#032D42",padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:24,height:24,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",border:"1px solid #63DF4E",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>🤖</div>
              <span style={{fontWeight:700,fontSize:13,color:"white"}}>Pipeline Agent</span>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              {msgs.length > 0 && <button onClick={()=>{setMsgs([]);history.current=[];autoSaveId.current=null;}} style={{fontSize:10,padding:"2px 8px",background:"transparent",border:`1px solid ${T.border}`,borderRadius:99,color:"rgba(255,255,255,.5)",cursor:"pointer"}}>Clear</button>}
              <button onClick={()=>setOpen(false)} style={{background:"transparent",border:"none",color:"rgba(255,255,255,.6)",cursor:"pointer",fontSize:16,lineHeight:1,padding:"0 2px"}}>✕</button>
            </div>
          </div>
          {/* Messages */}
          <div style={{flex:1,overflowY:"auto",padding:"10px 12px",display:"flex",flexDirection:"column",gap:8}}>
            {msgs.length === 0 && (
              <div style={{textAlign:"center",color:T.textFaint,fontSize:12,marginTop:40}}>
                <div style={{fontSize:24,marginBottom:8}}>🤖</div>
                <div>Ask anything about the pipeline</div>
              </div>
            )}
            {msgs.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                <div style={{maxWidth:"85%",fontSize:12,lineHeight:1.5,padding:"7px 10px",borderRadius:12,background:m.role==="user"?"#044355":T.surface2,color:m.role==="user"?"white":T.textPrimary,border:m.role==="assistant"?`1px solid ${T.border}`:"none",borderBottomRightRadius:m.role==="user"?2:12,borderBottomLeftRadius:m.role==="assistant"?2:12}}
                  dangerouslySetInnerHTML={{__html:m.role==="assistant"?renderMd(m.content):m.content}} />
              </div>
            ))}
            {loading && (
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <div style={{padding:"7px 12px",borderRadius:12,background:T.surface2,border:`1px solid ${T.border}`,display:"flex",gap:4,alignItems:"center"}}>
                  {[0,1,2].map(i=><div key={i} style={{width:6,height:6,borderRadius:"50%",background:"#63DF4E",animation:`bounce 1.2s ease-in-out ${i*0.2}s infinite`}} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          {/* Input */}
          <div style={{padding:"8px 10px",borderTop:`1px solid ${T.border}`,display:"flex",gap:6,flexShrink:0,background:T.surface}}>
            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();ask();}}}
              placeholder="Ask about the pipeline..."
              style={{flex:1,fontSize:12,padding:"7px 10px",background:T.inputBg,border:`1px solid ${T.inputBorder}`,borderRadius:8,color:T.textPrimary,outline:"none"}}
            />
            <button onClick={()=>ask()} disabled={!input.trim()||loading}
              style={{padding:"7px 12px",background:input.trim()&&!loading?"#63DF4E":"#0f2535",color:input.trim()&&!loading?"#032D42":"#3d6477",border:"none",borderRadius:8,cursor:input.trim()&&!loading?"pointer":"default",fontWeight:700,fontSize:12}}>
              ↑
            </button>
          </div>
        </div>
      )}
      {/* FAB button */}
      <button onClick={()=>setOpen(o=>!o)}
        style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#032D42,#044355)",border:"2px solid #63DF4E",color:"white",fontSize:20,cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,.4)",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .15s, box-shadow .15s"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";e.currentTarget.style.boxShadow="0 6px 20px rgba(99,223,78,.3)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,.4)";}}>
        {open?"✕":"🤖"}
      </button>
    </div>
  );
}

function SummaryHeader() {
  const T = useContext(ThemeCtx);
  const effPR = useEffPR();
  const {storageReady} = useContext(PriorityCtx);
  const { summaryChecks } = useContext(SummaryCtx);
  const { pipelineAmts } = useContext(PipelineAmtCtx);
  const crit = effPR.filter(o=>o.Priority==="CRITICAL").length;
  const high = effPR.filter(o=>o.Priority==="HIGH").length;
  const uniqueAccts = new Set(effPR.map(o=>o["Acct #"])).size;
  const avgClose = Math.round(effPR.reduce((s,o)=>s+o["Days Out"],0)/effPR.length);
  const summaryDone = effPR.filter(o => summaryChecks[o["Opty Number"]]).length;
  const south = effPR.filter(o=>o.District==="South Healthcare").length;
  const midwest = effPR.filter(o=>o.District==="Midwest Healthcare").length;
  const ne = effPR.filter(o=>o.District==="Northeast Healthcare").length;
  const today = new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});

  const getAmt = (o) => { const s=pipelineAmts[o["Opty Number"]]; const b=o["Pipeline $"]; const v=s!==undefined?s:(b!==undefined?b:null); return (v!=null&&v>0)?Number(v):null; };
  const totalPipeline = effPR.reduce((s,o)=>{const a=getAmt(o);return a?s+a:s;},0);
  const fmtPipe = totalPipeline>=1000000?"$"+(totalPipeline/1000000).toFixed(1)+"M":totalPipeline>=1000?"$"+Math.round(totalPipeline/1000)+"K":"—";

  const stats = [
    [String(effPR.length),"Active Optys",""],
    [String(uniqueAccts),"Accounts",""],
    [storageReady?String(crit):"...","CRITICAL","#FF6B6B"],
    [storageReady?String(high):"...","HIGH","#FFB347"],
    [avgClose+"d","Avg Close",""],
    [fmtPipe,"Pipeline","#63DF4E"],
    [`S${south}.MW${midwest}.NE${ne}`,"Districts","#81B5A1"],
    [storageReady?`${summaryDone}/${effPR.length}`:"...","Opty Summary","#fbbf24"],
    [today,"Today","#63DF4E"],
  ];
  return (
    <div style={{background:"#044355",borderBottom:"2px solid #032D42",padding:"7px 16px",display:"flex",gap:20,flexWrap:"wrap",flexShrink:0}}>
      {stats.map(([v,l,c])=>(
        <div key={l} style={{fontSize:11,color:"rgba(255,255,255,.6)"}}>
          <strong style={{color:c||"#63DF4E",fontSize:13}}>{v}</strong> <span>{l}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("chat");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    const id = "app-scrollbar-style";
    let el = document.getElementById(id);
    if (!el) { el = document.createElement("style"); el.id = id; document.head.appendChild(el); }
    el.textContent = dark ? `
      ::-webkit-scrollbar { width: 10px; height: 10px; }
      ::-webkit-scrollbar-track { background: #0d1b28; }
      ::-webkit-scrollbar-thumb { background: #2a4a64; border-radius: 99px; border: 2px solid #0d1b28; }
      ::-webkit-scrollbar-thumb:hover { background: #3a6a8a; border: 2px solid #0d1b28; }
      ::-webkit-scrollbar-corner { background: #0d1b28; }
    ` : `
      ::-webkit-scrollbar { width: 10px; height: 10px; }
      ::-webkit-scrollbar-track { background: #e2e8ed; }
      ::-webkit-scrollbar-thumb { background: #9ab5c4; border-radius: 99px; border: 2px solid #e2e8ed; }
      ::-webkit-scrollbar-thumb:hover { background: #7a9eb0; border: 2px solid #e2e8ed; }
      ::-webkit-scrollbar-corner { background: #e2e8ed; }
    `;
  }, [dark]);
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const navTo = (tabId, filter="ALL") => { setTab(tabId); setPriorityFilter(filter); };
  const [repFilter, setRepFilter] = useState(null);
  const goToRep = (name) => { setRepFilter(name); setTab("rep"); };
  const [districtFilter, setDistrictFilter] = useState(null);
  const goToDistrict = (district) => { setDistrictFilter(district); setTab("district"); };
  const [stageFilter, setStageFilter] = useState(null);
  const goToStage = (stage) => { setStageFilter(stage); setTab("stage"); };
  const T = dark ? T_DARK : T_LIGHT;

  const [storageReady, setStorageReady] = useState(false);
  const isLoading = useRef(true);

  // -- Shared Chat State (Chat + FloatingChat) --------------------------------
  const [sharedMsgs, setSharedMsgs] = useState([]);
  const sharedHistory = useRef([]);
  const sharedAutoSaveId = useRef(null);
  const chatLoaded = useRef(false);
  const [savedChats, setSavedChats] = useState([]);

  const persistSaved = useCallback((updated) => {
    // Strip history from each entry before persisting
    const slim = updated.map(({history:_h, ...rest}) => rest).slice(0, 30);
    setSavedChats(slim);
    window.storage.set("pipeline_saved_chats", JSON.stringify(slim), true).catch(console.error);
  }, []);

  // Auto-save on every message change — strip history from saved payload (too large)
  useEffect(() => {
    if (!sharedMsgs.length) return;
    setSavedChats(prev => {
      const firstUser = sharedMsgs.find(m => m.role === "user");
      const autoName = firstUser ? firstUser.content.slice(0,40) + (firstUser.content.length > 40 ? "..." : "") : "Untitled chat";
      const now = new Date().toISOString();
      // Only store display msgs, not API history — keeps payload small
      const payload = { id: null, name: autoName, savedAt: now, msgs: sharedMsgs };
      let updated;
      if (sharedAutoSaveId.current) {
        updated = prev.map(c => c.id === sharedAutoSaveId.current ? { ...payload, id: sharedAutoSaveId.current } : c);
      } else {
        sharedAutoSaveId.current = Date.now();
        payload.id = sharedAutoSaveId.current;
        updated = [payload, ...prev];
      }
      // Cap at 30 saved chats so the key never exceeds ~2MB
      const capped = updated.slice(0, 30);
      try {
        window.storage.set("pipeline_saved_chats", JSON.stringify(capped), true).catch(console.error);
      } catch(e) { console.error("saved chats write failed:", e); }
      return capped;
    });
  }, [sharedMsgs]);

  useEffect(() => {
    if (!chatLoaded.current) return;
    // Only persist display msgs for active chat, not full API history
    try {
      window.storage.set("pipeline_chat", JSON.stringify({msgs: sharedMsgs}), true).catch(console.error);
    } catch(e) { console.error("chat write failed:", e); }
  }, [sharedMsgs]);

  // -- Save status indicator ------------------------------------------------
  const [saveStatus, setSaveStatus] = useState("idle"); // "idle" | "saving" | "saved" | "error"
  const [saveError, setSaveError] = useState(null);
  const saveTimer = useRef(null);
  const pendingSave = useRef(false);

  const setSaved = () => {
    setSaveStatus("saved");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSaveStatus("idle"), 2000);
  };

  // -- Central save helper (all keys at once) --------------------------------
  const saveAll = useCallback(async () => {
    if (isLoading.current) return;
    pendingSave.current = false;
    setSaveStatus("saving");
    const keys = [
      ["pipeline_notes",              () => JSON.stringify(notesRef.current)],
      ["pipeline_priority_overrides", () => JSON.stringify(priorityRef.current)],
      ["pipeline_closed_overrides",   () => JSON.stringify(closedRef.current)],
      ["pipeline_rank_overrides",     () => JSON.stringify(rankRef.current)],
      ["pipeline_stage_overrides",    () => JSON.stringify(stageRef.current)],
      ["pipeline_summary_checks",     () => JSON.stringify(summaryRef.current)],
      ["pipeline_next_steps",         () => JSON.stringify(stepsRef.current)],
      ["pipeline_amounts",            () => JSON.stringify(pipelineAmtsRef.current)],
      ["pipeline_close_dates",        () => JSON.stringify(closeDateRef.current)],
    ];
    // Write serially — concurrent writes trigger rate limit / server errors
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const writeWithRetry = async (key, data, attempts = 3) => {
      for (let i = 0; i < attempts; i++) {
        try {
          await window.storage.set(key, data, true);
          return;
        } catch(e) {
          if (i === attempts - 1) throw new Error(`${key}: ${e?.message || String(e)}`);
          await sleep(400 * (i + 1)); // 400ms, 800ms backoff
        }
      }
    };
    try {
      for (const [key, getData] of keys) {
        const data = getData();
        if (data.length > 4.8 * 1024 * 1024) {
          throw new Error(`${key} too large (${Math.round(data.length/1024)}KB)`);
        }
        await writeWithRetry(key, data);
        await sleep(50); // small gap between writes
      }
      setSaved();
    } catch(e) {
      console.error("Save error:", e);
      setSaveError(e?.message || String(e) || "Unknown error");
      setSaveStatus("error");
    }
  }, []);

  // Debounced save — batches rapid edits into one write per 800ms
  const scheduleSave = useCallback(() => {
    if (isLoading.current) return;
    pendingSave.current = true;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => { if (pendingSave.current) saveAll(); }, 800);
  }, [saveAll]);

  // Flush on tab hide or page unload — catches refreshes
  useEffect(() => {
    const flush = () => { if (pendingSave.current && !isLoading.current) saveAll(); };
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });
    window.addEventListener("beforeunload", flush);
    return () => {
      document.removeEventListener("visibilitychange", flush);
      window.removeEventListener("beforeunload", flush);
    };
  }, [saveAll]);

  // -- Notes -----------------------------------------------------------------
  const saInit = SA.reduce((acc,o)=>{if(o.Notes)acc[o["Opty Number"]]=o.Notes;return acc;},{});
  const [notes, setNotes] = useState(saInit);
  const notesRef = useRef(saInit);
  const updateNote = useCallback((opty, text) => {
    const updated = { ...notesRef.current, [opty]: text };
    notesRef.current = updated;
    setNotes(updated);
    scheduleSave();
  }, []);

  // -- Priority overrides -----------------------------------------------------
  const [priorityOverrides, setPriorityOverrides] = useState({});
  const priorityRef = useRef({});
  const updatePriority = useCallback((opty, level) => {
    const updated = { ...priorityRef.current, [opty]: level };
    priorityRef.current = updated;
    setPriorityOverrides(updated);
    scheduleSave();
  }, []);

  // -- Closed overrides ------------------------------------------------------
  const [closedOverrides, setClosedOverrides] = useState({});
  const closedRef = useRef({});
  const closeOpty = useCallback((opty, closedStage="Closed No Decision") => {
    const pr = PR.find(o => o["Opty Number"] === opty);
    const updated = { ...closedRef.current, [opty]: {
      closedAt: new Date().toISOString().slice(0,10),
      accountName: pr?.["Account Name"] || "",
      stage: closedStage,
      closeDate: pr?.["Close Date"] || "",
      district: pr?.District || "",
      accountOwner: pr?.["Account Owner"] || "",
    }};
    closedRef.current = updated;
    setClosedOverrides(updated);
    scheduleSave();
  }, []);
  const reopenOpty = useCallback((opty) => {
    const updated = { ...closedRef.current };
    delete updated[opty];
    closedRef.current = updated;
    setClosedOverrides(updated);
    scheduleSave();
  }, []);

  // -- Rank overrides -----------------------------------------------------------
  const [rankOverrides, setRankOverrides] = useState({});
  const rankRef = useRef({});
  const updateRank = useCallback((opty, rank) => {
    const updated = { ...rankRef.current, [opty]: parseInt(rank) };
    rankRef.current = updated;
    setRankOverrides(updated);
    scheduleSave();
  }, []);

  // -- Pipeline $ Overrides -------------------------------------------------------
  const [pipelineAmts, setPipelineAmts] = useState({});
  const pipelineAmtsRef = useRef({});
  const updatePipelineAmt = useCallback((optyNum, amount) => {
    const num = parseFloat(String(amount).replace(/[^0-9.]/g,''));
    const updated = { ...pipelineAmtsRef.current, [optyNum]: isNaN(num) ? null : num };
    pipelineAmtsRef.current = updated;
    setPipelineAmts(updated);
    scheduleSave();
  }, []);

  // -- Close Date Overrides -------------------------------------------------------
  const [closeDateOverrides, setCloseDateOverrides] = useState({});
  const closeDateRef = useRef({});
  const updateCloseDate = useCallback((optyNum, date) => {
    const updated = { ...closeDateRef.current, [optyNum]: date || null };
    closeDateRef.current = updated;
    setCloseDateOverrides(updated);
    scheduleSave();
  }, []);

  // -- Stage overrides -----------------------------------------------------------
  const [stageOverrides, setStageOverrides] = useState({});
  const stageRef = useRef({});
  const updateStage = useCallback((opty, stage) => {
    const updated = { ...stageRef.current, [opty]: stage };
    stageRef.current = updated;
    setStageOverrides(updated);
    scheduleSave();
  }, []);

  // -- Opty Summary Checks ----------------------------------------------------
  const [summaryChecks, setSummaryChecks] = useState({});
  const summaryRef = useRef({});
  const toggleSummary = useCallback((optyNum) => {
    const updated = { ...summaryRef.current, [optyNum]: !summaryRef.current[optyNum] };
    summaryRef.current = updated;
    setSummaryChecks(updated);
    scheduleSave();
  }, []);

  // -- Next Steps -------------------------------------------------------------
  const [steps, setSteps] = useState([]);
  const stepsRef = useRef([]);
  const addStep = useCallback((s) => {
    const u = [s, ...stepsRef.current];
    stepsRef.current = u; setSteps(u);
    scheduleSave();
  }, []);
  const updateStep = useCallback((id, updates) => {
    const u = stepsRef.current.map(s => s.id===id ? {...s,...updates} : s);
    stepsRef.current = u; setSteps(u);
    scheduleSave();
  }, []);
  const deleteStep = useCallback((id) => {
    const u = stepsRef.current.filter(s => s.id!==id);
    stepsRef.current = u; setSteps(u);
    scheduleSave();
  }, []);

  // -- Load all from shared storage -------------------------------------------
  useEffect(() => {
    (async () => {
      try {
        const [stepRes, noteRes, prioRes, closedRes, rankRes, stageRes, chatRes, savedRes, importRes, summaryRes, pipelineAmtsRes, closeDateRes] = await Promise.all([
          window.storage.get("pipeline_next_steps", true).catch(()=>null),
          window.storage.get("pipeline_notes", true).catch(()=>null),
          window.storage.get("pipeline_priority_overrides", true).catch(()=>null),
          window.storage.get("pipeline_closed_overrides", true).catch(()=>null),
          window.storage.get("pipeline_rank_overrides", true).catch(()=>null),
          window.storage.get("pipeline_stage_overrides", true).catch(()=>null),
          window.storage.get("pipeline_chat", true).catch(()=>null),
          window.storage.get("pipeline_saved_chats", true).catch(()=>null),
          window.storage.get("pipeline_imported", true).catch(()=>null),
          window.storage.get("pipeline_summary_checks", true).catch(()=>null),
          window.storage.get("pipeline_amounts", true).catch(()=>null),
          window.storage.get("pipeline_close_dates", true).catch(()=>null),
        ]);
        if (stepRes?.value) { const v=JSON.parse(stepRes.value); stepsRef.current=v; setSteps(v); }
        if (noteRes?.value) { const v={...saInit,...JSON.parse(noteRes.value)}; notesRef.current=v; setNotes(v); }
        if (prioRes?.value) { const v=JSON.parse(prioRes.value); priorityRef.current=v; setPriorityOverrides(v); }
        if (closedRes?.value) { const v=JSON.parse(closedRes.value); closedRef.current=v; setClosedOverrides(v); }
        if (rankRes?.value) { const v=JSON.parse(rankRes.value); rankRef.current=v; setRankOverrides(v); }
        if (stageRes?.value) { const v=JSON.parse(stageRes.value); stageRef.current=v; setStageOverrides(v); }
        if (chatRes?.value) { const s=JSON.parse(chatRes.value); if(s.msgs?.length){setSharedMsgs(s.msgs);sharedHistory.current=s.history||[];} chatLoaded.current=true; }
        else { chatLoaded.current=true; }
        if (savedRes?.value) setSavedChats(JSON.parse(savedRes.value));
        if (summaryRes?.value) { const v=JSON.parse(summaryRes.value); summaryRef.current=v; setSummaryChecks(v); }
        if (pipelineAmtsRes?.value) { const v=JSON.parse(pipelineAmtsRes.value); pipelineAmtsRef.current=v; setPipelineAmts(v); }
        if (closeDateRes?.value) { const v=JSON.parse(closeDateRes.value); closeDateRef.current=v; setCloseDateOverrides(v); }
      } catch(e) { console.error("Storage load error:", e); }
      isLoading.current = false;
      setStorageReady(true);
    })();
  }, []);



  // Stable tab render - all tabs mount once and stay mounted, shown/hidden via display
  // This prevents remounting (which caused state loss) on every App re-render
  return (
<CloseDateCtx.Provider value={{closeDateOverrides, updateCloseDate}}>
<PipelineAmtCtx.Provider value={{pipelineAmts, updatePipelineAmt}}>
    <SummaryCtx.Provider value={{summaryChecks, toggleSummary}}>
    <NavCtx.Provider value={{tab, setTab, navTo, priorityFilter, setPriorityFilter, goToRep, repFilter, setRepFilter, goToDistrict, districtFilter, setDistrictFilter, goToStage, stageFilter, setStageFilter}}>
    <PriorityCtx.Provider value={{priorityOverrides, updatePriority, storageReady, closedOverrides, closeOpty, reopenOpty, rankOverrides, updateRank, stageOverrides, updateStage}}>
    <NotesCtx.Provider value={{notes, updateNote}}>
    <StepsCtx.Provider value={{steps, addStep, updateStep, deleteStep}}>
    <ChatCtx.Provider value={{msgs: sharedMsgs, setMsgs: setSharedMsgs, history: sharedHistory, autoSaveId: sharedAutoSaveId, savedChats, setSavedChats, persistSaved, chatLoaded}}>
    <ThemeCtx.Provider value={T}>
      <div style={{display:"flex",flexDirection:"column",height:"100vh",background:T.pageBg,fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',overflow:"hidden"}}>
        <div style={{background:"#032D42",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#63DF4E"}} />
            <span style={{fontWeight:700,fontSize:14,color:"white",letterSpacing:"0.01em"}}>Xavier's Pipeline Agent</span>
            <span style={{fontSize:11,color:"#81B5A1",background:"rgba(255,255,255,.1)",padding:"2px 8px",borderRadius:99}}>{`HCLS · ${new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}`}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <img src="data:image/png;base64,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" alt="ServiceNow" style={{height:"22px",objectFit:"contain",display:"block",mixBlendMode:"screen"}} />
            <div onClick={()=>setDark(d=>!d)} title={dark?"Switch to Light":"Switch to Dark"} style={{display:"flex",alignItems:"center",gap:7,cursor:"pointer",userSelect:"none"}}>
              <span style={{fontSize:12}}>{dark?"🌙":"☀️"}</span>
              <div style={{width:38,height:20,borderRadius:10,background:dark?"#1a3044":"#63DF4E",position:"relative",transition:"background .25s",border:"1px solid rgba(255,255,255,.15)"}}>
                <div style={{width:16,height:16,borderRadius:"50%",background:"white",position:"absolute",top:1,left:dark?2:20,transition:"left .25s",boxShadow:"0 1px 4px rgba(0,0,0,.3)"}} />
              </div>
              <span style={{fontSize:10,color:"rgba(255,255,255,.5)",minWidth:28}}>{dark?"Dark":"Light"}</span>
            </div>
          </div>
        </div>
        <div style={{background:"#044355",padding:"0 16px",display:"flex",gap:2,flexShrink:0,overflowX:"auto",alignItems:"center"}}>
          {TABS.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{fontSize:12,padding:"10px 14px",border:"none",borderBottom:`2px solid ${tab===t.id?"#63DF4E":"transparent"}`,background:"none",color:tab===t.id?"#63DF4E":"rgba(255,255,255,.6)",cursor:"pointer",fontWeight:tab===t.id?700:500,whiteSpace:"nowrap"}}>{t.label}</button>)}
          <div style={{marginLeft:"auto",flexShrink:0,fontSize:10,fontWeight:600,display:"flex",alignItems:"center",gap:5,padding:"0 8px",opacity:saveStatus==="idle"?0:1,transition:"opacity 0.3s"}}>
            {saveStatus==="saving" && <><span style={{width:6,height:6,borderRadius:"50%",background:"#fbbf24",display:"inline-block",animation:"pulse 1s infinite"}}/>  <span style={{color:"#fbbf24"}}>Saving…</span></>}
            {saveStatus==="saved"  && <><span style={{width:6,height:6,borderRadius:"50%",background:"#63DF4E",display:"inline-block"}}/>  <span style={{color:"#63DF4E"}}>Saved</span></>}
            {saveStatus==="error" && (
              <div style={{display:"flex",alignItems:"center",gap:5}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"#f87171",display:"inline-block",flexShrink:0}}/>
                <span style={{color:"#f87171"}}>Save failed</span>
                {saveError && <span style={{color:"rgba(248,113,113,.65)",fontSize:9,maxWidth:180,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}} title={saveError}>({saveError})</span>}
                <button onClick={()=>saveAll()} style={{fontSize:10,padding:"1px 8px",background:"transparent",border:"1px solid #f87171",borderRadius:99,color:"#f87171",cursor:"pointer",fontWeight:700,whiteSpace:"nowrap",flexShrink:0}}>↻ Retry</button>
              </div>
            )}
          </div>
        </div>
        <SummaryHeader />
        <div style={{flex:1,overflow:"auto",display:"flex",flexDirection:"column",position:"relative"}}>
          <div style={{display:tab==="chat"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><Chat /></div>
          <div style={{display:tab==="priority"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><PriorityRanked /></div>
          <div style={{display:tab==="urgency"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><CloseUrgency /></div>
          <div style={{display:tab==="district"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><ByDistrict /></div>
          <div style={{display:tab==="stage"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><StageAdvancement /></div>
          <div style={{display:tab==="rep"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><PerRep /></div>
          <div style={{display:tab==="pipeline"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><PipelineDashboard /></div>
          <div style={{display:tab==="nextsteps"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><NextSteps /></div>
          <div style={{display:tab==="closed"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><ClosedInactive /></div>
          <div style={{display:tab==="brainbreak"?"flex":"none",flex:1,flexDirection:"column",overflow:"auto",position:"absolute",inset:0}}><BrainBreak /></div>
        </div>
        <FloatingChat />
      </div>
    </ThemeCtx.Provider>
    </ChatCtx.Provider>
    </StepsCtx.Provider>
    </NotesCtx.Provider>
    </PriorityCtx.Provider>
    </NavCtx.Provider>
    </SummaryCtx.Provider>
    </PipelineAmtCtx.Provider>
</CloseDateCtx.Provider>
  );
}
