var tipuesearch = {"pages": [{'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': '組員-1', 'text': '40823117 潘奕丞 \n 40823122 吳家凱 \n \n', 'tags': '', 'url': '組員-1.html'}, {'title': '協同', 'text': '\n \n', 'tags': '', 'url': '協同.html'}, {'title': 'w2', 'text': '\n \n \n \n \n \n \n \n \n \n \n 零件檔: https://drive.google.com/drive/folders/1Gw2DKXEOqffqAUVHs4KAM4dbICA-9G0r?usp=sharing \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '因為使用Coppeliasim模擬時會有問題，所以修改了一些地方。 \n \n 日內瓦機構在旋轉的時候容易卡住轉不動，所以加入了倒角。 \n \n 把三個輪之間的空隙加大，轉的時候不會互相干涉。 \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': '組員-2', 'text': '40823117  潘奕丞 \n 40823122  吳家凱 \n 40823129   汪昱呈 \n 40823149  趙偉辰 \n', 'tags': '', 'url': '組員-2.html'}, {'title': 'W6', 'text': '繪製齒輪 \n     \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '使用Inventor組裝零件 \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'stage3', 'text': 'ag6 \n 組員 \n 40823110 repo \xa0 | \xa0 40823110 site \xa0 | \n 40823125 repo \xa0|\xa0 40823125 site \xa0| \n 40823152 repo \xa0|\xa0 40823152 site \xa0| \n 40823153 repo \xa0 | \xa0 40823153 site \xa0 | \n 40823117 repo \xa0 | \xa0 40823117 site \xa0 | \n 40823122 repo \xa0 | \xa0 40823122 site \xa0 | \n 40823129 repo \xa0 | \xa0 40823129 site \xa0 | \n 40823149 repo \xa0 | \xa0 40823149 site \xa0 | \n \n', 'tags': '', 'url': 'stage3.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'task1', 'text': 'with open("stage3_2a.txt") as fh:\n   #先將我們存起來stage3_2a.txt打開並命名為fh\n    data = fh.readlines()\n    #將stage3_2a.txt的資料以串列形式存為data\nfor i in range(6):\n    #因為只有6組,所以設定次數6次\n    A= data[i].replace(\'4823122\',\'40823122\')\n    #因為40823122的學號打錯了,所以用 replace把4823122換成40823122\n    B=A.replace(\'\\t\\t\',\'\')\n    #因為有一組只有6人,所以用 replace 把空位刪除\n    group = B.rstrip("\\n").split("\\t")\n    #先取出newdata list中的第i項,消除元素中\\n,再以\\t取出需要的文字\n    print(\'<p><a href="https://github.com/\'+group[1]+\'/\'+group[0]+\'">\'+group[0]+\' repo</a> | <a href="https://\'+group[2]+\'.github.io/\'+group[0]+\'">\'+group[0]+\' site</a></p>\')\n    for j in range(1,18,2):\n    #設一個範圍,從1~18每次+2\n        try:\n            n = group[j].replace(\'40823112\',\'a40823112\')\n            n = group[j].replace(\'4082312\',\'s40823125\')\n            print(\'<p>\'+\'<a href="https://github.com/\'+n+\'/cd2021">\'+group[j]+\' repo</a> | <a href="https://\'+n+\'.github.io/cd2021">\'+group[j]+\' site</a></p>\')\n        except:\n           continue\n        #因為其中一組只有六個人會有空格會導致錯誤,所以使用try.....except,讓程式錯誤時執行continue,讓迴圈繼續執行 \n \n stage3_ag1 repo  |  stage3_ag1 site \n 40823131 repo  |  40823131 site \n 40823112 repo  |  40823112 site \n 40823123 repo  |  40823123 site \n 40823145 repo  |  40823145 site \n 40823136 repo  |  40823136 site \n 40823109 repo  |  40823109 site \n 40823116 repo  |  40823116 site \n 40823108 repo  |  40823108 site \n stage3_ag2 repo  |  stage3_ag2 site \n 40823151 repo  |  40823151 site \n 40623121 repo  |  40623121 site \n 40871106 repo  |  40871106 site \n 40823102 repo  |  40823102 site \n 40823104 repo  |  40823104 site \n 40823106 repo  |  40823106 site \n 40823101 repo  |  40823101 site \n 40823132 repo  |  40823132 site \n stage3_ag3 repo  |  stage3_ag3 site \n 40823119 repo  |  40823119 site \n 40823150 repo  |  40823150 site \n 40823103 repo  |  40823103 site \n 40823107 repo  |  40823107 site \n 40523252 repo  |  40523252 site \n 40823154 repo  |  40823154 site \n stage3_ag4 repo  |  stage3_ag4 site \n 40823142 repo  |  40823142 site \n 40823144 repo  |  40823144 site \n 40823127 repo  |  40823127 site \n 40823148 repo  |  40823148 site \n 40823121 repo  |  40823121 site \n 40823135 repo  |  40823135 site \n 40823114 repo  |  40823114 site \n 40823146 repo  |  40823146 site \n stage3_ag5 repo  |  stage3_ag5 site \n 40823111 repo  |  40823111 site \n 40823115 repo  |  40823115 site \n 40823128 repo  |  40823128 site \n 40823120 repo  |  40823120 site \n 40823140 repo  |  40823140 site \n 40823124 repo  |  40823124 site \n 40823139 repo  |  40823139 site \n 40823126 repo  |  40823126 site \n stage3_ag6 repo  |  stage3_ag6 site \n 40823152 repo  |  40823152 site \n 40823110 repo  |  40823110 site \n 40823122 repo  |  40823122 site \n 40823125 repo  |  40823125 site \n 40823117 repo  |  40823117 site \n 40823129 repo  |  40823129 site \n 40823149 repo  |  40823149 site \n 40823153 repo  |  40823153 site \n 參考:40823125 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '\n \n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '', 'tags': '', 'url': 'W15.html'}, {'title': 'video1', 'text': "\n \n Title:Inverse kinematics for a 2-joint robot arm using geometry \n 標題:使用幾何學的2連桿機器人手臂的逆運動學 \n We saw this simple two-link robot in the previous lecture about forward kinematics. \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機器人。 \n The tooltip pose of this robot is described simply by two numbers,the coordinates x and y respect to the world coordinate frame. \n 該機器人的工具提示姿態由兩個數字簡單描述，坐標 x 和 y 相對於世界坐標系。 \n So,the problem here is that given x and y,we want to determine the joined angles,Q1 and Q2. \n 所以，這裡的問題是給定 x 和 y，我們要確定關節角度 Q1 和 Q2。 \n The solution that we're going to follow inthis particular section is a geometric one. \n 我們將在本節中遵循的解決方案是幾何解決方案。 \n We're going to start with a simple piece of construction. \n 我們將從一個簡單的結構開始。 \n We're going to overlay the red triangle on top of our robot. \n 我們將在我們的機器人上面覆蓋紅色三角形。 \n We know that the end point coordinate is x,y,so the vertical height of the triangle is y,the horizontal width is x. \n 我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x。 \n And, using Pythagoras theorem, we can write r squared equals x squared plus y squared. \n 並且，使用畢達哥拉斯定理，我們可以寫出 r 平方等於 x 平方加上 y 平方。 (r^2=x^2+y^2) \n So far, so easy. \n 到目前為止，很容易。 \n Now, w’re going to look at this triangle highlighted here in red and we want to determine the angle α(alpha). \n 現在，我們將查看此處以紅色突出顯示的三角形，我們要確定角度 α(alpha)。 \n In order to do that, we need to use the cosine rule. \n 為了做到這一點，我們需要使用餘弦規則。 \n And, if you’re a little rusty on the cosine rule, here is a bit of a refresher. \n 而且，如果你對餘弦規則有點生疏，這裡有一點複習。 \n We have an arbitrary triangle. \n 我們有一個任意三角形。 \n We don’t have any right angles in it and we’re going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a. \n 我們沒有任何直角，我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。 \n And, we do the same for this edge and this angle, and this edge and this angle,So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c. \n 並且，我們對這條邊和這個角做同樣的事情，這條邊和這個角，所以，所有的邊都被標記為大寫的A、B和C，而這些角被標記為小a、小b和小c . \n So, the cosine rule is simply this relationship here. \n 所以，餘弦規則就是這裡的這種關係。 (A^2=B^2+C^2-2BCcosa) \n It’s a bit like Pythagoras’ theorem except for this extra term on the end with the cos a in it. \n 它有點像畢達哥拉斯的定理，除了末尾有 cos a 的這個額外項。 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago. \n 現在，讓我們將餘弦規則應用於我們剛才看到的特定三角形 \n It’s pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 \n We can isolate the term cos α(alpha) which gives us the angle alpha that we’re interested in. \n 我們可以分離出術語 cos α(alpha)，它給出了我們感興趣的角度 α(alpha)。 \n And, it’s defined in terms of the constant link lengths, A1 and A2 and the position of the end effector, x and y. \n 而且，它是根據恆定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 \n We can write this simple relationship between the angles alpha and Q2 \n 我們可以寫出角度 α(alpha) 和 Q2 之間的這種簡單關係 \n And, we know from the shape of the cosine function that cos of q2 must be equal to negative of cos α(alpha). \n 而且，我們從餘弦函數的形狀知道，q2 的 cos 必須等於 cos α(alpha) 的負數。 \n This time, let’s just write an expression for the cosine of the joined angle q2. \n 這一次，讓我們為連接角 q2 的餘弦寫一個表達式。 \n Now, we’re going to draw yet another red triangle and we’re going apply some simple trigonometry here. \n 現在，我們將繪製另一個紅色三角形，並在此處應用一些簡單的三角函數。 \n If we know Q2, then we know this length and this length of the red triangle. \n 如果我們知道 Q2，那麼我們就知道這個長度和這個紅色三角形的長度。 \n We can write this relationship for the sine of the joint angle q2. \n 我們可以為連接角 q2 的正弦寫出這種關係。 \n Now, we can consider this bigger triangle whose angle is β(beta) and this side length of this triangle is given here in blue. \n 現在，我們可以考慮這個更大的三角形，它的角是β(beta)，這個三角形的邊長在這裡用藍色給出。 \n And, the length of the other side of the triangle is this. \n 並且，三角形另一邊的長度是這個。 \n So, now we can write an expression for the angle beta in terms of these parameters here. \n 所以，現在我們可以在此處根據這些參數編寫角度 β(beta) 的表達式。 \n Going back to the red triangle that we drew earlier, we can establish a relationship between q1 and the angle beta. \n 回到我們之前畫的紅色三角形，我們可以建立q1和角度β(beta)之間的關係。 \n Introduce yet another angle, this one γ(gamma) and we can write a relationship between the angle γ(gamma) and the tooltip coordinates x and y. \n 引入另一個角度，這個γ(gamma)，我們可以寫出角度γ(gamma)和工具提示坐標 x 和 y 之間的關係。 \n Now, we can write a simple relationship between the angles that we’ve constructed, γ(gamma) and β(beta) and the joined angle we’re interested in which is q1. \n 現在，我們可以在我們構建的角度 γ(gamma) 和 β(beta) 與我們感興趣的連接角度 q1 之間寫出一個簡單的關係。 \n And, the total relationship looks something like this. \n 而且，整個關係看起來像這樣。 \n Quite a complex relationship, it gives us the angle of joined one, that’s Q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it’s also a function of the second joint angle, Q2. \n 一個相當複雜的關係，它給了我們連接的角度，即末端執行器坐標 y 和 x 的 Q1，以及一堆常數 a1 和 a2，它也是第二個關節角度 Q2 的函數 \n So, let’s summarize what it is that we have derived here \n 所以，讓我們總結一下我們在這裡得出了什麼 \n We have an expression for the cosine of Q2 and we have an expression for Q1 \n 我們有 Q2 的餘弦表達式和 Q1 的表達式 \n Now, the cosine function is symmetrical about 0 \n 現在，餘弦函數對稱於0 \n So, if we know the value of the cosine of Q2, then there are two possible solutions a positive angle and a negative angle. \n 所以，如果我們知道 Q2 的餘弦值，那麼有兩種可能的解：正角和負角。 \n We’re going to explicitly choose the positive angle. Which means that I can write this expression here. \n 我們將明確選擇正角。 這意味著我可以在這裡寫這個表達式。 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在，我們有了這個雙連桿機器人的逆運動學解決方案。 \n We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有兩個連接角 Q1 和 Q2 的表達式，根據末端執行器姿勢 x 和 y 以及一系列常數。 \n You notice that the two equations are not independent. \n 你注意到這兩個方程不是獨立的。 \n The equation for Q1, in fact, depends on the solution for Q2. \n 事實上，Q1 的方程取決於 Q2 的解。 \n In this case, Q2 is negative and we’re going to write the solution for Q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，Q2 是負數，我們將在反餘弦前用負號編寫 Q2 的解。 \n Now, we need to solve for Q1, so we’re going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x. \n 現在，我們需要求解 Q1，因此我們將介紹這個特定的紅色三角形、我們之前求解的角度β(beta) 以及根據 y 和 x 定義的角度γ(gamma)。 \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. \n 現在，我們在 q1、γ(gamma)和β(beta)之間寫出略有不同的關係，與我們之前的關係不同。 \n There’s a change of sign involved. \n 涉及到符號的變化。 \n Then, we can substitute all that previous equation and come up with this expression for Q1. \n 然後，我們可以替換之前的所有等式並得出 Q1 的這個表達式。 \n Again, there is a change of sign here. \n 同樣，這裡的符號發生了變化。 \n Previously, this was a negative sign. \n 原本，這是負號。 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where Q2 is negative. \n 並且，這裡總結性地給出了我們的雙連桿機器人在這種特定配置下的逆向運動學的解決方案，其中 Q2 為負。 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們比較兩個解決方案，q2 為正的情況和 q2 為負的情況。 \n", 'tags': '', 'url': 'video1.html'}, {'title': 'video2', 'text': "\n Title:Inverse kinematics for a 2-joint robot arm using algebra. \n 標題:使用代數的2連桿機器人手臂的逆運動學。 \n Here we have the same two link robot as we just looked at but this time we're going tosolve it using an analytical approach , that is we're going to rely much more on algebra ,particular linear algebra rather than geometry. \n 在這裡，我們有與剛才看到的相同的兩連桿機器人，但這次我們將使用解析方法來解決它，也就是說，我們將更多地依賴代數，特別是線性代數而不是幾何。 \n We have an expression E , which is the homogeneous transformation which represents the pose of the robots end effector and we looked at this in the last lecture , we can write the end effector pose as a sequence of elementary homogeneous transformations. \n 我們有一個表達式 E ，它是代表機器人末端姿態的齊次變換，我們在上一課中看過這個，我們可以將末端姿態寫成一系列基本齊次變換。 \n A rotation by Q1 , a translation along the X direction by A1 , a rotation by Q2 and then a translation in the X direction by A2. \n Q1 旋轉，A1 沿 X 方向平移，Q2 旋轉，然後 A2 沿 X 方向平移。 \n If I expand this out , multiply all the transformations together , I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot's end effector. \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式； 表示機器人末端執行器姿態的三乘三齊次變換矩陣。 \n Now for this particular two link robot , we are only interested in the position of its end effector , it's X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I'm going to copy those out. \n 現在對於這個特殊的兩連桿機器人，我們只對它的末端執行器的位置感興趣，它是 X 和 Y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來。 \n So here again is our expression for X and Y and what we're going to do is a fairly common trick , we're going to square and add these two equations and I get a relationship that looks like this. \n 所以這裡又是我們對 X 和 Y 的表達式，我們要做的是一個相當常見的技巧，我們要平方並添加這兩個方程，我得到一個看起來像這樣的關係。 \n Now I can solve for the joint angle Q2 in terms of the end effector pose X and Y and the robot's constants A1 and A2. \n 現在我可以根據末端執行器姿勢 X 和 Y 以及機器人的常數 A1 和 A2 來求解關節角度 Q2。 \n Now what I'm going to do is apply the sum of angles identity. \n 現在我要做的是應用角度恆等式。 \n I'm going to expand these terms, sine of Q1 plus Q2 or cos of Q1 plus Q2 and to make life a little bit easier, I'm going to make some substations, so where ever I had cos Q2, I'm going to write C2 and where ever I had sine Q2, I'm going to write S2. \n 我將擴展這些術語，Q1 的正弦加 Q2 或 Q1 的 cos 加 Q2，為了讓生活更輕鬆一點，我將建造一些變電站，所以只要有 cos Q2，我就會去 寫 C2 並且在我有正弦 Q2 的地方，我要寫 S2。 \n It's a fairly common shorthand when people are looking at robot kinematic equations. \n 當人們查看機器人運動學方程時，這是一個相當常見的速記。 \n And here are the equations after making those substitutions. \n 這是進行這些替換後的方程式。 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個眾所周知的解決方案。 \n So I'm going to consider just one of equations, the equation for Y and using our well known idntity and it's solution, Ican determine the values for the variables little a, little b and little c and once l've determined those, then I can just write down the solution for Q1, which is the equivalent of theta in this particular case. \n 所以我將只考慮一個方程，Y 的方程，並使用我們眾所周知的身份和它的解，我可以確定變量小 a、小 b 和小 c 的值，一旦我確定了這些，然後 我可以寫下 Q1 的解決方案，在這種特殊情況下，它相當於 θ(theta)。 \n Here again is our expression for Q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squuared plus Y squared is equal to this particular complex expression. \n 這裡再次是我們對 Q1 的表達，從上一張幻燈片複製過來，我們可能還記得在我們工作的早期，我們確定了這種特殊關係； X 平方加 Y 平方等於這個特殊的複數表達式。 \n So i can substitute that in and do some simplification and i end up with this slightly less complex expression for Q1. \n 所以我可以用它代替並做一些簡化，最後我得到了 Q1 的這個稍微不那麼複雜的表達式。 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中依照幾何方法得到的表達式相同。 \n", 'tags': '', 'url': 'video2.html'}, {'title': 'gogs', 'text': '40823117-gogs \n \n', 'tags': '', 'url': 'gogs.html'}, {'title': 'W16', 'text': 'W16 MTB_robot取放方塊 \n 檔案下載 \n 1.Onshape 零組件繪製 零件檔 Onshape零件 繪製過程: \n 2.建立 CoppeliaSim 4.1.0 MTB robot 場景 3.手臂末端加入 components-gripper-suction pad 吸盤 4.逆向運動學函式 程式迴圈: \n 5.Python remote API 逆向運動學函式', 'tags': '', 'url': 'W16.html'}]};