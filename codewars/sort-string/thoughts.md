# Thoughts

This one is a great example of the most common pattern I fall into with katas:

1. see the problem, think I know how to solve it
2. try to solve it the 'easy way' and it doesn't work, usually because I missed something small
3. come up with a convoluted way to solve it which works but seems clunky
4. see other solutions after the fact and see that I was in fact correct in step 2, I just missed something

With this one, I was sure I could sort the words by number but when I used `sort` it didn't work. The magic piece here seems to be `match` in the sort as that would return the number from a digit regex `/\d/`. When I saw a solution like that after submitting mine to Codewars, I felt so annoyed 👀 any advice on how to stop doing this - if that's even possible - would literally fix 70% of my problems I reckon.