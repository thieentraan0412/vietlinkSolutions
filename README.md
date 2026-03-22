# VietLink Solutions Website

Website chính thức của **VietLink Solutions** — được xây dựng bằng **React 18**, hỗ trợ đa ngôn ngữ (Tiếng Việt / English / Japanese), tích hợp form liên hệ qua EmailJS, và nhiều hiệu ứng animation hiện đại.

---

## 🚀 Tính năng nổi bật

- 🌍 **Đa ngôn ngữ (i18n):** Hỗ trợ Tiếng Việt (`vi`), English (`en`) và Japanese (`jp`) sử dụng `react-i18next`
- 📧 **Form liên hệ:** Gửi email trực tiếp qua `EmailJS`, thông báo kết quả bằng `react-toastify`
- 🎞️ **Slider / Carousel:** Sử dụng `Swiper.js` cho các trang Career và Company
- ✨ **Animation:** Hiệu ứng cuộn mượt mà bằng `WOW.js` kết hợp `animate.css` và `Framer Motion`
- 📱 **Responsive:** Tương thích hoàn toàn trên mobile, tablet và desktop với **TailwindCSS**
- 🧭 **Routing:** Điều hướng trang bằng `React Router DOM v6`

---

## 📁 Cấu trúc thư mục

```
VietLink/
├── public/
│   ├── img/                  # Hình ảnh tĩnh (logo, icon, ảnh trang)
│   └── index.html
├── src/
│   ├── App.js                # Root component, khởi tạo WOW.js và Router
│   ├── index.js              # Entry point React
│   ├── i18n.js               # Cấu hình i18next (bản dịch VI / EN / JP)
│   ├── Context/
│   │   ├── MyContext.js      # React Context
│   │   └── MyProvider.js     # Provider quản lý language & page state
│   ├── route/
│   │   └── index.jsx         # Khai báo React Router (createBrowserRouter)
│   ├── layout/
│   │   └── Layout.jsx        # Layout chung (Header + Outlet + Footer)
│   ├── page/                 # Các trang chính
│   │   ├── HomePage.jsx
│   │   ├── Company.jsx
│   │   ├── Service.jsx
│   │   ├── Career.jsx
│   │   └── News.jsx
│   └── component/            # Các component tái sử dụng
│       ├── Header/           # Thanh điều hướng, chuyển ngôn ngữ, mobile menu
│       ├── Footer/
│       ├── Home/             # Thumbnail, Info, Blog, Contact form (trang chủ)
│       ├── Company/          # Tab1, Tab2, Tab3 - thông tin công ty
│       ├── Career/           # CareerInfo, Contact form tuyển dụng
│       ├── service/          # Thông tin dịch vụ
│       ├── News/             # Danh sách tin tức
│       ├── parallax/         # Hiệu ứng parallax background
│       └── Error/            # Trang lỗi 404
├── package.json
├── tailwind.config.js
└── .env
```

---

## 🗺️ Các trang

| Đường dẫn    | Mô tả                                     |
|--------------|-------------------------------------------|
| `/`          | Trang chủ — giới thiệu công ty, blog, form liên hệ |
| `/Company`   | Thông tin chi tiết về VietLink Solutions  |
| `/Service`   | Các dịch vụ cung cấp                      |
| `/Career`    | Cơ hội nghề nghiệp — văn hóa công ty, slider ảnh |
| `/Contact`   | Form liên hệ / ứng tuyển                  |
| `/News`      | Tin tức mới nhất                          |

---

## 🛠️ Công nghệ sử dụng

| Thư viện / Công cụ      | Phiên bản   | Mục đích                                |
|--------------------------|-------------|------------------------------------------|
| `react`                 | ^18.3.1     | UI framework                             |
| `react-router-dom`      | ^6.23.1     | Điều hướng trang (SPA routing)           |
| `react-i18next`         | ^14.1.2     | Đa ngôn ngữ                              |
| `i18next`               | ^23.11.5    | Engine dịch thuật                        |
| `@emailjs/browser`      | ^4.3.3      | Gửi email từ client (form liên hệ)       |
| `react-toastify`        | ^10.0.5     | Thông báo toast (thành công / lỗi)       |
| `framer-motion`         | ^11.2.12    | Animation component                      |
| `wowjs` + `animate.css` | ^1.1.3      | Hiệu ứng scroll-triggered animation      |
| `swiper`                | ^11.1.4     | Slider / Carousel ảnh                    |
| `tailwindcss`           | ^3.4.4      | Utility-first CSS framework              |
| `@heroicons/react`      | ^2.1.4      | Bộ icon SVG                              |
| `react-icons`           | ^5.2.1      | Icon library                             |

---

## ⚙️ Cài đặt và chạy dự án

### Yêu cầu

- **Node.js** >= 16
- **npm** >= 8

### Các bước thực hiện

```bash
# 1. Clone repository
git clone <repository-url>
cd VietLink

# 2. Cài đặt dependencies
npm install

# 3. Tạo file .env (nếu cần)
# Tham khảo .env.example

# 4. Chạy ở môi trường development
npm start
```

Ứng dụng sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build production

```bash
npm run build
```

Thư mục `build/` sẽ được tạo ra chứa bản đóng gói sẵn sàng deploy.

---

## 🌐 Đa ngôn ngữ

Cấu hình ngôn ngữ được quản lý trong `src/i18n.js`. Ngôn ngữ mặc định là **Tiếng Việt** (`vi`), người dùng có thể chuyển đổi qua Header.

Ngôn ngữ đang chọn được lưu trong `sessionStorage` để giữ trạng thái khi điều hướng giữa các trang.

Các ngôn ngữ hỗ trợ:

- 🇻🇳 **VN** — Tiếng Việt (mặc định)
- 🇺🇸 **EN** — English
- 🇯🇵 **JP** — Japanese

---

## 📬 Cấu hình EmailJS

Form liên hệ sử dụng [EmailJS](https://www.emailjs.com/) để gửi email mà không cần backend. Cần cấu hình các thông số sau trong `src/component/Home/Contact.jsx` và `src/component/Career/Contact.jsx`:

```js
emailjs.send("SERVICE_ID", "TEMPLATE_ID", formdata, "PUBLIC_KEY")
```

> Đăng ký tài khoản tại [emailjs.com](https://www.emailjs.com/) để lấy `SERVICE_ID`, `TEMPLATE_ID`, và `PUBLIC_KEY`.

---

## 📞 Thông tin liên hệ

- **Email:** info@vietlinkads.com
- **Điện thoại:** +84 28 3821 1734

---

> © VietLink Solutions. All rights reserved.