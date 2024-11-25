import { NextResponse } from "next/server";

// Dữ liệu mẫu từ data.json
const data = {
  posts: [
    {
      id: "1",
      title: "Giảm giá mùa Noel: Tận hưởng mái tóc đẹp với ưu đãi 50%",
      slug: "giam-gia-mua-noel-tan-huong-mai-toc-dep-voi-uu-dai-50",
      content: "Chào đón mùa Noel với ưu đãi siêu hấp dẫn! Salon của chúng tôi giảm giá lên đến 50% cho tất cả các dịch vụ làm tóc. Đây là cơ hội tuyệt vời để bạn sở hữu một kiểu tóc mới, tự tin đón Giáng sinh rực rỡ.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Ảnh khuyến mãi mùa Noel tại salon",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 5,
      excerpt: "Chào đón mùa Noel với ưu đãi siêu hấp dẫn! Salon của chúng tôi giảm giá lên đến 50% cho tất cả các dịch vụ làm tóc.",
      tags: [
        { id: "1", name: "Khuyến mãi", slug: "khuyen-mai" },
      ],
    },
    {
      id: "2",
      title: "Khuyến mãi mùa Tết: Làm tóc đẹp, đón lộc đầu xuân",
      slug: "khuyen-mai-mua-tet-lam-toc-dep-don-loc-dau-xuan",
      content: "Salon giới thiệu gói dịch vụ ưu đãi đón Tết: Giảm 30% cho dịch vụ uốn, duỗi, nhuộm. Hãy để mái tóc của bạn rạng ngời trong những ngày đầu năm mới, thu hút mọi ánh nhìn.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Khuyến mãi Tết tại salon",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 4,
      excerpt: "Salon giới thiệu gói dịch vụ ưu đãi đón Tết: Giảm 30% cho dịch vụ uốn, duỗi, nhuộm.",
      tags: [
        { id: "1", name: "Khuyến mãi", slug: "khuyen-mai" },
      ],
    },
    {
      id: "3",
      title: "Ưu đãi mùa Đông: Mái tóc khỏe đẹp không lo giá lạnh",
      slug: "uu-dai-mua-dong-mai-toc-khoe-dep-khong-lo-gia-lanh",
      content: "Mùa Đông này, salon mang đến chương trình khuyến mãi giảm giá 20% cho các liệu trình dưỡng tóc chuyên sâu, giúp bạn tự tin hơn với mái tóc óng ả, mềm mượt.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Khuyến mãi mùa Đông tại salon",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 3,
      excerpt: "Mùa Đông này, salon mang đến chương trình khuyến mãi giảm giá 20% cho các liệu trình dưỡng tóc chuyên sâu.",
      tags: [
        { id: "1", name: "Khuyến mãi", slug: "khuyen-mai" },
      ],
    },
    {
      id: "4",
      title: "Tóc bob ngắn: Hot trend năm nay dành cho nàng cá tính",
      slug: "toc-bob-ngan-hot-trend-nam-nay-danh-cho-nang-ca-tinh",
      content: "Tóc bob ngắn không chỉ trẻ trung mà còn phù hợp với mọi khuôn mặt. Cùng khám phá tại salon chúng tôi để biến hóa với kiểu tóc được yêu thích nhất năm nay.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Kiểu tóc bob ngắn",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 3,
      excerpt: "Tóc bob ngắn không chỉ trẻ trung mà còn phù hợp với mọi khuôn mặt.",
      tags: [
        { id: "2", name: "Mẫu đẹp", slug: "mau-dep" },
      ],
    },
    {
      id: "5",
      title: "Tóc layer nữ: Lựa chọn hoàn hảo cho nàng dịu dàng",
      slug: "toc-layer-nu-lua-chon-hoan-hao-cho-nang-diu-dang",
      content: "Kiểu tóc layer nữ đang làm mưa làm gió trong năm nay. Hãy thử ngay để mang lại vẻ đẹp nhẹ nhàng, tinh tế và phù hợp với nhiều dịp khác nhau.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Tóc layer nữ",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 4,
      excerpt: "Kiểu tóc layer nữ đang làm mưa làm gió trong năm nay.",
      tags: [
        { id: "2", name: "Mẫu đẹp", slug: "mau-dep" },
      ],
    },
    {
      id: "6",
      title: "Tóc nhuộm ombre: Thời thượng và phá cách",
      slug: "toc-nhuom-ombre-thoi-thuong-va-pha-cach",
      content: "Nếu bạn muốn thay đổi phong cách, tóc nhuộm ombre với những gam màu độc đáo chính là lựa chọn dành cho bạn. Đến salon để được tư vấn màu tóc hợp nhất với bạn nhé!",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Tóc nhuộm ombre",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 4,
      excerpt: "Nếu bạn muốn thay đổi phong cách, tóc nhuộm ombre với những gam màu độc đáo chính là lựa chọn dành cho bạn.",
      tags: [
        { id: "2", name: "Mẫu đẹp", slug: "mau-dep" },
      ],
    },
    {
      id: "7",
      title: "Bí quyết dưỡng tóc mùa đông: Không lo tóc khô và gãy rụng",
      slug: "bi-quyet-duong-toc-mua-dong-khong-lo-toc-kho-va-gay-rung",
      content: "Mùa Đông làm tóc dễ khô và xơ rối. Đừng bỏ qua các bí quyết dưỡng tóc đơn giản nhưng hiệu quả giúp bạn luôn sở hữu mái tóc đẹp bất chấp thời tiết.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Dưỡng tóc mùa đông",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 5,
      excerpt: "Mùa Đông làm tóc dễ khô và xơ rối. Đừng bỏ qua các bí quyết dưỡng tóc đơn giản nhưng hiệu quả.",
      tags: [
        { id: "3", name: "Tips", slug: "tips" },
      ],
    },
    {
      id: "8",
      title: "Chọn kiểu tóc phù hợp để thu hút ánh nhìn trong dịp lễ",
      slug: "chon-kieu-toc-phu-hop-de-thu-hut-anh-nhin-trong-dip-le",
      content: "Mỗi dịp lễ đều có những kiểu tóc phù hợp để tỏa sáng. Hãy cùng khám phá các gợi ý từ salon để bạn luôn nổi bật trong mọi sự kiện.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Kiểu tóc dịp lễ",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 4,
      excerpt: "Mỗi dịp lễ đều có những kiểu tóc phù hợp để tỏa sáng. Hãy cùng khám phá các gợi ý từ salon để bạn luôn nổi bật.",
      tags: [
        { id: "3", name: "Tips", slug: "tips" },
      ],
    },
    {
      id: "9",
      title: "Mẹo nhỏ giúp tóc bóng mượt, bồng bềnh tự nhiên",
      slug: "meo-nho-giup-toc-bong-muot-bong-benh-tu-nhien",
      content: "Để có mái tóc bồng bềnh tự nhiên, bạn không cần đến những sản phẩm đắt tiền. Áp dụng ngay những mẹo dưỡng tóc từ salon để mái tóc luôn khỏe đẹp.",
      feature_image: "https://static.ghost.org/v4.0.0/images/feature-image.jpg", // Cập nhật với ảnh thật
      feature_image_alt: "Mẹo dưỡng tóc",
      updated_at: "2024-11-17T10:00:00.000Z",
      published_at: "2024-11-17T09:00:00.000Z",
      reading_time: 4,
      excerpt: "Để có mái tóc bồng bềnh tự nhiên, bạn không cần đến những sản phẩm đắt tiền. Áp dụng ngay những mẹo dưỡng tóc từ salon.",
      tags: [
        { id: "3", name: "Tips", slug: "tips" },
      ],
    },
  ],
};

export async function GET() {
  // Trả về danh sách bài viết dưới dạng JSON
  return NextResponse.json(data.posts);
}
