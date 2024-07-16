import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE = "HEADER_SLIDE",
}

export interface IData {
  subTitle?: string;
  content?: string[];
  image?: string;
}

export interface ISlideData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  detail: IData[];
}

export interface IObjectSlideData {
  [key: string]: ISlideData;
}

export const headerSlideData: IObjectSlideData = {
  slide1: {
    id: "slide1",
    image: require("../assets/astronomy/slide1.jpeg"),
    title: "Vũ trụ là gì?",
    description:
      "Vũ Trụ được xem là không gian vô tận - Nơi chứa đựng các thiên hà cùng những kì quan tuyệt vời ở trong lòng mình. Trong đó, mỗi thiên hà là tập hợp của nhiều thiên thể như hành tinh, vệ tinh (mặt trăng), ngôi sao, sao băng, sao chổi,…",
    detail: [
      {
        subTitle: "Lịch Sử và Khởi Nguồn:",
        content: [
          "Big Bang: Khoảng 13.8 tỷ năm trước, một vụ nổ lớn gọi là Big Bang đã khởi đầu sự tồn tại của vũ trụ. Vụ nổ này tạo ra tất cả vật chất và năng lượng, cũng như không gian và thời gian mà chúng ta biết ngày nay.",
        ],
        image:
          "https://cdnphoto.dantri.com.vn/b0WWpuZsz9YTS_gI-Gp7Xet6sBs=/thumb_w/1020/2022/11/30/vutru-crop-1669768098200.jpeg",
      },
      {
        subTitle: "Cấu Trúc và Thành Phần:",
        content: [
          "Thiên Hà: Thiên hà là hệ thống lớn bao gồm hàng tỷ ngôi sao, khí, bụi và vật chất tối, tất cả được giữ lại bởi lực hấp dẫn. Ví dụ, Ngân Hà (Milky Way) là thiên hà chứa Hệ Mặt Trời của chúng ta.",
          "Ngôi Sao và Hành Tinh: Ngôi sao là những khối cầu khí nóng, tự phát sáng, trong khi hành tinh là những thiên thể quay quanh ngôi sao và không tự phát sáng.",
          "Vật Chất Tối và Năng Lượng Tối: Mặc dù không thể nhìn thấy bằng mắt thường, vật chất tối và năng lượng tối chiếm phần lớn khối lượng và năng lượng của vũ trụ, ảnh hưởng mạnh mẽ đến sự mở rộng và cấu trúc của nó.",
        ],
        image:
          "https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2023/07/22/faef_cau-tao-vu-tru.png",
      },
    ],
  },
};
