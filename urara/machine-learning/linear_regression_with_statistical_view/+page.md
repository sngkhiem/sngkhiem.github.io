---
title: Linear Regression - Khi nào thì ta loại bỏ một thuộc tính?
created: '2024-03-13'
image: '/mathematics/lin_reg.webp'
tags:
    - math
    - machine learning
---

## 1. Giới thiệu về Linear Regression

Với mình và đa số các bạn sinh viên chuyên ngành khoa học máy tính nói chung, **Hồi quy tuyến tính** (hay **Linear Regression**) là một thuật toán gối đầu giường, hay nói cách khác là cực kỳ quen thuộc, phổ biến, thậm chí là "đẻ" ra là đã phải biết thuật toán này. Nên trong nội dung bài báo này mình chỉ tóm tắt sơ qua những gì đã quá quen thuộc với các bạn

Ta có một bảng dữ liệu như sau

| Kinh nghiệm (tháng) | Lương (USD) |
| - | - |
| 1 | 120 |
| 6 | 200 |
| 12 | 450 |
| 24 | 923 |
| **Ở đây có** | **Rất nhiều dòng như vậy** |

**Note: Thật ra thì lương không thấp z đâu mấy bạn ơi**
    
Việc của ta là đi tìm mức lương cho các mức kinh nghiệm tiếp theo dựa vào đống dữ liệu cho sẵn.

Trên thực tế, ai cũng biết bài toán này giải như nào. Để mình tóm tắt lại nhé. Đặt $\overline{X}$ là ma trận đã thêm **bias** $1$ vào cột **Kinh nghiệm** và $Y$ sẽ là cột **Lương**.

Ta sẽ có bài toán đi tìm bộ tham số $\beta$ sao cho

$$
\mathcal{L} = \underset{(x,y) \sim \mathcal{D}}{E}(\beta x  - y )^2
$$

là nhỏ nhất. Trong đó, $\mathcal{D} \subset (\mathcal{X}, \mathcal{Y})$ là bộ dữ liệu huấn luyện được cho trước của chúng ta, ở đây là $X, Y$

Cách làm thông thường của chúng ta sẽ là biến nó về dạng đại số tuyến tính rồi dùng giải tích tuyến tính tính đạo hàm rồi cho đạo hàm bằng $0$ để giải quyết bài toán. Các bạn sẽ kết thúc với một công thức như thế này:

$$
\hat{\beta} = (X^TX)^{-1}X^TY
$$

Cách này đúng, đúng mạnh luôn. Không thể nói là cách này sai hay sao đó và thậm chí mình thừa nhận luôn, lúc đi làm đi học mình code công thức này cho nhanh chứ Gradient Descent cái quái gì? (sẽ có một bài về bạn này sau, bạn này khá hay nhưng mà để hiểu nó phải từ từ mình coi lại sách của Prof. Boyd)

## 2. Một vấn đề sẽ đề cập trong bài viết này

Giờ ví dụ như mình không chỉ có $1$ thuộc tính là số tháng làm việc chuyên nghiệp, mà mình có $15000$ thuộc tính **khác nhau**, có thể ví dụ như **số căn nhà, tuổi tác, số người bạn, ngôn ngữ sử dụng, điện thoại bạn xài,...**. Vậy để đoán lương, đôi lúc ta không thật sự dùng đến $15000$ mà chỉ dùng $15$ cái hoặc những cái mà chúng ta cho rằng liên quan nhất thì ta phải bỏ cái nào? Nhắc đến đây các bạn nghĩ ngay tới **Principal Component Analysis**? No, nó là đổi trục toạ độ so với những thuộc tính ban đầu, chúng ta sẽ bàn về vấn đề này sau (ý tôi là những bài blogpost khác). Ta sẽ **bỏ thẳng các đặc trưng mà ta nghĩ là không cần thiết bằng một cách nào đó**.

## 3. Bài toán cực đại hoá điều hợp lý (Maximum Likelihood Estimator)

Đây là bài toán cũng khá nổi trong giới học máy. Nói nôm na là như thế này: Bạn có một mô hình (gọi là $f$) được định nghĩa bằng tham số $\theta$ và một đống dữ liệu $d$. Ta sẽ **GIẢ SỬ DỮ LIỆU ĐÃ ĐÚNG RỒI** vậy thì chúng ta sẽ cố gắng tìm ra bộ tham số $\theta$ tốt nhất cho mô hình kia **HỢP LÝ NHẤT**. Ta sẽ gọi $p(d \vert \theta)$ là xác suất điểm dữ liệu $d$ đúng với mô hình $f$. Gọi $\mathcal{D}$ là tất cả các điểm dữ liệu $d_1, d_2,... d_m$ vậy thì ta sẽ muốn xác xuất của các điểm dữ liệu đều đúng 

$$
p(d_1,d_2,d_3,...,d_m \vert \theta)
$$

là cao nhất.

#### Một ví dụ trực quan hơn liên kết trực tiếp đến bài toán hồi quy tuyến tính.

Trong bài toán hồi quy tuyến tính ta cũng có tập dữ liệu $\mathcal{D}$ và các điểm dữ liệu $d_i = (x_i, y_i)$, hơn nữa chúng ta đặt giả thiết là $y_i$ có mối quan hệ tuyến tính với các thuộc tính của $x_i$, tức là $f = \beta x + \beta_0$. Vậy ta có thể nhìn bài toán này dưới góc nhìn bài toán Maximum Likelihood vì lúc này $\theta$ nói trên chính là bộ tham số $\beta$ của mô hình tuyến tính



## 4. Góc nhìn xác suất của hồi quy tuyến tính

Ta định hình bài toán lại như sau. Giả sử ta có $k + 1$ biến ngẫu nhiên $\beta_{i} \vert i = \overline{1,k + 1}$. Với mỗi cặp $(x, y) \in \mathcal{D}$, $y$ sẽ có quan hệ tuyến tính với các công thuộc tính $x_{i}$ của $x$. Công thức xấp xỉ $y$ dựa vào $x$ sẽ là:

$$
\hat{y} = \beta_{0} + \beta_{1}x_{1} + \beta_{1}x_{1} + \beta_{2}x_{2} + ... + \beta_{k}x_{k} + \epsilon
$$

Sau đó ta sẽ lấy mẫu ngẫu nhiên $(x,y) \sim \mathcal{D}$ và ta sẽ được rất nhiều quan sát khác nhau. Lúc này tập dữ liệu ta có sẽ là $\mathcal{D} = \{(x_{i,1}, x_{i,2}, x_{i,3},...x_{i,k}, y_i) \vert i=\overline{1,m}\}$

Vậy, nhiệm vụ lúc này của ta là **ước lượng** các $\hat{\beta_{i}}$ gần với các $\beta_{i}$ tương ứng.

Lúc này ta sẽ cần cực đại hoá $p(d_i=(x_i, y_i) \vert \beta)$. Ta sẽ giả sử với một $x_i$ cho trước thì $\hat{y_i}$ sẽ luôn có giá trị nằm xung quanh $y_i$ và phân phối của độ lệch này sẽ là một phân phối chuẩn với độ lệch chuẩn $\sigma$. Điều này tức là:

$$
\epsilon \sim \mathcal{N}(0, \sigma^2)
$$


Dựa vào phương trình trên ta có được

$$
Y \sim p(y) = \mathcal{N}(\beta_{0} + \beta_{1}x_{1} + \beta_{1}x_{1} + \beta_{2}x_{2} + ... + \beta_{k}x_{k},\sigma^2)
$$

Vì lương của mấy ông kia không liên quan đến nhau (ta giả sử không có trường hợp chia lương nhé :D, chơi z kỳ lắm). Nên các $d_i \overset{i.i.d}{\sim} p(y)$. Vậy cho nên ta có

$$
\begin{aligned}
p(d_1,d_2,d_3,...,d_m \vert \beta) = \prod_{j = 1}^{m} p(d_{j  } \vert  \beta)
& =\prod_{j=1}^m \frac{1}{\sqrt{2 \pi \sigma^2}} \exp \left\{-\frac{\left(y_j-\beta_0-\beta_1 x_{j, 1}-\beta_2 x_{j, 2}-\ldots-\beta_n x_{j, k}\right)^2}{2 \sigma^2}\right\} \\
& \propto \exp \left\{-\frac{\sum_{j=1}^m\left(y_j-\beta_0-\beta_1 x_{j, 1}-\beta_2 x_{j, 2}-\ldots-\beta_n x_{j, k}\right)^2}{2 \sigma^2}\right\}
\end{aligned}
$$

Và tất nhiên, bài toán chúng ta là **Maximum Likelihood** và hàm log là hàm đồng biến trên đoạn $(0, + \infty)$ nên ta hoàn toàn có thể dùng Maximum **Log** Likehood và đưa bài toán về dạng tổng các **Squared Error**. Đây cũng chính là Mean Square Error. Nghiệm của bài toán tất nhiên là vẫn giữ nguyên: $\hat{\beta} = (X^TX)^{-1}X^TY$.

Ta chứng minh 2 ý sau đây: 

* $E[\hat{\beta}] = \beta$
* $V[{\hat{\beta}}] = \sigma^2 (X^TX)^{-1}$

#### Ý đầu tiên

$$
E[\hat{\beta}] = E[(X^TX)^{-1}X^TY] = (X^TX)^{-1}X^T E[Y] = (X^TX)^{-1}X^T X E[\beta] = (X^TX)^{-1}X^T X \beta = \beta
$$

#### Ý thứ hai

$$
\begin{aligned}
V[{\hat{\beta}}] = V[(X^TX)^{-1}X^TY]=(X^TX)^{-1}X^T \quad V[Y] \quad ((X^TX)^{-1}X^T)^T\\
= (X^TX)^{-1}X^T \quad \sigma^2 \quad ((X^TX)^{-1}X^T)^T\\
= \sigma^2  (X^TX)^{-1}X^T ((X^TX)^{-1}X^T)^T\\
= (X^TX)^{-1}X^T (X (X^{-1})^{T} X^{-1})\\
= \sigma^2 (X^TX)^{-1}
\end{aligned}
$$

Ta thừa nhận hai quan sát sau (1 cái chứng minh ròi, cái sau dùng nhiều kỹ thuật khá phức tạp nên chưa dám nhắc đến ở đây):

* $\hat{\beta} \sim \mathcal{N} (\beta, \sigma^2 (X^TX)^{-1})$
* Đặt $S = \Vert y - x\hat{\beta}\Vert_2^{2}$ thì $\frac{S}{\sigma^2} \sim \mathcal{X}^2_{m - k - 1}$

Vì quan sát đầu tiên, khi đặt $A = (X^TX)^{-1}$ thì $\widehat{\beta_i} \sim \mathcal{N} (\beta_i, \sigma^2 A_{ii})$ ta có:

$$
\frac{\widehat{\beta_i}-\beta_i}{\sqrt{\frac{A_{i i} \times S}{m-k-1}}} \sim T_{m-n-1}
$$

Giờ ta sẽ thực hiện kiểm định giả thuyết thống kê cho từng $\widehat{\beta}_i$ với cặp giả thuyết sau:

* Giả thuyết rỗng: $H_0: \widehat{\beta}_i = 0$. Điều này đồng nghĩa với thuộc tính $i$ không liên quan đến $y$
* Giả thuyết thay thế $H_1: \widehat{\beta}_i \neq 0$. Điều này đồng nghĩa với thuộc tính $i$ có liên quan đến $y$

Lúc này, với độ tin cậy là $1-\alpha$ thì nếu

* $\left\vert \widehat{\beta_i}\right \vert \gt t_{\alpha / 2, m-n-1} \sqrt{\frac{A_{i i} \times S}{m-n-1}}$. Lúc này ta bác bỏ giả thuyết rỗng tức là thuốc tính có liên quan đến nhãn $y$
* $\left\vert \widehat{\beta_i}\right \vert \leq t_{\alpha / 2, m-n-1} \sqrt{\frac{A_{i i} \times S}{m-n-1}}$. Lúc này ta chấp nhận giả thuyết rỗng tức là thuốc tính không liên quan đến nhãn $y$. Và ta hoàn toàn có thể bỏ đi thuộc tính này vì thuộc tính này hoàn toàn có thể làm cho nhãn chúng ta bị nhiễu khi học bài toán Linear Regression.

## 5. Kết luận
Bài viết dùng những biến đổi đơn giản và những bổ đề mệnh đề lấy từ trong sách ra để đưa ra cho các bạn một góc nhìn khác về một thuật toán tưởng chừng quá quen thuộc. Khi nhìn bài toán dưới dạng thống kê, ta hoàn toàn có thể khai thác thêm nhiều khía cạnh của môn toán này trong ứng dụng thực tiễn. Trong khuôn khổ bài viết, mình cũng chưa thử bất kỳ thí nghiệm nào về việc chọn/bỏ các đặc trưng dựa trên kiểm định giả thuyết thống kê. Hãy thực hiện nó và cho mình biết kết quả nếu có thể nhé.



