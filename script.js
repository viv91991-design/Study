/* =========================================================
   IBPS RRB PO PRELIMS
   70-DAY MASTER TRACKER

   IMPORTANT:
   - All progress is saved in localStorage.
   - Every task has an independent checkbox.
   - The schedule below combines the original
     Quant + Reasoning tables.
========================================================= */


/* =========================================================
   1. COMPLETE 70-DAY MASTER SCHEDULE
========================================================= */

const schedule = [

/* DAY 1 */
{
day:1,
slots:[
["4:30–6:30 AM","Quant","Simplification — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Inequality — Concepts + 40 Q"],
["2:00–4:00 PM","Quant","Calculation practice — squares 1–30"],
["6:30–9:00 PM","Reasoning","Inequality timed practice + error analysis"]
]},

/* DAY 2 */
{
day:2,
slots:[
["4:30–6:30 AM","Quant","Approximation — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Syllogism — Concepts + 40 Q"],
["2:00–4:00 PM","Quant","Approximation timed practice"],
["6:30–9:00 PM","Quant","R1 Simplification — 15 Q + Approximation errors"]
]},

/* DAY 3 */
{
day:3,
slots:[
["4:30–6:30 AM","Quant","Number Series — Concepts + 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Coding-Decoding — 40 Q"],
["2:00–4:00 PM","Quant","Number Series timed practice"],
["6:30–9:00 PM","Reasoning","R1 Syllogism — 15 Q + Series calculation drill"]
]},

/* DAY 4 */
{
day:4,
slots:[
["4:30–6:30 AM","Quant","Number System — Concepts + 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Blood Relation — 40 Q"],
["2:00–4:00 PM","Quant","Number System practice"],
["6:30–9:00 PM","Reasoning","R1 Coding — 15 Q + Series/Number System revision"]
]},

/* DAY 5 */
{
day:5,
slots:[
["4:30–6:30 AM","Quant","HCF & LCM + 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Direction & Distance — 40 Q"],
["2:00–4:00 PM","Quant","HCF/LCM practice"],
["6:30–9:00 PM","Reasoning","R1 Blood Relation — 15 Q + Number System/HCF-LCM errors"]
]},

/* DAY 6 */
{
day:6,
slots:[
["4:30–6:30 AM","Quant","Percentage I — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Order & Ranking — 40 Q"],
["2:00–4:00 PM","Quant","Percentage calculations"],
["6:30–9:00 PM","Reasoning","R1 Direction — 15 Q + Percentage error review"]
]},

/* DAY 7 */
{
day:7,
slots:[
["4:30–6:30 AM","Quant","Percentage II + R1 Percentage"],
["10:00 AM–12:30 PM","Reasoning","Inequality + Syllogism revision"],
["2:00–4:00 PM","Reasoning","25-min Reasoning sectional"],
["6:30–9:00 PM","Reasoning","Sectional analysis + Quant Percentage revision"]
]},

/* DAY 8 */
{
day:8,
slots:[
["4:30–6:30 AM","Quant","Ratio — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Linear Seating Arrangement — 2 sets"],
["2:00–4:00 PM","Reasoning","Linear Seating timed sets"],
["6:30–9:00 PM","Quant","R2 Percentage — 15 Q + Ratio errors"]
]},

/* DAY 9 */
{
day:9,
slots:[
["4:30–6:30 AM","Quant","Ratio continued — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Circular Seating — 2 sets"],
["2:00–4:00 PM","Reasoning","Circular Seating timed sets"],
["6:30–9:00 PM","Quant","R1 Ratio — 15 Q + Ratio/Percentage mixed"]
]},

/* DAY 10 */
{
day:10,
slots:[
["4:30–6:30 AM","Quant","Average — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Floor Puzzle — 2 sets"],
["2:00–4:00 PM","Reasoning","Floor Puzzle timed sets"],
["6:30–9:00 PM","Quant","R2 Ratio — 15 Q + Ratio/Average errors"]
]},

/* DAY 11 */
{
day:11,
slots:[
["4:30–6:30 AM","Quant","Profit & Loss — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Box Puzzle — 2 sets"],
["2:00–4:00 PM","Reasoning","Box Puzzle timed sets"],
["6:30–9:00 PM","Quant","R1 Average — 15 Q + P&L timed practice/errors"]
]},

/* DAY 12 */
{
day:12,
slots:[
["4:30–6:30 AM","Quant","Discount + 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Month/Date Puzzle — 2 sets"],
["2:00–4:00 PM","Reasoning","Month/Date timed sets"],
["6:30–9:00 PM","Quant","R1 P&L — 20 Q + P&L/Discount error notebook"]
]},

/* DAY 13 */
{
day:13,
slots:[
["4:30–6:30 AM","Quant","Simple Interest — Concepts + 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Selection/Distribution — 2 sets"],
["2:00–4:00 PM","Reasoning","Selection practice"],
["6:30–9:00 PM","Quant","R1 Discount — 15 Q + SI/P&L revision"]
]},

/* DAY 14 */
{
day:14,
slots:[
["4:30–6:30 AM","Quant","SI + CI — R1 SI"],
["10:00 AM–12:30 PM","Reasoning","Mixed Puzzles — 2 sets"],
["2:00–4:00 PM","Reasoning","Reasoning sectional — 25 min"],
["6:30–9:00 PM","Quant","CI basics + formulas + SI/CI mixed practice"]
]},

/* DAY 15 */
{
day:15,
slots:[
["4:30–6:30 AM","Quant","Compound Interest — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Linear + Circular Seating — 3 sets"],
["2:00–4:00 PM","Reasoning","Seating timed practice"],
["6:30–9:00 PM","Quant","R1 CI — 15 Q + CI/SI revision + seating errors"]
]},

/* DAY 16 */
{
day:16,
slots:[
["4:30–6:30 AM","Quant","Time & Work — Concepts + 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Floor + Box Puzzles — 3 sets"],
["2:00–4:00 PM","Reasoning","Puzzle timed practice"],
["6:30–9:00 PM","Quant","R1 CI — 15 Q + T&W errors + puzzle revision"]
]},

/* DAY 17 */
{
day:17,
slots:[
["4:30–6:30 AM","Quant","Pipes & Cisterns — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Coding + Blood + Direction mixed — 60 Q"],
["2:00–4:00 PM","Reasoning","Coded questions practice"],
["6:30–9:00 PM","Quant","R1 T&W — 15 Q + Pipes/T&W mixed"]
]},

/* DAY 18 */
{
day:18,
slots:[
["4:30–6:30 AM","Quant","Time-Speed-Distance — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Month/Day/Year + Scheduling — 3 sets"],
["2:00–4:00 PM","Reasoning","Scheduling timed practice"],
["6:30–9:00 PM","Quant","R1 Pipes — 15 Q + TSD errors"]
]},

/* DAY 19 */
{
day:19,
slots:[
["4:30–6:30 AM","Quant","Boats & Streams — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Seating — 3 sets"],
["2:00–4:00 PM","Reasoning","Seating timed practice"],
["6:30–9:00 PM","Quant","R1 TSD — 15 Q + TSD/Boats revision"]
]},

/* DAY 20 */
{
day:20,
slots:[
["4:30–6:30 AM","Quant","Partnership — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Input-Output — 3 sets"],
["2:00–4:00 PM","Reasoning","I/O timed practice"],
["6:30–9:00 PM","Quant","R1 Boats — 15 Q + Partnership/Boats revision"]
]},

/* DAY 21 */
{
day:21,
slots:[
["4:30–6:30 AM","Quant","Mixture & Alligation — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Data Sufficiency — 30 Q"],
["2:00–4:00 PM","Reasoning","Reasoning sectional — 25 min"],
["6:30–9:00 PM","Quant","R1 Partnership — 15 Q + Quant sectional"]
]},

/* DAY 22 */
{
day:22,
slots:[
["4:30–6:30 AM","Quant","Ages — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Statement & Conclusion — 40 Q"],
["2:00–4:00 PM","Reasoning","Statement practice"],
["6:30–9:00 PM","Quant","R1 Mixture — 15 Q + Ages/Mixture revision"]
]},

/* DAY 23 */
{
day:23,
slots:[
["4:30–6:30 AM","Quant","Mensuration — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Statement & Assumption + Argument — 40 Q"],
["2:00–4:00 PM","Reasoning","Critical reasoning practice"],
["6:30–9:00 PM","Quant","R1 Ages — 15 Q + Mensuration/Ages revision"]
]},

/* DAY 24 */
{
day:24,
slots:[
["4:30–6:30 AM","Quant","Probability — 40 Q"],
["10:00 AM–12:30 PM","Reasoning","Cause & Effect + Analogy/Classification — 40 Q"],
["2:00–4:00 PM","Reasoning","Mixed practice"],
["6:30–9:00 PM","Quant","R1 Mensuration — 15 Q + Probability/Mensuration revision"]
]},

/* DAY 25 */
{
day:25,
slots:[
["4:30–6:30 AM","Quant","Permutation & Combination — 40 Q"],
["10:00 AM–12:30 PM","Reasoning","Word Formation + Pair Formation + Odd One Out — 40 Q"],
["2:00–4:00 PM","Reasoning","Miscellaneous reasoning"],
["6:30–9:00 PM","Quant","R1 Probability — 15 Q + Probability/P&C revision"]
]},

/* DAY 26 */
{
day:26,
slots:[
["4:30–6:30 AM","Quant","Table DI — 4 sets"],
["10:00 AM–12:30 PM","Reasoning","Mixed Puzzle — 2 sets"],
["2:00–4:00 PM","Reasoning","Puzzle timed practice"],
["6:30–9:00 PM","Quant","R1 P&C — 15 Q + DI calculation practice"]
]},

/* DAY 27 */
{
day:27,
slots:[
["4:30–6:30 AM","Quant","Bar DI — 4 sets"],
["10:00 AM–12:30 PM","Reasoning","Coded Inequality/Blood/Direction — 60 Q"],
["2:00–4:00 PM","Reasoning","Coded reasoning timed"],
["6:30–9:00 PM","Quant","R1 Table DI — 1 set + DI calculation/errors"]
]},

/* DAY 28 */
{
day:28,
slots:[
["4:30–6:30 AM","Quant","Line + Pie DI — 5 sets"],
["10:00 AM–12:30 PM","Reasoning","Complete Reasoning Mixed — 60 Q"],
["2:00–4:00 PM","Reasoning","5 mixed sets"],
["6:30–9:00 PM","Mixed","FULL MOCK #1 + 90+ min analysis"]
]},

/* DAY 29 */
{
day:29,
slots:[
["4:30–6:30 AM","Quant","Quadratic Equations + Simplification — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Syllogism + Inequality — 60 Q"],
["2:00–4:00 PM","Reasoning","3 puzzles"],
["6:30–9:00 PM","Quant","R1 Line/Pie DI — 2 sets + P&L 15 + Ratio 15 + T&W 15 + DI 1 set"]
]},

/* DAY 30 */
{
day:30,
slots:[
["4:30–6:30 AM","Quant","Algebraic Identities + Number Series — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Coding + Series — 60 Q"],
["2:00–4:00 PM","Reasoning","Coding timed practice"],
["6:30–9:00 PM","Quant","Quadratic revision + P&L 15 + Percentage 15 + TSD 15"]
]},

/* DAY 31 */
{
day:31,
slots:[
["4:30–6:30 AM","Quant","Quant Data Sufficiency + Percentage — 50 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Puzzles — 3 sets"],
["2:00–4:00 PM","Reasoning","Seating/Puzzle timed practice"],
["6:30–9:00 PM","Quant","Ratio/Average revision + P&L 15 + Ratio 15 + DI 1 set"]
]},

/* DAY 32 */
{
day:32,
slots:[
["4:30–6:30 AM","Quant","Arithmetic Mixed — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Seating — 3 sets"],
["2:00–4:00 PM","Reasoning","Mixed reasoning timed practice"],
["6:30–9:00 PM","Quant","P&L/Discount revision + Quant sectional — 20 min"]
]},

/* DAY 33 */
{
day:33,
slots:[
["4:30–6:30 AM","Quant","Arithmetic Mixed — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Complete Reasoning Mixed — 80 Q"],
["2:00–4:00 PM","Reasoning","Puzzle selection practice"],
["6:30–9:00 PM","Quant","P&L + Discount intensive revision + P&L 15 + T&W 15 + TSD 15 + DI 1 set"]
]},

/* DAY 34 */
{
day:34,
slots:[
["4:30–6:30 AM","Quant","Weakest 3 Quant Chapters — 100 targeted Q"],
["10:00 AM–12:30 PM","Reasoning","Weakest 3 Reasoning Topics"],
["2:00–4:00 PM","Reasoning","Targeted practice"],
["6:30–9:00 PM","Mixed","Quant + Reasoning sectionals + analysis + formula revision"]
]},

/* DAY 35 */
{
day:35,
slots:[
["4:30–6:30 AM","Quant","Complete Quant Formula Revision"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 100 Q"],
["2:00–4:00 PM","Reasoning","Puzzle + Seating practice"],
["6:30–9:00 PM","Mixed","FULL MOCK #2"]
]},

/* DAY 36 */
{
day:36,
slots:[
["4:30–6:30 AM","Quant","Simplification + Approximation — 100 Q @ 25 sec"],
["10:00 AM–12:30 PM","Reasoning","Inequality + Syllogism — 60 Q"],
["2:00–4:00 PM","Reasoning","Quick-topic speed drill"],
["6:30–9:00 PM","Quant","P&L R6 — 15 Q + Percentage R5 — 15 Q + Quant sectional"]
]},

/* DAY 37 */
{
day:37,
slots:[
["4:30–6:30 AM","Quant","Series + Quadratic — 80 Q @ 30–35 sec"],
["10:00 AM–12:30 PM","Reasoning","Coding + Direction + Ranking — 60 Q"],
["2:00–4:00 PM","Reasoning","Timed mixed practice"],
["6:30–9:00 PM","Quant","Ratio R6 — 15 Q + Average R5 — 15 Q + series/Quadratic speed"]
]},

/* DAY 38 */
{
day:38,
slots:[
["4:30–6:30 AM","Quant","Percentage + Ratio — 60 Q @ 45 sec"],
["10:00 AM–12:30 PM","Reasoning","Blood + Coding + Inequality"],
["2:00–4:00 PM","Reasoning","Mixed timed practice"],
["6:30–9:00 PM","Quant","P&L — 15 Q + SI/CI — 15 Q + Quant sectional"]
]},

/* DAY 39 */
{
day:39,
slots:[
["4:30–6:30 AM","Quant","Average + P&L — 60 Q @ 50 sec"],
["10:00 AM–12:30 PM","Reasoning","Seating — 3 sets @ 5–6 min"],
["2:00–4:00 PM","Reasoning","Seating timed practice"],
["6:30–9:00 PM","Quant","P&L R5 — 15 Q + Ratio 15 Q + P&L timed 15 Q"]
]},

/* DAY 40 */
{
day:40,
slots:[
["4:30–6:30 AM","Quant","SI + CI — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Floor + Box — 3 sets"],
["2:00–4:00 PM","Reasoning","Puzzle timed practice"],
["6:30–9:00 PM","Quant","SI/CI formula revision + Quant sectional — 20 min"]
]},

/* DAY 41 */
{
day:41,
slots:[
["4:30–6:30 AM","Quant","T&W + Pipes — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Month/Day + Scheduling — 3 sets"],
["2:00–4:00 PM","Reasoning","Scheduling timed practice"],
["6:30–9:00 PM","Quant","T&W R5 — 15 Q + P&L 15 Q + T&W 15 Q"]
]},

/* DAY 42 */
{
day:42,
slots:[
["4:30–6:30 AM","Quant","TSD + Boats — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Puzzles — 3 sets"],
["2:00–4:00 PM","Reasoning","Puzzle selection practice"],
["6:30–9:00 PM","Mixed","FULL MOCK #3"]
]},

/* DAY 43 */
{
day:43,
slots:[
["4:30–6:30 AM","Quant","Mixture + Partnership — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Input-Output — 3 sets"],
["2:00–4:00 PM","Reasoning","I/O timed practice"],
["6:30–9:00 PM","Quant","Formula revision + DI + arithmetic revision"]
]},

/* DAY 44 */
{
day:44,
slots:[
["4:30–6:30 AM","Quant","Ages + Mensuration — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","Data Sufficiency + Statements — 50 Q"],
["2:00–4:00 PM","Reasoning","Critical reasoning practice"],
["6:30–9:00 PM","Quant","Ages/Mensuration formulas + Quant sectional — 20 min"]
]},

/* DAY 45 */
{
day:45,
slots:[
["4:30–6:30 AM","Quant","DI — 6 sets"],
["10:00 AM–12:30 PM","Reasoning","Seating — 3 sets"],
["2:00–4:00 PM","Reasoning","Mixed seating timed practice"],
["6:30–9:00 PM","Quant","DI calculation revision + Reasoning sectional + arithmetic revision"]
]},

/* DAY 46 */
{
day:46,
slots:[
["4:30–6:30 AM","Quant","Simplification + Series + Quadratic — 100 Q"],
["10:00 AM–12:30 PM","Reasoning","Syllogism + Inequality + Coding — 80 Q"],
["2:00–4:00 PM","Reasoning","Quick-topic speed drill"],
["6:30–9:00 PM","Mixed","Combined 45-min simulation"]
]},

/* DAY 47 */
{
day:47,
slots:[
["4:30–6:30 AM","Quant","Arithmetic Mixed — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Puzzle Selection Strategy"],
["2:00–4:00 PM","Reasoning","Mixed puzzles"],
["6:30–9:00 PM","Quant","Weak-topic revision + Quant sectional — 20 min"]
]},

/* DAY 48 */
{
day:48,
slots:[
["4:30–6:30 AM","Quant","DI + Arithmetic — 6 DI + 30 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 80 Q"],
["2:00–4:00 PM","Reasoning","Puzzle + Seating practice"],
["6:30–9:00 PM","Mixed","Reasoning sectional + Arithmetic + DI errors"]
]},

/* DAY 49 */
{
day:49,
slots:[
["4:30–6:30 AM","Quant","FULL MOCK #4"],
["10:00 AM–12:30 PM","Reasoning","FULL MOCK #4"],
["2:00–4:00 PM","Mixed","Mock analysis"],
["6:30–9:00 PM","Mixed","Reattempt wrong Quant + Reasoning questions + error notebook"]
]},

/* DAY 50 */
{
day:50,
slots:[
["4:30–6:30 AM","Quant","Simplification 30 + Approx 30 + Series 30 + Quadratic 20"],
["10:00 AM–12:30 PM","Reasoning","Inequality + Syllogism + Coding — 60 Q"],
["2:00–4:00 PM","Reasoning","Quick-topic timed practice"],
["6:30–9:00 PM","Quant","Formula revision + P&L + Percentage revision + Puzzle revision"]
]},

/* DAY 51 */
{
day:51,
slots:[
["4:30–6:30 AM","Quant","Percentage + Ratio + Average + P&L — 70 Q"],
["10:00 AM–12:30 PM","Reasoning","Ranking + Blood + Direction + Coding — 60 Q"],
["2:00–4:00 PM","Reasoning","Timed mixed practice"],
["6:30–9:00 PM","Quant","R5 revisions + Arithmetic @ 45–55 sec/Q + Quant sectional"]
]},

/* DAY 52 */
{
day:52,
slots:[
["4:30–6:30 AM","Quant","SI + CI + T&W + Pipes — 60 Q"],
["10:00 AM–12:30 PM","Reasoning","4 Puzzle Sets"],
["2:00–4:00 PM","Reasoning","Puzzle selection practice"],
["6:30–9:00 PM","Quant","Formula revision + Timed arithmetic + Quant sectional"]
]},

/* DAY 53 */
{
day:53,
slots:[
["4:30–6:30 AM","Quant","TSD + Boats + Mixture + Partnership — 70 Q"],
["10:00 AM–12:30 PM","Reasoning","Seating — 3 sets"],
["2:00–4:00 PM","Reasoning","Input-Output — 2 sets"],
["6:30–9:00 PM","Quant","Weak-topic revision + P&L + Ratio + Percentage"]
]},

/* DAY 54 */
{
day:54,
slots:[
["4:30–6:30 AM","Quant","DI — 6 sets + DS 20 Q"],
["10:00 AM–12:30 PM","Reasoning","Statement/Critical Reasoning — 50 Q"],
["2:00–4:00 PM","Reasoning","Mixed reasoning practice"],
["6:30–9:00 PM","Quant","DI formulas/calculation + Data Sufficiency practice + Quant sectional"]
]},

/* DAY 55 */
{
day:55,
slots:[
["4:30–6:30 AM","Quant","Calculation Marathon — 100 short Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 80 Q"],
["2:00–4:00 PM","Reasoning","Speed drill"],
["6:30–9:00 PM","Quant","Simplification/Approx speed + Series @ 35 sec + Quadratic @ 35 sec + Full Quant speed simulation"]
]},

/* DAY 56 */
{
day:56,
slots:[
["4:30–6:30 AM","Quant","FULL MOCK #5"],
["10:00 AM–12:30 PM","Reasoning","FULL MOCK #5"],
["2:00–4:00 PM","Mixed","Mock analysis"],
["6:30–9:00 PM","Mixed","Reattempt wrong Quant + Reasoning + Error notebook update"]
]},

/* DAY 57 */
{
day:57,
slots:[
["4:30–6:30 AM","Quant","Weak Quant Chapters — 60 timed Q"],
["10:00 AM–12:30 PM","Reasoning","Weak Reasoning Chapters — 3 sets + 40 Q"],
["2:00–4:00 PM","Reasoning","Targeted weak-topic practice"],
["6:30–9:00 PM","Mixed","Quant + Reasoning sectionals + weak-topic formulas"]
]},

/* DAY 58 */
{
day:58,
slots:[
["4:30–6:30 AM","Quant","Mixed Quant — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 80 Q"],
["2:00–4:00 PM","Reasoning","Timed mixed practice"],
["6:30–9:00 PM","Mixed","Quant + Reasoning sectionals + formula revision"]
]},

/* DAY 59 */
{
day:59,
slots:[
["4:30–6:30 AM","Quant","DI — 5 sets + 30 arithmetic Q"],
["10:00 AM–12:30 PM","Reasoning","3 Puzzles + 30 Quick Q"],
["2:00–4:00 PM","Reasoning","Puzzle selection practice"],
["6:30–9:00 PM","Mixed","Combined simulation + DI calculation + arithmetic speed"]
]},

/* DAY 60 */
{
day:60,
slots:[
["4:30–6:30 AM","Quant","FULL MOCK #6"],
["10:00 AM–12:30 PM","Reasoning","FULL MOCK #6"],
["2:00–4:00 PM","Mixed","Deep mock analysis"],
["6:30–9:00 PM","Mixed","Reattempt Quant/Reasoning mistakes + Create Top 20 Mistakes list"]
]},

/* DAY 61 */
{
day:61,
slots:[
["4:30–6:30 AM","Quant","Top 5 Weak Quant Chapters — 70 Q"],
["10:00 AM–12:30 PM","Reasoning","Top 5 Weak Reasoning Topics — 70 Q"],
["2:00–4:00 PM","Reasoning","Targeted practice"],
["6:30–9:00 PM","Mixed","2 Reasoning sectionals + Quant sectional + formula revision"]
]},

/* DAY 62 */
{
day:62,
slots:[
["4:30–6:30 AM","Quant","Mixed Quant — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 80 Q"],
["2:00–4:00 PM","Reasoning","Timed mixed practice"],
["6:30–9:00 PM","Mixed","Formula + error revision + Quant speed test + Reasoning 25-min sectional"]
]},

/* DAY 63 */
{
day:63,
slots:[
["4:30–6:30 AM","Quant","FULL MOCK #7"],
["10:00 AM–12:30 PM","Reasoning","FULL MOCK #7"],
["2:00–4:00 PM","Mixed","Mock analysis"],
["6:30–9:00 PM","Mixed","Reattempt wrong Quant + Reasoning + Error notebook update"]
]},

/* DAY 64 */
{
day:64,
slots:[
["4:30–6:30 AM","Quant","Weakest Quant Topics — 60 timed Q"],
["10:00 AM–12:30 PM","Reasoning","Weakest Reasoning Topics — 60 Q"],
["2:00–4:00 PM","Reasoning","Targeted timed practice"],
["6:30–9:00 PM","Mixed","Quant + Reasoning sectionals + formula revision"]
]},

/* DAY 65 */
{
day:65,
slots:[
["4:30–6:30 AM","Quant","Arithmetic Revision — 80 mixed Q"],
["10:00 AM–12:30 PM","Reasoning","3 Best Puzzle Types"],
["2:00–4:00 PM","Reasoning","Mixed quick topics"],
["6:30–9:00 PM","Mixed","Percentage + Ratio + Average + P&L + SI/CI + T&W + TSD + Mixture + Reasoning sectional"]
]},

/* DAY 66 */
{
day:66,
slots:[
["4:30–6:30 AM","Quant","20 Simplification + 20 Approx + 20 Series + 20 Quadratic"],
["10:00 AM–12:30 PM","Reasoning","Quick Topics — 50 Q"],
["2:00–4:00 PM","Reasoning","Syllogism/Inequality/Coding speed"],
["6:30–9:00 PM","Mixed","FULL MOCK #8 + calculation speed test"]
]},

/* DAY 67 */
{
day:67,
slots:[
["4:30–6:30 AM","Quant","Error Notebook — 50 Quant mistakes"],
["10:00 AM–12:30 PM","Reasoning","Error Notebook — 50 Reasoning mistakes"],
["2:00–4:00 PM","Mixed","Reattempt recurring errors"],
["6:30–9:00 PM","Mixed","Final Quant formula + Reasoning quick-topic revision"]
]},

/* DAY 68 */
{
day:68,
slots:[
["4:30–6:30 AM","Quant","Mixed Quant — 80 Q"],
["10:00 AM–12:30 PM","Reasoning","Mixed Reasoning — 80 Q"],
["2:00–4:00 PM","Reasoning","Timed mixed practice"],
