Skip to content
Features
Business
Explore
Marketplace
Pricing
This repository
Search
Sign in or Sign up
 Watch 1  Star 0  Fork 0 priyam10/Portfolio-Site
 Code  Issues 0  Pull requests 0  Projects 0 Insights 
Branch: master Find file Copy pathPortfolio-Site/css/materialize/css/materialize.css
aaf0add  on Jul 12
 priyam patel Added final version
0 contributors
RawBlameHistory     
8953 lines (7584 sloc)  159 KB
/*!
 * Materialize v0.98.2 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
.materialize-red {
  background-color: #e51c23 !important;
}

.materialize-red-text {
  color: #e51c23 !important;
}

.materialize-red.lighten-5 {
  background-color: #fdeaeb !important;
}

.materialize-red-text.text-lighten-5 {
  color: #fdeaeb !important;
}

.materialize-red.lighten-4 {
  background-color: #f8c1c3 !important;
}

.materialize-red-text.text-lighten-4 {
  color: #f8c1c3 !important;
}

.materialize-red.lighten-3 {
  background-color: #f3989b !important;
}

.materialize-red-text.text-lighten-3 {
  color: #f3989b !important;
}

.materialize-red.lighten-2 {
  background-color: #ee6e73 !important;
}

.materialize-red-text.text-lighten-2 {
  color: #ee6e73 !important;
}

.materialize-red.lighten-1 {
  background-color: #ea454b !important;
}

.materialize-red-text.text-lighten-1 {
  color: #ea454b !important;
}

.materialize-red.darken-1 {
  background-color: #d0181e !important;
}

.materialize-red-text.text-darken-1 {
  color: #d0181e !important;
}

.materialize-red.darken-2 {
  background-color: #b9151b !important;
}

.materialize-red-text.text-darken-2 {
  color: #b9151b !important;
}

.materialize-red.darken-3 {
  background-color: #a21318 !important;
}

.materialize-red-text.text-darken-3 {
  color: #a21318 !important;
}

.materialize-red.darken-4 {
  background-color: #8b1014 !important;
}

.materialize-red-text.text-darken-4 {
  color: #8b1014 !important;
}

.red {
  background-color: #F44336 !important;
}

.red-text {
  color: #F44336 !important;
}

.red.lighten-5 {
  background-color: #FFEBEE !important;
}

.red-text.text-lighten-5 {
  color: #FFEBEE !important;
}

.red.lighten-4 {
  background-color: #FFCDD2 !important;
}

.red-text.text-lighten-4 {
  color: #FFCDD2 !important;
}

.red.lighten-3 {
  background-color: #EF9A9A !important;
}

.red-text.text-lighten-3 {
  color: #EF9A9A !important;
}

.red.lighten-2 {
  background-color: #E57373 !important;
}

.red-text.text-lighten-2 {
  color: #E57373 !important;
}

.red.lighten-1 {
  background-color: #EF5350 !important;
}

.red-text.text-lighten-1 {
  color: #EF5350 !important;
}

.red.darken-1 {
  background-color: #E53935 !important;
}

.red-text.text-darken-1 {
  color: #E53935 !important;
}

.red.darken-2 {
  background-color: #D32F2F !important;
}

.red-text.text-darken-2 {
  color: #D32F2F !important;
}

.red.darken-3 {
  background-color: #C62828 !important;
}

.red-text.text-darken-3 {
  color: #C62828 !important;
}

.red.darken-4 {
  background-color: #B71C1C !important;
}

.red-text.text-darken-4 {
  color: #B71C1C !important;
}

.red.accent-1 {
  background-color: #FF8A80 !important;
}

.red-text.text-accent-1 {
  color: #FF8A80 !important;
}

.red.accent-2 {
  background-color: #FF5252 !important;
}

.red-text.text-accent-2 {
  color: #FF5252 !important;
}

.red.accent-3 {
  background-color: #FF1744 !important;
}

.red-text.text-accent-3 {
  color: #FF1744 !important;
}

.red.accent-4 {
  background-color: #D50000 !important;
}

.red-text.text-accent-4 {
  color: #D50000 !important;
}

.pink {
  background-color: #e91e63 !important;
}

.pink-text {
  color: #e91e63 !important;
}

.pink.lighten-5 {
  background-color: #fce4ec !important;
}

.pink-text.text-lighten-5 {
  color: #fce4ec !important;
}

.pink.lighten-4 {
  background-color: #f8bbd0 !important;
}

.pink-text.text-lighten-4 {
  color: #f8bbd0 !important;
}

.pink.lighten-3 {
  background-color: #f48fb1 !important;
}

.pink-text.text-lighten-3 {
  color: #f48fb1 !important;
}

.pink.lighten-2 {
  background-color: #f06292 !important;
}

.pink-text.text-lighten-2 {
  color: #f06292 !important;
}

.pink.lighten-1 {
  background-color: #ec407a !important;
}

.pink-text.text-lighten-1 {
  color: #ec407a !important;
}

.pink.darken-1 {
  background-color: #d81b60 !important;
}

.pink-text.text-darken-1 {
  color: #d81b60 !important;
}

.pink.darken-2 {
  background-color: #c2185b !important;
}

.pink-text.text-darken-2 {
  color: #c2185b !important;
}

.pink.darken-3 {
  background-color: #ad1457 !important;
}

.pink-text.text-darken-3 {
  color: #ad1457 !important;
}

.pink.darken-4 {
  background-color: #880e4f !important;
}

.pink-text.text-darken-4 {
  color: #880e4f !important;
}

.pink.accent-1 {
  background-color: #ff80ab !important;
}

.pink-text.text-accent-1 {
  color: #ff80ab !important;
}

.pink.accent-2 {
  background-color: #ff4081 !important;
}

.pink-text.text-accent-2 {
  color: #ff4081 !important;
}

.pink.accent-3 {
  background-color: #f50057 !important;
}

.pink-text.text-accent-3 {
  color: #f50057 !important;
}

.pink.accent-4 {
  background-color: #c51162 !important;
}

.pink-text.text-accent-4 {
  color: #c51162 !important;
}

.purple {
  background-color: #9c27b0 !important;
}

.purple-text {
  color: #9c27b0 !important;
}

.purple.lighten-5 {
  background-color: #f3e5f5 !important;
}

.purple-text.text-lighten-5 {
  color: #f3e5f5 !important;
}

.purple.lighten-4 {
  background-color: #e1bee7 !important;
}

.purple-text.text-lighten-4 {
  color: #e1bee7 !important;
}

.purple.lighten-3 {
  background-color: #ce93d8 !important;
}

.purple-text.text-lighten-3 {
  color: #ce93d8 !important;
}

.purple.lighten-2 {
  background-color: #ba68c8 !important;
}

.purple-text.text-lighten-2 {
  color: #ba68c8 !important;
}

.purple.lighten-1 {
  background-color: #ab47bc !important;
}

.purple-text.text-lighten-1 {
  color: #ab47bc !important;
}

.purple.darken-1 {
  background-color: #8e24aa !important;
}

.purple-text.text-darken-1 {
  color: #8e24aa !important;
}

.purple.darken-2 {
  background-color: #7b1fa2 !important;
}

.purple-text.text-darken-2 {
  color: #7b1fa2 !important;
}

.purple.darken-3 {
  background-color: #6a1b9a !important;
}

.purple-text.text-darken-3 {
  color: #6a1b9a !important;
}

.purple.darken-4 {
  background-color: #4a148c !important;
}

.purple-text.text-darken-4 {
  color: #4a148c !important;
}

.purple.accent-1 {
  background-color: #ea80fc !important;
}

.purple-text.text-accent-1 {
  color: #ea80fc !important;
}

.purple.accent-2 {
  background-color: #e040fb !important;
}

.purple-text.text-accent-2 {
  color: #e040fb !important;
}

.purple.accent-3 {
  background-color: #d500f9 !important;
}

.purple-text.text-accent-3 {
  color: #d500f9 !important;
}

.purple.accent-4 {
  background-color: #aa00ff !important;
}

.purple-text.text-accent-4 {
  color: #aa00ff !important;
}

.deep-purple {
  background-color: #673ab7 !important;
}

.deep-purple-text {
  color: #673ab7 !important;
}

.deep-purple.lighten-5 {
  background-color: #ede7f6 !important;
}

.deep-purple-text.text-lighten-5 {
  color: #ede7f6 !important;
}

.deep-purple.lighten-4 {
  background-color: #d1c4e9 !important;
}

.deep-purple-text.text-lighten-4 {
  color: #d1c4e9 !important;
}

.deep-purple.lighten-3 {
  background-color: #b39ddb !important;
}

.deep-purple-text.text-lighten-3 {
  color: #b39ddb !important;
}

.deep-purple.lighten-2 {
  background-color: #9575cd !important;
}

.deep-purple-text.text-lighten-2 {
  color: #9575cd !important;
}

.deep-purple.lighten-1 {
  background-color: #7e57c2 !important;
}

.deep-purple-text.text-lighten-1 {
  color: #7e57c2 !important;
}

.deep-purple.darken-1 {
  background-color: #5e35b1 !important;
}

.deep-purple-text.text-darken-1 {
  color: #5e35b1 !important;
}

.deep-purple.darken-2 {
  background-color: #512da8 !important;
}

.deep-purple-text.text-darken-2 {
  color: #512da8 !important;
}

.deep-purple.darken-3 {
  background-color: #4527a0 !important;
}

.deep-purple-text.text-darken-3 {
  color: #4527a0 !important;
}

.deep-purple.darken-4 {
  background-color: #311b92 !important;
}

.deep-purple-text.text-darken-4 {
  color: #311b92 !important;
}

.deep-purple.accent-1 {
  background-color: #b388ff !important;
}

.deep-purple-text.text-accent-1 {
  color: #b388ff !important;
}

.deep-purple.accent-2 {
  background-color: #7c4dff !important;
}

.deep-purple-text.text-accent-2 {
  color: #7c4dff !important;
}

.deep-purple.accent-3 {
  background-color: #651fff !important;
}

.deep-purple-text.text-accent-3 {
  color: #651fff !important;
}

.deep-purple.accent-4 {
  background-color: #6200ea !important;
}

.deep-purple-text.text-accent-4 {
  color: #6200ea !important;
}

.indigo {
  background-color: #3f51b5 !important;
}

.indigo-text {
  color: #3f51b5 !important;
}

.indigo.lighten-5 {
  background-color: #e8eaf6 !important;
}

.indigo-text.text-lighten-5 {
  color: #e8eaf6 !important;
}

.indigo.lighten-4 {
  background-color: #c5cae9 !important;
}

.indigo-text.text-lighten-4 {
  color: #c5cae9 !important;
}

.indigo.lighten-3 {
  background-color: #9fa8da !important;
}

.indigo-text.text-lighten-3 {
  color: #9fa8da !important;
}

.indigo.lighten-2 {
  background-color: #7986cb !important;
}

.indigo-text.text-lighten-2 {
  color: #7986cb !important;
}

.indigo.lighten-1 {
  background-color: #5c6bc0 !important;
}

.indigo-text.text-lighten-1 {
  color: #5c6bc0 !important;
}

.indigo.darken-1 {
  background-color: #3949ab !important;
}

.indigo-text.text-darken-1 {
  color: #3949ab !important;
}

.indigo.darken-2 {
  background-color: #303f9f !important;
}

.indigo-text.text-darken-2 {
  color: #303f9f !important;
}

.indigo.darken-3 {
  background-color: #283593 !important;
}

.indigo-text.text-darken-3 {
  color: #283593 !important;
}

.indigo.darken-4 {
  background-color: #1a237e !important;
}

.indigo-text.text-darken-4 {
  color: #1a237e !important;
}

.indigo.accent-1 {
  background-color: #8c9eff !important;
}

.indigo-text.text-accent-1 {
  color: #8c9eff !important;
}

.indigo.accent-2 {
  background-color: #536dfe !important;
}

.indigo-text.text-accent-2 {
  color: #536dfe !important;
}

.indigo.accent-3 {
  background-color: #3d5afe !important;
}

.indigo-text.text-accent-3 {
  color: #3d5afe !important;
}

.indigo.accent-4 {
  background-color: #304ffe !important;
}

.indigo-text.text-accent-4 {
  color: #304ffe !important;
}

.blue {
  background-color: #2196F3 !important;
}

.blue-text {
  color: #2196F3 !important;
}

.blue.lighten-5 {
  background-color: #E3F2FD !important;
}

.blue-text.text-lighten-5 {
  color: #E3F2FD !important;
}

.blue.lighten-4 {
  background-color: #BBDEFB !important;
}

.blue-text.text-lighten-4 {
  color: #BBDEFB !important;
}

.blue.lighten-3 {
  background-color: #90CAF9 !important;
}

.blue-text.text-lighten-3 {
  color: #90CAF9 !important;
}

.blue.lighten-2 {
  background-color: #64B5F6 !important;
}

.blue-text.text-lighten-2 {
  color: #64B5F6 !important;
}

.blue.lighten-1 {
  background-color: #42A5F5 !important;
}

.blue-text.text-lighten-1 {
  color: #42A5F5 !important;
}

.blue.darken-1 {
  background-color: #1E88E5 !important;
}

.blue-text.text-darken-1 {
  color: #1E88E5 !important;
}

.blue.darken-2 {
  background-color: #1976D2 !important;
}

.blue-text.text-darken-2 {
  color: #1976D2 !important;
}

.blue.darken-3 {
  background-color: #1565C0 !important;
}

.blue-text.text-darken-3 {
  color: #1565C0 !important;
}

.blue.darken-4 {
  background-color: #0D47A1 !important;
}

.blue-text.text-darken-4 {
  color: #0D47A1 !important;
}

.blue.accent-1 {
  background-color: #82B1FF !important;
}

.blue-text.text-accent-1 {
  color: #82B1FF !important;
}

.blue.accent-2 {
  background-color: #448AFF !important;
}

.blue-text.text-accent-2 {
  color: #448AFF !important;
}

.blue.accent-3 {
  background-color: #2979FF !important;
}

.blue-text.text-accent-3 {
  color: #2979FF !important;
}

.blue.accent-4 {
  background-color: #2962FF !important;
}

.blue-text.text-accent-4 {
  color: #2962FF !important;
}

.light-blue {
  background-color: #03a9f4 !important;
}

.light-blue-text {
  color: #03a9f4 !important;
}

.light-blue.lighten-5 {
  background-color: #e1f5fe !important;
}

.light-blue-text.text-lighten-5 {
  color: #e1f5fe !important;
}

.light-blue.lighten-4 {
  background-color: #b3e5fc !important;
}

.light-blue-text.text-lighten-4 {
  color: #b3e5fc !important;
}

.light-blue.lighten-3 {
  background-color: #81d4fa !important;
}

.light-blue-text.text-lighten-3 {
  color: #81d4fa !important;
}

.light-blue.lighten-2 {
  background-color: #4fc3f7 !important;
}

.light-blue-text.text-lighten-2 {
  color: #4fc3f7 !important;
}

.light-blue.lighten-1 {
  background-color: #29b6f6 !important;
}

.light-blue-text.text-lighten-1 {
  color: #29b6f6 !important;
}

.light-blue.darken-1 {
  background-color: #039be5 !important;
}

.light-blue-text.text-darken-1 {
  color: #039be5 !important;
}

.light-blue.darken-2 {
  background-color: #0288d1 !important;
}

.light-blue-text.text-darken-2 {
  color: #0288d1 !important;
}

.light-blue.darken-3 {
  background-color: #0277bd !important;
}

.light-blue-text.text-darken-3 {
  color: #0277bd !important;
}

.light-blue.darken-4 {
  background-color: #01579b !important;
}

.light-blue-text.text-darken-4 {
  color: #01579b !important;
}

.light-blue.accent-1 {
  background-color: #80d8ff !important;
}

.light-blue-text.text-accent-1 {
  color: #80d8ff !important;
}

.light-blue.accent-2 {
  background-color: #40c4ff !important;
}

.light-blue-text.text-accent-2 {
  color: #40c4ff !important;
}

.light-blue.accent-3 {
  background-color: #00b0ff !important;
}

.light-blue-text.text-accent-3 {
  color: #00b0ff !important;
}

.light-blue.accent-4 {
  background-color: #0091ea !important;
}

.light-blue-text.text-accent-4 {
  color: #0091ea !important;
}

.cyan {
  background-color: #00bcd4 !important;
}

.cyan-text {
  color: #00bcd4 !important;
}

.cyan.lighten-5 {
  background-color: #e0f7fa !important;
}

.cyan-text.text-lighten-5 {
  color: #e0f7fa !important;
}

.cyan.lighten-4 {
  background-color: #b2ebf2 !important;
}

.cyan-text.text-lighten-4 {
  color: #b2ebf2 !important;
}

.cyan.lighten-3 {
  background-color: #80deea !important;
}

.cyan-text.text-lighten-3 {
  color: #80deea !important;
}

.cyan.lighten-2 {
  background-color: #4dd0e1 !important;
}

.cyan-text.text-lighten-2 {
  color: #4dd0e1 !important;
}

.cyan.lighten-1 {
  background-color: #26c6da !important;
}

.cyan-text.text-lighten-1 {
  color: #26c6da !important;
}

.cyan.darken-1 {
  background-color: #00acc1 !important;
}

.cyan-text.text-darken-1 {
  color: #00acc1 !important;
}

.cyan.darken-2 {
  background-color: #0097a7 !important;
}

.cyan-text.text-darken-2 {
  color: #0097a7 !important;
}

.cyan.darken-3 {
  background-color: #00838f !important;
}

.cyan-text.text-darken-3 {
  color: #00838f !important;
}

.cyan.darken-4 {
  background-color: #006064 !important;
}

.cyan-text.text-darken-4 {
  color: #006064 !important;
}

.cyan.accent-1 {
  background-color: #84ffff !important;
}

.cyan-text.text-accent-1 {
  color: #84ffff !important;
}

.cyan.accent-2 {
  background-color: #18ffff !important;
}

.cyan-text.text-accent-2 {
  color: #18ffff !important;
}

.cyan.accent-3 {
  background-color: #00e5ff !important;
}

.cyan-text.text-accent-3 {
  color: #00e5ff !important;
}

.cyan.accent-4 {
  background-color: #00b8d4 !important;
}

.cyan-text.text-accent-4 {
  color: #00b8d4 !important;
}

.teal {
  background-color: #009688 !important;
}

.teal-text {
  color: #009688 !important;
}

.teal.lighten-5 {
  background-color: #e0f2f1 !important;
}

.teal-text.text-lighten-5 {
  color: #e0f2f1 !important;
}

.teal.lighten-4 {
  background-color: #b2dfdb !important;
}

.teal-text.text-lighten-4 {
  color: #b2dfdb !important;
}

.teal.lighten-3 {
  background-color: #80cbc4 !important;
}

.teal-text.text-lighten-3 {
  color: #80cbc4 !important;
}

.teal.lighten-2 {
  background-color: #4db6ac !important;
}

.teal-text.text-lighten-2 {
  color: #4db6ac !important;
}

.teal.lighten-1 {
  background-color: #26a69a !important;
}

.teal-text.text-lighten-1 {
  color: #26a69a !important;
}

.teal.darken-1 {
  background-color: #00897b !important;
}

.teal-text.text-darken-1 {
  color: #00897b !important;
}

.teal.darken-2 {
  background-color: #00796b !important;
}

.teal-text.text-darken-2 {
  color: #00796b !important;
}

.teal.darken-3 {
  background-color: #00695c !important;
}

.teal-text.text-darken-3 {
  color: #00695c !important;
}

.teal.darken-4 {
  background-color: #004d40 !important;
}

.teal-text.text-darken-4 {
  color: #004d40 !important;
}

.teal.accent-1 {
  background-color: #a7ffeb !important;
}

.teal-text.text-accent-1 {
  color: #a7ffeb !important;
}

.teal.accent-2 {
  background-color: #64ffda !important;
}

.teal-text.text-accent-2 {
  color: #64ffda !important;
}

.teal.accent-3 {
  background-color: #1de9b6 !important;
}

.teal-text.text-accent-3 {
  color: #1de9b6 !important;
}

.teal.accent-4 {
  background-color: #00bfa5 !important;
}

.teal-text.text-accent-4 {
  color: #00bfa5 !important;
}

.green {
  background-color: #4CAF50 !important;
}

.green-text {
  color: #4CAF50 !important;
}

.green.lighten-5 {
  background-color: #E8F5E9 !important;
}

.green-text.text-lighten-5 {
  color: #E8F5E9 !important;
}

.green.lighten-4 {
  background-color: #C8E6C9 !important;
}

.green-text.text-lighten-4 {
  color: #C8E6C9 !important;
}

.green.lighten-3 {
  background-color: #A5D6A7 !important;
}

.green-text.text-lighten-3 {
  color: #A5D6A7 !important;
}

.green.lighten-2 {
  background-color: #81C784 !important;
}

.green-text.text-lighten-2 {
  color: #81C784 !important;
}

.green.lighten-1 {
  background-color: #66BB6A !important;
}

.green-text.text-lighten-1 {
  color: #66BB6A !important;
}

.green.darken-1 {
  background-color: #43A047 !important;
}

.green-text.text-darken-1 {
  color: #43A047 !important;
}

.green.darken-2 {
  background-color: #388E3C !important;
}

.green-text.text-darken-2 {
  color: #388E3C !important;
}

.green.darken-3 {
  background-color: #2E7D32 !important;
}

.green-text.text-darken-3 {
  color: #2E7D32 !important;
}

.green.darken-4 {
  background-color: #1B5E20 !important;
}

.green-text.text-darken-4 {
  color: #1B5E20 !important;
}

.green.accent-1 {
  background-color: #B9F6CA !important;
}

.green-text.text-accent-1 {
  color: #B9F6CA !important;
}

.green.accent-2 {
  background-color: #69F0AE !important;
}

.green-text.text-accent-2 {
  color: #69F0AE !important;
}

.green.accent-3 {
  background-color: #00E676 !important;
}

.green-text.text-accent-3 {
  color: #00E676 !important;
}

.green.accent-4 {
  background-color: #00C853 !important;
}

.green-text.text-accent-4 {
  color: #00C853 !important;
}

.light-green {
  background-color: #8bc34a !important;
}

.light-green-text {
  color: #8bc34a !important;
}

.light-green.lighten-5 {
  background-color: #f1f8e9 !important;
}

.light-green-text.text-lighten-5 {
  color: #f1f8e9 !important;
}

.light-green.lighten-4 {
  background-color: #dcedc8 !important;
}

.light-green-text.text-lighten-4 {
  color: #dcedc8 !important;
}

.light-green.lighten-3 {
  background-color: #c5e1a5 !important;
}

.light-green-text.text-lighten-3 {
  color: #c5e1a5 !important;
}

.light-green.lighten-2 {
  background-color: #aed581 !important;
}

.light-green-text.text-lighten-2 {
  color: #aed581 !important;
}

.light-green.lighten-1 {
  background-color: #9ccc65 !important;
}

.light-green-text.text-lighten-1 {
  color: #9ccc65 !important;
}

.light-green.darken-1 {
  background-color: #7cb342 !important;
}

.light-green-text.text-darken-1 {
  color: #7cb342 !important;
}

.light-green.darken-2 {
  background-color: #689f38 !important;
}

.light-green-text.text-darken-2 {
  color: #689f38 !important;
}

.light-green.darken-3 {
  background-color: #558b2f !important;
}

.light-green-text.text-darken-3 {
  color: #558b2f !important;
}

.light-green.darken-4 {
  background-color: #33691e !important;
}

.light-green-text.text-darken-4 {
  color: #33691e !important;
}

.light-green.accent-1 {
  background-color: #ccff90 !important;
}

.light-green-text.text-accent-1 {
  color: #ccff90 !important;
}

.light-green.accent-2 {
  background-color: #b2ff59 !important;
}

.light-green-text.text-accent-2 {
  color: #b2ff59 !important;
}

.light-green.accent-3 {
  background-color: #76ff03 !important;
}

.light-green-text.text-accent-3 {
  color: #76ff03 !important;
}

.light-green.accent-4 {
  background-color: #64dd17 !important;
}

.light-green-text.text-accent-4 {
  color: #64dd17 !important;
}

.lime {
  background-color: #cddc39 !important;
}

.lime-text {
  color: #cddc39 !important;
}

.lime.lighten-5 {
  background-color: #f9fbe7 !important;
}

.lime-text.text-lighten-5 {
  color: #f9fbe7 !important;
}

.lime.lighten-4 {
  background-color: #f0f4c3 !important;
}

.lime-text.text-lighten-4 {
  color: #f0f4c3 !important;
}

.lime.lighten-3 {
  background-color: #e6ee9c !important;
}

.lime-text.text-lighten-3 {
  color: #e6ee9c !important;
}

.lime.lighten-2 {
  background-color: #dce775 !important;
}

.lime-text.text-lighten-2 {
  color: #dce775 !important;
}

.lime.lighten-1 {
  background-color: #d4e157 !important;
}

.lime-text.text-lighten-1 {
  color: #d4e157 !important;
}

.lime.darken-1 {
  background-color: #c0ca33 !important;
}

.lime-text.text-darken-1 {
  color: #c0ca33 !important;
}

.lime.darken-2 {
  background-color: #afb42b !important;
}

.lime-text.text-darken-2 {
  color: #afb42b !important;
}

.lime.darken-3 {
  background-color: #9e9d24 !important;
}

.lime-text.text-darken-3 {
  color: #9e9d24 !important;
}

.lime.darken-4 {
  background-color: #827717 !important;
}

.lime-text.text-darken-4 {
  color: #827717 !important;
}

.lime.accent-1 {
  background-color: #f4ff81 !important;
}

.lime-text.text-accent-1 {
  color: #f4ff81 !important;
}

.lime.accent-2 {
  background-color: #eeff41 !important;
}

.lime-text.text-accent-2 {
  color: #eeff41 !important;
}

.lime.accent-3 {
  background-color: #c6ff00 !important;
}

.lime-text.text-accent-3 {
  color: #c6ff00 !important;
}

.lime.accent-4 {
  background-color: #aeea00 !important;
}

.lime-text.text-accent-4 {
  color: #aeea00 !important;
}

.yellow {
  background-color: #ffeb3b !important;
}

.yellow-text {
  color: #ffeb3b !important;
}

.yellow.lighten-5 {
  background-color: #fffde7 !important;
}

.yellow-text.text-lighten-5 {
  color: #fffde7 !important;
}

.yellow.lighten-4 {
  background-color: #fff9c4 !important;
}

.yellow-text.text-lighten-4 {
  color: #fff9c4 !important;
}

.yellow.lighten-3 {
  background-color: #fff59d !important;
}

.yellow-text.text-lighten-3 {
  color: #fff59d !important;
}

.yellow.lighten-2 {
  background-color: #fff176 !important;
}

.yellow-text.text-lighten-2 {
  color: #fff176 !important;
}

.yellow.lighten-1 {
  background-color: #ffee58 !important;
}

.yellow-text.text-lighten-1 {
  color: #ffee58 !important;
}

.yellow.darken-1 {
  background-color: #fdd835 !important;
}

.yellow-text.text-darken-1 {
  color: #fdd835 !important;
}

.yellow.darken-2 {
  background-color: #fbc02d !important;
}

.yellow-text.text-darken-2 {
  color: #fbc02d !important;
}

.yellow.darken-3 {
  background-color: #f9a825 !important;
}

.yellow-text.text-darken-3 {
  color: #f9a825 !important;
}

.yellow.darken-4 {
  background-color: #f57f17 !important;
}

.yellow-text.text-darken-4 {
  color: #f57f17 !important;
}

.yellow.accent-1 {
  background-color: #ffff8d !important;
}

.yellow-text.text-accent-1 {
  color: #ffff8d !important;
}

.yellow.accent-2 {
  background-color: #ffff00 !important;
}

.yellow-text.text-accent-2 {
  color: #ffff00 !important;
}

.yellow.accent-3 {
  background-color: #ffea00 !important;
}

.yellow-text.text-accent-3 {
  color: #ffea00 !important;
}

.yellow.accent-4 {
  background-color: #ffd600 !important;
}

.yellow-text.text-accent-4 {
  color: #ffd600 !important;
}

.amber {
  background-color: #ffc107 !important;
}

.amber-text {
  color: #ffc107 !important;
}

.amber.lighten-5 {
  background-color: #fff8e1 !important;
}

.amber-text.text-lighten-5 {
  color: #fff8e1 !important;
}

.amber.lighten-4 {
  background-color: #ffecb3 !important;
}

.amber-text.text-lighten-4 {
  color: #ffecb3 !important;
}

.amber.lighten-3 {
  background-color: #ffe082 !important;
}

.amber-text.text-lighten-3 {
  color: #ffe082 !important;
}

.amber.lighten-2 {
  background-color: #ffd54f !important;
}

.amber-text.text-lighten-2 {
  color: #ffd54f !important;
}

.amber.lighten-1 {
  background-color: #ffca28 !important;
}

.amber-text.text-lighten-1 {
  color: #ffca28 !important;
}

.amber.darken-1 {
  background-color: #ffb300 !important;
}

.amber-text.text-darken-1 {
  color: #ffb300 !important;
}

.amber.darken-2 {
  background-color: #ffa000 !important;
}

.amber-text.text-darken-2 {
  color: #ffa000 !important;
}

.amber.darken-3 {
  background-color: #ff8f00 !important;
}

.amber-text.text-darken-3 {
  color: #ff8f00 !important;
}

.amber.darken-4 {
  background-color: #ff6f00 !important;
}

.amber-text.text-darken-4 {
  color: #ff6f00 !important;
}

.amber.accent-1 {
  background-color: #ffe57f !important;
}

.amber-text.text-accent-1 {
  color: #ffe57f !important;
}

.amber.accent-2 {
  background-color: #ffd740 !important;
}

.amber-text.text-accent-2 {
  color: #ffd740 !important;
}

.amber.accent-3 {
  background-color: #ffc400 !important;
}

.amber-text.text-accent-3 {
  color: #ffc400 !important;
}

.amber.accent-4 {
  background-color: #ffab00 !important;
}

.amber-text.text-accent-4 {
  color: #ffab00 !important;
}

.orange {
  background-color: #ff9800 !important;
}

.orange-text {
  color: #ff9800 !important;
}

.orange.lighten-5 {
  background-color: #fff3e0 !important;
}

.orange-text.text-lighten-5 {
  color: #fff3e0 !important;
}

.orange.lighten-4 {
  background-color: #ffe0b2 !important;
}

.orange-text.text-lighten-4 {
  color: #ffe0b2 !important;
}

.orange.lighten-3 {
  background-color: #ffcc80 !important;
}

.orange-text.text-lighten-3 {
  color: #ffcc80 !important;
}

.orange.lighten-2 {
  background-color: #ffb74d !important;
}

.orange-text.text-lighten-2 {
  color: #ffb74d !important;
}

.orange.lighten-1 {
  background-color: #ffa726 !important;
}

.orange-text.text-lighten-1 {
  color: #ffa726 !important;
}

.orange.darken-1 {
  background-color: #fb8c00 !important;
}

.orange-text.text-darken-1 {
  color: #fb8c00 !important;
}

.orange.darken-2 {
  background-color: #f57c00 !important;
}

.orange-text.text-darken-2 {
  color: #f57c00 !important;
}

.orange.darken-3 {
  background-color: #ef6c00 !important;
}

.orange-text.text-darken-3 {
  color: #ef6c00 !important;
}

.orange.darken-4 {
  background-color: #e65100 !important;
}

.orange-text.text-darken-4 {
  color: #e65100 !important;
}

.orange.accent-1 {
  background-color: #ffd180 !important;
}

.orange-text.text-accent-1 {
  color: #ffd180 !important;
}

.orange.accent-2 {
  background-color: #ffab40 !important;
}

.orange-text.text-accent-2 {
  color: #ffab40 !important;
}

.orange.accent-3 {
  background-color: #ff9100 !important;
}

.orange-text.text-accent-3 {
  color: #ff9100 !important;
}

.orange.accent-4 {
  background-color: #ff6d00 !important;
}

.orange-text.text-accent-4 {
  color: #ff6d00 !important;
}

.deep-orange {
  background-color: #ff5722 !important;
}

.deep-orange-text {
  color: #ff5722 !important;
}

.deep-orange.lighten-5 {
  background-color: #fbe9e7 !important;
}

.deep-orange-text.text-lighten-5 {
  color: #fbe9e7 !important;
}

.deep-orange.lighten-4 {
  background-color: #ffccbc !important;
}

.deep-orange-text.text-lighten-4 {
  color: #ffccbc !important;
}

.deep-orange.lighten-3 {
  background-color: #ffab91 !important;
}

.deep-orange-text.text-lighten-3 {
  color: #ffab91 !important;
}

.deep-orange.lighten-2 {
  background-color: #ff8a65 !important;
}

.deep-orange-text.text-lighten-2 {
  color: #ff8a65 !important;
}

.deep-orange.lighten-1 {
  background-color: #ff7043 !important;
}

.deep-orange-text.text-lighten-1 {
  color: #ff7043 !important;
}

.deep-orange.darken-1 {
  background-color: #f4511e !important;
}

.deep-orange-text.text-darken-1 {
  color: #f4511e !important;
}

.deep-orange.darken-2 {
  background-color: #e64a19 !important;
}

.deep-orange-text.text-darken-2 {
  color: #e64a19 !important;
}

.deep-orange.darken-3 {
  background-color: #d84315 !important;
}

.deep-orange-text.text-darken-3 {
  color: #d84315 !important;
}

.deep-orange.darken-4 {
  background-color: #bf360c !important;
}

.deep-orange-text.text-darken-4 {
  color: #bf360c !important;
}

.deep-orange.accent-1 {
  background-color: #ff9e80 !important;
}

.deep-orange-text.text-accent-1 {
  color: #ff9e80 !important;
}

.deep-orange.accent-2 {
  background-color: #ff6e40 !important;
}

.deep-orange-text.text-accent-2 {
  color: #ff6e40 !important;
}

.deep-orange.accent-3 {
  background-color: #ff3d00 !important;
}

.deep-orange-text.text-accent-3 {
  color: #ff3d00 !important;
}

.deep-orange.accent-4 {
  background-color: #dd2c00 !important;
}

.deep-orange-text.text-accent-4 {
  color: #dd2c00 !important;
}

.brown {
  background-color: #795548 !important;
}

.brown-text {
  color: #795548 !important;
}

.brown.lighten-5 {
  background-color: #efebe9 !important;
}

.brown-text.text-lighten-5 {
  color: #efebe9 !important;
}

.brown.lighten-4 {
  background-color: #d7ccc8 !important;
}

.brown-text.text-lighten-4 {
  color: #d7ccc8 !important;
}

.brown.lighten-3 {
  background-color: #bcaaa4 !important;
}

.brown-text.text-lighten-3 {
  color: #bcaaa4 !important;
}

.brown.lighten-2 {
  background-color: #a1887f !important;
}

.brown-text.text-lighten-2 {
  color: #a1887f !important;
}

.brown.lighten-1 {
  background-color: #8d6e63 !important;
}

.brown-text.text-lighten-1 {
  color: #8d6e63 !important;
}

.brown.darken-1 {
  background-color: #6d4c41 !important;
}

.brown-text.text-darken-1 {
  color: #6d4c41 !important;
}

.brown.darken-2 {
  background-color: #5d4037 !important;
}

.brown-text.text-darken-2 {
  color: #5d4037 !important;
}

.brown.darken-3 {
  background-color: #4e342e !important;
}

.brown-text.text-darken-3 {
  color: #4e342e !important;
}

.brown.darken-4 {
  background-color: #3e2723 !important;
}

.brown-text.text-darken-4 {
  color: #3e2723 !important;
}

.blue-grey {
  background-color: #607d8b !important;
}

.blue-grey-text {
  color: #607d8b !important;
}

.blue-grey.lighten-5 {
  background-color: #eceff1 !important;
}

.blue-grey-text.text-lighten-5 {
  color: #eceff1 !important;
}

.blue-grey.lighten-4 {
  background-color: #cfd8dc !important;
}

.blue-grey-text.text-lighten-4 {
  color: #cfd8dc !important;
}

.blue-grey.lighten-3 {
  background-color: #b0bec5 !important;
}

.blue-grey-text.text-lighten-3 {
  color: #b0bec5 !important;
}

.blue-grey.lighten-2 {
  background-color: #90a4ae !important;
}

.blue-grey-text.text-lighten-2 {
  color: #90a4ae !important;
}

.blue-grey.lighten-1 {
  background-color: #78909c !important;
}

.blue-grey-text.text-lighten-1 {
  color: #78909c !important;
}

.blue-grey.darken-1 {
  background-color: #546e7a !important;
}

.blue-grey-text.text-darken-1 {
  color: #546e7a !important;
}

.blue-grey.darken-2 {
  background-color: #455a64 !important;
}

.blue-grey-text.text-darken-2 {
  color: #455a64 !important;
}

.blue-grey.darken-3 {
  background-color: #37474f !important;
}

.blue-grey-text.text-darken-3 {
  color: #37474f !important;
}

.blue-grey.darken-4 {
  background-color: #263238 !important;
}

.blue-grey-text.text-darken-4 {
  color: #263238 !important;
}

.grey {
  background-color: #9e9e9e !important;
}

.grey-text {
  color: #9e9e9e !important;
}

.grey.lighten-5 {
  background-color: #fafafa !important;
}

.grey-text.text-lighten-5 {
  color: #fafafa !important;
}

.grey.lighten-4 {
  background-color: #f5f5f5 !important;
}

.grey-text.text-lighten-4 {
  color: #f5f5f5 !important;
}

.grey.lighten-3 {
  background-color: #eeeeee !important;
}

.grey-text.text-lighten-3 {
  color: #eeeeee !important;
}

.grey.lighten-2 {
  background-color: #e0e0e0 !important;
}

.grey-text.text-lighten-2 {
  color: #e0e0e0 !important;
}

.grey.lighten-1 {
  background-color: #bdbdbd !important;
}

.grey-text.text-lighten-1 {
  color: #bdbdbd !important;
}

.grey.darken-1 {
  background-color: #757575 !important;
}

.grey-text.text-darken-1 {
  color: #757575 !important;
}

.grey.darken-2 {
  background-color: #616161 !important;
}

.grey-text.text-darken-2 {
  color: #616161 !important;
}

.grey.darken-3 {
  background-color: #424242 !important;
}

.grey-text.text-darken-3 {
  color: #424242 !important;
}

.grey.darken-4 {
  background-color: #212121 !important;
}

.grey-text.text-darken-4 {
  color: #212121 !important;
}

.black {
  background-color: #000000 !important;
}

.black-text {
  color: #000000 !important;
}

.white {
  background-color: #FFFFFF !important;
}

.white-text {
  color: #FFFFFF !important;
}

.transparent {
  background-color: transparent !important;
}

.transparent-text {
  color: transparent !important;
}

/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS and IE text size adjust after device orientation change,
 *    without disabling user zoom.
 */
html {
  font-family: sans-serif;
  /* 1 */
  -ms-text-size-adjust: 100%;
  /* 2 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/**
 * Remove default margin.
 */
body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */
/**
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11
 * and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
 */
audio,
canvas,
progress,
video {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
 */
[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */
/**
 * Remove the gray background color from active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * Improve readability of focused elements when they are also in an
 * active/hover state.
 */
a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */
/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */
abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
 */
b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */
dfn {
  font-style: italic;
}

/**
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */
mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove border when inside `a` element in IE 8/9/10.
 */
img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */
svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */
/**
 * Address margin not present in IE 8/9 and Safari.
 */
figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */
hr {
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */
pre {
  overflow: auto;
}

/**
 * Address odd `em`-unit font size rendering in all browsers.
 */
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */
/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
 */
/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  /* 1 */
  font: inherit;
  /* 2 */
  margin: 0;
  /* 3 */
}

/**
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
 */
button {
  overflow: visible;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
 */
button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 */
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  /* 2 */
  cursor: pointer;
  /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */
button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */
input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.
 */
input[type="search"] {
  -webkit-appearance: textfield;
  /* 1 */
  box-sizing: content-box;
  /* 2 */
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
 */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */
legend {
  border: 0;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */
textarea {
  overflow: auto;
}

/**
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */
optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */
/**
 * Remove most spacing between table cells.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

ul:not(.browser-default) {
  padding-left: 0;
  list-style-type: none;
}

ul:not(.browser-default) li {
  list-style-type: none;
}

a {
  color: #039be5;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.valign-wrapper {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.clearfix {
  clear: both;
}

.z-depth-0 {
  box-shadow: none !important;
}

.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}

.z-depth-2 {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

.z-depth-3 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
}

.z-depth-4, .modal {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
}

.z-depth-5 {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
}

.hoverable {
  transition: box-shadow .25s;
  box-shadow: 0;
}

.hoverable:hover {
  transition: box-shadow .25s;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.divider {
  height: 1px;
  overflow: hidden;
  background-color: #e0e0e0;
}

blockquote {
  margin: 20px 0;
  padding-left: 1.5rem;
  border-left: 5px solid #ee6e73;
}

i {
  line-height: inherit;
}

i.left {
  float: left;
  margin-right: 15px;
}

i.right {
  float: right;
  margin-left: 15px;
}

i.tiny {
  font-size: 1rem;
}

i.small {
  font-size: 2rem;
}

i.medium {
  font-size: 4rem;
}

i.large {
  font-size: 6rem;
}

img.responsive-img,
video.responsive-video {
  max-width: 100%;
  height: auto;
}

.pagination li {
  display: inline-block;
  border-radius: 2px;
  text-align: center;
  vertical-align: top;
  height: 30px;
}

.pagination li a {
  color: #444;
  display: inline-block;
  font-size: 1.2rem;
  padding: 0 10px;
  line-height: 30px;
}

.pagination li.active a {
  color: #fff;
}

.pagination li.active {
  background-color: #ee6e73;
}

.pagination li.disabled a {
  cursor: default;
  color: #999;
}

.pagination li i {
  font-size: 2rem;
}

.pagination li.pages ul li {
  display: inline-block;
  float: none;
}

@media only screen and (max-width: 992px) {
  .pagination {
    width: 100%;
  }
  .pagination li.prev,
  .pagination li.next {
    width: 10%;
  }
  .pagination li.pages {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
  }
}

.breadcrumb {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb i,
.breadcrumb [class^="mdi-"], .breadcrumb [class*="mdi-"],
.breadcrumb i.material-icons {
  display: inline-block;
  float: left;
  font-size: 24px;
}

.breadcrumb:before {
  content: '\E5CC';
  color: rgba(255, 255, 255, 0.7);
  vertical-align: top;
  display: inline-block;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin: 0 10px 0 8px;
  -webkit-font-smoothing: antialiased;
}

.breadcrumb:first-child:before {
  display: none;
}

.breadcrumb:last-child {
  color: #fff;
}

.parallax-container {
  position: relative;
  overflow: hidden;
  height: 500px;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.parallax img {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

.pin-top, .pin-bottom {
  position: relative;
}

.pinned {
  position: fixed !important;
}

/*********************
  Transition Classes
**********************/
ul.staggered-list li {
  opacity: 0;
}

.fade-in {
  opacity: 0;
  -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
}

/*********************
  Media Query Classes
**********************/
@media only screen and (max-width: 600px) {
  .hide-on-small-only, .hide-on-small-and-down {
    display: none !important;
  }
}

@media only screen and (max-width: 992px) {
  .hide-on-med-and-down {
    display: none !important;
  }
}

@media only screen and (min-width: 601px) {
  .hide-on-med-and-up {
    display: none !important;
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .hide-on-med-only {
    display: none !important;
  }
}

@media only screen and (min-width: 993px) {
  .hide-on-large-only {
    display: none !important;
  }
}

@media only screen and (min-width: 993px) {
  .show-on-large {
    display: block !important;
  }
}

@media only screen and (min-width: 600px) and (max-width: 992px) {
  .show-on-medium {
    display: block !important;
  }
}

@media only screen and (max-width: 600px) {
  .show-on-small {
    display: block !important;
  }
}

@media only screen and (min-width: 601px) {
  .show-on-medium-and-up {
    display: block !important;
  }
}

@media only screen and (max-width: 992px) {
  .show-on-medium-and-down {
    display: block !important;
  }
}

@media only screen and (max-width: 600px) {
  .center-on-small-only {
    text-align: center;
  }
}

.page-footer {
  padding-top: 20px;
  background-color: #ee6e73;
}

.page-footer .footer-copyright {
  overflow: hidden;
  min-height: 50px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 10px 0px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(51, 51, 51, 0.08);
}

table, th, td {
  border: none;
}

table {
  width: 100%;
  display: table;
}

table.bordered > thead > tr,
table.bordered > tbody > tr {
  border-bottom: 1px solid #d0d0d0;
}

table.striped > tbody > tr:nth-child(odd) {
  background-color: #f2f2f2;
}

table.striped > tbody > tr > td {
  border-radius: 0;
}

table.highlight > tbody > tr {
  transition: background-color .25s ease;
}

table.highlight > tbody > tr:hover {
  background-color: #f2f2f2;
}

table.centered thead tr th, table.centered tbody tr td {
  text-align: center;
}

thead {
  border-bottom: 1px solid #d0d0d0;
}

td, th {
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
}

@media only screen and (max-width: 992px) {
  table.responsive-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    position: relative;
    /* sort out borders */
  }
  table.responsive-table td:empty:before {
    content: '\00a0';
  }
  table.responsive-table th,
  table.responsive-table td {
    margin: 0;
    vertical-align: top;
  }
  table.responsive-table th {
    text-align: left;
  }
  table.responsive-table thead {
    display: block;
    float: left;
  }
  table.responsive-table thead tr {
    display: block;
    padding: 0 10px 0 0;
  }
  table.responsive-table thead tr th::before {
    content: "\00a0";
  }
  table.responsive-table tbody {
    display: block;
    width: auto;
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
  }
  table.responsive-table tbody tr {
    display: inline-block;
    vertical-align: top;
  }
  table.responsive-table th {
    display: block;
    text-align: right;
  }
  table.responsive-table td {
    display: block;
    min-height: 1.25em;
    text-align: left;
  }
  table.responsive-table tr {
    padding: 0 10px;
  }
  table.responsive-table thead {
    border: 0;
    border-right: 1px solid #d0d0d0;
  }
  table.responsive-table.bordered th {
    border-bottom: 0;
    border-left: 0;
  }
  table.responsive-table.bordered td {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }
  table.responsive-table.bordered tr {
    border: 0;
  }
  table.responsive-table.bordered tbody tr {
    border-right: 1px solid #d0d0d0;
  }
}

.collection {
  margin: 0.5rem 0 1rem 0;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.collection .collection-item {
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
}

.collection .collection-item.avatar {
  min-height: 84px;
  padding-left: 72px;
  position: relative;
}

.collection .collection-item.avatar .circle {
  position: absolute;
  width: 42px;
  height: 42px;
  overflow: hidden;
  left: 15px;
  display: inline-block;
  vertical-align: middle;
}

.collection .collection-item.avatar i.circle {
  font-size: 18px;
  line-height: 42px;
  color: #fff;
  background-color: #999;
  text-align: center;
}

.collection .collection-item.avatar .title {
  font-size: 16px;
}

.collection .collection-item.avatar p {
  margin: 0;
}

.collection .collection-item.avatar .secondary-content {
  position: absolute;
  top: 16px;
  right: 16px;
}

.collection .collection-item:last-child {
  border-bottom: none;
}

.collection .collection-item.active {
  background-color: #26a69a;
  color: #eafaf9;
}

.collection .collection-item.active .secondary-content {
  color: #fff;
}

.collection a.collection-item {
  display: block;
  transition: .25s;
  color: #26a69a;
}

.collection a.collection-item:not(.active):hover {
  background-color: #ddd;
}

.collection.with-header .collection-header {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
}

.collection.with-header .collection-item {
  padding-left: 30px;
}

.collection.with-header .collection-item.avatar {
  padding-left: 72px;
}

.secondary-content {
  float: right;
  color: #26a69a;
}

.collapsible .collection {
  margin: 0;
  border: none;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe, .video-container object, .video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.progress {
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #acece6;
  border-radius: 2px;
  margin: 0.5rem 0 1rem 0;
  overflow: hidden;
}

.progress .determinate {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #26a69a;
  transition: width .3s linear;
}

.progress .indeterminate {
  background-color: #26a69a;
}

.progress .indeterminate:before {
  content: '';
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
          animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.progress .indeterminate:after {
  content: '';
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
          animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -webkit-animation-delay: 1.15s;
          animation-delay: 1.15s;
}

@-webkit-keyframes indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}

@keyframes indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}

@-webkit-keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

@keyframes indeterminate-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}

/*******************
  Utility Classes
*******************/
.hide {
  display: none !important;
}

.left-align {
  text-align: left;
}

.right-align {
  text-align: right;
}

.center, .center-align {
  text-align: center;
}

.left {
  float: left !important;
}

.right {
  float: right !important;
}

.no-select, input[type=range],
input[type=range] + .thumb {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.circle {
  border-radius: 50%;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.truncate {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-padding {
  padding: 0 !important;
}

span.badge {
  min-width: 3rem;
  padding: 0 6px;
  margin-left: 14px;
  text-align: center;
  font-size: 1rem;
  line-height: 22px;
  height: 22px;
  color: #757575;
  float: right;
  box-sizing: border-box;
}

span.badge.new {
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  background-color: #26a69a;
  border-radius: 2px;
}

span.badge.new:after {
  content: " new";
}

span.badge[data-badge-caption]::after {
  content: " " attr(data-badge-caption);
}

nav ul a span.badge {
  display: inline-block;
  float: none;
  margin-left: 4px;
  line-height: 22px;
  height: 22px;
}

.collection-item span.badge {
  margin-top: calc(0.75rem - 11px);
}

.collapsible span.badge {
  margin-top: calc(1.5rem - 11px);
}

.side-nav span.badge {
  margin-top: calc(24px - 11px);
}

/* This is needed for some mobile phones to display the Google Icon font properly */
.material-icons {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: 'liga';
     -moz-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}

@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}

.container .row {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.section.no-pad {
  padding: 0;
}

.section.no-pad-bot {
  padding-bottom: 0;
}

.section.no-pad-top {
  padding-top: 0;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row .col {
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
}

.row .col[class*="push-"], .row .col[class*="pull-"] {
  position: relative;
}

.row .col.s1 {
  width: 8.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s2 {
  width: 16.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s3 {
  width: 25%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s4 {
  width: 33.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s5 {
  width: 41.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s6 {
  width: 50%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s7 {
  width: 58.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s8 {
  width: 66.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s9 {
  width: 75%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s10 {
  width: 83.3333333333%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s11 {
  width: 91.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.s12 {
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
}

.row .col.offset-s1 {
  margin-left: 8.3333333333%;
}

.row .col.pull-s1 {
  right: 8.3333333333%;
}

.row .col.push-s1 {
  left: 8.3333333333%;
}

.row .col.offset-s2 {
  margin-left: 16.6666666667%;
}

.row .col.pull-s2 {
  right: 16.6666666667%;
}

.row .col.push-s2 {
  left: 16.6666666667%;
}

.row .col.offset-s3 {
  margin-left: 25%;
}

.row .col.pull-s3 {
  right: 25%;
}

.row .col.push-s3 {
  left: 25%;
}

.row .col.offset-s4 {
  margin-left: 33.3333333333%;
}

.row .col.pull-s4 {
  right: 33.3333333333%;
}

.row .col.push-s4 {
  left: 33.3333333333%;
}

.row .col.offset-s5 {
  margin-left: 41.6666666667%;
}

.row .col.pull-s5 {
  right: 41.6666666667%;
}

.row .col.push-s5 {
  left: 41.6666666667%;
}

.row .col.offset-s6 {
  margin-left: 50%;
}

.row .col.pull-s6 {
  right: 50%;
}

.row .col.push-s6 {
  left: 50%;
}

.row .col.offset-s7 {
  margin-left: 58.3333333333%;
}

.row .col.pull-s7 {
  right: 58.3333333333%;
}

.row .col.push-s7 {
  left: 58.3333333333%;
}

.row .col.offset-s8 {
  margin-left: 66.6666666667%;
}

.row .col.pull-s8 {
  right: 66.6666666667%;
}

.row .col.push-s8 {
  left: 66.6666666667%;
}

.row .col.offset-s9 {
  margin-left: 75%;
}

.row .col.pull-s9 {
  right: 75%;
}

.row .col.push-s9 {
  left: 75%;
}

.row .col.offset-s10 {
  margin-left: 83.3333333333%;
}

.row .col.pull-s10 {
  right: 83.3333333333%;
}

.row .col.push-s10 {
  left: 83.3333333333%;
}

.row .col.offset-s11 {
  margin-left: 91.6666666667%;
}

.row .col.pull-s11 {
  right: 91.6666666667%;
}

.row .col.push-s11 {
  left: 91.6666666667%;
}

.row .col.offset-s12 {
  margin-left: 100%;
}

.row .col.pull-s12 {
  right: 100%;
}

.row .col.push-s12 {
  left: 100%;
}

@media only screen and (min-width: 601px) {
  .row .col.m1 {
    width: 8.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m2 {
    width: 16.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m3 {
    width: 25%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m4 {
    width: 33.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m5 {
    width: 41.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m7 {
    width: 58.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m8 {
    width: 66.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m9 {
    width: 75%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m10 {
    width: 83.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m11 {
    width: 91.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.m12 {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.offset-m1 {
    margin-left: 8.3333333333%;
  }
  .row .col.pull-m1 {
    right: 8.3333333333%;
  }
  .row .col.push-m1 {
    left: 8.3333333333%;
  }
  .row .col.offset-m2 {
    margin-left: 16.6666666667%;
  }
  .row .col.pull-m2 {
    right: 16.6666666667%;
  }
  .row .col.push-m2 {
    left: 16.6666666667%;
  }
  .row .col.offset-m3 {
    margin-left: 25%;
  }
  .row .col.pull-m3 {
    right: 25%;
  }
  .row .col.push-m3 {
    left: 25%;
  }
  .row .col.offset-m4 {
    margin-left: 33.3333333333%;
  }
  .row .col.pull-m4 {
    right: 33.3333333333%;
  }
  .row .col.push-m4 {
    left: 33.3333333333%;
  }
  .row .col.offset-m5 {
    margin-left: 41.6666666667%;
  }
  .row .col.pull-m5 {
    right: 41.6666666667%;
  }
  .row .col.push-m5 {
    left: 41.6666666667%;
  }
  .row .col.offset-m6 {
    margin-left: 50%;
  }
  .row .col.pull-m6 {
    right: 50%;
  }
  .row .col.push-m6 {
    left: 50%;
  }
  .row .col.offset-m7 {
    margin-left: 58.3333333333%;
  }
  .row .col.pull-m7 {
    right: 58.3333333333%;
  }
  .row .col.push-m7 {
    left: 58.3333333333%;
  }
  .row .col.offset-m8 {
    margin-left: 66.6666666667%;
  }
  .row .col.pull-m8 {
    right: 66.6666666667%;
  }
  .row .col.push-m8 {
    left: 66.6666666667%;
  }
  .row .col.offset-m9 {
    margin-left: 75%;
  }
  .row .col.pull-m9 {
    right: 75%;
  }
  .row .col.push-m9 {
    left: 75%;
  }
  .row .col.offset-m10 {
    margin-left: 83.3333333333%;
  }
  .row .col.pull-m10 {
    right: 83.3333333333%;
  }
  .row .col.push-m10 {
    left: 83.3333333333%;
  }
  .row .col.offset-m11 {
    margin-left: 91.6666666667%;
  }
  .row .col.pull-m11 {
    right: 91.6666666667%;
  }
  .row .col.push-m11 {
    left: 91.6666666667%;
  }
  .row .col.offset-m12 {
    margin-left: 100%;
  }
  .row .col.pull-m12 {
    right: 100%;
  }
  .row .col.push-m12 {
    left: 100%;
  }
}

@media only screen and (min-width: 993px) {
  .row .col.l1 {
    width: 8.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l2 {
    width: 16.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l3 {
    width: 25%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l4 {
    width: 33.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l5 {
    width: 41.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l7 {
    width: 58.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l8 {
    width: 66.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l9 {
    width: 75%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l10 {
    width: 83.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l11 {
    width: 91.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.l12 {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.offset-l1 {
    margin-left: 8.3333333333%;
  }
  .row .col.pull-l1 {
    right: 8.3333333333%;
  }
  .row .col.push-l1 {
    left: 8.3333333333%;
  }
  .row .col.offset-l2 {
    margin-left: 16.6666666667%;
  }
  .row .col.pull-l2 {
    right: 16.6666666667%;
  }
  .row .col.push-l2 {
    left: 16.6666666667%;
  }
  .row .col.offset-l3 {
    margin-left: 25%;
  }
  .row .col.pull-l3 {
    right: 25%;
  }
  .row .col.push-l3 {
    left: 25%;
  }
  .row .col.offset-l4 {
    margin-left: 33.3333333333%;
  }
  .row .col.pull-l4 {
    right: 33.3333333333%;
  }
  .row .col.push-l4 {
    left: 33.3333333333%;
  }
  .row .col.offset-l5 {
    margin-left: 41.6666666667%;
  }
  .row .col.pull-l5 {
    right: 41.6666666667%;
  }
  .row .col.push-l5 {
    left: 41.6666666667%;
  }
  .row .col.offset-l6 {
    margin-left: 50%;
  }
  .row .col.pull-l6 {
    right: 50%;
  }
  .row .col.push-l6 {
    left: 50%;
  }
  .row .col.offset-l7 {
    margin-left: 58.3333333333%;
  }
  .row .col.pull-l7 {
    right: 58.3333333333%;
  }
  .row .col.push-l7 {
    left: 58.3333333333%;
  }
  .row .col.offset-l8 {
    margin-left: 66.6666666667%;
  }
  .row .col.pull-l8 {
    right: 66.6666666667%;
  }
  .row .col.push-l8 {
    left: 66.6666666667%;
  }
  .row .col.offset-l9 {
    margin-left: 75%;
  }
  .row .col.pull-l9 {
    right: 75%;
  }
  .row .col.push-l9 {
    left: 75%;
  }
  .row .col.offset-l10 {
    margin-left: 83.3333333333%;
  }
  .row .col.pull-l10 {
    right: 83.3333333333%;
  }
  .row .col.push-l10 {
    left: 83.3333333333%;
  }
  .row .col.offset-l11 {
    margin-left: 91.6666666667%;
  }
  .row .col.pull-l11 {
    right: 91.6666666667%;
  }
  .row .col.push-l11 {
    left: 91.6666666667%;
  }
  .row .col.offset-l12 {
    margin-left: 100%;
  }
  .row .col.pull-l12 {
    right: 100%;
  }
  .row .col.push-l12 {
    left: 100%;
  }
}

@media only screen and (min-width: 1201px) {
  .row .col.xl1 {
    width: 8.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl2 {
    width: 16.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl3 {
    width: 25%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl4 {
    width: 33.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl5 {
    width: 41.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl7 {
    width: 58.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl8 {
    width: 66.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl9 {
    width: 75%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl10 {
    width: 83.3333333333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl11 {
    width: 91.6666666667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.xl12 {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .row .col.offset-xl1 {
    margin-left: 8.3333333333%;
  }
  .row .col.pull-xl1 {
    right: 8.3333333333%;
  }
  .row .col.push-xl1 {
    left: 8.3333333333%;
  }
  .row .col.offset-xl2 {
    margin-left: 16.6666666667%;
  }
  .row .col.pull-xl2 {
    right: 16.6666666667%;
  }
  .row .col.push-xl2 {
    left: 16.6666666667%;
  }
  .row .col.offset-xl3 {
    margin-left: 25%;
  }
  .row .col.pull-xl3 {
    right: 25%;
  }
  .row .col.push-xl3 {
    left: 25%;
  }
  .row .col.offset-xl4 {
    margin-left: 33.3333333333%;
  }
  .row .col.pull-xl4 {
    right: 33.3333333333%;
  }
  .row .col.push-xl4 {
    left: 33.3333333333%;
  }
  .row .col.offset-xl5 {
    margin-left: 41.6666666667%;
  }
  .row .col.pull-xl5 {
    right: 41.6666666667%;
  }
  .row .col.push-xl5 {
    left: 41.6666666667%;
  }
  .row .col.offset-xl6 {
    margin-left: 50%;
  }
  .row .col.pull-xl6 {
    right: 50%;
  }
  .row .col.push-xl6 {
    left: 50%;
  }
  .row .col.offset-xl7 {
    margin-left: 58.3333333333%;
  }
  .row .col.pull-xl7 {
    right: 58.3333333333%;
  }
  .row .col.push-xl7 {
    left: 58.3333333333%;
  }
  .row .col.offset-xl8 {
    margin-left: 66.6666666667%;
  }
  .row .col.pull-xl8 {
    right: 66.6666666667%;
  }
  .row .col.push-xl8 {
    left: 66.6666666667%;
  }
  .row .col.offset-xl9 {
    margin-left: 75%;
  }
  .row .col.pull-xl9 {
    right: 75%;
  }
  .row .col.push-xl9 {
    left: 75%;
  }
  .row .col.offset-xl10 {
    margin-left: 83.3333333333%;
  }
  .row .col.pull-xl10 {
    right: 83.3333333333%;
  }
  .row .col.push-xl10 {
    left: 83.3333333333%;
  }
  .row .col.offset-xl11 {
    margin-left: 91.6666666667%;
  }
  .row .col.pull-xl11 {
    right: 91.6666666667%;
  }
  .row .col.push-xl11 {
    left: 91.6666666667%;
  }
  .row .col.offset-xl12 {
    margin-left: 100%;
  }
  .row .col.pull-xl12 {
    right: 100%;
  }
  .row .col.push-xl12 {
    left: 100%;
  }
}

nav {
  color: #fff;
  background-color: #ee6e73;
  width: 100%;
  height: 56px;
  line-height: 56px;
}

nav.nav-extended {
  height: auto;
}

nav.nav-extended .nav-wrapper {
  min-height: 56px;
  height: auto;
}

nav.nav-extended .nav-content {
  position: relative;
  line-height: normal;
}

nav a {
  color: #fff;
}

nav i,
nav [class^="mdi-"], nav [class*="mdi-"],
nav i.material-icons {
  display: block;
  font-size: 24px;
  height: 56px;
  line-height: 56px;
}

nav .nav-wrapper {
  position: relative;
  height: 100%;
}

@media only screen and (min-width: 993px) {
  nav a.button-collapse {
    display: none;
  }
}

nav .button-collapse {
  float: left;
  position: relative;
  z-index: 1;
  height: 56px;
  margin: 0 18px;
}

nav .button-collapse i {
  height: 56px;
  line-height: 56px;
}

nav .brand-logo {
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
  white-space: nowrap;
}

nav .brand-logo.center {
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

@media only screen and (max-width: 992px) {
  nav .brand-logo {
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  nav .brand-logo.left, nav .brand-logo.right {
    padding: 0;
    -webkit-transform: none;
            transform: none;
  }
  nav .brand-logo.left {
    left: 0.5rem;
  }
  nav .brand-logo.right {
    right: 0.5rem;
    left: auto;
  }
}

nav .brand-logo.right {
  right: 0.5rem;
  padding: 0;
}

nav .brand-logo i,
nav .brand-logo [class^="mdi-"], nav .brand-logo [class*="mdi-"],
nav .brand-logo i.material-icons {
  float: left;
  margin-right: 15px;
}

nav .nav-title {
  display: inline-block;
  font-size: 32px;
  padding: 28px 0;
}

nav ul {
  margin: 0;
}

nav ul li {
  transition: background-color .3s;
  float: left;
  padding: 0;
}

nav ul li.active {
  background-color: rgba(0, 0, 0, 0.1);
}

nav ul a {
  transition: background-color .3s;
  font-size: 1rem;
  color: #fff;
  display: block;
  padding: 0 15px;
  cursor: pointer;
}

nav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {
  margin-top: -2px;
  margin-left: 15px;
  margin-right: 15px;
}

nav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {
  height: inherit;
  line-height: inherit;
}

nav ul a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

nav ul.left {
  float: left;
}

nav form {
  height: 100%;
}

nav .input-field {
  margin: 0;
  height: 100%;
}

nav .input-field input {
  height: 100%;
  font-size: 1.2rem;
  border: none;
  padding-left: 2rem;
}

nav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {
  border: none;
  box-shadow: none;
}

nav .input-field label {
  top: 0;
  left: 0;
}

nav .input-field label i {
  color: rgba(255, 255, 255, 0.7);
  transition: color .3s;
}

nav .input-field label.active i {
  color: #fff;
}

.navbar-fixed {
  position: relative;
  height: 56px;
  z-index: 997;
}

.navbar-fixed nav {
  position: fixed;
}

@media only screen and (min-width: 601px) {
  nav.nav-extended .nav-wrapper {
    min-height: 64px;
  }
  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
    height: 64px;
    line-height: 64px;
  }
  .navbar-fixed {
    height: 64px;
  }
}

@font-face {
  font-family: "Roboto";
  src: local(Roboto Thin), url("../fonts/roboto/Roboto-Thin.woff2") format("woff2"), url("../fonts/roboto/Roboto-Thin.woff") format("woff");
  font-weight: 100;
}

@font-face {
  font-family: "Roboto";
  src: local(Roboto Light), url("../fonts/roboto/Roboto-Light.woff2") format("woff2"), url("../fonts/roboto/Roboto-Light.woff") format("woff");
  font-weight: 300;
}

@font-face {
  font-family: "Roboto";
  src: local(Roboto Regular), url("../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../fonts/roboto/Roboto-Regular.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: "Roboto";
  src: local(Roboto Medium), url("../fonts/roboto/Roboto-Medium.woff2") format("woff2"), url("../fonts/roboto/Roboto-Medium.woff") format("woff");
  font-weight: 500;
}

@font-face {
  font-family: "Roboto";
  src: local(Roboto Bold), url("../fonts/roboto/Roboto-Bold.woff2") format("woff2"), url("../fonts/roboto/Roboto-Bold.woff") format("woff");
  font-weight: 700;
}

a {
  text-decoration: none;
}

html {
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
}

@media only screen and (min-width: 0) {
  html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 992px) {
  html {
    font-size: 14.5px;
  }
}

@media only screen and (min-width: 1200px) {
  html {
    font-size: 15px;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  line-height: 1.1;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  font-weight: inherit;
}

h1 {
  font-size: 4.2rem;
  line-height: 110%;
  margin: 2.1rem 0 1.68rem 0;
}

h2 {
  font-size: 3.56rem;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
}

h3 {
  font-size: 2.92rem;
  line-height: 110%;
  margin: 1.46rem 0 1.168rem 0;
}

h4 {
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.14rem 0 0.912rem 0;
}

h5 {
  font-size: 1.64rem;
  line-height: 110%;
  margin: 0.82rem 0 0.656rem 0;
}

h6 {
  font-size: 1rem;
  line-height: 110%;
  margin: 0.5rem 0 0.4rem 0;
}

em {
  font-style: italic;
}

strong {
  font-weight: 500;
}

small {
  font-size: 75%;
}

.light, .page-footer .footer-copyright {
  font-weight: 300;
}

.thin {
  font-weight: 200;
}

.flow-text {
  font-weight: 300;
}

@media only screen and (min-width: 360px) {
  .flow-text {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 390px) {
  .flow-text {
    font-size: 1.224rem;
  }
}

@media only screen and (min-width: 420px) {
  .flow-text {
    font-size: 1.248rem;
  }
}

@media only screen and (min-width: 450px) {
  .flow-text {
    font-size: 1.272rem;
  }
}

@media only screen and (min-width: 480px) {
  .flow-text {
    font-size: 1.296rem;
  }
}

@media only screen and (min-width: 510px) {
  .flow-text {
    font-size: 1.32rem;
  }
}

@media only screen and (min-width: 540px) {
  .flow-text {
    font-size: 1.344rem;
  }
}

@media only screen and (min-width: 570px) {
  .flow-text {
    font-size: 1.368rem;
  }
}

@media only screen and (min-width: 600px) {
  .flow-text {
    font-size: 1.392rem;
  }
}

@media only screen and (min-width: 630px) {
  .flow-text {
    font-size: 1.416rem;
  }
}

@media only screen and (min-width: 660px) {
  .flow-text {
    font-size: 1.44rem;
  }
}

@media only screen and (min-width: 690px) {
  .flow-text {
    font-size: 1.464rem;
  }
}

@media only screen and (min-width: 720px) {
  .flow-text {
    font-size: 1.488rem;
  }
}

@media only screen and (min-width: 750px) {
  .flow-text {
    font-size: 1.512rem;
  }
}

@media only screen and (min-width: 780px) {
  .flow-text {
    font-size: 1.536rem;
  }
}

@media only screen and (min-width: 810px) {
  .flow-text {
    font-size: 1.56rem;
  }
}

@media only screen and (min-width: 840px) {
  .flow-text {
    font-size: 1.584rem;
  }
}

@media only screen and (min-width: 870px) {
  .flow-text {
    font-size: 1.608rem;
  }
}

@media only screen and (min-width: 900px) {
  .flow-text {
    font-size: 1.632rem;
  }
}

@media only screen and (min-width: 930px) {
  .flow-text {
    font-size: 1.656rem;
  }
}

@media only screen and (min-width: 960px) {
  .flow-text {
    font-size: 1.68rem;
  }
}

@media only screen and (max-width: 360px) {
  .flow-text {
    font-size: 1.2rem;
  }
}

.scale-transition {
  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;
  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;
  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;
}

.scale-transition.scale-out {
  -webkit-transform: scale(0);
          transform: scale(0);
  transition: -webkit-transform .2s !important;
  transition: transform .2s !important;
  transition: transform .2s, -webkit-transform .2s !important;
}

.scale-transition.scale-in {
  -webkit-transform: scale(1);
          transform: scale(1);
}

.card-panel {
  transition: box-shadow .25s;
  padding: 24px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
  background-color: #fff;
}

.card {
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  transition: box-shadow .25s;
  border-radius: 2px;
}

.card .card-title {
  font-size: 24px;
  font-weight: 300;
}

.card .card-title.activator {
  cursor: pointer;
}

.card.small, .card.medium, .card.large {
  position: relative;
}

.card.small .card-image, .card.medium .card-image, .card.large .card-image {
  max-height: 60%;
  overflow: hidden;
}

.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {
  max-height: 40%;
}

.card.small .card-content, .card.medium .card-content, .card.large .card-content {
  max-height: 100%;
  overflow: hidden;
}

.card.small .card-action, .card.medium .card-action, .card.large .card-action {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.card.small {
  height: 300px;
}

.card.medium {
  height: 400px;
}

.card.large {
  height: 500px;
}

.card.horizontal {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {
  height: 100%;
  max-height: none;
  overflow: visible;
}

.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {
  height: 100%;
}

.card.horizontal .card-image {
  max-width: 50%;
}

.card.horizontal .card-image img {
  border-radius: 2px 0 0 2px;
  max-width: 100%;
  width: auto;
}

.card.horizontal .card-stacked {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  position: relative;
}

.card.horizontal .card-stacked .card-content {
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

.card.sticky-action .card-action {
  z-index: 2;
}

.card.sticky-action .card-reveal {
  z-index: 1;
  padding-bottom: 64px;
}

.card .card-image {
  position: relative;
}

.card .card-image img {
  display: block;
  border-radius: 2px 2px 0 0;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.card .card-image .card-title {
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  padding: 24px;
}

.card .card-content {
  padding: 24px;
  border-radius: 0 0 2px 2px;
}

.card .card-content p {
  margin: 0;
  color: inherit;
}

.card .card-content .card-title {
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
}

.card .card-content .card-title i {
  line-height: 32px;
}

.card .card-action {
  position: relative;
  background-color: inherit;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 16px 24px;
}

.card .card-action:last-child {
  border-radius: 0 0 2px 2px;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
  color: #ffab40;
  margin-right: 24px;
  transition: color .3s ease;
  text-transform: uppercase;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
  color: #ffd8a6;
}

.card .card-reveal {
  padding: 24px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  left: 0;
  top: 100%;
  height: 100%;
  z-index: 3;
  display: none;
}

.card .card-reveal .card-title {
  cursor: pointer;
  display: block;
}

#toast-container {
  display: block;
  position: fixed;
  z-index: 10000;
}

@media only screen and (max-width: 600px) {
  #toast-container {
    min-width: 100%;
    bottom: 0%;
  }
}

@media only screen and (min-width: 601px) and (max-width: 992px) {
  #toast-container {
    left: 5%;
    bottom: 7%;
    max-width: 90%;
  }
}

@media only screen and (min-width: 993px) {
  #toast-container {
    top: 10%;
    right: 7%;
    max-width: 86%;
  }
}

.toast {
  border-radius: 2px;
  top: 35px;
  width: auto;
  clear: both;
  margin-top: 10px;
  position: relative;
  max-width: 100%;
  height: auto;
  min-height: 48px;
  line-height: 1.5em;
  word-break: break-all;
  background-color: #323232;
  padding: 10px 25px;
  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.toast .btn, .toast .btn-large, .toast .btn-flat {
  margin: 0;
  margin-left: 3rem;
}

.toast.rounded {
  border-radius: 24px;
}

@media only screen and (max-width: 600px) {
  .toast {
    width: 100%;
    border-radius: 0;
  }
}

@media only screen and (min-width: 601px) and (max-width: 992px) {
  .toast {
    float: left;
  }
}

@media only screen and (min-width: 993px) {
  .toast {
    float: right;
  }
}

.tabs {
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  height: 48px;
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  white-space: nowrap;
}

.tabs.tabs-transparent {
  background-color: transparent;
}

.tabs.tabs-transparent .tab a,
.tabs.tabs-transparent .tab.disabled a,
.tabs.tabs-transparent .tab.disabled a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.tabs.tabs-transparent .tab a:hover,
.tabs.tabs-transparent .tab a.active {
  color: #fff;
}

.tabs.tabs-transparent .indicator {
  background-color: #fff;
}

.tabs.tabs-fixed-width {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.tabs.tabs-fixed-width .tab {
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.tabs .tab {
  display: inline-block;
  text-align: center;
  line-height: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}

.tabs .tab a {
  color: rgba(238, 110, 115, 0.7);
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: color .28s ease;
}

.tabs .tab a:hover, .tabs .tab a.active {
  background-color: transparent;
  color: #ee6e73;
}

.tabs .tab.disabled a,
.tabs .tab.disabled a:hover {
  color: rgba(238, 110, 115, 0.7);
  cursor: default;
}

.tabs .indicator {
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #f6b2b5;
  will-change: left, right;
}

@media only screen and (max-width: 992px) {
  .tabs {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .tabs .tab {
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .tabs .tab a {
    padding: 0 12px;
  }
}

.material-tooltip {
  padding: 10px 8px;
  font-size: 1rem;
  z-index: 2000;
  background-color: transparent;
  border-radius: 2px;
  color: #fff;
  min-height: 36px;
  line-height: 120%;
  opacity: 0;
  position: absolute;
  text-align: center;
  max-width: calc(100% - 4px);
  overflow: hidden;
  left: 0;
  top: 0;
  pointer-events: none;
  visibility: hidden;
}

.backdrop {
  position: absolute;
  opacity: 0;
  height: 7px;
  width: 14px;
  border-radius: 0 0 50% 50%;
  background-color: #323232;
  z-index: -1;
  -webkit-transform-origin: 50% 0%;
          transform-origin: 50% 0%;
  visibility: hidden;
}

.btn, .btn-large,
.btn-flat {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.btn.disabled, .disabled.btn-large,
.btn-floating.disabled,
.btn-large.disabled,
.btn-flat.disabled,
.btn:disabled,
.btn-large:disabled,
.btn-floating:disabled,
.btn-large:disabled,
.btn-flat:disabled,
.btn[disabled],
[disabled].btn-large,
.btn-floating[disabled],
.btn-large[disabled],
.btn-flat[disabled] {
  pointer-events: none;
  background-color: #DFDFDF !important;
  box-shadow: none;
  color: #9F9F9F !important;
  cursor: default;
}

.btn.disabled:hover, .disabled.btn-large:hover,
.btn-floating.disabled:hover,
.btn-large.disabled:hover,
.btn-flat.disabled:hover,
.btn:disabled:hover,
.btn-large:disabled:hover,
.btn-floating:disabled:hover,
.btn-large:disabled:hover,
.btn-flat:disabled:hover,
.btn[disabled]:hover,
[disabled].btn-large:hover,
.btn-floating[disabled]:hover,
.btn-large[disabled]:hover,
.btn-flat[disabled]:hover {
  background-color: #DFDFDF !important;
  color: #9F9F9F !important;
}

.btn, .btn-large,
.btn-floating,
.btn-large,
.btn-flat {
  font-size: 1rem;
  outline: 0;
}

.btn i, .btn-large i,
.btn-floating i,
.btn-large i,
.btn-flat i {
  font-size: 1.3rem;
  line-height: inherit;
}

.btn:focus, .btn-large:focus,
.btn-floating:focus {
  background-color: #1d7d74;
}

.btn, .btn-large {
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: .5px;
  transition: .2s ease-out;
  cursor: pointer;
}

.btn:hover, .btn-large:hover {
  background-color: #2bbbad;
}

.btn-floating {
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  background-color: #26a69a;
  border-radius: 50%;
  transition: .3s;
  cursor: pointer;
  vertical-align: middle;
}

.btn-floating:hover {
  background-color: #26a69a;
}

.btn-floating:before {
  border-radius: 0;
}

.btn-floating.btn-large {
  width: 56px;
  height: 56px;
}

.btn-floating.btn-large.halfway-fab {
  bottom: -28px;
}

.btn-floating.btn-large i {
  line-height: 56px;
}

.btn-floating.halfway-fab {
  position: absolute;
  right: 24px;
  bottom: -20px;
}

.btn-floating.halfway-fab.left {
  right: auto;
  left: 24px;
}

.btn-floating i {
  width: inherit;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 1.6rem;
  line-height: 40px;
}

button.btn-floating {
  border: none;
}

.fixed-action-btn {
  position: fixed;
  right: 23px;
  bottom: 23px;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 998;
}

.fixed-action-btn.active ul {
  visibility: visible;
}

.fixed-action-btn.horizontal {
  padding: 0 0 0 15px;
}

.fixed-action-btn.horizontal ul {
  text-align: right;
  right: 64px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  height: 100%;
  left: auto;
  width: 500px;
  /*width 100% only goes to width of button container */
}

.fixed-action-btn.horizontal ul li {
  display: inline-block;
  margin: 15px 15px 0 0;
}

.fixed-action-btn.toolbar {
  padding: 0;
  height: 56px;
}

.fixed-action-btn.toolbar.active > a i {
  opacity: 0;
}

.fixed-action-btn.toolbar ul {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  top: 0;
  bottom: 0;
}

.fixed-action-btn.toolbar ul li {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: inline-block;
  margin: 0;
  height: 100%;
  transition: none;
}

.fixed-action-btn.toolbar ul li a {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none;
  color: #fff;
  line-height: 56px;
  z-index: 1;
}

.fixed-action-btn.toolbar ul li a i {
  line-height: inherit;
}

.fixed-action-btn ul {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  bottom: 64px;
  margin: 0;
  visibility: hidden;
}

.fixed-action-btn ul li {
  margin-bottom: 15px;
}

.fixed-action-btn ul a.btn-floating {
  opacity: 0;
}

.fixed-action-btn .fab-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 40px;
  height: 40px;
  background-color: #26a69a;
  border-radius: 50%;
  -webkit-transform: scale(0);
          transform: scale(0);
}

.btn-flat {
  box-shadow: none;
  background-color: transparent;
  color: #343434;
  cursor: pointer;
  transition: background-color .2s;
}

.btn-flat:focus, .btn-flat:active {
  background-color: transparent;
}

.btn-flat:focus, .btn-flat:hover {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: none;
}

.btn-flat:active {
  background-color: rgba(0, 0, 0, 0.2);
}

.btn-flat.disabled {
  background-color: transparent !important;
  color: #b3b3b3 !important;
  cursor: default;
}

.btn-large {
  height: 54px;
  line-height: 54px;
}

.btn-large i {
  font-size: 1.6rem;
}

.btn-block {
  display: block;
}

.dropdown-content {
  background-color: #fff;
  margin: 0;
  display: none;
  min-width: 100px;
  max-height: 650px;
  overflow-y: auto;
  opacity: 0;
  position: absolute;
  z-index: 999;
  will-change: width, height;
}

.dropdown-content li {
  clear: both;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  min-height: 50px;
  line-height: 1.5rem;
  width: 100%;
  text-align: left;
  text-transform: none;
}

.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {
  background-color: #eee;
}

.dropdown-content li.active.selected {
  background-color: #e1e1e1;
}

.dropdown-content li.divider {
  min-height: 0;
  height: 1px;
}

.dropdown-content li > a, .dropdown-content li > span {
  font-size: 16px;
  color: #26a69a;
  display: block;
  line-height: 22px;
  padding: 14px 16px;
}

.dropdown-content li > span > label {
  top: 1px;
  left: 0;
  height: 18px;
}

.dropdown-content li > a > i {
  height: inherit;
  line-height: inherit;
  float: left;
  margin: 0 24px 0 0;
  width: 24px;
}

.input-field.col .dropdown-content [type="checkbox"] + label {
  top: 1px;
  left: 0;
  height: 18px;
}

/*!
 * Waves v0.6.0
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  transition: .3s ease-out;
}

.waves-effect .waves-ripple {
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.7s ease-out;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-transform: scale(0);
          transform: scale(0);
  pointer-events: none;
}

.waves-effect.waves-light .waves-ripple {
  background-color: rgba(255, 255, 255, 0.45);
}

.waves-effect.waves-red .waves-ripple {
  background-color: rgba(244, 67, 54, 0.7);
}

.waves-effect.waves-yellow .waves-ripple {
  background-color: rgba(255, 235, 59, 0.7);
}

.waves-effect.waves-orange .waves-ripple {
  background-color: rgba(255, 152, 0, 0.7);
}

.waves-effect.waves-purple .waves-ripple {
  background-color: rgba(156, 39, 176, 0.7);
}

.waves-effect.waves-green .waves-ripple {
  background-color: rgba(76, 175, 80, 0.7);
}

.waves-effect.waves-teal .waves-ripple {
  background-color: rgba(0, 150, 136, 0.7);
}

.waves-effect input[type="button"], .waves-effect input[type="reset"], .waves-effect input[type="submit"] {
  border: 0;
  font-style: normal;
  font-size: inherit;
  text-transform: inherit;
  background: none;
}

.waves-effect img {
  position: relative;
  z-index: -1;
}

.waves-notransition {
  transition: none !important;
}

.waves-circle {
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
}

.waves-input-wrapper {
  border-radius: 0.2em;
  vertical-align: bottom;
}

.waves-input-wrapper .waves-button-input {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}

.waves-circle {
  text-align: center;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  border-radius: 50%;
  -webkit-mask-image: none;
}

.waves-block {
  display: block;
}

/* Firefox Bug: link not triggered */
.waves-effect .waves-ripple {
  z-index: -1;
}

.modal {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 0;
  max-height: 70%;
  width: 55%;
  margin: auto;
  overflow-y: auto;
  border-radius: 2px;
  will-change: top, opacity;
}

@media only screen and (max-width: 992px) {
  .modal {
    width: 80%;
  }
}

.modal h1, .modal h2, .modal h3, .modal h4 {
  margin-top: 0;
}

.modal .modal-content {
  padding: 24px;
}

.modal .modal-close {
  cursor: pointer;
}

.modal .modal-footer {
  border-radius: 0 0 2px 2px;
  background-color: #fafafa;
  padding: 4px 6px;
  height: 56px;
  width: 100%;
}

.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {
  float: right;
  margin: 6px 0;
}

.modal-overlay {
  position: fixed;
  z-index: 999;
  top: -100px;
  left: 0;
  bottom: 0;
  right: 0;
  height: 125%;
  width: 100%;
  background: #000;
  display: none;
  will-change: opacity;
}

.modal.modal-fixed-footer {
  padding: 0;
  height: 70%;
}

.modal.modal-fixed-footer .modal-content {
  position: absolute;
  height: calc(100% - 56px);
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
}

.modal.modal-fixed-footer .modal-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
}

.modal.bottom-sheet {
  top: auto;
  bottom: -100%;
  margin: 0;
  width: 100%;
  max-height: 45%;
  border-radius: 0;
  will-change: bottom, opacity;
}

.collapsible {
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  margin: 0.5rem 0 1rem 0;
}

.collapsible-header {
  display: block;
  cursor: pointer;
  min-height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.collapsible-header i {
  width: 2rem;
  font-size: 1.6rem;
  line-height: 3rem;
  display: block;
  float: left;
  text-align: center;
  margin-right: 1rem;
}

.collapsible-body {
  display: none;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  padding: 2rem;
}

.side-nav .collapsible,
.side-nav.fixed .collapsible {
  border: none;
  box-shadow: none;
}

.side-nav .collapsible li,
.side-nav.fixed .collapsible li {
  padding: 0;
}

.side-nav .collapsible-header,
.side-nav.fixed .collapsible-header {
  background-color: transparent;
  border: none;
  line-height: inherit;
  height: inherit;
  padding: 0 16px;
}

.side-nav .collapsible-header:hover,
.side-nav.fixed .collapsible-header:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.side-nav .collapsible-header i,
.side-nav.fixed .collapsible-header i {
  line-height: inherit;
}

.side-nav .collapsible-body,
.side-nav.fixed .collapsible-body {
  border: 0;
  background-color: #fff;
}

.side-nav .collapsible-body li a,
.side-nav.fixed .collapsible-body li a {
  padding: 0 23.5px 0 31px;
}

.collapsible.popout {
  border: none;
  box-shadow: none;
}

.collapsible.popout > li {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin: 0 24px;
  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.collapsible.popout > li.active {
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 16px 0;
}

.chip {
  display: inline-block;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: #e4e4e4;
  margin-bottom: 5px;
  margin-right: 5px;
}

.chip > img {
  float: left;
  margin: 0 8px 0 -12px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.chip .close {
  cursor: pointer;
  float: right;
  font-size: 16px;
  line-height: 32px;
  padding-left: 8px;
}

.chips {
  border: none;
  border-bottom: 1px solid #9e9e9e;
  box-shadow: none;
  margin: 0 0 20px 0;
  min-height: 45px;
  outline: none;
  transition: all .3s;
}

.chips.focus {
  border-bottom: 1px solid #26a69a;
  box-shadow: 0 1px 0 0 #26a69a;
}

.chips:hover {
  cursor: text;
}

.chips .chip.selected {
  background-color: #26a69a;
  color: #fff;
}

.chips .input {
  background: none;
  border: 0;
  color: rgba(0, 0, 0, 0.6);
  display: inline-block;
  font-size: 1rem;
  height: 3rem;
  line-height: 32px;
  outline: 0;
  margin: 0;
  padding: 0 !important;
  width: 120px !important;
}

.chips .input:focus {
  border: 0 !important;
  box-shadow: none !important;
}

.chips .autocomplete-content {
  margin-top: 0;
}

.prefix ~ .chips {
  margin-left: 3rem;
  width: 92%;
  width: calc(100% - 3rem);
}

.chips:empty ~ label {
  font-size: 0.8rem;
  -webkit-transform: translateY(-140%);
          transform: translateY(-140%);
}

.materialboxed {
  display: block;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  position: relative;
  transition: opacity .4s;
  -webkit-backface-visibility: hidden;
}

.materialboxed:hover:not(.active) {
  opacity: .8;
}

.materialboxed.active {
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
}

#materialbox-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #292929;
  z-index: 1000;
  will-change: opacity;
}

.materialbox-caption {
  position: fixed;
  display: none;
  color: #fff;
  line-height: 50px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0% 15%;
  height: 50px;
  z-index: 1000;
  -webkit-font-smoothing: antialiased;
}

select:focus {
  outline: 1px solid #c9f3ef;
}

button:focus {
  outline: none;
  background-color: #2ab7a9;
}

label {
  font-size: 0.8rem;
  color: #9e9e9e;
}

/* Text Inputs + Textarea
   ========================================================================== */
/* Style Placeholders */
::-webkit-input-placeholder {
  color: #d1d1d1;
}

:-moz-placeholder {
  /* Firefox 18- */
  color: #d1d1d1;
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: #d1d1d1;
}

:-ms-input-placeholder {
  color: #d1d1d1;
}

/* Text inputs */
input:not([type]),
input[type=text],
input[type=password],
input[type=email],
input[type=url],
input[type=time],
input[type=date],
input[type=datetime],
input[type=datetime-local],
input[type=tel],
input[type=number],
input[type=search],
textarea.materialize-textarea {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
}

input:not([type]):disabled, input:not([type])[readonly="readonly"],
input[type=text]:disabled,
input[type=text][readonly="readonly"],
input[type=password]:disabled,
input[type=password][readonly="readonly"],
input[type=email]:disabled,
input[type=email][readonly="readonly"],
input[type=url]:disabled,
input[type=url][readonly="readonly"],
input[type=time]:disabled,
input[type=time][readonly="readonly"],
input[type=date]:disabled,
input[type=date][readonly="readonly"],
input[type=datetime]:disabled,
input[type=datetime][readonly="readonly"],
input[type=datetime-local]:disabled,
input[type=datetime-local][readonly="readonly"],
input[type=tel]:disabled,
input[type=tel][readonly="readonly"],
input[type=number]:disabled,
input[type=number][readonly="readonly"],
input[type=search]:disabled,
input[type=search][readonly="readonly"],
textarea.materialize-textarea:disabled,
textarea.materialize-textarea[readonly="readonly"] {
  color: rgba(0, 0, 0, 0.26);
  border-bottom: 1px dotted rgba(0, 0, 0, 0.26);
}

input:not([type]):disabled + label,
input:not([type])[readonly="readonly"] + label,
input[type=text]:disabled + label,
input[type=text][readonly="readonly"] + label,
input[type=password]:disabled + label,
input[type=password][readonly="readonly"] + label,
input[type=email]:disabled + label,
input[type=email][readonly="readonly"] + label,
input[type=url]:disabled + label,
input[type=url][readonly="readonly"] + label,
input[type=time]:disabled + label,
input[type=time][readonly="readonly"] + label,
input[type=date]:disabled + label,
input[type=date][readonly="readonly"] + label,
input[type=datetime]:disabled + label,
input[type=datetime][readonly="readonly"] + label,
input[type=datetime-local]:disabled + label,
input[type=datetime-local][readonly="readonly"] + label,
input[type=tel]:disabled + label,
input[type=tel][readonly="readonly"] + label,
input[type=number]:disabled + label,
input[type=number][readonly="readonly"] + label,
input[type=search]:disabled + label,
input[type=search][readonly="readonly"] + label,
textarea.materialize-textarea:disabled + label,
textarea.materialize-textarea[readonly="readonly"] + label {
  color: rgba(0, 0, 0, 0.26);
}

input:not([type]):focus:not([readonly]),
input[type=text]:focus:not([readonly]),
input[type=password]:focus:not([readonly]),
input[type=email]:focus:not([readonly]),
input[type=url]:focus:not([readonly]),
input[type=time]:focus:not([readonly]),
input[type=date]:focus:not([readonly]),
input[type=datetime]:focus:not([readonly]),
input[type=datetime-local]:focus:not([readonly]),
input[type=tel]:focus:not([readonly]),
input[type=number]:focus:not([readonly]),
input[type=search]:focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #26a69a;
  box-shadow: 0 1px 0 0 #26a69a;
}

input:not([type]):focus:not([readonly]) + label,
input[type=text]:focus:not([readonly]) + label,
input[type=password]:focus:not([readonly]) + label,
input[type=email]:focus:not([readonly]) + label,
input[type=url]:focus:not([readonly]) + label,
input[type=time]:focus:not([readonly]) + label,
input[type=date]:focus:not([readonly]) + label,
input[type=datetime]:focus:not([readonly]) + label,
input[type=datetime-local]:focus:not([readonly]) + label,
input[type=tel]:focus:not([readonly]) + label,
input[type=number]:focus:not([readonly]) + label,
input[type=search]:focus:not([readonly]) + label,
textarea.materialize-textarea:focus:not([readonly]) + label {
  color: #26a69a;
}

input:not([type]).valid, input:not([type]):focus.valid,
input[type=text].valid,
input[type=text]:focus.valid,
input[type=password].valid,
input[type=password]:focus.valid,
input[type=email].valid,
input[type=email]:focus.valid,
input[type=url].valid,
input[type=url]:focus.valid,
input[type=time].valid,
input[type=time]:focus.valid,
input[type=date].valid,
input[type=date]:focus.valid,
input[type=datetime].valid,
input[type=datetime]:focus.valid,
input[type=datetime-local].valid,
input[type=datetime-local]:focus.valid,
input[type=tel].valid,
input[type=tel]:focus.valid,
input[type=number].valid,
input[type=number]:focus.valid,
input[type=search].valid,
input[type=search]:focus.valid,
textarea.materialize-textarea.valid,
textarea.materialize-textarea:focus.valid {
  border-bottom: 1px solid #4CAF50;
  box-shadow: 0 1px 0 0 #4CAF50;
}

input:not([type]).valid + label:after,
input:not([type]):focus.valid + label:after,
input[type=text].valid + label:after,
input[type=text]:focus.valid + label:after,
input[type=password].valid + label:after,
input[type=password]:focus.valid + label:after,
input[type=email].valid + label:after,
input[type=email]:focus.valid + label:after,
input[type=url].valid + label:after,
input[type=url]:focus.valid + label:after,
input[type=time].valid + label:after,
input[type=time]:focus.valid + label:after,
input[type=date].valid + label:after,
input[type=date]:focus.valid + label:after,
input[type=datetime].valid + label:after,
input[type=datetime]:focus.valid + label:after,
input[type=datetime-local].valid + label:after,
input[type=datetime-local]:focus.valid + label:after,
input[type=tel].valid + label:after,
input[type=tel]:focus.valid + label:after,
input[type=number].valid + label:after,
input[type=number]:focus.valid + label:after,
input[type=search].valid + label:after,
input[type=search]:focus.valid + label:after,
textarea.materialize-textarea.valid + label:after,
textarea.materialize-textarea:focus.valid + label:after {
  content: attr(data-success);
  color: #4CAF50;
  opacity: 1;
}

input:not([type]).invalid, input:not([type]):focus.invalid,
input[type=text].invalid,
input[type=text]:focus.invalid,
input[type=password].invalid,
input[type=password]:focus.invalid,
input[type=email].invalid,
input[type=email]:focus.invalid,
input[type=url].invalid,
input[type=url]:focus.invalid,
input[type=time].invalid,
input[type=time]:focus.invalid,
input[type=date].invalid,
input[type=date]:focus.invalid,
input[type=datetime].invalid,
input[type=datetime]:focus.invalid,
input[type=datetime-local].invalid,
input[type=datetime-local]:focus.invalid,
input[type=tel].invalid,
input[type=tel]:focus.invalid,
input[type=number].invalid,
input[type=number]:focus.invalid,
input[type=search].invalid,
input[type=search]:focus.invalid,
textarea.materialize-textarea.invalid,
textarea.materialize-textarea:focus.invalid {
  border-bottom: 1px solid #F44336;
  box-shadow: 0 1px 0 0 #F44336;
}

input:not([type]).invalid + label:after,
input:not([type]):focus.invalid + label:after,
input[type=text].invalid + label:after,
input[type=text]:focus.invalid + label:after,
input[type=password].invalid + label:after,
input[type=password]:focus.invalid + label:after,
input[type=email].invalid + label:after,
input[type=email]:focus.invalid + label:after,
input[type=url].invalid + label:after,
input[type=url]:focus.invalid + label:after,
input[type=time].invalid + label:after,
input[type=time]:focus.invalid + label:after,
input[type=date].invalid + label:after,
input[type=date]:focus.invalid + label:after,
input[type=datetime].invalid + label:after,
input[type=datetime]:focus.invalid + label:after,
input[type=datetime-local].invalid + label:after,
input[type=datetime-local]:focus.invalid + label:after,
input[type=tel].invalid + label:after,
input[type=tel]:focus.invalid + label:after,
input[type=number].invalid + label:after,
input[type=number]:focus.invalid + label:after,
input[type=search].invalid + label:after,
input[type=search]:focus.invalid + label:after,
textarea.materialize-textarea.invalid + label:after,
textarea.materialize-textarea:focus.invalid + label:after {
  content: attr(data-error);
  color: #F44336;
  opacity: 1;
}

input:not([type]).validate + label,
input[type=text].validate + label,
input[type=password].validate + label,
input[type=email].validate + label,
input[type=url].validate + label,
input[type=time].validate + label,
input[type=date].validate + label,
input[type=datetime].validate + label,
input[type=datetime-local].validate + label,
input[type=tel].validate + label,
input[type=number].validate + label,
input[type=search].validate + label,
textarea.materialize-textarea.validate + label {
  width: 100%;
  pointer-events: none;
}

input:not([type]) + label:after,
input[type=text] + label:after,
input[type=password] + label:after,
input[type=email] + label:after,
input[type=url] + label:after,
input[type=time] + label:after,
input[type=date] + label:after,
input[type=datetime] + label:after,
input[type=datetime-local] + label:after,
input[type=tel] + label:after,
input[type=number] + label:after,
input[type=search] + label:after,
textarea.materialize-textarea + label:after {
  display: block;
  content: "";
  position: absolute;
  top: 60px;
  opacity: 0;
  transition: .2s opacity ease-out, .2s color ease-out;
}

.input-field {
  position: relative;
  margin-top: 1rem;
}

.input-field.inline {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}

.input-field.inline input,
.input-field.inline .select-dropdown {
  margin-bottom: 1rem;
}

.input-field.col label {
  left: 0.75rem;
}

.input-field.col .prefix ~ label,
.input-field.col .prefix ~ .validate ~ label {
  width: calc(100% - 3rem - 1.5rem);
}

.input-field label {
  color: #9e9e9e;
  position: absolute;
  top: 0.8rem;
  left: 0;
  font-size: 1rem;
  cursor: text;
  transition: .2s ease-out;
  text-align: initial;
}

.input-field label:not(.label-icon).active {
  font-size: 0.8rem;
  -webkit-transform: translateY(-140%);
          transform: translateY(-140%);
}

.input-field .prefix {
  position: absolute;
  width: 3rem;
  font-size: 2rem;
  transition: color .2s;
}

.input-field .prefix.active {
  color: #26a69a;
}

.input-field .prefix ~ input,
.input-field .prefix ~ textarea,
.input-field .prefix ~ label,
.input-field .prefix ~ .validate ~ label,
.input-field .prefix ~ .autocomplete-content {
  margin-left: 3rem;
  width: 92%;
  width: calc(100% - 3rem);
}

.input-field .prefix ~ label {
  margin-left: 3rem;
}

@media only screen and (max-width: 992px) {
  .input-field .prefix ~ input {
    width: 86%;
    width: calc(100% - 3rem);
  }
}

@media only screen and (max-width: 600px) {
  .input-field .prefix ~ input {
    width: 80%;
    width: calc(100% - 3rem);
  }
}

/* Search Field */
.input-field input[type=search] {
  display: block;
  line-height: inherit;
  padding-left: 4rem;
  width: calc(100% - 4rem);
}

.input-field input[type=search]:focus {
  background-color: #fff;
  border: 0;
  box-shadow: none;
  color: #444;
}

.input-field input[type=search]:focus + label i,
.input-field input[type=search]:focus ~ .mdi-navigation-close,
.input-field input[type=search]:focus ~ .material-icons {
  color: #444;
}

.input-field input[type=search] + label {
  left: 1rem;
}

.input-field input[type=search] ~ .mdi-navigation-close,
.input-field input[type=search] ~ .material-icons {
  position: absolute;
  top: 0;
  right: 1rem;
  color: transparent;
  cursor: pointer;
  font-size: 2rem;
  transition: .3s color;
}

/* Textarea */
textarea {
  width: 100%;
  height: 3rem;
  background-color: transparent;
}

textarea.materialize-textarea {
  overflow-y: hidden;
  /* prevents scroll bar flash */
  padding: .8rem 0 1.6rem 0;
  /* prevents text jump on Enter keypress */
  resize: none;
  min-height: 3rem;
}

.hiddendiv {
  display: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  /* future version of deprecated 'word-wrap' */
  padding-top: 1.2rem;
  /* prevents text jump on Enter keypress */
  position: absolute;
  top: 0;
}

/* Autocomplete */
.autocomplete-content {
  margin-top: -20px;
  display: block;
  opacity: 1;
  position: static;
}

.autocomplete-content li .highlight {
  color: #444;
}

.autocomplete-content li img {
  height: 40px;
  width: 40px;
  margin: 5px 15px;
}

/* Radio Buttons
   ========================================================================== */
[type="radio"]:not(:checked),
[type="radio"]:checked {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

[type="radio"]:not(:checked) + label,
[type="radio"]:checked + label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  transition: .28s ease;
  /* webkit (konqueror) browsers */
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[type="radio"] + label:before,
[type="radio"] + label:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  margin: 4px;
  width: 16px;
  height: 16px;
  z-index: 0;
  transition: .28s ease;
}

/* Unchecked styles */
[type="radio"]:not(:checked) + label:before,
[type="radio"]:not(:checked) + label:after,
[type="radio"]:checked + label:before,
[type="radio"]:checked + label:after,
[type="radio"].with-gap:checked + label:before,
[type="radio"].with-gap:checked + label:after {
  border-radius: 50%;
}

[type="radio"]:not(:checked) + label:before,
[type="radio"]:not(:checked) + label:after {
  border: 2px solid #5a5a5a;
}

[type="radio"]:not(:checked) + label:after {
  -webkit-transform: scale(0);
          transform: scale(0);
}

/* Checked styles */
[type="radio"]:checked + label:before {
  border: 2px solid transparent;
}

[type="radio"]:checked + label:after,
[type="radio"].with-gap:checked + label:before,
[type="radio"].with-gap:checked + label:after {
  border: 2px solid #26a69a;
}

[type="radio"]:checked + label:after,
[type="radio"].with-gap:checked + label:after {
  background-color: #26a69a;
}

[type="radio"]:checked + label:after {
  -webkit-transform: scale(1.02);
          transform: scale(1.02);
}

/* Radio With gap */
[type="radio"].with-gap:checked + label:after {
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
}

/* Focused styles */
[type="radio"].tabbed:focus + label:before {
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Disabled Radio With gap */
[type="radio"].with-gap:disabled:checked + label:before {
  border: 2px solid rgba(0, 0, 0, 0.26);
}

[type="radio"].with-gap:disabled:checked + label:after {
  border: none;
  background-color: rgba(0, 0, 0, 0.26);
}

/* Disabled style */
[type="radio"]:disabled:not(:checked) + label:before,
[type="radio"]:disabled:checked + label:before {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.26);
}

[type="radio"]:disabled + label {
  color: rgba(0, 0, 0, 0.26);
}

[type="radio"]:disabled:not(:checked) + label:before {
  border-color: rgba(0, 0, 0, 0.26);
}

[type="radio"]:disabled:checked + label:after {
  background-color: rgba(0, 0, 0, 0.26);
  border-color: #BDBDBD;
}

/* Checkboxes
   ========================================================================== */
/* CUSTOM CSS CHECKBOXES */
form p {
  margin-bottom: 10px;
  text-align: left;
}

form p:last-child {
  margin-bottom: 0;
}

/* Remove default checkbox */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

[type="checkbox"] {
  /* checkbox aspect */
}

[type="checkbox"] + label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  -webkit-user-select: none;
  /* webkit (safari, chrome) browsers */
  -moz-user-select: none;
  /* mozilla browsers */
  -khtml-user-select: none;
  /* webkit (konqueror) browsers */
  -ms-user-select: none;
  /* IE10+ */
}

[type="checkbox"] + label:before,
[type="checkbox"]:not(.filled-in) + label:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid #5a5a5a;
  border-radius: 1px;
  margin-top: 2px;
  transition: .2s;
}

[type="checkbox"]:not(.filled-in) + label:after {
  border: 0;
  -webkit-transform: scale(0);
          transform: scale(0);
}

[type="checkbox"]:not(:checked):disabled + label:before {
  border: none;
  background-color: rgba(0, 0, 0, 0.26);
}

[type="checkbox"].tabbed:focus + label:after {
  -webkit-transform: scale(1);
          transform: scale(1);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}

[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #26a69a;
  border-bottom: 2px solid #26a69a;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

[type="checkbox"]:checked:disabled + label:before {
  border-right: 2px solid rgba(0, 0, 0, 0.26);
  border-bottom: 2px solid rgba(0, 0, 0, 0.26);
}

/* Indeterminate checkbox */
[type="checkbox"]:indeterminate + label:before {
  top: -11px;
  left: -12px;
  width: 10px;
  height: 22px;
  border-top: none;
  border-left: none;
  border-right: 2px solid #26a69a;
  border-bottom: none;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

[type="checkbox"]:indeterminate:disabled + label:before {
  border-right: 2px solid rgba(0, 0, 0, 0.26);
  background-color: transparent;
}

[type="checkbox"].filled-in + label:after {
  border-radius: 2px;
}

[type="checkbox"].filled-in + label:before,
[type="checkbox"].filled-in + label:after {
  content: '';
  left: 0;
  position: absolute;
  /* .1s delay is for check animation */
  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
  z-index: 1;
}

[type="checkbox"].filled-in:not(:checked) + label:before {
  width: 0;
  height: 0;
  border: 3px solid transparent;
  left: 6px;
  top: 10px;
  -webkit-transform: rotateZ(37deg);
  transform: rotateZ(37deg);
  -webkit-transform-origin: 20% 40%;
  transform-origin: 100% 100%;
}

[type="checkbox"].filled-in:not(:checked) + label:after {
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #5a5a5a;
  top: 0px;
  z-index: 0;
}

[type="checkbox"].filled-in:checked + label:before {
  top: 0;
  left: 1px;
  width: 8px;
  height: 13px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotateZ(37deg);
  transform: rotateZ(37deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

[type="checkbox"].filled-in:checked + label:after {
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #26a69a;
  background-color: #26a69a;
  z-index: 0;
}

[type="checkbox"].filled-in.tabbed:focus + label:after {
  border-radius: 2px;
  border-color: #5a5a5a;
  background-color: rgba(0, 0, 0, 0.1);
}

[type="checkbox"].filled-in.tabbed:checked:focus + label:after {
  border-radius: 2px;
  background-color: #26a69a;
  border-color: #26a69a;
}

[type="checkbox"].filled-in:disabled:not(:checked) + label:before {
  background-color: transparent;
  border: 2px solid transparent;
}

[type="checkbox"].filled-in:disabled:not(:checked) + label:after {
  border-color: transparent;
  background-color: #BDBDBD;
}

[type="checkbox"].filled-in:disabled:checked + label:before {
  background-color: transparent;
}

[type="checkbox"].filled-in:disabled:checked + label:after {
  background-color: #BDBDBD;
  border-color: #BDBDBD;
}

/* Switch
   ========================================================================== */
.switch,
.switch * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

.switch label {
  cursor: pointer;
}

.switch label input[type=checkbox] {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch label input[type=checkbox]:checked + .lever {
  background-color: #84c7c1;
}

.switch label input[type=checkbox]:checked + .lever:after {
  background-color: #26a69a;
  left: 24px;
}

.switch label .lever {
  content: "";
  display: inline-block;
  position: relative;
  width: 40px;
  height: 15px;
  background-color: #818181;
  border-radius: 15px;
  margin-right: 10px;
  transition: background 0.3s ease;
  vertical-align: middle;
  margin: 0 16px;
}

.switch label .lever:after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 21px;
  height: 21px;
  background-color: #F1F1F1;
  border-radius: 21px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);
  left: -5px;
  top: -3px;
  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;
}

input[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,
input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1);
}

input[type=checkbox]:not(:disabled) ~ .lever:active:after,
input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);
}

.switch input[type=checkbox][disabled] + .lever {
  cursor: default;
}

.switch label input[type=checkbox][disabled] + .lever:after,
.switch label input[type=checkbox][disabled]:checked + .lever:after {
  background-color: #BDBDBD;
}

/* Select Field
   ========================================================================== */
select {
  display: none;
}

select.browser-default {
  display: block;
}

select {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  height: 3rem;
}

.select-label {
  position: absolute;
}

.select-wrapper {
  position: relative;
}

.select-wrapper input.select-dropdown {
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  outline: none;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 0;
  display: block;
}

.select-wrapper span.caret {
  color: initial;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 10px;
  margin: auto 0;
  font-size: 10px;
  line-height: 10px;
}

.select-wrapper span.caret.disabled {
  color: rgba(0, 0, 0, 0.26);
}

.select-wrapper + label {
  position: absolute;
  top: -14px;
  font-size: 0.8rem;
}

select:disabled {
  color: rgba(0, 0, 0, 0.3);
}

.select-wrapper input.select-dropdown:disabled {
  color: rgba(0, 0, 0, 0.3);
  cursor: default;
  -webkit-user-select: none;
  /* webkit (safari, chrome) browsers */
  -moz-user-select: none;
  /* mozilla browsers */
  -ms-user-select: none;
  /* IE10+ */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.select-wrapper i {
  color: rgba(0, 0, 0, 0.3);
}

.select-dropdown li.disabled,
.select-dropdown li.disabled > span,
.select-dropdown li.optgroup {
  color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
}

.prefix ~ .select-wrapper {
  margin-left: 3rem;
  width: 92%;
  width: calc(100% - 3rem);
}

.prefix ~ label {
  margin-left: 3rem;
}

.select-dropdown li img {
  height: 40px;
  width: 40px;
  margin: 5px 15px;
  float: right;
}

.select-dropdown li.optgroup {
  border-top: 1px solid #eee;
}

.select-dropdown li.optgroup.selected > span {
  color: rgba(0, 0, 0, 0.7);
}

.select-dropdown li.optgroup > span {
  color: rgba(0, 0, 0, 0.4);
}

.select-dropdown li.optgroup ~ li.optgroup-option {
  padding-left: 1rem;
}

/* File Input
   ========================================================================== */
.file-field {
  position: relative;
}

.file-field .file-path-wrapper {
  overflow: hidden;
  padding-left: 10px;
}

.file-field input.file-path {
  width: 100%;
}

.file-field .btn, .file-field .btn-large {
  float: left;
  height: 3rem;
  line-height: 3rem;
}

.file-field span {
  cursor: pointer;
}

.file-field input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}

/* Range
   ========================================================================== */
.range-field {
  position: relative;
}

input[type=range],
input[type=range] + .thumb {
  cursor: pointer;
}

input[type=range] {
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  margin: 15px 0;
  padding: 0;
}

input[type=range]:focus {
  outline: none;
}

input[type=range] + .thumb {
  position: absolute;
  top: 10px;
  left: 0;
  border: none;
  height: 0;
  width: 0;
  border-radius: 50%;
  background-color: #26a69a;
  margin-left: 7px;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

input[type=range] + .thumb .value {
  display: block;
  width: 30px;
  text-align: center;
  color: #26a69a;
  font-size: 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

input[type=range] + .thumb.active {
  border-radius: 50% 50% 50% 0;
}

input[type=range] + .thumb.active .value {
  color: #fff;
  margin-left: -1px;
  margin-top: 8px;
  font-size: 10px;
}

input[type=range] {
  -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
  height: 3px;
  background: #c2c0c2;
  border: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #26a69a;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  margin: -5px 0 0 0;
  transition: .3s;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type=range] {
  /* fix for FF unable to apply focus style bug  */
  border: 1px solid white;
  /*required for proper track sizing in FF*/
}

input[type=range]::-moz-range-track {
  height: 3px;
  background: #ddd;
  border: none;
}

input[type=range]::-moz-range-thumb {
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #26a69a;
  margin-top: -5px;
}

input[type=range]:-moz-focusring {
  outline: 1px solid #fff;
  outline-offset: -1px;
}

input[type=range]:focus::-moz-range-track {
  background: #ccc;
}

input[type=range]::-ms-track {
  height: 3px;
  background: transparent;
  border-color: transparent;
  border-width: 6px 0;
  /*remove default tick marks*/
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #777;
}

input[type=range]::-ms-fill-upper {
  background: #ddd;
}

input[type=range]::-ms-thumb {
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #26a69a;
}

input[type=range]:focus::-ms-fill-lower {
  background: #888;
}

input[type=range]:focus::-ms-fill-upper {
  background: #ccc;
}

/***************
    Nav List
***************/
.table-of-contents.fixed {
  position: fixed;
}

.table-of-contents li {
  padding: 2px 0;
}

.table-of-contents a {
  display: inline-block;
  font-weight: 300;
  color: #757575;
  padding-left: 20px;
  height: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: .4;
  display: inline-block;
}

.table-of-contents a:hover {
  color: #a8a8a8;
  padding-left: 19px;
  border-left: 1px solid #ee6e73;
}

.table-of-contents a.active {
  font-weight: 500;
  padding-left: 18px;
  border-left: 2px solid #ee6e73;
}

.side-nav {
  position: fixed;
  width: 300px;
  left: 0;
  top: 0;
  margin: 0;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  height: 100%;
  height: calc(100% + 60px);
  height: -moz-calc(100%);
  padding-bottom: 60px;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translateX(-105%);
          transform: translateX(-105%);
}

.side-nav.right-aligned {
  right: 0;
  -webkit-transform: translateX(105%);
          transform: translateX(105%);
  left: auto;
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}

.side-nav .collapsible {
  margin: 0;
}

.side-nav li {
  float: none;
  line-height: 48px;
}

.side-nav li.active {
  background-color: rgba(0, 0, 0, 0.05);
}

.side-nav li > a {
  color: rgba(0, 0, 0, 0.87);
  display: block;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  line-height: 48px;
  padding: 0 32px;
}

.side-nav li > a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-flat, .side-nav li > a.btn-floating {
  margin: 10px 15px;
}

.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-floating {
  color: #fff;
}

.side-nav li > a.btn-flat {
  color: #343434;
}

.side-nav li > a.btn:hover, .side-nav li > a.btn-large:hover, .side-nav li > a.btn-large:hover {
  background-color: #2bbbad;
}

.side-nav li > a.btn-floating:hover {
  background-color: #26a69a;
}

.side-nav li > a > i,
.side-nav li > a > [class^="mdi-"], .side-nav li > a li > a > [class*="mdi-"],
.side-nav li > a > i.material-icons {
  float: left;
  height: 48px;
  line-height: 48px;
  margin: 0 32px 0 0;
  width: 24px;
  color: rgba(0, 0, 0, 0.54);
}

.side-nav .divider {
  margin: 8px 0 0 0;
}

.side-nav .subheader {
  cursor: initial;
  pointer-events: none;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  font-weight: 500;
  line-height: 48px;
}

.side-nav .subheader:hover {
  background-color: transparent;
}

.side-nav .userView {
  position: relative;
  padding: 32px 32px 0;
  margin-bottom: 8px;
}

.side-nav .userView > a {
  height: auto;
  padding: 0;
}

.side-nav .userView > a:hover {
  background-color: transparent;
}

.side-nav .userView .background {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.side-nav .userView .circle, .side-nav .userView .name, .side-nav .userView .email {
  display: block;
}

.side-nav .userView .circle {
  height: 64px;
  width: 64px;
}

.side-nav .userView .name,
.side-nav .userView .email {
  font-size: 14px;
  line-height: 24px;
}

.side-nav .userView .name {
  margin-top: 16px;
  font-weight: 500;
}

.side-nav .userView .email {
  padding-bottom: 16px;
  font-weight: 400;
}

.drag-target {
  height: 100%;
  width: 10px;
  position: fixed;
  top: 0;
  z-index: 998;
}

.side-nav.fixed {
  left: 0;
  -webkit-transform: translateX(0);
          transform: translateX(0);
  position: fixed;
}

.side-nav.fixed.right-aligned {
  right: 0;
  left: auto;
}

@media only screen and (max-width: 992px) {
  .side-nav.fixed {
    -webkit-transform: translateX(-105%);
            transform: translateX(-105%);
  }
  .side-nav.fixed.right-aligned {
    -webkit-transform: translateX(105%);
            transform: translateX(105%);
  }
  .side-nav a {
    padding: 0 16px;
  }
  .side-nav .userView {
    padding: 16px 16px 0;
  }
}

.side-nav .collapsible-body > ul:not(.collapsible) > li.active,
.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {
  background-color: #ee6e73;
}

.side-nav .collapsible-body > ul:not(.collapsible) > li.active a,
.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {
  color: #fff;
}

.side-nav .collapsible-body {
  padding: 0;
}

#sidenav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 997;
  will-change: opacity;
}

/*
    @license
    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**************************/
/* STYLES FOR THE SPINNER */
/**************************/
/*
 * Constants:
 *      STROKEWIDTH = 3px
 *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
 *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
 *      ARCSTARTROT = 216 degrees (how much the start location of the arc
 *                                should rotate each time, 216 gives us a
 *                                5 pointed star shape (it's 360/5 * 3).
 *                                For a 7 pointed star, we might do
 *                                360/7 * 3 = 154.286)
 *      CONTAINERWIDTH = 28px
 *      SHRINK_TIME = 400ms
 */
.preloader-wrapper {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
}

.preloader-wrapper.small {
  width: 36px;
  height: 36px;
}

.preloader-wrapper.big {
  width: 64px;
  height: 64px;
}

.preloader-wrapper.active {
  /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
  -webkit-animation: container-rotate 1568ms linear infinite;
  animation: container-rotate 1568ms linear infinite;
}

@-webkit-keyframes container-rotate {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes container-rotate {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-color: #26a69a;
}

.spinner-blue,
.spinner-blue-only {
  border-color: #4285f4;
}

.spinner-red,
.spinner-red-only {
  border-color: #db4437;
}

.spinner-yellow,
.spinner-yellow-only {
  border-color: #f4b400;
}

.spinner-green,
.spinner-green-only {
  border-color: #0f9d58;
}

/**
 * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
 *
 * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
 * guarantee that the animation will start _exactly_ after that value. So we avoid using
 * animation-delay and instead set custom keyframes for each color (as redundant as it
 * seems).
 *
 * We write out each animation in full (instead of separating animation-name,
 * animation-duration, etc.) because under the polyfill, Safari does not recognize those
 * specific properties properly, treats them as -webkit-animation, and overrides the
 * other animation rules. See https://github.com/Polymer/platform/issues/53.
 */
.active .spinner-layer.spinner-blue {
  /* durations: 4 * ARCTIME */
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.active .spinner-layer.spinner-red {
  /* durations: 4 * ARCTIME */
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.active .spinner-layer.spinner-yellow {
  /* durations: 4 * ARCTIME */
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.active .spinner-layer.spinner-green {
  /* durations: 4 * ARCTIME */
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.active .spinner-layer,
.active .spinner-layer.spinner-blue-only,
.active .spinner-layer.spinner-red-only,
.active .spinner-layer.spinner-yellow-only,
.active .spinner-layer.spinner-green-only {
  /* durations: 4 * ARCTIME */
  opacity: 1;
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@-webkit-keyframes fill-unfill-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
  }
  /* 0.5 * ARCSIZE */
  25% {
    -webkit-transform: rotate(270deg);
  }
  /* 1   * ARCSIZE */
  37.5% {
    -webkit-transform: rotate(405deg);
  }
  /* 1.5 * ARCSIZE */
  50% {
    -webkit-transform: rotate(540deg);
  }
  /* 2   * ARCSIZE */
  62.5% {
    -webkit-transform: rotate(675deg);
  }
  /* 2.5 * ARCSIZE */
  75% {
    -webkit-transform: rotate(810deg);
  }
  /* 3   * ARCSIZE */
  87.5% {
    -webkit-transform: rotate(945deg);
  }
  /* 3.5 * ARCSIZE */
  to {
    -webkit-transform: rotate(1080deg);
  }
  /* 4   * ARCSIZE */
}

@keyframes fill-unfill-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  /* 0.5 * ARCSIZE */
  25% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  /* 1   * ARCSIZE */
  37.5% {
    -webkit-transform: rotate(405deg);
            transform: rotate(405deg);
  }
  /* 1.5 * ARCSIZE */
  50% {
    -webkit-transform: rotate(540deg);
            transform: rotate(540deg);
  }
  /* 2   * ARCSIZE */
  62.5% {
    -webkit-transform: rotate(675deg);
            transform: rotate(675deg);
  }
  /* 2.5 * ARCSIZE */
  75% {
    -webkit-transform: rotate(810deg);
            transform: rotate(810deg);
  }
  /* 3   * ARCSIZE */
  87.5% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg);
  }
  /* 3.5 * ARCSIZE */
  to {
    -webkit-transform: rotate(1080deg);
            transform: rotate(1080deg);
  }
  /* 4   * ARCSIZE */
}

@-webkit-keyframes blue-fade-in-out {
  from {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  89% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blue-fade-in-out {
  from {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  89% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes red-fade-in-out {
  from {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
}

@keyframes red-fade-in-out {
  from {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
}

@-webkit-keyframes yellow-fade-in-out {
  from {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
}

@keyframes yellow-fade-in-out {
  from {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
}

@-webkit-keyframes green-fade-in-out {
  from {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes green-fade-in-out {
  from {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/**
 * Patch the gap that appear between the two adjacent div.circle-clipper while the
 * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
 */
.gap-patch {
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
}

.gap-patch .circle {
  width: 1000%;
  left: -450%;
}

.circle-clipper {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
}

.circle-clipper .circle {
  width: 200%;
  height: 100%;
  border-width: 3px;
  /* STROKEWIDTH */
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent !important;
  border-radius: 50%;
  -webkit-animation: none;
  animation: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

.circle-clipper.left .circle {
  left: 0;
  border-right-color: transparent !important;
  -webkit-transform: rotate(129deg);
  transform: rotate(129deg);
}

.circle-clipper.right .circle {
  left: -100%;
  border-left-color: transparent !important;
  -webkit-transform: rotate(-129deg);
  transform: rotate(-129deg);
}

.active .circle-clipper.left .circle {
  /* duration: ARCTIME */
  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.active .circle-clipper.right .circle {
  /* duration: ARCTIME */
  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@-webkit-keyframes left-spin {
  from {
    -webkit-transform: rotate(130deg);
  }
  50% {
    -webkit-transform: rotate(-5deg);
  }
  to {
    -webkit-transform: rotate(130deg);
  }
}

@keyframes left-spin {
  from {
    -webkit-transform: rotate(130deg);
            transform: rotate(130deg);
  }
  50% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
  to {
    -webkit-transform: rotate(130deg);
            transform: rotate(130deg);
  }
}

@-webkit-keyframes right-spin {
  from {
    -webkit-transform: rotate(-130deg);
  }
  50% {
    -webkit-transform: rotate(5deg);
  }
  to {
    -webkit-transform: rotate(-130deg);
  }
}

@keyframes right-spin {
  from {
    -webkit-transform: rotate(-130deg);
            transform: rotate(-130deg);
  }
  50% {
    -webkit-transform: rotate(5deg);
            transform: rotate(5deg);
  }
  to {
    -webkit-transform: rotate(-130deg);
            transform: rotate(-130deg);
  }
}

#spinnerContainer.cooldown {
  /* duration: SHRINK_TIME */
  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

@-webkit-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.slider {
  position: relative;
  height: 400px;
  width: 100%;
}

.slider.fullscreen {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slider.fullscreen ul.slides {
  height: 100%;
}

.slider.fullscreen ul.indicators {
  z-index: 2;
  bottom: 30px;
}

.slider .slides {
  background-color: #9e9e9e;
  margin: 0;
  height: 400px;
}

.slider .slides li {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: inherit;
  overflow: hidden;
}

.slider .slides li img {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.slider .slides li .caption {
  color: #fff;
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  opacity: 0;
}

.slider .slides li .caption p {
  color: #e0e0e0;
}

.slider .slides li.active {
  z-index: 2;
}

.slider .indicators {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.slider .indicators .indicator-item {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 16px;
  width: 16px;
  margin: 0 12px;
  background-color: #e0e0e0;
  transition: background-color .3s;
  border-radius: 50%;
}

.slider .indicators .indicator-item.active {
  background-color: #4CAF50;
}

.carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px;
  -webkit-perspective: 500px;
          perspective: 500px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
}

.carousel.carousel-slider {
  top: 0;
  left: 0;
  height: 0;
}

.carousel.carousel-slider .carousel-fixed-item {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 1;
}

.carousel.carousel-slider .carousel-fixed-item.with-indicators {
  bottom: 68px;
}

.carousel.carousel-slider .carousel-item {
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel.carousel-slider .carousel-item h2 {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.carousel.carousel-slider .carousel-item p {
  font-size: 15px;
}

.carousel .carousel-item {
  display: none;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel .carousel-item > img {
  width: 100%;
}

.carousel .indicators {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.carousel .indicators .indicator-item {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 24px 4px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color .3s;
  border-radius: 50%;
}

.carousel .indicators .indicator-item.active {
  background-color: #fff;
}

.carousel.scrolling .carousel-item .materialboxed,
.carousel .carousel-item:not(.active) .materialboxed {
  pointer-events: none;
}

.tap-target-wrapper {
  width: 800px;
  height: 800px;
  position: fixed;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0s .3s;
}

.tap-target-wrapper.open {
  visibility: visible;
  transition: visibility 0s;
}

.tap-target-wrapper.open .tap-target {
  -webkit-transform: scale(1);
          transform: scale(1);
  opacity: .95;
  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.tap-target-wrapper.open .tap-target-wave::before {
  -webkit-transform: scale(1);
          transform: scale(1);
}

.tap-target-wrapper.open .tap-target-wave::after {
  visibility: visible;
  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;
  transition: opacity .3s, transform .3s, visibility 0s 1s;
  transition: opacity .3s, transform .3s, visibility 0s 1s, -webkit-transform .3s;
}

.tap-target {
  position: absolute;
  font-size: 1rem;
  border-radius: 50%;
  background-color: #ee6e73;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transform: scale(0);
          transform: scale(0);
  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
}

.tap-target-content {
  position: relative;
  display: table-cell;
}

.tap-target-wave {
  position: absolute;
  border-radius: 50%;
  z-index: 10001;
}

.tap-target-wave::before, .tap-target-wave::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ffffff;
}

.tap-target-wave::before {
  -webkit-transform: scale(0);
          transform: scale(0);
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
}

.tap-target-wave::after {
  visibility: hidden;
  transition: opacity .3s, visibility 0s, -webkit-transform .3s;
  transition: opacity .3s, transform .3s, visibility 0s;
  transition: opacity .3s, transform .3s, visibility 0s, -webkit-transform .3s;
  z-index: -1;
}

.tap-target-origin {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  z-index: 10002;
  position: absolute !important;
}

.tap-target-origin:not(.btn):not(.btn-large), .tap-target-origin:not(.btn):not(.btn-large):hover {
  background: none;
}

@media only screen and (max-width: 600px) {
  .tap-target, .tap-target-wrapper {
    width: 600px;
    height: 600px;
  }
}

.pulse {
  overflow: initial;
  position: relative;
}

.pulse::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: inherit;
  border-radius: inherit;
  transition: opacity .3s, -webkit-transform .3s;
  transition: opacity .3s, transform .3s;
  transition: opacity .3s, transform .3s, -webkit-transform .3s;
  -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
          animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  z-index: -1;
}

@-webkit-keyframes pulse-animation {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}

@keyframes pulse-animation {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}

/* ==========================================================================
   $BASE-PICKER
   ========================================================================== */
/**
 * Note: the root picker element should *NOT* be styled more than what's here.
 */
.picker {
  font-size: 16px;
  text-align: left;
  line-height: 1.2;
  color: #000000;
  position: absolute;
  z-index: 10000;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/**
 * The picker input element.
 */
.picker__input {
  cursor: default;
}

/**
 * When the picker is opened, the input element is "activated".
 */
.picker__input.picker__input--active {
  border-color: #0089ec;
}

/**
 * The holder is the only "scrollable" top-level container element.
 */
.picker__holder {
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/*!
 * Default mobile-first, responsive styling for pickadate.js
 * Demo: http://amsul.github.io/pickadate.js
 */
/**
 * Note: the root picker element should *NOT* be styled more than what's here.
 */
/**
 * Make the holder and frame fullscreen.
 */
.picker__holder,
.picker__frame {
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
}

/**
 * The holder should overlay the entire screen.
 */
.picker__holder {
  position: fixed;
  transition: background 0.15s ease-out, top 0s 0.15s;
  -webkit-backface-visibility: hidden;
}

/**
 * The frame that bounds the box contents of the picker.
 */
.picker__frame {
  position: absolute;
  margin: 0 auto;
  min-width: 256px;
  width: 300px;
  max-height: 350px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  opacity: 0;
  transition: all 0.15s ease-out;
}

@media (min-height: 28.875em) {
  .picker__frame {
    overflow: visible;
    top: auto;
    bottom: -100%;
    max-height: 80%;
  }
}

@media (min-height: 40.125em) {
  .picker__frame {
    margin-bottom: 7.5%;
  }
}

/**
 * The wrapper sets the stage to vertically align the box contents.
 */
.picker__wrap {
  display: table;
  width: 100%;
  height: 100%;
}

@media (min-height: 28.875em) {
  .picker__wrap {
    display: block;
  }
}

/**
 * The box contains all the picker contents.
 */
.picker__box {
  background: #ffffff;
  display: table-cell;
  vertical-align: middle;
}

@media (min-height: 28.875em) {
  .picker__box {
    display: block;
    border: 1px solid #777777;
    border-top-color: #898989;
    border-bottom-width: 0;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);
  }
}

/**
 * When the picker opens...
 */
.picker--opened .picker__holder {
  top: 0;
  background: transparent;
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)";
  zoom: 1;
  background: rgba(0, 0, 0, 0.32);
  transition: background 0.15s ease-out;
}

.picker--opened .picker__frame {
  top: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  -moz-opacity: 1;
  opacity: 1;
}

@media (min-height: 35.875em) {
  .picker--opened .picker__frame {
    top: 10%;
    bottom: auto;
  }
}

/**
 * For `large` screens, transform into an inline picker.
 */
/* ==========================================================================
   CUSTOM MATERIALIZE STYLES
   ========================================================================== */
.picker__input.picker__input--active {
  border-color: #E3F2FD;
}

.picker__frame {
  margin: 0 auto;
  max-width: 325px;
}

@media (min-height: 38.875em) {
  .picker--opened .picker__frame {
    top: 10%;
    bottom: auto;
  }
}

/* ==========================================================================
   $BASE-DATE-PICKER
   ========================================================================== */
/**
 * The picker box.
 */
.picker__box {
  padding: 0 1em;
}

/**
 * The header containing the month and year stuff.
 */
.picker__header {
  text-align: center;
  position: relative;
  margin-top: .75em;
}

/**
 * The month and year labels.
 */
.picker__month,
.picker__year {
  display: inline-block;
  margin-left: .25em;
  margin-right: .25em;
}

/**
 * The month and year selectors.
 */
.picker__select--month,
.picker__select--year {
  height: 2em;
  padding: 0;
  margin-left: .25em;
  margin-right: .25em;
}

.picker__select--month.browser-default {
  display: inline;
  background-color: #FFFFFF;
  width: 40%;
}

.picker__select--year.browser-default {
  display: inline;
  background-color: #FFFFFF;
  width: 26%;
}

.picker__select--month:focus,
.picker__select--year:focus {
  border-color: rgba(0, 0, 0, 0.05);
}

/**
 * The month navigation buttons.
 */
.picker__nav--prev,
.picker__nav--next {
  position: absolute;
  padding: .5em 1.25em;
  width: 1em;
  height: 1em;
  box-sizing: content-box;
  top: -0.25em;
}

.picker__nav--prev {
  left: -1em;
  padding-right: 1.25em;
}

.picker__nav--next {
  right: -1em;
  padding-left: 1.25em;
}

.picker__nav--disabled,
.picker__nav--disabled:hover,
.picker__nav--disabled:before,
.picker__nav--disabled:before:hover {
  cursor: default;
  background: none;
  border-right-color: #f5f5f5;
  border-left-color: #f5f5f5;
}

/**
 * The calendar table of dates
 */
.picker__table {
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 1rem;
  width: 100%;
  margin-top: .75em;
  margin-bottom: .5em;
}

.picker__table th, .picker__table td {
  text-align: center;
}

.picker__table td {
  margin: 0;
  padding: 0;
}

/**
 * The weekday labels
 */
.picker__weekday {
  width: 14.285714286%;
  font-size: .75em;
  padding-bottom: .25em;
  color: #999999;
  font-weight: 500;
  /* Increase the spacing a tad */
}

@media (min-height: 33.875em) {
  .picker__weekday {
    padding-bottom: .5em;
  }
}

/**
 * The days on the calendar
 */
.picker__day--today {
  position: relative;
  color: #595959;
  letter-spacing: -.3;
  padding: .75rem 0;
  font-weight: 400;
  border: 1px solid transparent;
}

.picker__day--disabled:before {
  border-top-color: #aaaaaa;
}

.picker__day--infocus:hover {
  cursor: pointer;
  color: #000;
  font-weight: 500;
}

.picker__day--outfocus {
  display: none;
  padding: .75rem 0;
  color: #fff;
}

.picker__day--outfocus:hover {
  cursor: pointer;
  color: #dddddd;
  font-weight: 500;
}

.picker__day--highlighted:hover,
.picker--focused .picker__day--highlighted {
  cursor: pointer;
}

.picker__day--selected,
.picker__day--selected:hover,
.picker--focused .picker__day--selected {
  border-radius: 50%;
  -webkit-transform: scale(0.75);
          transform: scale(0.75);
  background: #0089ec;
  color: #ffffff;
}

.picker__day--disabled,
.picker__day--disabled:hover,
.picker--focused .picker__day--disabled {
  background: #f5f5f5;
  border-color: #f5f5f5;
  color: #dddddd;
  cursor: default;
}

.picker__day--highlighted.picker__day--disabled,
.picker__day--highlighted.picker__day--disabled:hover {
  background: #bbbbbb;
}

/**
 * The footer containing the "today", "clear", and "close" buttons.
 */
.picker__footer {
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.picker__button--today,
.picker__button--clear,
.picker__button--close {
  border: 1px solid #ffffff;
  background: #ffffff;
  font-size: .8em;
  padding: .66em 0;
  font-weight: bold;
  width: 33%;
  display: inline-block;
  vertical-align: bottom;
}

.picker__button--today:hover,
.picker__button--clear:hover,
.picker__button--close:hover {
  cursor: pointer;
  color: #000000;
  background: #b1dcfb;
  border-bottom-color: #b1dcfb;
}

.picker__button--today:focus,
.picker__button--clear:focus,
.picker__button--close:focus {
  background: #b1dcfb;
  border-color: rgba(0, 0, 0, 0.05);
  outline: none;
}

.picker__button--today:before,
.picker__button--clear:before,
.picker__button--close:before {
  position: relative;
  display: inline-block;
  height: 0;
}

.picker__button--today:before,
.picker__button--clear:before {
  content: " ";
  margin-right: .45em;
}

.picker__button--today:before {
  top: -0.05em;
  width: 0;
  border-top: 0.66em solid #0059bc;
  border-left: .66em solid transparent;
}

.picker__button--clear:before {
  top: -0.25em;
  width: .66em;
  border-top: 3px solid #ee2200;
}

.picker__button--close:before {
  content: "\D7";
  top: -0.1em;
  vertical-align: top;
  font-size: 1.1em;
  margin-right: .35em;
  color: #777777;
}

.picker__button--today[disabled],
.picker__button--today[disabled]:hover {
  background: #f5f5f5;
  border-color: #f5f5f5;
  color: #dddddd;
  cursor: default;
}

.picker__button--today[disabled]:before {
  border-top-color: #aaaaaa;
}

/* ==========================================================================
   CUSTOM MATERIALIZE STYLES
   ========================================================================== */
.picker__box {
  border-radius: 2px;
  overflow: hidden;
}

.picker__date-display {
  text-align: center;
  background-color: #26a69a;
  color: #fff;
  padding-bottom: 15px;
  font-weight: 300;
}

.picker__nav--prev:hover,
.picker__nav--next:hover {
  cursor: pointer;
  color: #000000;
  background: #a1ded8;
}

.picker__weekday-display {
  background-color: #1f897f;
  padding: 10px;
  font-weight: 200;
  letter-spacing: .5;
  font-size: 1rem;
  margin-bottom: 15px;
}

.picker__month-display {
  text-transform: uppercase;
  font-size: 2rem;
}

.picker__day-display {
  font-size: 4.5rem;
  font-weight: 400;
}

.picker__year-display {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.4);
}

.picker__box {
  padding: 0;
}

.picker__calendar-container {
  padding: 0 1rem;
}

.picker__calendar-container thead {
  border: none;
}

.picker__table {
  margin-top: 0;
  margin-bottom: .5em;
}

.picker__day--infocus {
  color: #595959;
  letter-spacing: -.3;
  padding: .75rem 0;
  font-weight: 400;
  border: 1px solid transparent;
}

.picker__day.picker__day--today {
  color: #26a69a;
}

.picker__day.picker__day--today.picker__day--selected {
  color: #fff;
}

.picker__weekday {
  font-size: .9rem;
}

.picker__day--selected,
.picker__day--selected:hover,
.picker--focused .picker__day--selected {
  border-radius: 50%;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  background-color: #26a69a;
  color: #ffffff;
}

.picker__day--selected.picker__day--outfocus,
.picker__day--selected:hover.picker__day--outfocus,
.picker--focused .picker__day--selected.picker__day--outfocus {
  background-color: #a1ded8;
}

.picker__footer {
  text-align: right;
  padding: 5px 10px;
}

.picker__close, .picker__today {
  font-size: 1.1rem;
  padding: 0 1rem;
  color: #26a69a;
}

.picker__nav--prev:before,
.picker__nav--next:before {
  content: " ";
  border-top: .5em solid transparent;
  border-bottom: .5em solid transparent;
  border-right: 0.75em solid #676767;
  width: 0;
  height: 0;
  display: block;
  margin: 0 auto;
}

.picker__nav--next:before {
  border-right: 0;
  border-left: 0.75em solid #676767;
}

button.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {
  background-color: #a1ded8;
}

/* ==========================================================================
   $BASE-TIME-PICKER
   ========================================================================== */
/**
 * The list of times.
 */
.picker__list {
  list-style: none;
  padding: 0.75em 0 4.2em;
  margin: 0;
}

/**
 * The times on the clock.
 */
.picker__list-item {
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  margin-bottom: -1px;
  position: relative;
  background: #ffffff;
  padding: .75em 1.25em;
}

@media (min-height: 46.75em) {
  .picker__list-item {
    padding: .5em 1em;
  }
}

/* Hovered time */
.picker__list-item:hover {
  cursor: pointer;
  color: #000000;
  background: #b1dcfb;
  border-color: #0089ec;
  z-index: 10;
}

/* Highlighted and hovered/focused time */
.picker__list-item--highlighted {
  border-color: #0089ec;
  z-index: 10;
}

.picker__list-item--highlighted:hover,
.picker--focused .picker__list-item--highlighted {
  cursor: pointer;
  color: #000000;
  background: #b1dcfb;
}

/* Selected and hovered/focused time */
.picker__list-item--selected,
.picker__list-item--selected:hover,
.picker--focused .picker__list-item--selected {
  background: #0089ec;
  color: #ffffff;
  z-index: 10;
}

/* Disabled time */
.picker__list-item--disabled,
.picker__list-item--disabled:hover,
.picker--focused .picker__list-item--disabled {
  background: #f5f5f5;
  border-color: #f5f5f5;
  color: #dddddd;
  cursor: default;
  border-color: #dddddd;
  z-index: auto;
}

/**
 * The clear button
 */
.picker--time .picker__button--clear {
  display: block;
  width: 80%;
  margin: 1em auto 0;
  padding: 1em 1.25em;
  background: none;
  border: 0;
  font-weight: 500;
  font-size: .67em;
  text-align: center;
  text-transform: uppercase;
  color: #666;
}

.picker--time .picker__button--clear:hover,
.picker--time .picker__button--clear:focus {
  color: #000000;
  background: #b1dcfb;
  background: #ee2200;
  border-color: #ee2200;
  cursor: pointer;
  color: #ffffff;
  outline: none;
}

.picker--time .picker__button--clear:before {
  top: -0.25em;
  color: #666;
  font-size: 1.25em;
  font-weight: bold;
}

.picker--time .picker__button--clear:hover:before,
.picker--time .picker__button--clear:focus:before {
  color: #ffffff;
}

/* ==========================================================================
   $DEFAULT-TIME-PICKER
   ========================================================================== */
/**
 * The frame the bounds the time picker.
 */
.picker--time .picker__frame {
  min-width: 256px;
  max-width: 320px;
}

/**
 * The picker box.
 */
.picker--time .picker__box {
  font-size: 1em;
  background: #f2f2f2;
  padding: 0;
}

@media (min-height: 40.125em) {
  .picker--time .picker__box {
    margin-bottom: 5em;
  }
}
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About