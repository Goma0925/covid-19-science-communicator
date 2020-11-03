var CONTENTS = {
  analysis: {
    VIETNAM: "Vietnam is one of the most successful countries in subduing the pandemic. Unlike other countries, Vietnam’s approach for preventing the virus was that it identified and quarantined suspected cases based on their epidemiological risk of infection from the early stage, not whether they exhibited symptoms. According to [Our World in Data](https://ourworldindata.org/covid-exemplar-vietnam), 'Once a patient with COVID-19 is identified, local public health officials, with support from health professionals, security officers, the military, and other civil servants, work with the patient to identify who they might have been in contact with and infected in the past 14 days. Close contacts of the previously identified close contacts are required to self-isolate at home for 14 days when a person is tested postive.' Vietnam also has long maintained robust systems to collect and aggregate data from public health entities, and it shifted to a nearly real-time web-based system in 2009. Hospitals are required to report notifiable diseases within 24 hours to a central database since 2016, which enabled the Ministry of Health to monitor the country's situation in real time. They also executed regional lockdowns beginning from early Febuary in mutiple places as the situation was consideted to be threatning. In addition, they swiftly improved the testing capability and banned all the big social events  in Febuary. Such precautious measures turned out to be a huge success in keeping the infection low throughout the world pandemic.",

    SWITZERLAND: "Switzerland experienced an outbreak in early March and gradually supporessed it by a lockdown and public orders for mask wearing and social distancing. One of the mistakes that the country had made was that they planned opening up the economy before the infection was stable in a low number. In fact,  Switzerland announced in early August that festival and sporting events be allowed in October, during which the number of confirmed cases per day was experiencing an increase trend. This promise had been fulfilled in October 1st despite the continuous spread of the virus. This caused another spike in the number of confirmed cases, putting the country in even a worse infection than the U.S in late October. ",

    AMERICA:"The U.S experience a drastic and constant increase in the number of confirmed cases from  late Febuary to early April. One of the problems is the lack of sufficient preparation for the spread of virus in the early stage. While countries that were successful in subduing the pandemic, such as Vietnam, were improving their test capacity and already executing regional lockdowns, the U.S still lacked the sense of emergency as we see in the annnouncement in late Febuary that Americans do not need to change their daily practices and the current risk is low. Another factor suggested by a research is that the U.S got caught off guard by the infection from Europe in Febuary to March while the governemnt focused on preventing the virus from China, which triggered the mass infection that drastically worsened the situation up until October. In addition, the political scheme, in which local state governement has power, seem to have made it difficult to coordinate unifying health measures across the country. ",

    GHANA: "Although the data shows a constant low number in confirmed cases throughout the time, it is worth noting that some news source like Vox EU clams that there could have been cover-ups due to the top-down political regime in China. The country does have declared that they had mishandled COVID-19 in late December in 2019 to early January. However, it indentified the COVID-19 in January, and communicate their situation with other countries to be a leading country in handling the situation. ",

    CHINA: "Although the data shows a constant low number in confirmed cases throughout the time, it is worth noting that some news source like Vox EU clams that there could have been cover-ups due to the top-down political regime in China. The country does have declared that they had mishandled COVID-19 in late December in 2019 to early January. However, it indentified the COVID-19 in January, and communicate their situation with other countries to be a leading country in handling the situation. "
  },
  eventsByCountry: {
    VIETNAM: [
      {
        date: "01/23/2020",
        description: "First case reported. The patients were a man from Wuhan, China, and his son, who were based in Vietnam"
      },
      {
        date: "01/23/2020",
        description: "Vietnam formed a national steering committee to coordinate Vietnam’s 'whole of government' strategy,18 initially meeting every two days."
      },
      {
        date: "01/30/2020",
        description: "Entry from China is banned."
      },
      {
        date: "02/07/2020",
        description: "Test kit developed by Hanoi University of Science and Technology. Testing method: RT-LAMP (reverse transcription loop-mediated isothermal amplification). Cost: US$15. Testing time: 70 minutes."
      },
      {
        date: "02/12/2020",
        description: "All festivals and sports events are cancelled."
      },
      {
        date: "02/13/2020",
        description: "A nothern providence Son Loi (Vinh Phuc province) placed a quarantine for two weeks."
      },
      {
        date: "02/19/2020",
        description: "The Ministry of Health issued national Guidelines for Infection Prevention and Control for COVID-19 Acute Respiratory Disease in Healthcare Establishments document provides comprehensive guidance to hospitals on screening, admission and isolation of confirmed or suspected COVID-19 cases, establishment of isolation areas in hospitals, use of personal protective equipment, cleaning and disinfection of environmental surfaces, waste management, collection, preservation, packing and transport of patient samples, prevention of laboratory-acquired infection of COVID-19, handling of remains of confirmed or suspected COVID-19 cases, and guidance for COVID-19 prevention for family members and visitors."
      },
      {
        date: "03/03/2020",
        description: "Test kit developed by Vietnam Academy of Science and Technology."
      },
      {
        date: "03/05/2020",
        description: "Test kits developed by Military Medical University, commercialized by Viet A."
      },
      {
        date: "03/06/2020",
        description: "Test kits developed by Military Medical University, commercialized by Viet A. Cost: US$19–$25. Testing method: RT-PCR and real-time RT-PCR. Testing time: over one hour (quicker than the two-step Charité protocol) but has testing capacity four times the number of samples as the CDC kit.26 The Viet A test has been certified by the European Union and other authorities and is now being exported to other countrie."
      },
      {
        date: "03/14/2020",
        description: "A lockdown is imposed. Bars, cinamas, massage parlors are closed."
      },
      {
        date: "03/16/2020",
        description: "Masks were mandated for use in public."
      },
      {
        date: "04/22/2020",
        description: "The national lockdown lifted."
      },
      {
        date: "04/22/2020",
        description: "To this date, no patients have died from COVID-19 in Vietnam."
      },
      {
        date: "05/01/2020",
        description: "middle & highschools resume operations"
      },
      {
        date: "05/20/2020",
        description: "Sixty-three sites were able to conduct COVID tests compared to two in January."
      },
      {
        date: "06/15/2020",
        description: "Vietnam has gone two months without new COVID cases from local transmission."
      },
    ],

    SWITZERLAND: [
      {
        date: "03/16/2020",
        description: "Bars, shops and other gathering places are closed until 19 April."
      },
      {
        date: "03/20/2020",
        description: "The government announced that no lockdown would be implemented, but all events or meetings over 5 people were prohibited. Economic activities would continue including construction."
      },
      {
        date: "06/08/2020",
        description: "The restrictions on vocational schools, universities, museums, zoos and libraries were lifted."
      },
      {
        date: "06/05/2020",
        description: "The Government announced that they would pay for the costs of an eventual Covid Test, if a patient has enough symptoms of Covid 19."
      },
      {
        date: "07/06/2020",
        description: "Mask requirement on all Swiss public transportation was imposed."
      },
      {
        date: "07/06/2020",
        description: "Mask requirement on all Swiss public transportation was imposed."
      },
      {
        date: "08/02/2020",
        description: "The government announced that events with more than 1,000 people, festivals, and sporting events would be allowed starting on October."
      },
      {
        date: "10/01/2020",
        description: "The restrictions on the public events were eased. Lifting the national restriction on major events."
      },
      {
        date: "10/28/2020",
        description: "The government, admitting that the existing measures were insufficient, ordered dance clubs to be closed from October 29, halted in-person university classes from November 2"
      },
    ],

    AMERICA:[
      {
        date: "01/17/2020",
        description: "The CDC implements health screenings in three U.S. airports for travelers coming from Wuhan, China."
      },
      {
        date: "01/20/2020",
        description: "U.S. intelligence agencies issue over a dozen detailed warnings about the threat of the virus in the President’s Daily Brief, and issue classified reports about the virus; senior U.S. officials begin to form a task force."
      },
      {
        date: "01/20/2020",
        description: "The United States and South Korea each announce their first case of COVID-19 on the same day."
      },
      {
        date: "01/31/2020",
        description: "The U.S suspended entry into the United States by any foreign nationals who had traveled to China in the past 14 days"
      },
      {
        date: "02/02/2020",
        description: "The U.S suspended entry into the United States by any foreign nationals who had traveled to China in the past 14 days"
      },
      {
        date: "02/07/2020",
        description: "The CDC sends public health laboratories contaminated and malfunctioning coronavirus test kits. As a result, nearly 100 public health laboratories cannot use the test kits to test for the virus."
      },
      {
        date: "02/13/2020",
        description: "Secretary Azar announces that the government will establish a “surveillance” program in five cities which will then be expanded nationally, which was delayed for weeks."
      },
      {
        date: "Mid-Febuary",
        description: "The coronavirus begins to spread in New York from Europe, according to researchers at ICahn School of Medicine at Mount Sinai, the coronavirus begins to circulate in New York by mid-February. The researchers conclude that the majority of New York cases originated from Europe. (Source: https://www.nytimes.com/2020/04/08/science/new-york-coronavirus-cases-europe-genomes.html)"
      },
      {
        date: "02/24/2020",
        description: "Dr. Kadlec (HHS) gives President Trump a plan titled “Four Steps to Mitigation."
      },
      {
        date: "02/24/2020",
        description: "Dr. Kadlec (HHS) gives President Trump a plan titled 'Four Steps to Mitigation.', which claims the needs to begin preparing the public for historically extraordinary measures."
      },
      {
        date: "02/25/2020",
        description: "The US Army’s National Center for Medical Intelligence raises the warning level that it is likely and imminent COVID-19 will become a pandemic. A CDC director says that community spread in the United States is inevitable and Americans should prepare for severe disruption of everyday life."
      },
      {
        date: "02/25/2020",
        description: "The US Army’s National Center for Medical Intelligence raises the warning level that it is likely and imminent COVID-19 will become a pandemic. A CDC director says that community spread in the United States is inevitable and Americans should prepare for severe disruption of everyday life."
      },
      {
        date: "02/29/2020",
        description: "Anthony Fauci, the director of the National Institute of Allergy and Infectious Diseases, says that Americans do not need to change their daily practices and the current risk is low, but could change."
      },
      {
        date: "02/29/2020",
        description: "The Trump administration issued its highest-level warning, known as a “do not travel” warning, for areas in Italy and South Korea most affected by the virus."
      },
      {
        date: "03/08/2020",
        description: "Vice President Pence announces that the CDC will lift federal restrictions on widespread testing for the coronavirus."
      },
      {
        date: "03/08/2020",
        description: "Vice President Pence announces that the CDC will lift federal restrictions on widespread testing for the coronavirus."
      },
      {
        date: "03/08/2020",
        description: "President Trump announces new travel restrictions from Europe."
      },
      {
        date: "03/16/2020",
        description: "The President announces Social Distancing Guidelines to be in place for two-weeks."
      },
      {
        date: "03/16/2020",
        description: "President Trump announces that the CDC will suspend entry into the United States from persons from Mexico and Canada."
      },
      {
        date: "03/19/2020",
        description: "President Trump states that the responsibility of supplying PPE to medical professionals lies with state governors, not the federal government."
      },
      {
        date: "03/23/2020",
        description: "Hospitals report facing severe shortages of testing supplies, widespread shortages of PPE, difficulty maintaining adequate staff, and overall shortages of critical supplies."
      },
      {
        date: "03/23/2020",
        description: "Hospitals report facing severe shortages of testing supplies, widespread shortages of PPE, difficulty maintaining adequate staff, and overall shortages of critical supplies."
      },
      {
        date: "03/27/2020",
        description: "President Trump signs H.R. 748, the “Coronavirus Aid, Relief, and Economic Security” (CARES) Act. This is an emergency legislation implements broad ranging remedial measures designed to curb the economic impact of the pandemic. It also modifies the FDA drug approval process, emergency paid sick leave programs, health insurance coverages for COVID-19 testing and vaccination, medical product supplies, and Medicare and Medicaid."
      },
      {
        date: "03/27/2020",
        description: "President Trump signs H.R. 748, the “Coronavirus Aid, Relief, and Economic Security” (CARES) Act. This is an emergency legislation implements broad ranging remedial measures designed to curb the economic impact of the pandemic. It also modifies the FDA drug approval process, emergency paid sick leave programs, health insurance coverages for COVID-19 testing and vaccination, medical product supplies, and Medicare and Medicaid."
      },
      {
        date: "04/02/2020",
        description: "The government continues to adopt an approach allowing states to adopt an uneven patchwork of state stay-at-home orders."
      },
      {
        date: "04/16/2020",
        description: "President Trump announces his Guidelines for Opening Up American Again."
      },
      {
        date: "05/01/2020",
        description: "The White House replaces the top inspector General Christi Grimm of the Department of Health of Human Services."
      },
      {
        date: "05/01/2020",
        description: "President Trump had questioned whether Grimm’s report was politically motivated and possibly false during a White House press briefing. The 17-page report by a Centers for Disease Control and Prevention team, titled “Guidance for Implementing the Opening Up America Again Framework."
      },
      {
        date: "07/15/2020",
        description: "The White House ends the CDC’s COVID-19 data collection system, turning over the responsibility to a private company."
      },
      {
        date: "08/24/2020",
        description: "The CDC restricts its testing recommendations to only symptomatic individuals who have been exposed to the virus"
      },
      {
        date: "08/24/2020",
        description: "The CDC restricts its testing recommendations to only symptomatic individuals who have been exposed to the virus"
      },
    ],

    GHANA: [
      {
        date: "03/12/2020",
        description: "Health Minister Kwaku Agyemang-Manu announced Ghana's first two confirmed cases"
      },
      {
        date: "03/15/2020",
        description: "President Nana Akufo-Addo banned all public gatherings"
      },
      {
        date: "03/29/2020",
        description: "The government of Ghana set up a quarantine centre at the Northern Regional capital, Tamale"
      },
      {
        date: "03/30/2020",
        description: "The partial lock down of Accra and Kumasi took effect."
      },
      {
        date: "04/04/2020",
        description: "198 markets in the Eastern Region of Ghana were disinfected as part of the drive to control the pandemic."
      },
      {
        date: "04/05/2020",
        description: "The president announced incentives for front-line health workers."
      },
      {
        date: "04/05/2020",
        description: "The president announced the provision of free water supply and 50% waiver on electricity consumption for residents from April-June"
      },
      {
        date: "04/11/2020",
        description: "The governement of Ghana provided $10 million loan to some local companies to manufacture personal protective equipment such as masks."
      },
      {
        date: "04/17/2020",
        description: "The Ministry of Health used Zipline drones to deliver samples for rapid tests."
      },
      {
        date: "04/17/2020",
        description: "The partial lockdowns were lifted but public gatherings were still prohibited."
      },
      {
        date: "05/11/2020",
        description: "Hotels, bars, and restaurants were permitted to reopen but under enhanced social distancing procedures."
      },
      {
        date: "06/15/2020",
        description: "Universities and schools started to reopen to final year students. The government announces a strict punishment for people who fail to weak a mask in public space."
      },
  ],

    CHINA: [
      {
        date: "01/06/2020",
        description: "The standing committee of the national people's congress was held. During this conference, the local authority of Wuhan did not report anything about the virus due to the tradition of reporting nothing negative during the conference."
      },
      {
        date: "01/11/2020",
        description: "Chinese state media reported the first known death from an illness caused by the virus. The 61-year-old man who died was a regular customer at the market in Wuhan"
      },
      {
        date: "01/20/2020",
        description: "The president Xi Jinping ordered the local authorities to disclose information regarding the virus and take appropriate measures to prevent the infection."
      },
      {
        date: "01/20/2020",
        description: "The Chinese authorities closed off Wuhan by canceling planes and trains leaving the city, and suspending buses, subways and ferries within it."
      },
      {
        date: "01/25/2020",
        description: "Two new hospitals from scratch in response to COVID-19."
      },
      {
        date: "02/16/2020",
        description: "The province Hubei announced a mass lock down, virtually prohibiting anyone to go outside."
      },
      {
        date: "03/15/2020",
        description: "Peking University criticizes the government for ordering local governments not to have any infection, which resutled in unrealible reports of cases."
      },
      {
        date: "03/15/2020",
        description: "China bans travel from abroad."
      },
    ]
  }
}
