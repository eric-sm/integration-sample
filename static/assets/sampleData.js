// Sample response data from Givz API call; "Glow Foundation" result amended to be flagged as a hate group for
// development purposes only (it's not really a hate group)
const sampleCharitySearchResponse =
    {
        "result":[
        {
            "ntee_code":"",
            "zip":"85253-4416",
            "dba":"",
            "income_amount":14595443.0,
            "name":"Globe Foundation",
            "revenue_amount":0,
            "state":"AZ",
            "ein":"366054050",
            "ntee_decile_code":"",
            "street":"6730 N Scottsdale Rd Ste 250",
            "tag":"",
            "ntee_major_group":"",
            "ntee_centile_code":"",
            "city":"Scottsdale",
            "asset_amount":24077105.0
        },
        {
            "ntee_code":"T22",
            "zip":"43065-7608",
            "dba":"",
            "income_amount":1626512.0,
            "name":"Glow Foundation",
            "revenue_amount":0,
            "state":"OH",
            "ein":"260236432",
            "ntee_decile_code":"Private Grantmaking Foundations",
            "street":"431 Cardinal Hill Ln",
            "tag":"Philanthropy,Volunteer,Grants",
            "ntee_major_group":"Philanthropy, Voluntarism & Grantmaking Foundations",
            "ntee_centile_code":"Private Independent Foundations",
            "city":"Powell",
            "asset_amount":2940814.0
        },
        {
            "ntee_code":"O50",
            "zip":"28036-7785",
            "dba":"",
            "income_amount":0,
            "name":"Glow Mission",
            "revenue_amount":0,
            "state":"NC",
            "ein":"822307276",
            "ntee_decile_code":"Youth Development Programs",
            "street":"3386 Merchant Ln",
            "tag":"Youth,Youth Development,Kids",
            "ntee_major_group":"Youth Development",
            "ntee_centile_code":"",
            "city":"Davidson",
            "asset_amount":0
        },
        {
            "city":"Washington",
            "street":"801 G St Nw",
            "ntee_major_group":"",
            "ein":"521792772",
            "name":"Family Research Council Inc",
            "ntee_code":"P010",
            "dba":"",
            "ntee_centile_code":"",
            "asset_amount":5160875.0,
            "zip":"20001-3729",
            "income_amount":16071732.0,
            "ntee_decile_code":"",
            "tag":"Human Services",
            "state":"DC",
            "revenue_amount":16048141.0
        },
        {
            "ntee_code":"E86",
            "zip":"29696-0371",
            "dba":"",
            "income_amount":0,
            "name":"Hope Globe",
            "revenue_amount":0,
            "state":"SC",
            "ein":"825486693",
            "ntee_decile_code":"Health (General & Financing)",
            "street":"Po Box 371",
            "tag":"Health",
            "ntee_major_group":"Health Care",
            "ntee_centile_code":"Patient & Family Support",
            "city":"West Union",
            "asset_amount":0
        },
        {
            "ntee_code":"X12",
            "zip":"42633-2035",
            "dba":"",
            "income_amount":0,
            "name":"Glow Ministries",
            "revenue_amount":0,
            "state":"KY",
            "ein":"811638110",
            "ntee_decile_code":"",
            "street":"32 Harper Dr",
            "tag":"Religion,Spiritual",
            "ntee_major_group":"Religion-Related",
            "ntee_centile_code":"Fund Raising & Fund Distribution",
            "city":"Monticello",
             "asset_amount":0
        }
        ],
        "total":130
    };


// Data from CSV listing the SPLC hate groups from 2018 with troublesome records removed (commas in the name)
const sampleHateGroupsCSVData =
    "givz_id,splc_id,title,city,state,group,ideology,headquarters,statewide,year,black_listed_flag" +
    ",1,Abiding Truth Ministries,Springfield,Massachusetts,,Anti-LGBT,Yes,,2018,Y\n" +
    ",2,Alliance Defending Freedom,Scottsdale,Arizona,Alliance Defending Freedom,Anti-LGBT,Yes,,2018,Y\n" +
    ",3,American College of Pediatricians,Gainesville,Florida,American College of Pediatricians,Anti-LGBT,Yes,,2018,Y\n" +
    ",4,American Family Association,Tupelo,Mississippi,American Family Association,Anti-LGBT,Yes,,2018,Y\n" +
    ",5,American Family Association,Franklin,Pennsylvania,American Family Association,Anti-LGBT,,,2018,Y\n" +
    ",6,American Vision,Powder Springs,Georgia,,Anti-LGBT,Yes,,2018,Y\n" +
    ",7,Americans for Truth About Homosexuality,Naperville,Illinois,,Anti-LGBT,Yes,,2018,Y\n" +
    ",8,ATLAH World Missionary Church (All The Land Anointed Holy),New York,New York,,Anti-LGBT,Yes,,2018,Y\n" +
    ",9,Bible Believers Fellowship,Worthington,Ohio,,Anti-LGBT,Yes,,2018,Y\n" +
    ",10,\"Campus Ministry USA, The\",Terre Haute,Indiana,,Anti-LGBT,Yes,,2018,Y\n" +
    ",11,Center for Family and Human Rights (C-FAM),Washington,District of Columbia,,Anti-LGBT,,,2018,Y\n" +
    ",12,Center for Family and Human Rights (C-FAM),New York,New York,,Anti-LGBT,Yes,,2018,Y\n" +
    ",13,Chalcedon Foundation,Vallecito,California,,Anti-LGBT,Yes,,2018,Y\n" +
    ",14,Church Militant/St. Michael's Media,Ferndale,Michigan,,Anti-LGBT,Yes,,2018,Y\n" +
    ",15,Concerned Christian Citizens,Temple,Texas,,Anti-LGBT,Yes,,2018,Y\n" +
    ",16,Conservative Republicans of Texas,Houston,Texas,,Anti-LGBT,Yes,,2018,Y\n" +
    ",17,D. James Kennedy Ministries,Fort Lauderdale,Florida,,Anti-LGBT,Yes,,2018,Y\n" +
    ",18,Faith2Action,North Royalton,Ohio,,Anti-LGBT,Yes,,2018,Y\n" +
    ",19,Faithful Word Baptist Church,Tempe,Arizona,,Anti-LGBT,Yes,,2018,Y\n" +
    ",20,Family Research Council,Washington,District of Columbia,Family Research Council,Anti-LGBT,Yes,,2018,Y\n" +
    ",21,Family Research Institute,Colorado Springs,Colorado,,Anti-LGBT,Yes,,2018,Y\n" +
    ",22,Family Watch International,Gilbert,Arizona,Family Watch International,Anti-LGBT,Yes,,2018,Y\n" +
    ",23,Generations,Elizabeth,Colorado,,Anti-LGBT,Yes,,2018,Y\n" +
    ",24,Heterosexuals Organized for a Moral Environment (H.O.M.E.),Downers Grove,Illinois,,Anti-LGBT,Yes,,2018,Y\n" +
    ",25,Illinois Family Institute,Carol Stream,Illinois,,Anti-LGBT,Yes,,2018,Y\n" +
    ",26,Liberty Counsel,Orlando,Florida,Liberty Counsel,Anti-LGBT,Yes,,2018,Y\n" +
    ",27,Mass Resistance,Torrance,California,,Anti-LGBT,,,2018,Y\n" +
    ",28,Mass Resistance,Denver,Colorado,,Anti-LGBT,,,2018,Y\n" +
    ",29,Mass Resistance,Waltham,Massachusetts,,Anti-LGBT,Yes,,2018,Y\n" +
    ",30,Mass Resistance,Ft. Worth,Texas,,Anti-LGBT,,,2018,Y\n" +
    ",31,Mission: America,Columbus,Ohio,,Anti-LGBT,Yes,,2018,Y\n" +
    ",32,Pacific Justice Institute,Sacramento,California,Pacific Justice Institute,Anti-LGBT,Yes,,2018,Y\n" +
    ",33,Pass the Salt Ministries,Hebron,Ohio,,Anti-LGBT,Yes,,2018,Y\n" +
    ",34,Pilgrims Covenant Church,Monroe,Wisconsin,,Anti-LGBT,Yes,,2018,Y\n" +
    ",36,Probe Ministries,Plano,Texas,,Anti-LGBT,Yes,,2018,Y\n" +
    ",37,Public Advocate of the United States,Merrifield,Virginia,,Anti-LGBT,Yes,,2018,Y\n" +
    ",38,Ruth Institute,Lake Charles,Louisiana,Ruth Institute,Anti-LGBT,Yes,,2018,Y\n" +
    ",39,Save California,Sacramento,California,,Anti-LGBT,Yes,,2018,Y\n" +
    ",40,Stedfast Baptist Church,Jacksonville,Florida,,Anti-LGBT,,,2018,Y\n" +
    ",41,Stedfast Baptist Church,Fort Worth,Texas,,Anti-LGBT,Yes,,2018,Y\n" +
    ",42,Sure Foundation Baptist Church,Vancouver,Washington,,Anti-LGBT,Yes,,2018,Y\n" +
    ",43,Tom Brown Ministries,El Paso,Texas,,Anti-LGBT,Yes,,2018,Y\n" +
    ",44,True Light Pentecost Church,Spartanburg,South Carolina,,Anti-LGBT,Yes,,2018,Y\n" +
    ",45,United Families International,Gilbert,Arizona,,Anti-LGBT,Yes,,2018,Y\n" +
    ",46,Verity Baptist Church,Sacramento,California,,Anti-LGBT,Yes,,2018,Y\n" +
    ",47,Warriors for Christ,Martinsburg,West Virginia,,Anti-LGBT,Yes,,2018,Y\n" +
    ",48,Westboro Baptist Church,Topeka,Kansas,Westboro Baptist Church,Anti-LGBT,Yes,,2018,Y\n" +
    ",49,World Congress of Families/International Organization for the Family,Rockford,Illinois,World Congress of Families,Anti-LGBT,Yes,,2018,Y\n" +
    ",50,ACT for America,Jonesboro,Arkansas,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",51,ACT for America,Tucson,Arizona,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",52,ACT for America,Corona,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",53,ACT for America,Mission Viejo,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",54,ACT for America,Los Angeles,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",55,ACT for America,Upland,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",56,ACT for America,,California,ACT for America ,Anti-Muslim,,Yes,2018,Y\n" +
    ",57,ACT for America,Riverside County,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",58,ACT for America,Santa Clarita,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",59,ACT for America,Laguna Woods,California,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",60,ACT for America,Denver,Colorado,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",61,ACT for America,,Connecticut,ACT for America ,Anti-Muslim,,Yes,2018,Y\n" +
    ",62,ACT for America,Cheshire,Connecticut,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",63,ACT for America,Bear,Delaware,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",64,ACT for America,Washington,District of Columbia,ACT for America ,Anti-Muslim,Yes,,2018,Y\n" +
    ",65,ACT for America,Heathrow,Florida,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",66,ACT for America,Jacksonville,Florida,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",67,ACT for America,Meridian,Idaho,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",68,ACT for America,Des Plaines,Illinois,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",69,ACT for America,Lafayette,Indiana,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",70,ACT for America,Terre Haute,Indiana,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",71,ACT for America,Baton Rouge,Louisiana,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",72,ACT for America,Metairie,Louisiana,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",73,ACT for America,Norway,Maine,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",74,ACT for America,Cape Cod,Massachusetts,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",75,ACT for America,Boston,Massachusetts,ACT for America ,Anti-Muslim,Yes,,2018,Y\n" +
    ",76,ACT for America,Kansas City,Missouri,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",77,ACT for America,Minneapolis,Minnesota,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",78,ACT for America,Whitehall,Montana,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",79,ACT for America,Fayetteville,North Carolina,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",80,ACT for America,Hopkinton,New Hampshire,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",81,ACT for America,Hauppauge,New York,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",82,ACT for America,Nashua,New Hampshire,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",83,ACT for America,Columbus,Ohio,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",84,ACT for America,Cincinnati,Ohio,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",85,ACT for America,Cleveland,Ohio,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",86,ACT for America,Pittsburgh,Pennsylvania,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",87,ACT for America,Rapid City,South Dakota,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",88,ACT for America,Coffee County,Tennessee,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",89,ACT for America,Austin,Texas,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",90,ACT for America,Knoxville,Tennessee,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",91,ACT for America,Houston,Texas,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",92,ACT for America,Leesburg,Virginia,ACT for America ,Anti-Muslim,Yes,,2018,Y\n" +
    ",93,ACT for America,Virginia Beach,Virginia,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",94,ACT for America,Spokane Valley,Washington,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",95,ACT for America,South Charleston,West Virginia,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",96,ACT for America,Oostburg,Wisconsin,ACT for America ,Anti-Muslim,,,2018,Y\n" +
    ",97,American Freedom Alliance,Los Angeles,California,,Anti-Muslim,Yes,,2018,Y\n" +
    ",98,American Freedom Defense Initiative,New York,New York,,Anti-Muslim,Yes,,2018,Y\n" +
    ",99,American Freedom Law Center,Ann Arbor,Michigan,,Anti-Muslim,Yes,,2018,Y\n" +
    ",100,American Public Policy Alliance,Washington,District of Columbia,,Anti-Muslim,,,2018,Y\n" +
    ",101,Bomb Islam,Phoenix,Arizona,,Anti-Muslim,,,2018,Y\n" +
    ",102,Bureau on American Islamic Relations,Irving,Texas,,Anti-Muslim,Yes,,2018,Y\n" +
    ",103,Center for Security Policy,Washington,District of Columbia,Center for Security Policy,Anti-Muslim,Yes,,2018,Y\n" +
    ",104,Christian Action Network,Forest,Virginia,,Anti-Muslim,Yes,,2018,Y\n" +
    ",105,Citizens for National Security,Boca Raton,Florida,,Anti-Muslim,Yes,,2018,Y\n" +
    ",106,Citizens for the St. Croix Valley,Hudson,Wisconsin,,Anti-Muslim,,,2018,Y\n" +
    ",107,Citizens' Action Group of South Florida,Hollywood,Florida,,Anti-Muslim,Yes,,2018,Y\n" +
    ",108,Clarion Project,Washington,District of Columbia,,Anti-Muslim,Yes,,2018,Y\n" +
    ",109,Counter Jihad Coalition,Santa Monica,California,,Anti-Muslim,Yes,,2018,Y\n" +
    ",110,Cultures In Context Incorporated/Turning Point Project,Immokalee,Florida,,Anti-Muslim,,,2018,Y\n" +
    ",111,David Horowitz Freedom Center,Los Angeles,California,,Anti-Muslim,,,2018,Y\n" +
    ",112,Faith Leaders for America,Washington,District of Columbia,,Anti-Muslim,,,2018,Y\n" +
    ",113,Family Security Matters,Washington,District of Columbia,Family Security Matters,Anti-Muslim,Yes,,2018,Y\n" +
    ",114,Florida Family Association,Tampa,Florida,,Anti-Muslim,Yes,,2018,Y\n" +
    ",115,Fortress of Faith,Bellingham,Washington,,Anti-Muslim,,,2018,Y\n" +
    ",116,Foundation for Advocating Christian Truth,Bronx,New York,,Anti-Muslim,,,2018,Y\n" +
    ",117,G416 Patriots,Meridian,Idaho,,Anti-Muslim,,,2018,Y\n" +
    ",118,G416 Patriots,Boerne,Texas,,Anti-Muslim,,,2018,Y\n" +
    ",119,Glasov Gang Productions,Los Angeles,California,,Anti-Muslim,,,2018,Y\n" +
    ",120,Global Faith Institute,Omaha,Nebraska,,Anti-Muslim,,,2018,Y\n" +
    ",121,Jihad Watch,Sherman Oaks,California,,Anti-Muslim,Yes,,2018,Y\n" +
    ",122,Keep South Dakota Safe PAC,Aberdeen,South Dakota,,Anti-Muslim,,,2018,Y\n" +
    ",123,Last Chance Patriots,Dayton,Montana,,Anti-Muslim,,,2018,Y\n" +
    ",124,North Carolina Pastors Network,Morganton,North Carolina,,Anti-Muslim,,,2018,Y\n" +
    ",125,Political Islam,Nashville,Tennessee,,Anti-Muslim,Yes,,2018,Y\n" +
    ",126,Proclaiming Justice to the Nations,Franklin,Tennessee,,Anti-Muslim,,,2018,Y\n" +
    ",127,Radio Jihad/Global Patriot Radio,,New York,,Anti-Muslim,Yes,Yes,2018,Y\n" +
    ",128,Refugee Resettlement Watch,Fairplay,Maryland,,Anti-Muslim,Yes,,2018,Y\n" +
    ",129,Sharia Crime Stoppers,Mount Clemens,Michigan,,Anti-Muslim,,,2018,Y\n" +
    ",131,Soldiers of Odin,,California,,Anti-Muslim,,Yes,2018,Y\n" +
    ",132,Soldiers of Odin,,Florida,,Anti-Muslim,,Yes,2018,Y\n" +
    ",133,Soldiers of Odin,,Indiana,,Anti-Muslim,,Yes,2018,Y\n" +
    ",134,Soldiers of Odin,,Missouri,,Anti-Muslim,Yes,Yes,2018,Y\n" +
    ",135,Soldiers of Odin,,North Carolina,,Anti-Muslim,,Yes,2018,Y\n" +
    ",136,Soldiers of Odin,,North Dakota,,Anti-Muslim,,Yes,2018,Y\n" +
    ",137,Soldiers of Odin,,South Carolina,,Anti-Muslim,,Yes,2018,Y\n" +
    ",138,Soldiers of Odin,,Texas,,Anti-Muslim,,Yes,2018,Y\n" +
    ",139,Soldiers of Odin,Denver,Colorado,,Anti-Muslim,,,2018,Y\n" +
    ",140,Soldiers of Odin,,Illinois,,Anti-Muslim,,Yes,2018,Y\n" +
    ",141,Southeast Michigan Tea Party,Utica,Michigan,,Anti-Muslim,,,2018,Y\n" +
    ",143,Sunshine on Government (SONG) Alliance,Newton,Georgia,,Anti-Muslim,Yes,,2018,Y\n" +
    ",144,Truth in Love Project,Chattaroy,Washington,,Anti-Muslim,Yes,,2018,Y\n" +
    ",145,Truth in Textbooks,Boerne,Texas,,Anti-Muslim,,,2018,Y\n" +
    ",146,Unconstrained Analytics,Washington,District of Columbia,,Anti-Muslim,,,2018,Y\n" +
    ",147,Understanding the Threat,Dallas,Texas,,Anti-Muslim,Yes,,2018,Y\n" +
    ",149,Virginia Christian Alliance,Henrico,Virginia,,Anti-Muslim,,,2018,Y\n" +
    ",150,All Eyes On Egypt Bookstore,Macon,Georgia,,Black Nationalist,Yes,,2018,Y\n" +
    ",151,Ambassadors of Christ,Brooklyn,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",152,Ancient Egyptian Distribution Company,Jersey City,New Jersey,,Black Nationalist,Yes,,2018,Y\n" +
    ",153,Army of Israel,Orlando,Florida,,Black Nationalist,,,2018,Y\n" +
    ",154,Army of Israel,,Missouri,,Black Nationalist,,Yes,2018,Y\n" +
    ",155,Army of Israel,Cleveland,Ohio,,Black Nationalist,Yes,,2018,Y\n" +
    ",156,Black Riders Liberation Party,Oakland,California,,Black Nationalist,Yes,,2018,Y\n" +
    ",157,Black Riders Liberation Party,Los Angeles,California,,Black Nationalist,Yes,,2018,Y\n" +
    ",158,Black Riders Liberation Party,Las Vegas,Nevada,,Black Nationalist,,,2018,Y\n" +
    ",159,Black Riders Liberation Party,New York,New York,,Black Nationalist,,,2018,Y\n" +
    ",160,Black Riders Liberation Party,Portland,Oregon,,Black Nationalist,,,2018,Y\n" +
    ",161,Black Riders Liberation Party,Houston,Texas,,Black Nationalist,,,2018,Y\n" +
    ",162,Great Millstone,Birmingham,Alabama,,Black Nationalist,,,2018,Y\n" +
    ",163,Great Millstone,Los Angeles,California,,Black Nationalist,,,2018,Y\n" +
    ",164,Great Millstone,Miami,Florida,,Black Nationalist,,,2018,Y\n" +
    ",165,Great Millstone,Tampa,Florida,,Black Nationalist,,,2018,Y\n" +
    ",166,Great Millstone,Atlanta,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",167,Great Millstone,Honolulu,Hawaii,,Black Nationalist,,,2018,Y\n" +
    ",168,Great Millstone,Chicago,Illinois,,Black Nationalist,,,2018,Y\n" +
    ",169,Great Millstone,Indianapolis,Indiana,,Black Nationalist,,,2018,Y\n" +
    ",170,Great Millstone,Des Moines,Iowa,,Black Nationalist,,,2018,Y\n" +
    ",171,Great Millstone,,Louisiana,,Black Nationalist,,Yes,2018,Y\n" +
    ",172,Great Millstone,Baltimore,Maryland,,Black Nationalist,,,2018,Y\n" +
    ",173,Great Millstone,Detroit,Michigan,,Black Nationalist,,,2018,Y\n" +
    ",174,Great Millstone,,Mississippi,,Black Nationalist,,Yes,2018,Y\n" +
    ",175,Great Millstone,St. Louis,Missouri,,Black Nationalist,,,2018,Y\n" +
    ",176,Great Millstone,,Nebraska,,Black Nationalist,,Yes,2018,Y\n" +
    ",177,Great Millstone,New York,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",178,Great Millstone,Charlotte,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",179,Great Millstone,Cleveland,Ohio,,Black Nationalist,,,2018,Y\n" +
    ",180,Great Millstone,Memphis,Tennessee,,Black Nationalist,,,2018,Y\n" +
    ",181,Great Millstone,Dallas,Texas,,Black Nationalist,,,2018,Y\n" +
    ",182,Great Millstone,San Antonio,Texas,,Black Nationalist,,,2018,Y\n" +
    ",183,Great Millstone,Houston,Texas,,Black Nationalist,,,2018,Y\n" +
    ",184,Great Millstone,,Wisconsin,,Black Nationalist,,Yes,2018,Y\n" +
    ",185,House of David,Brooklyn,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",186,House of Israel,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",187,House of Israel,Atlanta,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",188,House of Israel,New York,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",189,International Society of Indigenous Sovereigns,New York,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",190,Israel United In Christ,Center Point,Alabama,,Black Nationalist,,,2018,Y\n" +
    ",191,Israel United In Christ,Mobile,Alabama,,Black Nationalist,,,2018,Y\n" +
    ",192,Israel United In Christ,,Arkansas,,Black Nationalist,,Yes,2018,Y\n" +
    ",193,Israel United In Christ,Phoenix,Arizona,,Black Nationalist,,,2018,Y\n" +
    ",194,Israel United In Christ,Los Angeles,California,,Black Nationalist,,,2018,Y\n" +
    ",195,Israel United In Christ,Denver,Colorado,,Black Nationalist,,,2018,Y\n" +
    ",196,Israel United In Christ,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",197,Israel United In Christ,Orlando,Florida,,Black Nationalist,,,2018,Y\n" +
    ",198,Israel United In Christ,Tallahassee,Florida,,Black Nationalist,,,2018,Y\n" +
    ",199,Israel United In Christ,Miami,Florida,,Black Nationalist,,,2018,Y\n" +
    ",200,Israel United In Christ,Jacksonville,Florida,,Black Nationalist,,,2018,Y\n" +
    ",201,Israel United In Christ,Savannah,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",202,Israel United In Christ,Atlanta,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",203,Israel United In Christ,Honolulu,Hawaii,,Black Nationalist,,,2018,Y\n" +
    ",204,Israel United In Christ,Chicago,Illinois,,Black Nationalist,,,2018,Y\n" +
    ",205,Israel United In Christ,Kansas City,Kansas,,Black Nationalist,,,2018,Y\n" +
    ",206,Israel United In Christ,Louisville,Kentucky,,Black Nationalist,,,2018,Y\n" +
    ",207,Israel United In Christ,Lafayette,Louisiana,,Black Nationalist,,,2018,Y\n" +
    ",208,Israel United In Christ,New Orleans,Louisiana,,Black Nationalist,,,2018,Y\n" +
    ",209,Israel United In Christ,Boston,Massachusetts,,Black Nationalist,,,2018,Y\n" +
    ",210,Israel United In Christ,Detroit,Michigan,,Black Nationalist,,,2018,Y\n" +
    ",211,Israel United In Christ,Jackson,Mississippi,,Black Nationalist,,,2018,Y\n" +
    ",212,Israel United In Christ,St. Louis,Missouri,,Black Nationalist,,,2018,Y\n" +
    ",213,Israel United In Christ,Mount Vernon,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",214,Israel United In Christ,Rochester,New York,,Black Nationalist,,,2018,Y\n" +
    ",215,Israel United In Christ,Newark,New Jersey,,Black Nationalist,,,2018,Y\n" +
    ",216,Israel United In Christ,Concord,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",217,Israel United In Christ,Northern California,California,,Black Nationalist,,,2018,Y\n" +
    ",218,Israel United In Christ,Las Vegas,Nevada,,Black Nationalist,,,2018,Y\n" +
    ",219,Israel United In Christ,Heath,Ohio,,Black Nationalist,,,2018,Y\n" +
    ",220,Israel United In Christ,Oklahoma City,Oklahoma,,Black Nationalist,,,2018,Y\n" +
    ",221,Israel United In Christ,Tulsa,Oklahoma,,Black Nationalist,,,2018,Y\n" +
    ",222,Israel United In Christ,Pittsburgh,Pennsylvania,,Black Nationalist,,,2018,Y\n" +
    ",223,Israel United In Christ,Philadelphia,Pennsylvania,,Black Nationalist,,,2018,Y\n" +
    ",224,Israel United In Christ,Columbia,South Carolina,,Black Nationalist,,,2018,Y\n" +
    ",225,Israel United In Christ,Memphis,Tennessee,,Black Nationalist,,,2018,Y\n" +
    ",226,Israel United In Christ,Nashville,Tennessee,,Black Nationalist,,,2018,Y\n" +
    ",227,Israel United In Christ,Corpus Christi,Texas,,Black Nationalist,,,2018,Y\n" +
    ",228,Israel United In Christ,Houston,Texas,,Black Nationalist,,,2018,Y\n" +
    ",229,Israel United In Christ,San Antonio,Texas,,Black Nationalist,,,2018,Y\n" +
    ",230,Israel United In Christ,Austin,Texas,,Black Nationalist,,,2018,Y\n" +
    ",231,Israel United In Christ,Dallas,Texas,,Black Nationalist,,,2018,Y\n" +
    ",232,Israel United In Christ,Hampton,Virginia,,Black Nationalist,,,2018,Y\n" +
    ",233,Israel United In Christ,Seattle,Washington,,Black Nationalist,,,2018,Y\n" +
    ",240,Israelite School of Universal Practical Knowledge,Los Angeles,California,,Black Nationalist,,,2018,Y\n" +
    ",241,Israelite School of Universal Practical Knowledge,Oakland,California,,Black Nationalist,,,2018,Y\n" +
    ",242,Israelite School of Universal Practical Knowledge,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",243,Israelite School of Universal Practical Knowledge,Jacksonville,Florida,,Black Nationalist,,,2018,Y\n" +
    ",244,Israelite School of Universal Practical Knowledge,Tampa,Florida,,Black Nationalist,,,2018,Y\n" +
    ",245,Israelite School of Universal Practical Knowledge,Atlanta,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",246,Israelite School of Universal Practical Knowledge,Chicago,Illinois,,Black Nationalist,,,2018,Y\n" +
    ",247,Israelite School of Universal Practical Knowledge,Indianapolis,Indiana,,Black Nationalist,,,2018,Y\n" +
    ",248,Israelite School of Universal Practical Knowledge,Louisville,Kentucky,,Black Nationalist,,,2018,Y\n" +
    ",249,Israelite School of Universal Practical Knowledge,,Louisiana,,Black Nationalist,,Yes,2018,Y\n" +
    ",250,Israelite School of Universal Practical Knowledge,Baltimore,Maryland,,Black Nationalist,Yes,,2018,Y\n" +
    ",251,Israelite School of Universal Practical Knowledge,Lynn,Massachusetts,,Black Nationalist,,,2018,Y\n" +
    ",252,Israelite School of Universal Practical Knowledge,Detroit,Michigan,,Black Nationalist,,,2018,Y\n" +
    ",253,Israelite School of Universal Practical Knowledge,Minneapolis,Minnesota,,Black Nationalist,,,2018,Y\n" +
    ",254,Israelite School of Universal Practical Knowledge,,Mississippi,,Black Nationalist,,Yes,2018,Y\n" +
    ",255,Israelite School of Universal Practical Knowledge,Kansas City,Missouri,,Black Nationalist,,,2018,Y\n" +
    ",256,Israelite School of Universal Practical Knowledge,St. Louis,Missouri,,Black Nationalist,,,2018,Y\n" +
    ",257,Israelite School of Universal Practical Knowledge,New York,New York,,Black Nationalist,,,2018,Y\n" +
    ",258,Israelite School of Universal Practical Knowledge,Syracuse,New York,,Black Nationalist,,,2018,Y\n" +
    ",259,Israelite School of Universal Practical Knowledge,Greensboro,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",260,Israelite School of Universal Practical Knowledge,Winston-Salem,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",261,Israelite School of Universal Practical Knowledge,Durham,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",262,Israelite School of Universal Practical Knowledge,Greenville,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",263,Israelite School of Universal Practical Knowledge,Fayetteville,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",264,Israelite School of Universal Practical Knowledge,Wilmington,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",265,Israelite School of Universal Practical Knowledge,Charlotte,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",266,Israelite School of Universal Practical Knowledge,Cincinnati,Ohio,,Black Nationalist,,,2018,Y\n" +
    ",267,Israelite School of Universal Practical Knowledge,Oklahoma City,Oklahoma,,Black Nationalist,,,2018,Y\n" +
    ",268,Israelite School of Universal Practical Knowledge,Portland,Oregon,,Black Nationalist,,,2018,Y\n" +
    ",269,Israelite School of Universal Practical Knowledge,Upper Darby,Pennsylvania,,Black Nationalist,Yes,,2018,Y\n" +
    ",270,Israelite School of Universal Practical Knowledge,Greenville,South Carolina,,Black Nationalist,,,2018,Y\n" +
    ",271,Israelite School of Universal Practical Knowledge,Charleston,South Carolina,,Black Nationalist,,,2018,Y\n" +
    ",272,Israelite School of Universal Practical Knowledge,Nashville,Tennessee,,Black Nationalist,,,2018,Y\n" +
    ",273,Israelite School of Universal Practical Knowledge,Fort Worth,Texas,,Black Nationalist,,,2018,Y\n" +
    ",274,Israelite School of Universal Practical Knowledge,Houston,Texas,,Black Nationalist,,,2018,Y\n" +
    ",275,Israelite School of Universal Practical Knowledge,Richmond,Virginia,,Black Nationalist,,,2018,Y\n" +
    ",276,Israelite the Branches,Baltimore,Maryland,,Black Nationalist,Yes,,2018,Y\n" +
    ",277,Israelites Saints of Christ,Huntsville,Alabama,,Black Nationalist,,,2018,Y\n" +
    ",278,Israelites Saints of Christ,,California,,Black Nationalist,,Yes,2018,Y\n" +
    ",279,Israelites Saints of Christ,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",280,Israelites Saints of Christ,Savannah,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",281,Israelites Saints of Christ,,New Jersey,,Black Nationalist,,Yes,2018,Y\n" +
    ",282,Israelites Saints of Christ,,North Carolina,,Black Nationalist,,Yes,2018,Y\n" +
    ",283,Israelites Saints of Christ,Richmond,Virginia,,Black Nationalist,Yes,,2018,Y\n" +
    ",284,Lion of Judah - Jeshurun Lions,Chicago,Illinois,,Black Nationalist,Yes,,2018,Y\n" +
    ",285,Lions of Israel,Mount Vernon,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",286,Luxor Couture,Atlanta,Georgia,,Black Nationalist,Yes,,2018,Y\n" +
    ",287,Masharah Yasharahla - Government of Israel,Raleigh,North Carolina,,Black Nationalist,Yes,,2018,Y\n" +
    ",288,Mountains of Israel,Houston,Texas,,Black Nationalist,Yes,,2018,Y\n" +
    ",289,Nation of Islam,Birmingham,Alabama,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",290,Nation of Islam,Montgomery,Alabama,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",291,Nation of Islam,Mobile,Alabama,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",292,Nation of Islam,Tucson,Arizona,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",293,Nation of Islam,North Little Rock,Arkansas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",294,Nation of Islam,Phoenix,Arizona,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",295,Nation of Islam,Rialto,California,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",296,Nation of Islam,San Diego,California,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",297,Nation of Islam,Oakland,California,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",298,Nation of Islam,Los Angeles,California,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",299,Nation of Islam,Compton,California,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",300,Nation of Islam,Denver,Colorado,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",301,Nation of Islam,Washington,District of Columbia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",302,Nation of Islam,Wilmington,Delaware,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",303,Nation of Islam,Tampa,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",304,Nation of Islam,Saint Petersburg,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",305,Nation of Islam,Pensacola,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",306,Nation of Islam,Miami,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",307,Nation of Islam,Jacksonville,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",308,Nation of Islam,Fort Lauderdale,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",309,Nation of Islam,Orlando,Florida,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",310,Nation of Islam,Augusta,Georgia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",311,Nation of Islam,Brunswick,Georgia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",312,Nation of Islam,Atlanta,Georgia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",313,Nation of Islam,Rockford,Illinois,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",314,Nation of Islam,Chicago,Illinois,Nation of Islam,Black Nationalist,Yes,,2018,Y\n" +
    ",315,Nation of Islam,Indianapolis,Indiana,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",316,Nation of Islam,Louisville,Kentucky,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",317,Nation of Islam,Lexington,Kentucky,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",318,Nation of Islam,Shreveport,Louisiana,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",319,Nation of Islam,Baton Rouge,Louisiana,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",320,Nation of Islam,New Orleans,Louisiana,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",321,Nation of Islam,Monroe,Louisiana,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",322,Nation of Islam,Springfield,Massachusetts,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",323,Nation of Islam,Dorchester,Massachusetts,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",324,Nation of Islam,Detroit,Michigan,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",325,Nation of Islam,Grand Rapids,Michigan,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",326,Nation of Islam,St. Louis,Missouri,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",327,Nation of Islam,Kansas City,Missouri,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",328,Nation of Islam,Winston-Salem,North Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",329,Nation of Islam,Wilmington,North Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",330,Nation of Islam,Greensboro,North Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",331,Nation of Islam,Durham,North Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",332,Nation of Islam,Charlotte,North Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",333,Nation of Islam,Buffalo,New York,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",334,Nation of Islam,Willingboro,New Jersey,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",335,Nation of Islam,Trenton,New Jersey,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",336,Nation of Islam,Plainfield,New Jersey,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",337,Nation of Islam,Newark,New Jersey,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",338,Nation of Islam,Camden,New Jersey,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",339,Nation of Islam,New York,New York,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",340,Nation of Islam,Rochester,New York,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",341,Nation of Islam,Brooklyn,New York,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",342,Nation of Islam,Toledo,Ohio,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",343,Nation of Islam,Cleveland,Ohio,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",344,Nation of Islam,Akron,Ohio,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",345,Nation of Islam,Dayton,Ohio,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",346,Nation of Islam,Dayton,Ohio,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",347,Nation of Islam,Tulsa,Oklahoma,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",348,Nation of Islam,Oklahoma City,Oklahoma,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",349,Nation of Islam,Pittsburgh,Pennsylvania,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",350,Nation of Islam,Wilkinsburg,Pennsylvania,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",351,Nation of Islam,Philadelphia,Pennsylvania,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",352,Nation of Islam,Columbia,South Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",353,Nation of Islam,Greenville,South Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",354,Nation of Islam,North Charleston,South Carolina,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",355,Nation of Islam,San Antonio,Texas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",356,Nation of Islam,Fort Worth,Texas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",357,Nation of Islam,Austin,Texas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",358,Nation of Islam,Memphis,Tennessee,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",359,Nation of Islam,Chattanooga,Tennessee,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",360,Nation of Islam,Houston,Texas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",361,Nation of Islam,Dallas,Texas,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",362,Nation of Islam,Norfolk,Virginia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",363,Nation of Islam,Richmond,Virginia,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",364,Nation of Islam,Milwaukee,Wisconsin,Nation of Islam,Black Nationalist,,,2018,Y\n" +
    ",365,Nation of Kings and Priests,Orlando,Florida,,Black Nationalist,Yes,,2018,Y\n" +
    ",366,New Black Liberation Militia,,Ohio,,Black Nationalist,Yes,Yes,2018,Y\n" +
    ",367,New Black Panther Party,Atlanta,Georgia,New Black Panther Party,Black Nationalist,,,2018,Y\n" +
    ",368,New Black Panther Party,Baton Rouge,Louisiana,New Black Panther Party,Black Nationalist,,,2018,Y\n" +
    ",369,New Black Panther Party,Shreveport,Louisiana,New Black Panther Party,Black Nationalist,,,2018,Y\n" +
    ",370,New Black Panther Party,New Orleans,Louisiana,New Black Panther Party,Black Nationalist,,,2018,Y\n" +
    ",371,New Black Panther Party,Houston,Texas,New Black Panther Party,Black Nationalist,Yes,,2018,Y\n" +
    ",372,New Black Panther Party for Self Defense,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",373,New Black Panther Party for Self Defense,Tampa Bay,Florida,,Black Nationalist,,,2018,Y\n" +
    ",374,New Black Panther Party for Self Defense,Jacksonville,Florida,,Black Nationalist,,,2018,Y\n" +
    ",375,New Black Panther Party for Self Defense,Tallahassee,Florida,,Black Nationalist,,,2018,Y\n" +
    ",376,New Black Panther Party for Self Defense,Atlanta,Georgia,,Black Nationalist,Yes,,2018,Y\n" +
    ",377,New Black Panther Party for Self Defense,Tupelo,Mississippi,,Black Nationalist,,,2018,Y\n" +
    ",378,New Black Panther Party for Self Defense,St. Louis,Missouri,,Black Nationalist,,,2018,Y\n" +
    ",379,New Black Panther Party for Self Defense,Memphis,Tennessee,,Black Nationalist,,,2018,Y\n" +
    ",380,New Black Panther Party for Self Defense,Houston,Texas,,Black Nationalist,,,2018,Y\n" +
    ",381,New Black Panther Party for Self Defense,Seattle,Washington,,Black Nationalist,,,2018,Y\n" +
    ",382,Northern Kingdom Prophets,Pueblo,Colorado,,Black Nationalist,Yes,,2018,Y\n" +
    ",383,OneBody in Yahawashi,Dallas,Texas,,Black Nationalist,Yes,,2018,Y\n" +
    ",384,Revolutionary Black Panther Party,Hope,Arkansas,,Black Nationalist,Yes,,2018,Y\n" +
    ",385,Revolutionary Black Panther Party,Baltimore,Maryland,,Black Nationalist,,,2018,Y\n" +
    ",386,Revolutionary Black Panther Party,Flint,Michigan,,Black Nationalist,,,2018,Y\n" +
    ",387,Revolutionary Black Panther Party,Raleigh,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",388,Revolutionary Black Panther Party,Philadelphia,Pennsylvania,,Black Nationalist,,,2018,Y\n" +
    ",389,Sicarii 1715,San Bernardino,California,,Black Nationalist,,,2018,Y\n" +
    ",390,Sicarii 1715,San Diego,California,,Black Nationalist,,,2018,Y\n" +
    ",391,Sicarii 1715,Orlando,Florida,,Black Nationalist,,,2018,Y\n" +
    ",392,Sicarii 1715,Atlanta,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",393,Sicarii 1715,Dallas,Texas,,Black Nationalist,Yes,,2018,Y\n" +
    ",394,Sicarii 1715,Seattle,Washington,,Black Nationalist,,,2018,Y\n" +
    ",395,The United Nuwaupians Worldwide/All Eyes on Egipt,Hartford,Connecticut,,Black Nationalist,,,2018,Y\n" +
    ",396,The United Nuwaupians Worldwide/All Eyes on Egipt,Washington,District of Columbia,,Black Nationalist,,,2018,Y\n" +
    ",397,The United Nuwaupians Worldwide/All Eyes on Egipt,Athens,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",398,The United Nuwaupians Worldwide/All Eyes on Egipt,Lithonia,Georgia,,Black Nationalist,,,2018,Y\n" +
    ",399,The United Nuwaupians Worldwide/All Eyes on Egipt,Chicago,Illinois,,Black Nationalist,,,2018,Y\n" +
    ",400,The United Nuwaupians Worldwide/All Eyes on Egipt,Detroit,Michigan,,Black Nationalist,,,2018,Y\n" +
    ",401,The United Nuwaupians Worldwide/All Eyes on Egipt,Jersey City,New Jersey,,Black Nationalist,,,2018,Y\n" +
    ",402,The United Nuwaupians Worldwide/All Eyes on Egipt,Newark,New Jersey,,Black Nationalist,,,2018,Y\n" +
    ",403,The United Nuwaupians Worldwide/All Eyes on Egipt,Charlotte,North Carolina,,Black Nationalist,,,2018,Y\n" +
    ",404,The United Nuwaupians Worldwide/All Eyes on Egipt,Brooklyn,New York,,Black Nationalist,Yes,,2018,Y\n" +
    ",405,The United Nuwaupians Worldwide/All Eyes on Egipt,Cleveland,Ohio,,Black Nationalist,,,2018,Y\n" +
    ",406,The United Nuwaupians Worldwide/All Eyes on Egipt,Philadelphia,Pennsylvania,,Black Nationalist,,,2018,Y\n" +
    ",407,True Nation Israelite Congregation,Los Angeles,California,,Black Nationalist,Yes,,2018,Y\n" +
    ",408,Trumpet in Philly,Philadelphia,Pennsylvania,,Black Nationalist,Yes,,2018,Y\n" +
    ",409,United Kingdom of Israel Congregation,Chicago,Illinois,,Black Nationalist,,,2018,Y\n" +
    ",410,United Kingdom of Israel Congregation,Baltimore,Maryland,,Black Nationalist,,,2018,Y\n" +
    ",411,United Kingdom of Israel Congregation,Hampton,Virginia,,Black Nationalist,Yes,,2018,Y\n" +
    ",412,War On The Horizon,Washington,District of Columbia,,Black Nationalist,Yes,,2018,Y\n" +
    ",413,Watchmen of Israel,Baltimore,Maryland,,Black Nationalist,Yes,,2018,Y\n" +
    ",414,America's Promise Ministries,Sandpoint,Idaho,America's Promise Ministries,Christian Identity,Yes,,2018,Y\n" +
    ",415,Christian America Ministries,Greensburg,Louisiana,,Christian Identity,Yes,,2018,Y\n" +
    ",416,Christian Revival Center,Harrison,Arkansas,,Christian Identity,Yes,,2018,Y\n" +
    ",417,Christogenea,Panama City,Florida,,Christian Identity,Yes,,2018,Y\n" +
    ",418,Church of Israel,Schell City,Missouri,,Christian Identity,Yes,,2018,Y\n" +
    ",419,Covenant People's Ministry,Brooks,Georgia,,Christian Identity,Yes,,2018,Y\n" +
    ",420,Divine International Church of the Web,Morton,Illinois,,Christian Identity,Yes,,2018,Y\n" +
    ",421,Euro Folk Radio,Chicago,Illinois,,Christian Identity,Yes,,2018,Y\n" +
    ",422,Fellowship of God's Covenant People,Union,Kentucky,,Christian Identity,Yes,,2018,Y\n" +
    ",423,Kingdom Identity Ministries,Harrison,Arkansas,Kingdom Identity Ministries ,Christian Identity,Yes,,2018,Y\n" +
    ",424,Mission to Israel,Scottsbluff,Nebraska,,Christian Identity,Yes,,2018,Y\n" +
    ",425,Our Place Fellowship,Colville,Washington,,Christian Identity,Yes,,2018,Y\n" +
    ",426,Restored Assembly of Elohim,Bainbridge,Ohio,,Christian Identity,Yes,,2018,Y\n" +
    ",427,Sacred Truth Publishing & Ministries,Mountain City,Tennessee,,Christian Identity,Yes,,2018,Y\n" +
    ",428,Scriptures for America Worldwide Ministries,Laporte,Colorado,,Christian Identity,Yes,,2018,Y\n" +
    ",429,Yahushua Dual Seed Christian Identity Ministry,Livingston,Texas,,Christian Identity,Yes,,2018,Y\n" +
    ",430,Yahweh's Truth,Linwood,Michigan,,Christian Identity,Yes,,2018,Y\n" +
    ",431,American Border Patrol,Sierra Vista,Arizona,American Border Patrol/American Patrol,Anti-Immigrant,Yes,,2018,Y\n" +
    ",432,American Immigration Control Foundation/Americans for Immigration Control,Monterey,Virginia,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",433,Americans for Legal Immigration (ALIPAC),Raleigh,North Carolina,,Anti-Immigrant,,,2018,Y\n" +
    ",434,Californians for Population Stabilization,Santa Barbara,California,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",435,Center for Immigration Studies,Washington,District of Columbia,Center for Immigration Studies,Anti-Immigrant,Yes,,2018,Y\n" +
    ",436,Colorado Alliance for Immigration Reform,Lakewood,Colorado,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",438,Federation for American Immigration Reform,Washington,District of Columbia,Federation for American Immigration Reform,Anti-Immigrant,Yes,,2018,Y\n" +
    ",439,Immigration Reform Law Institute,Washington,District of Columbia,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",440,Legal Immigrants for America,Winter Springs,Florida,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",441,Mountain Minutemen,Tecate,California,,Anti-Immigrant,,,2018,Y\n" +
    ",442,Oregonians for Immigration Reform,Salem,Oregon,,Anti-Immigrant,,,2018,Y\n" +
    ",443,ProEnglish,Arlington,Virginia,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",445,Respect Washington,Seattle,Washington,,Anti-Immigrant,,,2018,Y\n" +
    ",446,San Diegans for Secure Borders,San Diego,California,,Anti-Immigrant,Yes,,2018,Y\n" +
    ",447,Texans for Immigration Reduction and Enforcement,Houston,Texas,,Anti-Immigrant,,,2018,Y\n" +
    ",448,American Defense Records,Pittsburgh,Pennsylvania,,Hate Music,,,2018,Y\n" +
    ",449,BeaSSt Productions,Greensboro,North Carolina,,Hate Music,,,2018,Y\n" +
    ",450,Elegy Records,Clifton,New Jersey,,Hate Music,,,2018,Y\n" +
    ",451,Hostile Class Productions,Burbank,Illinois,,Hate Music,,,2018,Y\n" +
    ",452,Hypgnosis Records,,Ohio,,Hate Music,,Yes,2018,Y\n" +
    ",453,ISD Records,Denison,Texas,,Hate Music,Yes,,2018,Y\n" +
    ",454,Label 56,Baltimore,Maryland,,Hate Music,Yes,,2018,Y\n" +
    ",455,MSR Productions,Wheat Ridge,Colorado,,Hate Music,Yes,,2018,Y\n" +
    ",456,NSM88 Records,Detroit,Michigan,,Hate Music,,,2018,Y\n" +
    ",457,Stahlhelm Records,Milwaukee,Wisconsin,,Hate Music,Yes,,2018,Y\n" +
    ",458,Tightrope,Calico Rock,Arkansas,,Hate Music,Yes,,2018,Y\n" +
    ",459,United Riot Records,New York,New York,,Hate Music,,,2018,Y\n" +
    ",460,Vinlandic Werwolf Distribution,,California,,Hate Music,,Yes,2018,Y\n" +
    ",461,Wolf Tyr Productions,Holbrook,New York,,Hate Music,,,2018,Y\n" +
    ",462,Wolf's Head Records,,California,,Hate Music,,Yes,2018,Y\n" +
    ",464,carolynyeager.net,Kerrville,Texas,,Holocaust Denial,Yes,,2018,Y\n" +
    ",465,Committee for Open Debate on the Holocaust,Mill Valley,California,,Holocaust Denial,Yes,,2018,Y\n" +
    ",466,Committee for Open Debate on the Holocaust,York,Pennsylvania,,Holocaust Denial,,,2018,Y\n" +
    ",467,Deir Yassin Remembered,Geneva,New York,,Holocaust Denial,Yes,,2018,Y\n" +
    ",468,Independent History & Research,Coeur d'Alene,Idaho,,Holocaust Denial,Yes,,2018,Y\n" +
    ",469,Institute for Historical Review,Newport Beach,California,Institute for Historical Review,Holocaust Denial,Yes,,2018,Y\n" +
    ",470,The Realist Report,Poway,California,,Holocaust Denial,Yes,,2018,Y\n" +
    ",471,Asatru Folk Assembly,,Alaska,,General Hate,,Yes,2018,Y\n" +
    ",472,Asatru Folk Assembly,Brownsville,California,,General Hate,Yes,,2018,Y\n" +
    ",473,Asatru Folk Assembly,,California,,General Hate,,Yes,2018,Y\n" +
    ",474,Asatru Folk Assembly,,Colorado,,General Hate,,Yes,2018,Y\n" +
    ",475,Asatru Folk Assembly,,Georgia,,General Hate,,Yes,2018,Y\n" +
    ",476,Asatru Folk Assembly,,Massachusetts,,General Hate,,Yes,2018,Y\n" +
    ",477,Asatru Folk Assembly,Bloomington,Minnesota,,General Hate,,,2018,Y\n" +
    ",478,Asatru Folk Assembly,,Missouri,,General Hate,,Yes,2018,Y\n" +
    ",479,Asatru Folk Assembly,,North Carolina,,General Hate,,Yes,2018,Y\n" +
    ",480,Asatru Folk Assembly,,North Dakota,,General Hate,,Yes,2018,Y\n" +
    ",481,Asatru Folk Assembly,,Ohio,,General Hate,,Yes,2018,Y\n" +
    ",482,Asatru Folk Assembly,,Oregon,,General Hate,,Yes,2018,Y\n" +
    ",483,Asatru Folk Assembly,,Pennsylvania,,General Hate,,Yes,2018,Y\n" +
    ",484,Asatru Folk Assembly,,South Carolina,,General Hate,,Yes,2018,Y\n" +
    ",485,Asatru Folk Assembly,,Texas,,General Hate,,Yes,2018,Y\n" +
    ",486,Asatru Folk Assembly,,Virginia,,General Hate,,Yes,2018,Y\n" +
    ",487,Asatru Folk Assembly,,West Virginia,,General Hate,,Yes,2018,Y\n" +
    ",488,Folkgard of Holda & Odin,Apache Junction,Arizona,,General Hate,,,2018,Y\n" +
    ",489,Gallows Tree Wotansvolk Alliance,,Florida,,General Hate,,Yes,2018,Y\n" +
    ",490,Gallows Tree Wotansvolk Alliance,,Iowa,,General Hate,,Yes,2018,Y\n" +
    ",491,Gallows Tree Wotansvolk Alliance,Grand Rapids,Michigan,,General Hate,Yes,,2018,Y\n" +
    ",492,Gallows Tree Wotansvolk Alliance,,Texas,,General Hate,,Yes,2018,Y\n" +
    ",493,Pacific Northwest Wolfpack Kindred,,Washington,,General Hate,,Yes,2018,Y\n" +
    ",494,Wolf Age,Grass Valley,California,,General Hate,Yes,,2018,Y\n" +
    ",495,Wolves of Vinland,,Oregon,,General Hate,,Yes,2018,Y\n" +
    ",496,Wolves of Vinland,,South Carolina,,General Hate,,Yes,2018,Y\n" +
    ",497,Wolves of Vinland,,Tennessee,,General Hate,,Yes,2018,Y\n" +
    ",498,Wolves of Vinland,Lynchburg,Virginia,,General Hate,Yes,,2018,Y\n" +
    ",499,Wolves of Vinland,,Washington,,General Hate,,Yes,2018,Y\n" +
    ",500,Wotan's Nation,Decatur,Tennessee,,General Hate,,,2018,Y\n" +
    ",501,211 Bootboys,Washington,District of Columbia,,General Hate,,,2018,Y\n" +
    ",502,211 Bootboys,New York,New York,,General Hate,Yes,,2018,Y\n" +
    ",503,a2z Publications,Las Vegas,Nevada,,General Hate,Yes,,2018,Y\n" +
    ",504,American Free Press,Upper Marlboro,Maryland,,General Hate,Yes,,2018,Y\n" +
    ",505,American Guard,,Arizona,,General Hate,,Yes,2018,Y\n" +
    ",506,American Guard,,California,,General Hate,,Yes,2018,Y\n" +
    ",507,American Guard,,Colorado,,General Hate,,Yes,2018,Y\n" +
    ",508,American Guard,,Connecticut,,General Hate,,Yes,2018,Y\n" +
    ",509,American Guard,,Florida,,General Hate,,Yes,2018,Y\n" +
    ",510,American Guard,,Idaho,,General Hate,,Yes,2018,Y\n" +
    ",511,American Guard,,Illinois,,General Hate,,Yes,2018,Y\n" +
    ",512,American Guard,,Indiana,,General Hate,Yes,Yes,2018,Y\n" +
    ",513,American Guard,,Michigan,,General Hate,,Yes,2018,Y\n" +
    ",514,American Guard,,Missouri,,General Hate,,Yes,2018,Y\n" +
    ",515,American Guard,,New Hampshire,,General Hate,,Yes,2018,Y\n" +
    ",516,American Guard,,North Carolina,,General Hate,,Yes,2018,Y\n" +
    ",517,American Guard,,Ohio,,General Hate,,Yes,2018,Y\n" +
    ",518,American Guard,,Pennsylvania,,General Hate,,Yes,2018,Y\n" +
    ",519,American Guard,,Rhode Island,,General Hate,,Yes,2018,Y\n" +
    ",520,American Guard,,Tennessee,,General Hate,,Yes,2018,Y\n" +
    ",521,American Guard,,Utah,,General Hate,,Yes,2018,Y\n" +
    ",522,Bill Keller Ministries,St. Petersburg,Florida,,General Hate,Yes,,2018,Y\n" +
    ",524,Chick Publications,Ontario,California,,General Hate,,,2018,Y\n" +
    ",525,Concerned Citizens and Friends of Illegal Immigration Law Enforcement,Framingham,Massachusetts,,General Hate,,,2018,Y\n" +
    ",526,Cultural Studies Press,New York,New York,,General Hate,Yes,,2018,Y\n" +
    ",527,Dixie Giftshop,,Tennessee,,General Hate,,Yes,2018,Y\n" +
    ",528,European-American Evangelistic Crusades,Sheridan,California,,General Hate,Yes,,2018,Y\n" +
    ",529,Fundamentalist Latter Day Saints,Colorado City,Arizona,Fundamentalist Church of Jesus Christ of Latter-Day Saints,General Hate,,,2018,Y\n" +
    ",530,Fundamentalist Latter Day Saints,,South Dakota,Fundamentalist Church of Jesus Christ of Latter-Day Saints,General Hate,,Yes,2018,Y\n" +
    ",531,Fundamentalist Latter Day Saints,Hildale,Utah,Fundamentalist Church of Jesus Christ of Latter-Day Saints,General Hate,Yes,,2018,Y\n" +
    ",532,Hatreon,Austin,Texas,,General Hate,Yes,,2018,Y\n" +
    ",533,Hell Shaking Street Preachers,Tillamook,Oregon,,General Hate,,,2018,Y\n" +
    ",534,Insight USA,Longwood,Florida,,General Hate,Yes,,2018,Y\n" +
    ",535,Jamaat al-Muslimeen,Baltimore,Maryland,,General Hate,Yes,,2018,Y\n" +
    ",536,Jewish Defense League,Brooklyn,New York,,General Hate,,,2018,Y\n" +
    ",537,Jewish Task Force,Fresh Meadows,New York,,General Hate,Yes,,2018,Y\n" +
    ",538,Kingston Group,Salt Lake City,Utah,,General Hate,Yes,,2018,Y\n" +
    ",539,Last Frontier Evangelism- Repent Alaska,Anchorage,Alaska,,General Hate,Yes,,2018,Y\n" +
    ",540,Lordship Church,Coeur d'Alene,Idaho,,General Hate,Yes,,2018,Y\n" +
    ",541,Masjid al Islam - As Sabiqun,Washington,District of Columbia,,General Hate,,,2018,Y\n" +
    ",542,Nationalist Liberty Union,Augusta,Georgia,,General Hate,,,2018,Y\n" +
    ",543,Official Street Preachers,Los Angeles,California,,General Hate,Yes,,2018,Y\n" +
    ",544,Ozark Craft LC,Harrison,Arkansas,,General Hate,,,2018,Y\n" +
    ",545,Patriot Movement AZ,Litchfield Park,Arizona,,General Hate,,,2018,Y\n" +
    ",546,Power of Prophecy,Austin,Texas,,General Hate,Yes,,2018,Y\n" +
    ",547,Proud Boys,Birmingham,Alabama,Proud Boys,General Hate,,,2018,Y\n" +
    ",548,Proud Boys,,Alaska,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",549,Proud Boys,,Arizona,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",550,Proud Boys,Little Rock,Arkansas,Proud Boys,General Hate,,,2018,Y\n" +
    ",551,Proud Boys,Fresno,California,Proud Boys,General Hate,,,2018,Y\n" +
    ",552,Proud Boys,Los Angeles,California,Proud Boys,General Hate,,,2018,Y\n" +
    ",553,Proud Boys,Sacramento,California,Proud Boys,General Hate,,,2018,Y\n" +
    ",554,Proud Boys,,Colorado,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",555,Proud Boys,Jacksonville,Florida,Proud Boys,General Hate,,,2018,Y\n" +
    ",556,Proud Boys,Tampa,Florida,Proud Boys,General Hate,,,2018,Y\n" +
    ",557,Proud Boys,DeLand,Florida,Proud Boys,General Hate,,,2018,Y\n" +
    ",558,Proud Boys,Miami,Florida,Proud Boys,General Hate,,,2018,Y\n" +
    ",559,Proud Boys,Gainesville,Georgia,Proud Boys,General Hate,,,2018,Y\n" +
    ",560,Proud Boys,Atlanta,Georgia,Proud Boys,General Hate,,,2018,Y\n" +
    ",561,Proud Boys,,Hawaii,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",562,Proud Boys,,Hawaii,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",563,Proud Boys,Fort Wayne,Indiana,Proud Boys,General Hate,,,2018,Y\n" +
    ",564,Proud Boys,Louisville,Kentucky,Proud Boys,General Hate,,,2018,Y\n" +
    ",565,Proud Boys,New Orleans,Louisiana,Proud Boys,General Hate,,,2018,Y\n" +
    ",566,Proud Boys,Baltimore,Maryland,Proud Boys,General Hate,,,2018,Y\n" +
    ",567,Proud Boys,,Massachusetts,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",568,Proud Boys,,Michigan,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",569,Proud Boys,Duluth,Minnesota,Proud Boys,General Hate,,,2018,Y\n" +
    ",570,Proud Boys,Minneapolis,Minnesota,Proud Boys,General Hate,,,2018,Y\n" +
    ",571,Proud Boys,St. Louis,Missouri,Proud Boys,General Hate,,,2018,Y\n" +
    ",572,Proud Boys,Kansas City,Missouri,Proud Boys,General Hate,,,2018,Y\n" +
    ",573,Proud Boys,,Nebraska,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",574,Proud Boys,,Nevada,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",575,Proud Boys,,New Hampshire,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",576,Proud Boys,New York,New York,Proud Boys,General Hate,Yes,,2018,Y\n" +
    ",577,Proud Boys,,Oklahoma,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",578,Proud Boys,Portland,Oregon,Proud Boys,General Hate,,,2018,Y\n" +
    ",579,Proud Boys,,Pennsylvania,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",580,Proud Boys,,South Dakota,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",581,Proud Boys,,Tennessee,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",582,Proud Boys,Dallas,Texas,Proud Boys,General Hate,,,2018,Y\n" +
    ",583,Proud Boys,Austin,Texas,Proud Boys,General Hate,,,2018,Y\n" +
    ",584,Proud Boys,Houston,Texas,Proud Boys,General Hate,,,2018,Y\n" +
    ",585,Proud Boys,Ogden,Utah,Proud Boys,General Hate,,,2018,Y\n" +
    ",586,Proud Boys,,Utah,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",587,Proud Boys,Spokane,Washington,Proud Boys,General Hate,,,2018,Y\n" +
    ",588,Proud Boys,Seattle,Washington,Proud Boys,General Hate,,,2018,Y\n" +
    ",589,Proud Boys,Vancouver,Washington,Proud Boys,General Hate,,,2018,Y\n" +
    ",590,Proud Boys,,West Virginia,Proud Boys,General Hate,,Yes,2018,Y\n" +
    ",591,Reformation-Bible Puritan-Baptist Church/Vatican Assassins,Newmanstown,Pennsylvania,,General Hate,Yes,,2018,Y\n" +
    ",592,Rense Radio Network,Ashland,Oregon,,General Hate,Yes,,2018,Y\n" +
    ",593,Samanta Roy Institute of Science and Technology,Shawano,Wisconsin,,General Hate,Yes,,2018,Y\n" +
    ",594,Sharkhunters International,Hernando,Florida,,General Hate,Yes,,2018,Y\n" +
    ",595,Sons of Liberty Media (formerly You Can Run But You Cannot Hide),Annandale,Minnesota,,General Hate,Yes,,2018,Y\n" +
    ",596,Tony Alamo Christian Ministries,Canyon Country,California,,General Hate,,,2018,Y\n" +
    ",597,Tony Alamo Christian Ministries,New York,New York,,General Hate,,,2018,Y\n" +
    ",599,Christ or Chaos,West Chester,Ohio,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",600,Culture Wars/Fidelity Press,South Bend,Indiana,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",602,IHM Media,Richmond,New Hampshire,,Radical Traditional Catholicism,,,2018,Y\n" +
    ",603,IHS Press,Norfolk,Virginia,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",604,In the Spirit of Chartres Committee,Carrollton,Virginia,,Radical Traditional Catholicism,,,2018,Y\n" +
    ",606,Robert Sungenis,State Line,Pennsylvania,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",607,Slaves of the Immaculate Heart of Mary,Richmond,New Hampshire,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",608,Tradition in Action,Los Angeles,California,,Radical Traditional Catholicism,Yes,,2018,Y\n" +
    ",609,American Christian Dixie Knights of the Ku Klux Klan,,Alabama,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",610,American Christian Dixie Knights of the Ku Klux Klan,,Florida,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",611,American Christian Dixie Knights of the Ku Klux Klan,,Tennessee,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",612,American Christian Knights of the Ku Klux Klan,Moselle,Mississippi,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",613,American White Knights of the Ku Klux Klan,,Georgia,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",614,American White Knights of the Ku Klux Klan,,Indiana,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",615,Aryan Knights of the Invisible Empire,,North Carolina,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",616,Church of the National Knights of the Ku Klux Klan,South Bend,Indiana,Church of the National Knights of the Ku Klux Klan,Ku Klux Klan,Yes,,2018,Y\n" +
    ",617,Church of the National Knights of the Ku Klux Klan,,Kentucky,Church of the National Knights of the Ku Klux Klan,Ku Klux Klan,,Yes,2018,Y\n" +
    ",618,Confederate White Knights of the Ku Klux Klan,,Maryland,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",619,Confederate White Knights of the Ku Klux Klan,Wappapello,Missouri,,Ku Klux Klan,,,2018,Y\n" +
    ",620,Confederate White Knights of the Ku Klux Klan,,Virginia,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",621,East Coast Knights of the True Invisible Empire,Columbus,Ohio,,Ku Klux Klan,,,2018,Y\n" +
    ",622,East Coast Knights of the True Invisible Empire,Philadelphia,Pennsylvania,,Ku Klux Klan,,,2018,Y\n" +
    ",623,East Coast Knights of the True Invisible Empire,,North Carolina,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",624,Global Crusaders: Order of the Ku Klux Klan,,Alabama,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",625,Honorable Sacred Knights of the Ku Klux Klan,Madison,Indiana,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",626,International Keystone Knights of the Ku Klux Klan,,Florida,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",627,International Keystone Knights of the Ku Klux Klan,,Mississippi,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",628,International Keystone Knights of the Ku Klux Klan,Cedartown,Georgia,,Ku Klux Klan,,,2018,Y\n" +
    ",629,Knights of the Ku Klux Klan,Harrison,Arkansas,Knights of the Ku Klux Klan,Ku Klux Klan,Yes,,2018,Y\n" +
    ",630,Loyal White Knights of the Ku Klux Klan,,Maryland,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",631,Loyal White Knights of the Ku Klux Klan,,Florida,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",632,Loyal White Knights of the Ku Klux Klan,,New York,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",633,Loyal White Knights of the Ku Klux Klan,Pelham,North Carolina,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",634,Loyal White Knights of the Ku Klux Klan,,Pennsylvania,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",635,Loyal White Knights of the Ku Klux Klan,,Texas,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",636,Loyal White Knights of the Ku Klux Klan,,Virginia,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",637,Mississippi White Knights of the Ku Klux Klan,Bruce,Mississippi,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",638,Noble Klans of America,,Maryland,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",639,Noble Klans of America,,New Jersey,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",640,Nordic Order Knights of the Ku Klux Klan,,Alabama,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",641,Nordic Order Knights of the Ku Klux Klan,Dawson Springs,Kentucky,,Ku Klux Klan,,,2018,Y\n" +
    ",643,Pacific Coast Knights of the Ku Klux Klan,Alpena,Michigan,,Ku Klux Klan,,,2018,Y\n" +
    ",644,Pacific Coast Knights of the Ku Klux Klan,,Oregon,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",645,Pacific Coast Knights of the Ku Klux Klan,,California,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",646,Pacific Coast Knights of the Ku Klux Klan,,Washington,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",647,Patriotic Brigade Knights of the Ku Klux Klan,,South Carolina,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",648,Patriotic Brigade Knights of the Ku Klux Klan,Gladewater,Texas,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",649,Rebel Brigade Knights True Invisible Empire,Martinsville,Virginia,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",650,Teutonic Knights of the Ku Klux Klan,Shelbyville,Tennessee,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",651,Texas Rebel Knights of the Ku Klux Klan,Quinlan,Texas,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",652,Traditionalist American Knights of the Ku Klux Klan,,Florida,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",653,Traditionalist American Knights of the Ku Klux Klan,Custer,South Dakota,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",654,United Dixie White Knights of the Ku Klux Klan,,Mississippi,,Ku Klux Klan,Yes,Yes,2018,Y\n" +
    ",655,United Klans of America,,Alabama,,Ku Klux Klan,,Yes,2018,Y\n" +
    ",656,United Klans of America,McMinnville,Tennessee,,Ku Klux Klan,,,2018,Y\n" +
    ",657,United Northern and Southern Knights of the Ku Klux Klan,Ellijay,Georgia,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",658,United White Knights of the Ku Klux Klan,New Boston,Texas,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",659,White Knights of Texas,DeKalb,Texas,,Ku Klux Klan,Yes,,2018,Y\n" +
    ",660,A Voice For Men,Houston,Texas,,Male Supremacy,,,2018,Y\n" +
    ",661,Return of Kings,Washington,District of Columbia,,Male Supremacy,,,2018,Y\n" +
    ",662,Dixie Republic,Travelers Rest,South Carolina,,Neo-Confederate,,,2018,Y\n" +
    ",663,Identity Dixie,,Florida,,Neo-Confederate,,Yes,2018,Y\n" +
    ",664,Identity Dixie,,Georgia,,Neo-Confederate,,Yes,2018,Y\n" +
    ",665,Identity Dixie,,Louisiana,,Neo-Confederate,,Yes,2018,Y\n" +
    ",666,Identity Dixie,,North Carolina,,Neo-Confederate,,Yes,2018,Y\n" +
    ",667,Identity Dixie,,Tennessee,,Neo-Confederate,,Yes,2018,Y\n" +
    ",668,Identity Dixie,,Texas,,Neo-Confederate,,Yes,2018,Y\n" +
    ",669,Identity Dixie,Statewide,Virginia,,Neo-Confederate,,,2018,Y\n" +
    ",670,League of the South,Killen,Alabama,League of the South,Neo-Confederate,Yes,,2018,Y\n" +
    ",671,League of the South,Wetumpka,Alabama,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",672,League of the South,Dothan,Alabama,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",673,League of the South,Northport,Alabama,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",674,League of the South,Weogufka,Alabama,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",675,League of the South,Harrison,Arkansas,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",676,League of the South,Lake City,Florida,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",677,League of the South,Hialeah,Florida,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",678,League of the South,Panama City,Florida,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",679,League of the South,Ocala,Florida,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",680,League of the South,Jacksonville,Florida,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",681,League of the South,,Florida,League of the South,Neo-Confederate,,Yes,2018,Y\n" +
    ",682,League of the South,Powder Springs,Georgia,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",683,League of the South,Cartersville,Georgia,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",684,League of the South,Taylorsville,Kentucky,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",685,League of the South,Gonzales,Louisiana,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",686,League of the South,Jackson,Mississippi,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",687,League of the South,Holly Springs,Mississippi,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",688,League of the South,Columbia,South Carolina,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",689,League of the South,Memphis,Tennessee,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",690,League of the South,Gallatin,Tennessee,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",691,League of the South,Johnson City,Tennessee,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",692,League of the South,Knoxville,Tennessee,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",693,League of the South,San Antonio,Texas,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",694,League of the South,Pointblank,Texas,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",695,League of the South,Danville,Virginia,League of the South,Neo-Confederate,,,2018,Y\n" +
    ",696,Southern Revivalist,,North Carolina,,Neo-Confederate,,Yes,2018,Y\n" +
    ",697,Wildman's Civil War Surplus and Herb Shop,Kennesaw,Georgia,,Neo-Confederate,Yes,,2018,Y\n" +
    ",698,America First Committee,Lyons,Illinois,,Neo-Nazi,,,2018,Y\n" +
    ",699,American Nazi Party,,California,,Neo-Nazi,,Yes,2018,Y\n" +
    ",700,American Nazi Party,Westland,Michigan,,Neo-Nazi,Yes,,2018,Y\n" +
    ",701,Aryan Nations Sadistic Souls MC,Canton,Illinois,Aryan Nations,Neo-Nazi,,,2018,Y\n" +
    ",702,Aryan Nations Sadistic Souls MC,Wood River,Illinois,Aryan Nations,Neo-Nazi,Yes,,2018,Y\n" +
    ",703,Aryan Nations Sadistic Souls MC,Grovespring,Missouri,Aryan Nations,Neo-Nazi,,,2018,Y\n" +
    ",704,Aryan Nations Sadistic Souls MC,,Ohio,Aryan Nations,Neo-Nazi,,Yes,2018,Y\n" +
    ",705,Aryan Nations Sadistic Souls MC,,Oklahoma,Aryan Nations,Neo-Nazi,,Yes,2018,Y\n" +
    ",706,Aryan Nations Sadistic Souls MC,,Wisconsin,Aryan Nations,Neo-Nazi,,Yes,2018,Y\n" +
    ",707,Atomwaffen Division,,Alabama,,Neo-Nazi,,Yes,2018,Y\n" +
    ",708,Atomwaffen Division,,Arizona,,Neo-Nazi,,Yes,2018,Y\n" +
    ",709,Atomwaffen Division,,Arkansas,,Neo-Nazi,,Yes,2018,Y\n" +
    ",710,Atomwaffen Division,,California,,Neo-Nazi,,Yes,2018,Y\n" +
    ",711,Atomwaffen Division,,Colorado,,Neo-Nazi,,Yes,2018,Y\n" +
    ",712,Atomwaffen Division,,Florida,,Neo-Nazi,,Yes,2018,Y\n" +
    ",713,Atomwaffen Division,,Georgia,,Neo-Nazi,,Yes,2018,Y\n" +
    ",714,Atomwaffen Division,,Illinois,,Neo-Nazi,,Yes,2018,Y\n" +
    ",715,Atomwaffen Division,,Kentucky,,Neo-Nazi,,Yes,2018,Y\n" +
    ",716,Atomwaffen Division,,Maine,,Neo-Nazi,,Yes,2018,Y\n" +
    ",717,Atomwaffen Division,,Maryland,,Neo-Nazi,,Yes,2018,Y\n" +
    ",718,Atomwaffen Division,,Massachusetts,,Neo-Nazi,,Yes,2018,Y\n" +
    ",719,Atomwaffen Division,,Michigan,,Neo-Nazi,,Yes,2018,Y\n" +
    ",720,Atomwaffen Division,,Minnesota,,Neo-Nazi,,Yes,2018,Y\n" +
    ",721,Atomwaffen Division,,Mississippi,,Neo-Nazi,,Yes,2018,Y\n" +
    ",722,Atomwaffen Division,,Missouri,,Neo-Nazi,,Yes,2018,Y\n" +
    ",723,Atomwaffen Division,Las Vegas,Nevada,,Neo-Nazi,,,2018,Y\n" +
    ",724,Atomwaffen Division,,New Jersey,,Neo-Nazi,,Yes,2018,Y\n" +
    ",725,Atomwaffen Division,,New York,,Neo-Nazi,,Yes,2018,Y\n" +
    ",726,Atomwaffen Division,,North Carolina,,Neo-Nazi,,Yes,2018,Y\n" +
    ",727,Atomwaffen Division,,Ohio,,Neo-Nazi,,Yes,2018,Y\n" +
    ",728,Atomwaffen Division,,Oklahoma,,Neo-Nazi,,Yes,2018,Y\n" +
    ",729,Atomwaffen Division,,South Carolina,,Neo-Nazi,,Yes,2018,Y\n" +
    ",730,Atomwaffen Division,,Texas,,Neo-Nazi,,Yes,2018,Y\n" +
    ",731,Atomwaffen Division,,Virginia,,Neo-Nazi,,Yes,2018,Y\n" +
    ",732,Atomwaffen Division,,Washington,,Neo-Nazi,,Yes,2018,Y\n" +
    ",733,Atomwaffen Division,,Wisconsin,,Neo-Nazi,,Yes,2018,Y\n" +
    ",764,Endangered Souls RC/Crew 519,,Florida,,Neo-Nazi,,Yes,2018,Y\n" +
    ",765,Endangered Souls RC/Crew 519,,Idaho,,Neo-Nazi,,Yes,2018,Y\n" +
    ",766,National Alliance,,Iowa,National Alliance,Neo-Nazi,,Yes,2018,Y\n" +
    ",767,National Alliance,Laurel Bloomery,Tennessee,National Alliance,Neo-Nazi,,,2018,Y\n" +
    ",768,National Alliance,Hillsboro,West Virginia,National Alliance,Neo-Nazi,,,2018,Y\n" +
    ",769,National Alliance Reform and Restoration Group,Carson City,Nevada,National Alliance,Neo-Nazi,Yes,,2018,Y\n" +
    ",770,National Socialist German Workers Party,Lincoln,Nebraska,,Neo-Nazi,Yes,,2018,Y\n" +
    ",771,National Socialist Legion,,Tennessee,,Neo-Nazi,,Yes,2018,Y\n" +
    ",772,National Socialist Legion,,Texas,,Neo-Nazi,Yes,Yes,2018,Y\n" +
    ",773,National Socialist Liberation Front,,Alabama,,Neo-Nazi,,Yes,2018,Y\n" +
    ",774,National Socialist Liberation Front,,New York,,Neo-Nazi,,Yes,2018,Y\n" +
    ",775,National Socialist Liberation Front,,Pennsylvania,,Neo-Nazi,Yes,Yes,2018,Y\n" +
    ",776,National Socialist Movement,Maricopa,Arizona,National Socialist Movement,Neo-Nazi,,,2018,Y\n" +
    ",777,National Socialist Movement,,Florida,National Socialist Movement,Neo-Nazi,,Yes,2018,Y\n" +
    ",778,National Socialist Movement,,Illinois,National Socialist Movement,Neo-Nazi,,Yes,2018,Y\n" +
    ",779,National Socialist Movement,Detroit,Michigan,National Socialist Movement,Neo-Nazi,Yes,,2018,Y\n" +
    ",780,National Socialist Movement,,Pennsylvania,National Socialist Movement,Neo-Nazi,,Yes,2018,Y\n" +
    ",781,National Socialist Movement,,Tennessee,National Socialist Movement,Neo-Nazi,,Yes,2018,Y\n" +
    ",782,Nationalist Initiative,South Vienna,Ohio,,Neo-Nazi,Yes,,2018,Y\n" +
    ",783,Nationalist Women's Front,,California,,Neo-Nazi,,Yes,2018,Y\n" +
    ",784,New Order,Milwaukee,Wisconsin,,Neo-Nazi,Yes,,2018,Y\n" +
    ",785,Noble Breed Kindred,,California,,Neo-Nazi,,Yes,2018,Y\n" +
    ",786,NS Publications,Wyandotte,Michigan,,Neo-Nazi,Yes,,2018,Y\n" +
    ",787,PzG Inc.,Rapid City,South Dakota,,Neo-Nazi,,,2018,Y\n" +
    ",788,Radio Wehrwolf,Fitchburg,Wisconsin,,Neo-Nazi,Yes,,2018,Y\n" +
    ",789,Third Reich Books,Fairbury,Nebraska,,Neo-Nazi,Yes,,2018,Y\n" +
    ",790,Traditionalist Worker Party,,Alabama,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",791,Traditionalist Worker Party,,Colorado,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",792,Traditionalist Worker Party,,Florida,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",793,Traditionalist Worker Party,,Georgia,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",794,Traditionalist Worker Party,,Indiana,Traditionalist Worker Party,Neo-Nazi,Yes,Yes,2018,Y\n" +
    ",795,Traditionalist Worker Party,,Kentucky,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",796,Traditionalist Worker Party,,Michigan,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",797,Traditionalist Worker Party,,North Carolina,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",798,Traditionalist Worker Party,,Ohio,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",799,Traditionalist Worker Party,,Tennessee,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",800,Traditionalist Worker Party,,Texas,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",801,Traditionalist Worker Party,,Virginia,Traditionalist Worker Party,Neo-Nazi,,Yes,2018,Y\n" +
    ",802,Vanguard America,,Indiana,,Neo-Nazi,Yes,Yes,2018,Y\n" +
    ",803,Vanguard America,,Pennsylvania,,Neo-Nazi,,Yes,2018,Y\n" +
    ",804,Vanguard America,,Rhode Island,,Neo-Nazi,,Yes,2018,Y\n" +
    ",805,Vanguard America,,Tennessee,,Neo-Nazi,,Yes,2018,Y\n" +
    ",806,Vanguard America,,Texas,,Neo-Nazi,,Yes,2018,Y\n" +
    ",807,Vanguard America Women's Division,,Indiana,,Neo-Nazi,Yes,Yes,2018,Y\n" +
    ",808,Vanguard News Network,Kirksville,Missouri,,Neo-Nazi,Yes,,2018,Y\n" +
    ",809,White Aryan Resistance,San Jacinto,California,,Neo-Nazi,Yes,,2018,Y\n" +
    ",810,AC Skins,Atlantic City,New Jersey,,Racist Skinhead,,,2018,Y\n" +
    ",811,AC/OC,,California,,Racist Skinhead,,Yes,2018,Y\n" +
    ",812,AC/OC,,Nebraska,,Racist Skinhead,,Yes,2018,Y\n" +
    ",813,American Front,,Oregon,,Racist Skinhead,,Yes,2018,Y\n" +
    ",814,American Front,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",815,American Patriot Brigade,,Oregon,,Racist Skinhead,,Yes,2018,Y\n" +
    ",816,American Patriot Brigade,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",817,American Vikings Clothing,Danville,Illinois,,Racist Skinhead,,,2018,Y\n" +
    ",818,Aryan Skins Kindred,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",819,Be Active Front USA,Chicago,Illinois,,Racist Skinhead,,,2018,Y\n" +
    ",820,Be Active Front USA,,Maryland,,Racist Skinhead,,Yes,2018,Y\n" +
    ",821,Be Active Front USA,Philadelphia,Pennsylvania,,Racist Skinhead,,,2018,Y\n" +
    ",822,Blood and Honour America Division,,California,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",823,Blood and Honour Social Club,,Georgia,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",824,Blood and Honour Social Club,,Indiana,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",825,Blood and Honour Social Club,,New York,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",826,Blood and Honour Social Club,,North Carolina,Blood & Honour,Racist Skinhead,Yes,Yes,2018,Y\n" +
    ",827,Blood and Honour Social Club,,Ohio,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",828,Blood and Honour Social Club,,Pennsylvania,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",829,Blood and Honour Social Club,,Virginia,Blood & Honour,Racist Skinhead,,Yes,2018,Y\n" +
    ",830,Blood and Honour USA,,North Carolina,,Racist Skinhead,,Yes,2018,Y\n" +
    ",831,Blood and Honour USA,,Virginia,,Racist Skinhead,,Yes,2018,Y\n" +
    ",832,California Skinheads,,California,,Racist Skinhead,Yes,Yes,2018,Y\n" +
    ",833,Confederate Hammerskins,,Florida,,Racist Skinhead,,Yes,2018,Y\n" +
    ",834,Confederate Hammerskins,,Georgia,,Racist Skinhead,,Yes,2018,Y\n" +
    ",835,Confederate Hammerskins,,North Carolina,,Racist Skinhead,,Yes,2018,Y\n" +
    ",836,Confederate Hammerskins,,Tennessee,,Racist Skinhead,,Yes,2018,Y\n" +
    ",837,Confederate Hammerskins,,Virginia,,Racist Skinhead,,Yes,2018,Y\n" +
    ",838,Crew 38,,California,,Racist Skinhead,,Yes,2018,Y\n" +
    ",839,Crew 38,,Florida,,Racist Skinhead,,Yes,2018,Y\n" +
    ",840,Crew 38,,Georgia,,Racist Skinhead,,Yes,2018,Y\n" +
    ",841,Crew 38,,Idaho,,Racist Skinhead,,Yes,2018,Y\n" +
    ",842,Crew 38,,New Hampshire,,Racist Skinhead,,Yes,2018,Y\n" +
    ",843,Crew 38,,North Carolina,,Racist Skinhead,,Yes,2018,Y\n" +
    ",844,Crew 38,,Oregon,,Racist Skinhead,,Yes,2018,Y\n" +
    ",845,Crew 38,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",846,Eastern Hammerskins,,New Hampshire,,Racist Skinhead,,Yes,2018,Y\n" +
    ",847,Firm 22,,Florida,,Racist Skinhead,,Yes,2018,Y\n" +
    ",848,Firm 22,,Indiana,,Racist Skinhead,,Yes,2018,Y\n" +
    ",849,Firm 22,,Missouri,,Racist Skinhead,,Yes,2018,Y\n" +
    ",850,Firm 22,,New Hampshire,,Racist Skinhead,,Yes,2018,Y\n" +
    ",851,Firm 22,,New Jersey,,Racist Skinhead,,Yes,2018,Y\n" +
    ",852,Firm 22,,New York,,Racist Skinhead,,Yes,2018,Y\n" +
    ",853,Firm 22,,Ohio,,Racist Skinhead,,Yes,2018,Y\n" +
    ",854,Firm 22,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",855,Golden State Skinheads,Northern,California,,Racist Skinhead,Yes,,2018,Y\n" +
    ",856,Golden State Skinheads,Southern,California,,Racist Skinhead,,,2018,Y\n" +
    ",857,Keystone State Skinheads,,Pennsylvania,,Racist Skinhead,,Yes,2018,Y\n" +
    ",858,Midland Hammerskins,,Kansas,,Racist Skinhead,,Yes,2018,Y\n" +
    ",859,Midland Hammerskins,,Texas,,Racist Skinhead,,Yes,2018,Y\n" +
    ",860,Northern Hammerskins,Detroit,Michigan,,Racist Skinhead,,,2018,Y\n" +
    ",861,Northwest Hammerskins,,Idaho,,Racist Skinhead,,Yes,2018,Y\n" +
    ",862,Northwest Hammerskins,,Oregon,,Racist Skinhead,,Yes,2018,Y\n" +
    ",863,Northwest Hammerskins,,Washington,,Racist Skinhead,,Yes,2018,Y\n" +
    ",864,Sacto Skins,Sacramento,California,,Racist Skinhead,Yes,,2018,Y\n" +
    ",865,United Southern Skins,,Florida,,Racist Skinhead,,Yes,2018,Y\n" +
    ",866,Vinlanders Social Club,,Florida,Vinlanders Social Club,Racist Skinhead,,Yes,2018,Y\n" +
    ",867,Vinlanders Social Club,,Indiana,Vinlanders Social Club,Racist Skinhead,Yes,Yes,2018,Y\n" +
    ",868,Vinlanders Social Club,,Minnesota,Vinlanders Social Club,Racist Skinhead,,Yes,2018,Y\n" +
    ",869,Vinlanders Social Club,,Texas,Vinlanders Social Club,Racist Skinhead,,Yes,2018,Y\n" +
    ",870,Vinlanders Social Club,,Washington,Vinlanders Social Club,Racist Skinhead,,Yes,2018,Y\n" +
    ",871,Warrior's Pride Clothing,Bakersfield,California,,Racist Skinhead,,,2018,Y\n" +
    ",872,Western Hammerskins,,California,,Racist Skinhead,,Yes,2018,Y\n" +
    ",873,Affirmative Right,Atlanta,Georgia,,White Nationalist,Yes,,2018,Y\n" +
    ",874,AltRight Corporation,Alexandria,Virginia,,White Nationalist,Yes,,2018,Y\n" +
    ",875,American Freedom Party,Los Angeles,California,American Freedom Party,White Nationalist,Yes,,2018,Y\n" +
    ",876,American Freedom Party,Lakewood Ranch,Florida,American Freedom Party,White Nationalist,,,2018,Y\n" +
    ",877,American Freedom Party,Bradenton,Florida,American Freedom Party,White Nationalist,,,2018,Y\n" +
    ",878,American Freedom Party,,Indiana,American Freedom Party,White Nationalist,,Yes,2018,Y\n" +
    ",879,American Freedom Party,,Montana,American Freedom Party,White Nationalist,,Yes,2018,Y\n" +
    ",880,American Freedom Party,New York,New York,American Freedom Party,White Nationalist,,,2018,Y\n" +
    ",881,American Freedom Party,,New York,American Freedom Party,White Nationalist,,Yes,2018,Y\n" +
    ",882,American Freedom Party,,North Dakota,American Freedom Party,White Nationalist,,Yes,2018,Y\n" +
    ",883,American Freedom Party,Granbury,Texas,American Freedom Party,White Nationalist,,,2018,Y\n" +
    ",884,American Freedom Party,,Wisconsin,American Freedom Party,White Nationalist,,Yes,2018,Y\n" +
    ",885,American Freedom Union,Hampton Township,Pennsylvania,,White Nationalist,Yes,,2018,Y\n" +
    ",886,American Renaissance/New Century Foundation,Oakton,Virginia,American Renaissance,White Nationalist,Yes,,2018,Y\n" +
    ",887,Arktos Media,New York,New York,,White Nationalist,Yes,,2018,Y\n" +
    ",888,Auburn White Student Union,Auburn,Alabama,,White Nationalist,Yes,,2018,Y\n" +
    ",890,Council of Conservative Citizens,Blackwell,Missouri,Council of Conservative Citizens,White Nationalist,Yes,,2018,Y\n" +
    ",891,Counter-Currents Publishing,San Francisco,California,,White Nationalist,Yes,,2018,Y\n" +
    ",892,Exodus/Americanus,Floyds Knobs,Indiana,,White Nationalist,Yes,,2018,Y\n" +
    ",893,Faith and Heritage,Killeen,Texas,,White Nationalist,Yes,,2018,Y\n" +
    ",895,Forza Nuova,Trenton,New Jersey,,White Nationalist,Yes,,2018,Y\n" +
    ",896,Foundation for the Marketplace of Ideas,Clinton Township,Michigan,,White Nationalist,Yes,,2018,Y\n" +
    ",897,Free American,Big Spring,Texas,,White Nationalist,Yes,,2018,Y\n" +
    ",898,FreeStartr,Carson City,Nevada,,White Nationalist,Yes,,2018,Y\n" +
    ",899,H.L. Mencken Club,Elizabethtown,Pennsylvania,,White Nationalist,Yes,,2018,Y\n" +
    ",900,Identity Evropa,,Arizona,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",901,Identity Evropa,,Arkansas,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",902,Identity Evropa,Redding,California,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",903,Identity Evropa,San Francisco,California,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",904,Identity Evropa,San Diego,California,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",905,Identity Evropa,Denver,Colorado,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",906,Identity Evropa,Colorado Springs,Colorado,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",907,Identity Evropa,Boulder,Colorado,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",908,Identity Evropa,,Connecticut,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",909,Identity Evropa,Washington,District of Columbia,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",910,Identity Evropa,Gainesville,Florida,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",911,Identity Evropa,Lakeland,Florida,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",912,Identity Evropa,Savannah,Georgia,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",913,Identity Evropa,Atlanta,Georgia,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",914,Identity Evropa,Chicago,Illinois,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",915,Identity Evropa,Indianapolis,Indiana,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",916,Identity Evropa,,Kansas,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",917,Identity Evropa,,Kentucky,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",918,Identity Evropa,New Orleans,Louisiana,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",919,Identity Evropa,,Maryland,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",920,Identity Evropa,,Michigan,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",921,Identity Evropa,,Minnesota,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",922,Identity Evropa,Billings,Montana,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",923,Identity Evropa,Las Vegas,Nevada,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",924,Identity Evropa,,New Jersey,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",925,Identity Evropa,,New York,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",926,Identity Evropa,,North Carolina,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",927,Identity Evropa,,Ohio,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",928,Identity Evropa,,Oklahoma,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",929,Identity Evropa,,Pennsylvania,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",930,Identity Evropa,,Tennessee,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",931,Identity Evropa,,Texas,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",932,Identity Evropa,Salt Lake City,Utah,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",933,Identity Evropa,,Virginia,Identity Evropa,White Nationalist,Yes,Yes,2018,Y\n" +
    ",934,Identity Evropa,Seattle,Washington,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",935,Identity Evropa,Spokane,Washington,Identity Evropa,White Nationalist,,,2018,Y\n" +
    ",936,Identity Evropa,,Wisconsin,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",937,Identity Evropa,,Wyoming,Identity Evropa,White Nationalist,,Yes,2018,Y\n" +
    ",938,National Policy Institute,Whitefish,Montana,,White Nationalist,,,2018,Y\n" +
    ",939,National Right,Jackman,Maine,,White Nationalist,Yes,,2018,Y\n" +
    ",940,New Albion,Jackman,Maine,,White Nationalist,Yes,,2018,Y\n" +
    ",941,Northwest Front,Bremerton,Washington,,White Nationalist,Yes,,2018,Y\n" +
    ",942,Occidental Dissent,Eufaula,Alabama,,White Nationalist,Yes,,2018,Y\n" +
    ",943,Occidental Observer,Laguna Hills,California,,White Nationalist,Yes,,2018,Y\n" +
    ",944,Occidental Quarterly/Charles Martel Society,Atlanta,Georgia,Occidental Quarterly,White Nationalist,Yes,,2018,Y\n" +
    ",945,Patriot Front,,California,,White Nationalist,,Yes,2018,Y\n" +
    ",946,Patriot Front,,Colorado,,White Nationalist,,Yes,2018,Y\n" +
    ",947,Patriot Front,Washington,District of Columbia,,White Nationalist,,,2018,Y\n" +
    ",948,Patriot Front,,Florida,,White Nationalist,,Yes,2018,Y\n" +
    ",949,Patriot Front,,Georgia,,White Nationalist,,Yes,2018,Y\n" +
    ",950,Patriot Front,,Illinois,,White Nationalist,,Yes,2018,Y\n" +
    ",951,Patriot Front,,Kentucky,,White Nationalist,,Yes,2018,Y\n" +
    ",952,Patriot Front,,Maryland,,White Nationalist,,Yes,2018,Y\n" +
    ",953,Patriot Front,,Massachusetts,,White Nationalist,,Yes,2018,Y\n" +
    ",954,Patriot Front,,Michigan,,White Nationalist,,Yes,2018,Y\n" +
    ",955,Patriot Front,,New York,,White Nationalist,,Yes,2018,Y\n" +
    ",956,Patriot Front,,Texas,,White Nationalist,Yes,Yes,2018,Y\n" +
    ",957,Patriot Front,,Utah,,White Nationalist,,Yes,2018,Y\n" +
    ",958,Patriot Front,,Vermont,,White Nationalist,,Yes,2018,Y\n" +
    ",959,Patriot Front,,Virginia,,White Nationalist,,Yes,2018,Y\n" +
    ",960,Patriot Front,,Washington,,White Nationalist,,Yes,2018,Y\n" +
    ",961,Patriotic Flags,Summerville,South Carolina,,White Nationalist,Yes,,2018,Y\n" +
    ",962,Pioneer Little Europe Kalispell Montana,Kalispell,Montana,,White Nationalist,Yes,,2018,Y\n" +
    ",964,Racial Nationalist Party of America,Lockport,New York,,White Nationalist,Yes,,2018,Y\n" +
    ",965,Radix Journal,Whitefish,Montana,,White Nationalist,Yes,,2018,Y\n" +
    ",966,Real Republic of Florida,Tallahassee,Florida,,White Nationalist,Yes,,2018,Y\n" +
    ",967,Red Ice,Harrisonburg,Virginia,,White Nationalist,Yes,,2018,Y\n" +
    ",968,Right Brand Clothing,Anaheim,California,,White Nationalist,Yes,,2018,Y\n" +
    ",969,Rise Above Movement,Huntington Beach,California,,White Nationalist,Yes,,2018,Y\n" +
    ",970,Scott-Townsend Publishers,Washington,District of Columbia,,White Nationalist,Yes,,2018,Y\n" +
    ",971,Shieldwall Network,Mountain View,Arkansas,,White Nationalist,Yes,,2018,Y\n" +
    ",972,Shieldwall Network,Murfreesboro,Tennessee,,White Nationalist,,,2018,Y\n" +
    ",973,Shieldwall Network,New Boston,Texas,,White Nationalist,,,2018,Y\n" +
    ",974,Social Contract Press,Petoskey,Michigan,,White Nationalist,Yes,,2018,Y\n" +
    ",975,Stormfront,West Palm Beach,Florida,Stormfront,White Nationalist,Yes,,2018,Y\n" +
    ",976,The Right Stuff,,Alabama,,White Nationalist,,Yes,2018,Y\n" +
    ",977,The Right Stuff,,Arizona,,White Nationalist,,Yes,2018,Y\n" +
    ",978,The Right Stuff,Los Angeles,California,,White Nationalist,,,2018,Y\n" +
    ",979,The Right Stuff,San Francisco,California,,White Nationalist,,,2018,Y\n" +
    ",980,The Right Stuff,,Colorado,,White Nationalist,,Yes,2018,Y\n" +
    ",981,The Right Stuff,Washington,District of Columbia,,White Nationalist,,,2018,Y\n" +
    ",982,The Right Stuff,,Florida,,White Nationalist,,Yes,2018,Y\n" +
    ",983,The Right Stuff,,Hawaii,,White Nationalist,,Yes,2018,Y\n" +
    ",984,The Right Stuff,Chicago,Illinois,,White Nationalist,,,2018,Y\n" +
    ",985,The Right Stuff,,Indiana,,White Nationalist,,Yes,2018,Y\n" +
    ",986,The Right Stuff,,Louisiana,,White Nationalist,,Yes,2018,Y\n" +
    ",987,The Right Stuff,Baltimore,Maryland,,White Nationalist,,,2018,Y\n" +
    ",988,The Right Stuff,Boston,Massachusetts,,White Nationalist,,,2018,Y\n" +
    ",989,The Right Stuff,,Michigan,,White Nationalist,,Yes,2018,Y\n" +
    ",990,The Right Stuff,,Minnesota,,White Nationalist,,Yes,2018,Y\n" +
    ",991,The Right Stuff,St. Louis,Missouri,,White Nationalist,,,2018,Y\n" +
    ",992,The Right Stuff,Kansas City,Missouri,,White Nationalist,,,2018,Y\n" +
    ",993,The Right Stuff,Las Vegas,Nevada,,White Nationalist,,,2018,Y\n" +
    ",994,The Right Stuff,Hopewell Junction,New York,,White Nationalist,Yes,,2018,Y\n" +
    ",995,The Right Stuff,New York,New York,,White Nationalist,,,2018,Y\n" +
    ",996,The Right Stuff,,North Carolina,,White Nationalist,,Yes,2018,Y\n" +
    ",997,The Right Stuff,Cleveland,Ohio,,White Nationalist,,,2018,Y\n" +
    ",998,The Right Stuff,Columbus,Ohio,,White Nationalist,,,2018,Y\n" +
    ",999,The Right Stuff,Philadelphia,Pennsylvania,,White Nationalist,,,2018,Y\n" +
    ",1000,The Right Stuff,Pittsburgh,Pennsylvania,,White Nationalist,,,2018,Y\n" +
    ",1001,The Right Stuff,,South Carolina,,White Nationalist,,Yes,2018,Y\n" +
    ",1002,The Right Stuff,Memphis,Tennessee,,White Nationalist,,,2018,Y\n" +
    ",1003,The Right Stuff,Dallas,Texas,,White Nationalist,,,2018,Y\n" +
    ",1004,The Right Stuff,San Antonio,Texas,,White Nationalist,,,2018,Y\n" +
    ",1005,The Right Stuff,Austin,Texas,,White Nationalist,,,2018,Y\n" +
    ",1006,The Right Stuff,Houston,Texas,,White Nationalist,,,2018,Y\n" +
    ",1007,The Right Stuff,,Utah,,White Nationalist,,Yes,2018,Y\n" +
    ",1008,The Right Stuff,,Virginia,,White Nationalist,,Yes,2018,Y\n" +
    ",1009,The Right Stuff,,Wisconsin,,White Nationalist,,Yes,2018,Y\n" +
    ",1010,True Cascadia,Portland,Oregon,,White Nationalist,Yes,,2018,Y\n" +
    ",1011,Tyr 1 Security,Alexandria,Virginia,,White Nationalist,Yes,,2018,Y\n" +
    ",1012,Unity and Security for America,Charlottesville,Virginia,,White Nationalist,Yes,,2018,Y\n" +
    ",1014,VDARE Foundation,Warrenton,Virginia,VDARE,White Nationalist,Yes,,2018,Y\n" +
    ",1015,Washington Summit Publishers,Alexandria,Virginia,,White Nationalist,Yes,,2018,Y\n" +
    ",1016,WeSearchr,,California,WeSearchr,White Nationalist,Yes,Yes,2018,Y\n" +
    ",1017,Western Outlands Supply Company,Mesa,Arizona,,White Nationalist,Yes,,2018,Y\n" +
    ",1018,White Boy Society,,Illinois,,White Nationalist,Yes,Yes,2018,Y\n" +
    ",1019,White Boy Society,,Wisconsin,,White Nationalist,,Yes,2018,Y\n" +
    ",1020,White Rabbit Radio,Dearborn Heights,Michigan,,White Nationalist,Yes,,2018,Y\n";
