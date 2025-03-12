---
title: Bi level Optimization - Part 1 - Example and Basics
created: 2025-01-09
tags: ['machine learning', 'optimization']
---


### 1. Mô tả

Cho một hàm $f, g: \Bbb{R}^n \times \Bbb{R}^n \rightarrow \Bbb{R}$ parameterized by $\theta_{f}, \theta_{g}$. Chúng ta có thể viết dưới dạng sau. $f(x,y; \theta_{f})$ và $g(x, y; \theta_{g})$

Bài toán tối ưu hai cấp được định nghĩa như sau. Ta tìm $x^*$ thoả mãn

$$
x^* = \text{argmin} \quad f(x, y^*)
$$

Sao cho

$$
y^* =\text{argmin} \quad g(x^*, y)
$$

### 2.  Ví dụ
Cho hai hàm $f, g: \Bbb{R} \times \Bbb{R} \rightarrow \Bbb{R}$ như sau. Tìm $(x^*, y^*)$ thoả mãn điều kiện trên

$$ \left\{\begin{matrix}
f(x, y) = 7x^2. - 12xy +4y^2 -30x + 4y - 2 \\
g(x, y) = 4y^2 - 4xy + x^2 + 17
\end{matrix}\right.
$$
<b><ins>Giải:</ins></b>

Ta tìm $y^*$ trước, cho đạo hàm $\nabla g = 0$. Với mọi $x \in \Bbb{R}$, ta có

$$
\begin{aligned}
\frac{\nabla g(x,y)}{\nabla y} = 8y - 4x = 0\\
\implies \quad y^* = \frac{x}{2}
\end{aligned}
$$
Điều này tức là giá trị của $g(x,y)$ cực tiểu khi $y^* = y = \frac{x}{2}$ với mọi $x \in \Bbb{R}$. Thế điều này vào phương trình đầu ta có

$$
f(x, y^*) = 2x^2 - 28x - 2 
$$
Cho đạo hàm theo $x$ của $f$  bằng $0$ ta có:

$$
4x - 28 = 0 \implies x = 7 \implies y = 3.5
$$

vậy $(x^*, y^*) = (7, 3.5)$ là nghiệm tối ưu của bài toán trên.



### General Bi-level Optimization Problems


Given $f,g: \mathcal{D} \subset \Bbb{R}^d\times\Bbb{R}^d \rightarrow \Bbb{R}$ is two function. Find $(x^*,y^*_{\text{opt}})$ satisfied the unconstraint optimization problems below:

$$
\begin{align}
x^* = \underset{x}{\argmin} \quad F(x) = f(x, y^*(x)) \tag{1.1}
\\\

\text{s.t} \qquad y^*(x) = \underset{y}{\argmin} \quad g(x, y) \tag{1.2}
\\\
\end{align} 
$$
##### Assumptions

We will have some assumptions for the exists of solution of the problem defined above:


###### Assumption 1: Lipschitz continuity

We will assume that $f, \nabla f, \nabla g, \nabla^2 g$ are respectively $\ell_{f, 0}, \ell_{f, 1}, \ell_{g, 1}, \ell_{g, 2}$ - Lipschitz continuous with the input variable $\forall_{(x_1, y_1)} \in \mathcal{D}$     


**Note:** This is for the analysis of non-convex, this assumptions usually used in both convex and non-convex analysis

###### Assumption 2: Strong convexity of $g$ in $y$

For any fixed $x$, $g(x,y)$ is strongly convex in $y$ with parameter $\mu_g$

**Note:** This assumption are used when analyzed the convergence rate in the $\ell_2$-norm of the sum of the gradient matrices over iterations


**Note:** guarantee for unique value of $y^*$ with a fixed $x$


### General solution

As usual when solving a single-level optimization problem on $f$, we also try to get the first-order gradient w.r.t $x$ and set that to zero, then solving the achieved equation by different solvers. We will try to do the same here. Let $\nabla F(x)$ is a first-order gradient of $f$ w.r.t only $x$. Because we will have $y^*$ conditioned on $x$, so we can consider $y^*$ is a function with $x$ as an input. So when calculating the $\nabla F(x)$, we must use the total derivatives instead of partial one. 



<details><summary>Total derivatives of nested functions</summary>

Given $y: \Bbb{R^n} \rightarrow \Bbb{R^m}$ and $f: \Bbb{R}^n \times \Bbb{R}^m \rightarrow \Bbb{R}$. We have

$$
\frac{df(x, y(x))}{dx} = \frac{df(x,y)}{dx} + \frac{dy}{dx} \frac{df(x,y)}{dy} \tag {2.1}
$$

</details>


Now we will try to reformulate the second part of the $(2.2)$. Look at the $(1.2)$, we obtain the first-order optimality condition of $g(x,y)$ w.r.t to $y$ we have:
$$
\nabla_y g(x,y^*(x)) = 0 \tag{2.3}
$$

Now take the gradient w.r.t $x$ of two pieces, we have:
$$
\begin{align}
\nabla_{xy} g(x, y^*(x)) + \nabla_{x} y^{*}(x)^\top \nabla_{yy}g(x, y^*(x)) = 0 \tag{2.4}\\\
\implies \nabla_{x} y^{*}(x)^\top = \color{green}{- \nabla_{xy} g(x, y^*(x)) \quad  [\nabla_{yy}g(x, y^*(x))] ^{-1}} \tag{2.5}
\end{align}
$$


Let $(2.5)$ to $(2.2)$ we have a final solution here


$$
\nabla F(x) = \nabla_x {f(x, y^*(x))} +  \color{green}{- \nabla_{xy} g(x, y^*(x)) \quad  [\nabla_{yy}g(x, y^*(x))] ^{-1}} \nabla_y {f(x, y^*(x))} \tag{2.2}
$$


Solve the equation of $\nabla F(x) = 0$ we got the $x$.

##### Limitation of general solution

- The term $\nabla_{yy} g(x, y^*(x))$ have highly computational cost when doing with the large dataset in the context of machine learning. 
- We usually do not have to deal with the closed-form function, it will be solving to find a parameter of a network/function iteratively



So we introduce a new term called **Stochastic derivatives**, a assumption for those **Stochastic derivatives** and definition for a stochastic bilevel optimization problem

**Definition of stochastic function**: A function $f,g$ now, will be defined with additional random variable $\xi, \phi$, respectively and denoted as $f(\cdot, \cdot; \xi)$ and $g(\cdot, \cdot; \phi)$.  This two variable can demonstrated any random property of $f$ and $g$, here we can intuitively thinking about its will be a **network parameters**.

**Assumption on stochastic derivatives:**  Gradient of $f(\cdot, \cdot; \xi)$ and $g(\cdot, \cdot; \phi)$ and hessian $\nabla^2 g$ respectively are unbiased estimator of $\nabla f$ and $\nabla g$  and $\nabla^2 g$ where $\xi, \phi$ are drawn from a their distribution.  Which mean for any fixed $x,y$
$$
\begin{align}
\Bbb{E}_{\xi}[\nabla f(\cdot, \cdot; \xi)] = \nabla f(\cdot, \cdot)\\
\Bbb{E}_{\phi}[\nabla g(\cdot, \cdot; \phi)] = \nabla g(\cdot, \cdot)\\
\Bbb{E}_{\phi}[\nabla^2 g(\cdot, \cdot; \phi)] = \nabla^2 g(\cdot, \cdot) \tag{2.3}
\end{align}
$$



In our machine learning context, we will use the **Alternating Stochastic Gradient Descent** to solve the problem of stochastic nested (bi level) problem. The algorithm is inspired by naive SGD of single-level optimization problem. Because at each iteration, we required a machine-compatible computing version of the gradient on the objectives w.r.t to its variables $x, y$. 
The gradient of objective w.r.t $y$ at the epoch $k$ and sub-iteration $t$ defined as $h_{g}^{k,t}$. Similarly, the gradient of objective $F$ w.r.t $x$ at iteration $k$ defined as $h_f^{k}$ as below:


$$
\begin{gather}
h_g^{k,t} = \nabla_{y} g(x^k, y^{k,t}; \phi^{k,t}) \tag{2.4}\\

h_f^{k} = \nabla_x {f(x, y^*(x);  \xi^{k,})} -  { \nabla_{xy} g(x, y^*(x);  \phi^{k,t}) \quad  [\nabla_{yy}g(x, y^*(x); \phi^{k,t}] ^{-1}}  \nabla_y {f(x, y^*(x); ; \xi^{k})} \tag{2.5}
\end{gather}
$$

##### Hessian approximation

Due to the term $[\nabla_{yy}g(x, y^*(x)] ^{-1}$ is not efficiency when computing by machine, in our algorithm, we will approximate this by using , and also this help reducing the bias when estimate $\nabla_{x} f(x,y)$.

**Estimation is:**

$$
[\nabla_{yy}g(x, y^*(x)] ^{-1} \approx \left[ \frac{N}{\ell_{g,1}} \prod_{n=1}^{N^{'}} \left(I - \frac{1}{\ell_{g,1}} \nabla^2_{yy} g(x,y; \phi_{(n)})\right) \right] \tag{2.6}
$$


We obtained this by using [Neumann expansion](https://en.wikipedia.org/wiki/Neumann_series)

##### Stochastic Gradient Descent for nested optimization problem

```
Algorithm 1: ALSET
-------------------
Initialize: x0, y0, stepsizes {a_k, b_k}
for k in 0..K-1
do
	for t in 0..T-1
	SET y_{k, 0} = y_{k}
	do
		UPDATE y_{k, t+1} := y_{k, t} - b_k * hg_{k, t}
	done - endfor
	SET y_{k + 1} = y_{k, T}
	UPDATE x_{k + 1} = x_{k} - a_k hf_{k}
done - endfor
```

**Some note:**
- Basically, we are doing the gradient descent on finding optimal $y$ first. After we got "a better" $y$, we will find a "better" $x$ by taking the deepest step towards to inverse direction of gradient respect to $x$ of $F(x)$ 
- If we just find for the optimal $y$ at each epoch, the speed will be very slow. There is a paper doing this before and saw that the results will be the same. And based on assumption two, we can guarantee the convergence of $y$

### Analyzing

##### Convex analyze
The questions I raised here is: **What is the term that a bi level optimization problems will be analyzed**. 

In some **single-level** **convex** optimization problems, when introduce new algorithms or optimizer, they usually tends to analyze the convergence rate of a function. In the other words, how fast the solution will approaching the global minimum.  For example, learning function is $f$ and the parameter is $w$, they will analyze the speed of $\vert \omega - \omega_{\text{opt}}\vert \rightarrow 0$. Assume they have the following result:

$$
\vert \omega_{k+1} - \omega_{\text{opt}}\vert \leq \sigma \vert \omega_{k} - \omega_{\text{opt}} \vert 
$$
So will call the **convergence rate** of the algorithm is $\color{green} O(\sigma)$.


##### Non-convex analyze

Due to our assumption do not mention about convexity, we will analyze the "converge to zero rate" term of **average expectation of norms** of gradient matrix. Which mean

$$
\frac{1}{K}\sum_{k=1}^K \Bbb{E}\left[\left\Vert \nabla F(x^k) \right\Vert^2 \right]
$$

We analyze this term because this will show how fastly $\color{red} x$ converge to the solution (because at the solution, the norm will be zero and the expectations of norm will be expected to be near $0$.

As also, due to this is bi-level optimization, we also have to find out the convergence rate of the solution of $y$ defined by $\Bbb{E} \left[ \left\Vert y^K - y^*(x^K) \right\Vert^2\right]$. This is because the $y$ is strictly convex, so we can analyze the term following the convex rules. However, this is a "stochastic problem" so we better to analyze the "expectation" of the convergence.

