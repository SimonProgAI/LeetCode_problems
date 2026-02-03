/* 
DISTRIBUTE ENERGY PACKETS

You are given a list packets, where packets[i] represents the size of the i_th energy packet.
Each packet can be split into any number of smaller sub-packets, but you cannot merge packets together.
You are also given integer agents, representing the number of agents who must each receive one packet of the same size.

Each agent must receive their allocation from one sub-packet only, and some packets may go unused.

Return the maximum number of units each agent can receive equally.

EXAMPLE 1:
input: packets = [7,10,4], agents = 4
output: 4
Explanation:
 Divide 7 --> 4 + 3
 Divide 10 --> 2 + 4 + 4
 Now have 4 packets of size 4
 Total: [4,3,2,4,4,4]
 Assign 4,4,4,4 --> to 4 agents

Maximum equal allocation = 4

EXAMPLE 2:
Input: packets = [3,1], agents = 10
Ouptut: 0
Total units 4, which is less than the number of agents
Maximum equal allocation = 0
*/