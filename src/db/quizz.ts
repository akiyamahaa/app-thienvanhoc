import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType | string;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: "https://ss-images.saostar.vn/pc/1610351799069/mat-troi-5.jpg",
      ques: "Mặt Trời chiếm bao nhiêu phần trăm tổng khối lượng của hệ mặt trời?",
      choose: ["99,86%", "50%", "75%"],
      ans: 0,
    },
    {
      image:
        "https://prima.vn/wp-content/uploads/2022/06/imager_3_1983_700-1050x600.jpg",
      ques: "Ánh sáng từ Mặt Trời mất bao lâu để đến Trái Đất?",
      choose: ["8 phút 20 giây", "1 giờ", "24 giờ"],
      ans: 0,
    },
    {
      image:
        "https://lytuong.net/wp-content/uploads/2021/06/kuiperbelt_1.en.png",
      ques: "Vành đai tiểu hành tinh nằm giữa quỹ đạo của hai hành tinh nào?",
      choose: [
        "Sao Kim và Trái Đất",
        "Sao Hỏa và Sao Mộc",
        "Sao Thổ và Sao Thiên Vương",
      ],
      ans: 1,
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/KLXJHZX37JfEjgsppM2qmG.jpg",
      ques: "Khi sao chổi tiến gần Mặt Trời, điều gì xảy ra với nó?",
      choose: [
        "Nó tan chảy hoàn toàn",
        "Nó phát sáng và tạo ra đuôi",
        "Nó bay vào Mặt Trời",
      ],
      ans: 1,
    },
    {
      image: "https://cdn.hswstatic.com/gif/kuiper-belt-2.jpg",
      ques: "Vành đai Kuiper chứa các vật thể băng đá nằm ở đâu?",
      choose: [
        "Giữa Sao Hỏa và Sao Mộc",
        "Ngoài quỹ đạo của Sao Hải Vương",
        "Gần Mặt Trời",
      ],
      ans: 1,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPSQryxd8FiNXzuqjcztfI_anGhmBUax3SA&s",
      ques: "Mây Oort bao quanh hệ mặt trời ở khoảng cách nào?",
      choose: [
        "Gần Trái Đất",
        "Giữa Sao Mộc và Sao Thổ",
        "Rất xa, gấp hàng ngàn lần khoảng cách từ Mặt Trời đến Sao Hải Vương",
      ],
      ans: 2,
    },
    {
      image:
        "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/5/11/bao-mat-troi-nasa-17154216827981186330163.jpg",
      ques: "Bão mặt trời có thể gây ra hiện tượng gì trên Trái Đất?",
      choose: ["Động đất", "Cực quang", "Lũ lụt"],
      ans: 1,
    },
    {
      image:
        "https://cdn.tuoitre.vn/zoom/480_300/2022/12/1/sun-solar-storm-166988437292795854480-crop-166988484134764650087.jpg",
      ques: "Gió mặt trời là gì?",
      choose: [
        "Một loại gió trên Trái Đất",
        "Dòng hạt mang điện phát ra từ Mặt Trời",
        "Gió thổi từ hành tinh khác",
      ],
      ans: 1,
    },
    {
      image:
        "https://www.mientaysafety.com/Portals/28244/ctv/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi%201.jpg",
      ques: "Trọng lực của hành tinh nào có tác động bảo vệ Trái Đất khỏi các tiểu hành tinh và sao chổi?",
      choose: ["Sao Kim", "Sao Mộc", "Sao Thủy"],
      ans: 1,
    },
    {
      image: "https://img.loigiaihay.com/picture/2022/1004/34.png",
      ques: "Hệ mặt trời nằm trong thiên hà nào?",
      choose: ["Andromeda", "Milky Way", "Triangulum"],
      ans: 1,
    },
  ],
  medium: [
    {
      image: "https://ss-images.saostar.vn/pc/1610351799069/mat-troi-5.jpg",
      ques: "Mặt Trời cung cấp năng lượng cho hệ mặt trời thông qua quá trình nào?",
      choose: [
        "Quá trình nhiệt hạch",
        "Quá trình phân rã",
        "Quá trình ion hóa",
      ],
      ans: 0,
    },
    {
      image:
        "https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_67/gio-va-bao-mat-troi-duoc-tao-ra-nhu-the-nao-1661856775-900x540245.jpg",
      ques: "Gió mặt trời chủ yếu gồm loại hạt nào?",
      choose: [
        "Electron và proton",
        "Neutron và proton",
        "Electron và neutron",
      ],
      ans: 0,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2020/06/06/Saochoireal-1591413464-8913-1591413616.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=_A1EX_6p42KWvoCnR1lhIg",
      ques: "Đuôi của sao chổi luôn hướng về phía nào?",
      choose: [
        "Phía trước sao chổi",
        "Ngược với hướng Mặt Trời",
        "Hướng về Mặt Trời",
      ],
      ans: 1,
    },
    {
      image:
        "https://media.techz.vn/media2019/upload2019/2023/11/11/tieu-hanh-tinh_11112023231138.jpg",
      ques: "Tiểu hành tinh lớn nhất trong vành đai tiểu hành tinh là gì?",
      choose: ["Ceres", "Vesta", "Pallas"],
      ans: 0,
    },
    {
      image:
        "https://vnn-imgs-f.vgcloud.vn/2018/02/02/15/vanh-dai-kuiper-trong-he-ma-t-tro-i-la-gi.jpg",
      ques: "Vành đai Kuiper chứa các hành tinh lùn nào?",
      choose: ["Pluto và Eris", "Ceres và Vesta", "Ganymede và Titan"],
      ans: 0,
    },
    {
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/7/917634/Sao-Choi.jpg",
      ques: "Mây Oort được coi là nguồn gốc của nhiều sao chổi có chu kỳ dài. Điều này đúng hay sai?",
      choose: ["Đúng", "Sai"],
      ans: 0,
    },
    {
      image:
        "https://ktmt.vnmediacdn.com/images/2023/10/13/13-1697183030-c-10.jpg",
      ques: "Bão mặt trời có thể ảnh hưởng đến những thiết bị nào trên Trái Đất?",
      choose: [
        "Điện thoại di động",
        "Vệ tinh và hệ thống điện lưới",
        "Máy giặt",
      ],
      ans: 1,
    },
    {
      image:
        "https://genk.mediacdn.vn/thumb_w/640/2016/solar-system-670x440-130502-1452831803466-crop-1452831817641.jpg",
      ques: "Trọng lực của Mặt Trời giữ các hành tinh và thiên thể khác như thế nào?",
      choose: [
        "Giữ chúng quay quanh Mặt Trời",
        "Đẩy chúng ra xa",
        "Giữ chúng ở một chỗ",
      ],
      ans: 0,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2023/04/14/VNE-Sun-1652-1681470597.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=JWRreSSmcUXsmvszs1tYcw",
      ques: "Hệ mặt trời được hình thành khoảng bao nhiêu năm trước?",
      choose: ["4.6 tỷ năm", "3.6 tỷ năm", "2.6 tỷ năm"],
      ans: 0,
    },
    {
      image:
        "https://www.mientaysafety.com/Portals/28244/ctv/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi%201.jpg",
      ques: "Một tiểu hành tinh hoặc sao chổi va chạm với Trái Đất có thể gây ra hiện tượng gì?",
      choose: [
        "Nổ lớn và hình thành hố va chạm",
        "Tăng nhiệt độ toàn cầu",
        "Giảm độ cao của núi",
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image:
        "https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202003/original/images2275075_mat_troi.jpg",
      ques: "Quá trình nhiệt hạch xảy ra ở lớp nào của Mặt Trời?",
      choose: ["Lớp vỏ", "Lớp quang quyển", "Lõi"],
      ans: 2,
    },
    {
      image:
        "https://genk.mediacdn.vn/139269124445442048/2020/4/19/photo-1-15872759931751196891432.jpg",
      ques: "Gió mặt trời ảnh hưởng đến từ trường của Trái Đất như thế nào?",
      choose: [
        "Gây ra cực quang",
        "Tạo ra từ trường mạnh hơn",
        "Không có tác động gì",
      ],
      ans: 0,
    },
    {
      image:
        "https://kienthuctonghop.vn/wp-content/uploads/2020/11/y-nghia-cua-sao-choi.jpg",
      ques: "Hạt nhân của một sao chổi thường được cấu tạo bởi gì?",
      choose: ["Băng, bụi và khí", "Đá và kim loại", "Chỉ có khí"],
      ans: 0,
    },
    {
      image:
        "https://genk.mediacdn.vn/thumb_w/640/2016/solar-system-670x440-130502-1452831803466-crop-1452831817641.jpg",
      ques: "Lực hấp dẫn của hành tinh nào đóng vai trò chính trong việc giữ vành đai tiểu hành tinh ở vị trí hiện tại?",
      choose: ["Sao Hỏa", "Sao Mộc", "Sao Thổ"],
      ans: 1,
    },
    {
      image:
        "https://cafebiz.cafebizcdn.vn/zoom/700_438/162123310254002176/2022/10/31/avatar1667182128891-16671821290791683767202.jpg",
      ques: "Hành tinh lùn lớn nhất trong vành đai Kuiper là gì?",
      choose: ["Pluto", "Haumea", "Makemake"],
      ans: 0,
    },
    {
      image: "https://e.khoahoc.tv/photos/image/2017/04/19/he-mat-troi-650.jpg",
      ques: "Khoảng cách từ Mặt Trời đến Mây Oort ước tính là bao nhiêu AU (đơn vị thiên văn)?",
      choose: ["100-200 AU", "2000-5000 AU", "50.000-100.000 AU"],
      ans: 2,
    },
    {
      image:
        "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2024/5/11/bao-mat-troi-nasa-17153970641991331697326-50-0-720-1280-crop-17153970816341769636150.jpg",
      ques: "Các hạt năng lượng cao từ bão mặt trời có thể gây ra hiện tượng nào trong không gian?",
      choose: [
        "Làm biến dạng từ trường của Trái Đất",
        "Làm hỏng thiết bị điện tử trên vệ tinh",
        "Làm tan băng trên sao chổi",
      ],
      ans: 1,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2024/07/22/VNE-Planet-2066-1721644561.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=LPzVM7CeQt0vTY9Fm08JVg",
      ques: "Hiệu ứng hấp dẫn của Sao Mộc có tác động gì lên các thiên thể nhỏ trong hệ mặt trời?",
      choose: [
        "Làm giảm tốc độ quay của chúng",
        "Đẩy chúng vào quỹ đạo Trái Đất",
        "Bảo vệ Trái Đất bằng cách hút hoặc làm chệch hướng chúng",
      ],
      ans: 3,
    },
    {
      image: "https://coe.edu.vn/wp-content/uploads/2022/05/he-mat-troi-2.jpg",
      ques: "Hiện tượng nào trong hệ mặt trời có thể cung cấp thông tin về thành phần hóa học của các hành tinh và thiên thể khác?",
      choose: ["Quang phổ học", "Nhiệt động lực học", "Thuyết tương đối"],
      ans: 0,
    },
    {
      image:
        "https://skhcn.bacninh.gov.vn/documents/22549/69518/Hanh-tinh-thang-hang-2878-1710840354.jpg/c655ed90-327f-d1b4-1b66-c323a7c69046?t=1711122067305",
      ques: "Cơ quan nào đang điều hành các sứ mệnh thăm dò và nghiên cứu các tiểu hành tinh trong hệ mặt trời?",
      choose: [
        "ESA (Cơ quan Vũ trụ Châu Âu)",
        "NASA (Cơ quan Hàng không và Vũ trụ Hoa Kỳ)",
        "JAXA (Cơ quan Vũ trụ Nhật Bản)",
      ],
      ans: 1,
    },
  ],
};
