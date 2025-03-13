---
title: Analysis I - Chapter 2
created: 2024-12-16
image: '/assets/real-analysis.png'
tags: ['math']
---

## Axiom 2.1.1
0 is a *natural number*.
## Axiom 2.1.2
If *n* is a *natural number*, then *n++* is also a *natural number* 
## Axiom 2.1.3
*0* is not the successor of any *natural number*; i.e., we have *n++ $\neq$ 0* for every *natural number n*.
## Axiom 2.1.4.
Different *natural number* must have different successors; i.e., if *n, m* are *natural number* and *n $\neq$ m*, then *n++ $\neq$ m++*. Equivalently, if *n++ $=$ m++*, then we must have *n $=$ m*.
## Axiom 2.1.5. (Principle of mathematical induction)
Let $P(n)$ be any *property pertaining* to a *natural number n*. Suppose that $P(0)$ is true, and suppose that whenever $P(n)$ is true, $P(\text{n++})$ is also true. Then $P(n)$ is true for every *natural number n*.
## Proposition 2.1.6. (Recursive definition)
Suppose for each *natural number n*, we have some function $f_{n} : N \to N$ from the *natural numbers* to the *natural numbers*. Let *c* be a *natural number*. Then we can assign a unique *natural number* $a_{n}$ to each *natural number n*, such that $a_{0} = c$ and $a_{\text{n++}} = f_{n}(a_{n})$ for each *natural number n*.

## Definition 2.2.1. (Addition of natural number)
Let *m* be a *natural number*. To add zero to *m*, we define $0+m := m$. Now suppose inductively that we have defined how to add *n* to *m*. Then we can add *n++* to *m* by defining $(\text{n++}) + m := (n+m)\text{++}$.
## Exercise : Why the sum of two natural numbers is again a natural number?
Let $n$ and $m$ are natural numbers. Using induction on $n$.
Base case $n = 0$: $n+m = 0+m = m \ \text{by Definition 2.2.1}$, $m$ is already a natural number so the result of $0+m=m$ still a natural number.
Suppose inductively that $n+m$ is a natural number.
We now have to show that $(n\text{++})+m$ is a natural number. By the Definition 2.2.1, $(n\text{++})+m = (n+m)\text{++}$  we already have $n+m$ is a natural number, and by the Axiom 2.1.2, $(n+m)\text{++}$ is a natural number.

## Lemma 2.2.2. 
For any *natural number n*, $n+0=n$.
### *Proof.*
The base case $0+0=0$ follows since we know that $0+m=m$ for every *natural number m*, and 0 is a *natural number*. Now suppose inductively that $n+0=n$. We wish to show that $(\text{n++})+0=\text{n++}$. But by the definition of addition, $(\text{n++})+0$ is equal to $(n+0)\text{++}$, which is equal to $\text{n++}$ since $n+0=n$. This closes the induction.

## Lemma 2.2.3.
For any *natural number n and m*, $n+(m++) = (n+m)++$.

### *Proof.*
We will use induction in $n$ (keeping $m$ fixed), we must prove the base case $0+(\text{m++})=(0+m)\text{++}$. But by the definition of addition $0+(\text{m++}) = \text{m++}$ and $0+m=m$, so both sides of the base case are equal to $m\text{++}$ and are thus equal to each other. Now, we assume inductively that $n+(\text{m++})=(n+m)\text{++}$. We wish to show that $(\text{n++})+(\text{m++})=((\text{n++})+m)\text{++}$.  By the definition of addition, the LHS is equal to $(n+(\text{m++}))\text{++}$ and is equal to $((n+m)\text{++})\text{++}$ by the inductive hypothesis. And the RHS is equal to $((n+m)\text{++})\text{++}$ by the definition of addition. Thus both sides are equal to each other. This closes the induction.

## Proposition 2.2.4. (Addition is commutative).
For any *natural numbers n and m*, $n+m=m+n$.

### *Proof.*
We will use induction in $n$ (keeping $m$ fixed). We must prove the base case $0+m=m+0$. By definition of addition, the LHS equal to $m$, and by Lemma 2.2.2, the RHS equal to m, so both sides of the base case are equal to $m$ and are thus equal to each other. Now, we assume inductively that $n+m=m+n$. We wish to show that $(\text{n++})+m=m+(\text{n++})$. By definition of addition, the LHS become $(n+m)\text{++}$, and by Lemma 2.2.3, the RHS become $(m+n)++$, but by the inductive hypothesis $n+m=m+n$. Thus $(n+m)\text{++}=(m+n)\text{++}$. This closes the induction.

## Proposition 2.2.5. (Addition is associative).
For any *natural number a, b, c*, we have $(a+b)+c=a+(b+c)$.

### *Proof. (Exercise 2.2.1)*
We will use induction in $b$ (keeping $a, c$ fixed). We must prove the base case $(a+0)+c = a+(0+c)$. By Lemma 2.2.2., the LHS is equal to $a+c$, and by the Definition of addition, the RHS is equal to $a+c$, so both sides of the base case are equal to $a+c$, and are thus equal to each other. Now, we assume inductively that $(a+b)+c = a+(b+c)$. We wish to show that $(a+b\text{++})+c=a+((b\text{++})+)$. By Lemma 2.2.3, the LHS become $((a+b)\text{++})+c$, and by Definition of addition, the LHS is equal to $((a+b)+c)\text{++}$. By Definition of addition, the RHS become $a+(b+c)\text{++}$, and by Lemma 2.2.3, the RHS is equal to $(a+(b+c))\text{++}$. But by the inductive hypothesis $(a+b)+c = a+(b+c)$. Thus, $((a+b)+c)\text{++} = (a+(b+c))\text{++}$. This closes the induction.

## Proposition 2.2.6. (Cancellation law).
Let *a, b, c* be *natural numbers* such that $a+b=a+c$. Then we have $b=c$.

### *Proof.*
We will use induction in a (keeping $b, c$ fixed). We must prove the base case if  $0+b=0+c$ then $b=c$. By the Definition of addition, $0+b=b$, and $0+c=c$, so $b=c$ . Now, we assume inductively that if $a+b=a+c$ then $b=c$. We wish to show that if $(a \text{++})+b = (a\text{++})+c$ then $b=c$. By the Definition of addition, the LHS is equal to $(a+b)\text{++}$, the RHS is equal to $(a+c)\text{++}$. But by the inductive hypothesis if we have $a+b=a+c$ then we have $b=c$ which leads to $b\text{++}=c\text{++}$. By Axiom 2.1.4. and we already have $b\text{++}=c\text{++}$. Thus, $b=c$. This closes the induction.

## Definition 2.2.7. (Positive natural number).
A *natural number n* is said to be *positive* iff it is not equal to 0. ("iff" is shorthand for "if and only if").

## Proposition 2.2.8. 
If *a* is *positive* and *b* is a *natural number*, then $a+b$ is *positive* (and hence $b+a$ is also, by Proposition 2.2.4.)

### *Proof.*
We will use induction in b. If $b=0$, then $a+b=a+0=a$, which is positive, so this proves the base case. Now suppose inductively that $a+b$ is positive. Then $a+(b\text{++})=(a+b)\text{++}$ is positive due to Axiom 2.1.3. This closes the induction.

## Corollary 2.2.9. 
If *a* and *b* are *natural numbers* such that $a+b=0$, then $a=0$ and $b=0$
### *Proof.*
Suppose for sake of contradiction that $a \neq 0$ or $b \neq 0$. If $a \neq 0$ then $a$ is positive, and hence $a+b=0$ is positive by Proposition 2.2.8, a contradiction. Similarly if $b \neq 0$ then $b$ is positive, and again $a+b=0$ is positive by Proposition 2.2.8, a contradiction. Thus $a$ and $b$ must be zero.

## Lemma 2.2.10.
Let $a$ be a *positive number*. Then there exists exactly one *natural number b* such that $b\text{++}=a$.

### *Proof.*
We induct on $b$. Firstly, consider the base case $b=0$, and we have $0\text{++}=a$. We know $a$ equals to $1$ and it is not equal to $0$ from Axiom 2.2

