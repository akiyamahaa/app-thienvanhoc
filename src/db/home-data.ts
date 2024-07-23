import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE,
  COMMON,
  PLANET,
  ALL,
}

export interface IContent {
  title?: string;
  body?: string[];
  image?: string;
}

export interface IData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  content: IContent[];
}

export interface IObjectData {
  [key: string]: IData;
}

export const headerSlideData: IObjectData = {
  slide1: {
    id: "slide1",
    image: require("../assets/astronomy/slide1.jpeg"),
    title: "Vũ trụ là gì?",
    description:
      "Vũ Trụ được xem là không gian vô tận - Nơi chứa đựng các thiên hà cùng những kì quan tuyệt vời ở trong lòng mình. Trong đó, mỗi thiên hà là tập hợp của nhiều thiên thể như hành tinh, vệ tinh (mặt trăng), ngôi sao, sao băng, sao chổi,…",
    content: [
      {
        title: "Lịch Sử và Khởi Nguồn:",
        body: [
          "Big Bang: Khoảng 13.8 tỷ năm trước, một vụ nổ lớn gọi là Big Bang đã khởi đầu sự tồn tại của vũ trụ. Vụ nổ này tạo ra tất cả vật chất và năng lượng, cũng như không gian và thời gian mà chúng ta biết ngày nay.",
        ],
        image:
          "https://cdnphoto.dantri.com.vn/b0WWpuZsz9YTS_gI-Gp7Xet6sBs=/thumb_w/1020/2022/11/30/vutru-crop-1669768098200.jpeg",
      },
      {
        title: "Cấu Trúc và Thành Phần:",
        body: [
          "Thiên Hà: Thiên hà là hệ thống lớn bao gồm hàng tỷ ngôi sao, khí, bụi và vật chất tối, tất cả được giữ lại bởi lực hấp dẫn. Ví dụ, Ngân Hà (Milky Way) là thiên hà chứa Hệ Mặt Trời của chúng ta.",
          "Ngôi Sao và Hành Tinh: Ngôi sao là những khối cầu khí nóng, tự phát sáng, trong khi hành tinh là những thiên thể quay quanh ngôi sao và không tự phát sáng.",
          "Vật Chất Tối và Năng Lượng Tối: Mặc dù không thể nhìn thấy bằng mắt thường, vật chất tối và năng lượng tối chiếm phần lớn khối lượng và năng lượng của vũ trụ, ảnh hưởng mạnh mẽ đến sự mở rộng và cấu trúc của nó.",
        ],
        image:
          "https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2023/07/22/faef_cau-tao-vu-tru.png",
      },
    ],
  },
  slide2: {
    id: "slide2",
    image:
      "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2023/10/26/anh-man-hinh-2023-10-26-luc-102652-16982908545011593910344-68-132-1141-1848-crop-1698290911229255785062.png",
    title: "Nguyệt Thực - Hiện Tượng Thiên Văn Kỳ Thú",
    description:
      "Nguyệt thực là hiện tượng xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng, khiến bóng của Trái Đất che khuất Mặt Trăng. Đây là một trong những hiện tượng thiên văn ấn tượng và dễ dàng quan sát bằng mắt thường.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Nguyệt Thực",
        body: [
          "Nguyệt thực xảy ra khi Mặt Trăng đi vào vùng bóng của Trái Đất. Vùng bóng này bao gồm hai phần: bóng tối (umbra) và bóng nửa tối (penumbra).",
          "Nguyệt thực toàn phần xảy ra khi Mặt Trăng hoàn toàn nằm trong bóng tối của Trái Đất, khiến nó chuyển sang màu đỏ do hiện tượng tán xạ ánh sáng trong khí quyển Trái Đất.",
          "Nguyệt thực một phần xảy ra khi chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
        ],
      },
      {
        title: "Các Loại Nguyệt Thực",
        body: [
          "Nguyệt thực toàn phần: Mặt Trăng hoàn toàn bị che khuất và chuyển sang màu đỏ đậm.",
          "Nguyệt thực một phần: Chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
          "Nguyệt thực nửa tối: Mặt Trăng chỉ đi vào bóng nửa tối của Trái Đất, khiến nó mờ đi mà không chuyển sang màu đỏ.",
        ],
      },
      {
        title: "Quan Sát Nguyệt Thực",
        body: [
          "Nguyệt thực dễ dàng quan sát bằng mắt thường mà không cần thiết bị bảo vệ đặc biệt như khi quan sát nhật thực.",
          "Sự kiện nguyệt thực thường kéo dài trong vài giờ, từ khi Mặt Trăng bắt đầu đi vào bóng nửa tối cho đến khi nó ra khỏi bóng hoàn toàn.",
          "Nguyệt thực có thể được quan sát từ bất kỳ nơi nào trên Trái Đất khi Mặt Trăng nằm trên đường chân trời.",
        ],
      },
      {
        title: "Lịch Sử Và Văn Hóa",
        body: [
          "Nguyệt thực đã được quan sát và ghi lại từ thời cổ đại, với nhiều nền văn hóa coi đây là sự kiện có ý nghĩa đặc biệt.",
          "Trong nhiều nền văn hóa, nguyệt thực được liên kết với các huyền thoại và truyền thuyết, thường được coi là điềm báo hoặc sự can thiệp của các vị thần.",
          "Ngày nay, nguyệt thực vẫn là một hiện tượng thiên văn được yêu thích và thu hút sự quan tâm của nhiều người trên khắp thế giới.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Các nhà thiên văn học sử dụng nguyệt thực để nghiên cứu cấu trúc và thành phần của bầu khí quyển Trái Đất thông qua hiện tượng tán xạ ánh sáng.",
          "Quan sát nguyệt thực cũng giúp các nhà khoa học hiểu rõ hơn về quỹ đạo và chuyển động của Mặt Trăng và Trái Đất.",
          "Nghiên cứu về nguyệt thực đóng góp vào việc cải thiện dự báo và hiểu biết về các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
  slide3: {
    id: "slide3",
    image: "https://bcp.cdnchinhphu.vn/Uploaded/buianhtho/2017_11_27/7Anh.jpg",
    title: "Hiện Tượng Sao Băng - Vũ Điệu Ánh Sáng Trên Bầu Trời",
    description:
      "Hiện tượng sao băng là hiện tượng thiên văn xảy ra khi các mảnh vụn vũ trụ, thường là các hạt bụi hoặc đá nhỏ, đi vào bầu khí quyển Trái Đất và bốc cháy, tạo ra những vệt sáng trên bầu trời. Đây là một trong những hiện tượng thiên văn đẹp và hấp dẫn nhất.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Băng",
        body: [
          "Sao băng (hay còn gọi là meteoroid) là các mảnh vụn nhỏ từ các sao chổi hoặc tiểu hành tinh.",
          "Khi một sao băng đi vào bầu khí quyển Trái Đất với tốc độ cao, ma sát với không khí làm nó nóng lên và bốc cháy, tạo ra vệt sáng gọi là sao băng.",
          "Nếu sao băng không cháy hết và rơi xuống mặt đất, phần còn lại được gọi là thiên thạch (meteorite).",
        ],
      },
      {
        title: "Các Loại Sao Băng",
        body: [
          "Sao băng lẻ: Sao băng xuất hiện ngẫu nhiên trên bầu trời mà không thuộc về bất kỳ trận mưa sao băng nào.",
          "Mưa sao băng: Hiện tượng xuất hiện hàng loạt sao băng từ một điểm chung trên bầu trời, thường xảy ra khi Trái Đất đi qua đám mây bụi của một sao chổi.",
        ],
      },
      {
        title: "Các Trận Mưa Sao Băng Nổi Tiếng",
        body: [
          "Perseids: Xảy ra vào tháng 8 hàng năm, với điểm xuất phát từ chòm sao Perseus.",
          "Geminids: Diễn ra vào tháng 12, với điểm xuất phát từ chòm sao Gemini.",
          "Leonids: Xuất hiện vào tháng 11, với điểm xuất phát từ chòm sao Leo và có thể tạo ra các trận mưa sao băng rất mạnh.",
        ],
      },
      {
        title: "Quan Sát Sao Băng",
        body: [
          "Thời điểm tốt nhất để quan sát sao băng là vào đêm khuya hoặc rạng sáng, khi bầu trời tối nhất.",
          "Không cần thiết bị đặc biệt để quan sát sao băng, nhưng một chiếc ghế ngả lưng và một tấm chăn có thể giúp bạn thoải mái hơn khi quan sát.",
          "Tránh ánh sáng đô thị và tìm đến các khu vực tối, thoáng đãng để có tầm nhìn tốt nhất.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Nghiên cứu về sao băng giúp các nhà khoa học hiểu rõ hơn về thành phần và nguồn gốc của các mảnh vụn vũ trụ.",
          "Các trận mưa sao băng cung cấp cơ hội để thu thập và phân tích thiên thạch, giúp mở rộng hiểu biết về hệ Mặt Trời và các sao chổi.",
          "Quan sát sao băng cũng đóng góp vào việc theo dõi và dự đoán các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
};

export const waterArea: any = {
  matbien: {
    image:
      "https://petmojo.com/ocean-surface-sunlight-zone-epipelagic-zone.jpg?id=image-b3da864e8745cb37a7177655020fd0a44f88378e-1200x688-jpg&width=1200&quality=55&fm=webp",
    depth_range: "Từ mặt nước đến khoảng 200 mét",
    temperature: "20°C đến 25°C, thay đổi theo vùng và mùa.",
    light: "Đầy đủ ánh sáng mặt trời, cho phép quang hợp xảy ra",
    pressure: "Tương đối thấp, tăng nhẹ theo độ sâu",
    marine_life: "Cá, sứa, tảo biển, san hô, cá heo, rùa biển",
  },
  bientrung: {
    image:
      "https://schmidtocean.org/wp-content/uploads/FK20429_20200602T055541Z-lights_off-S0365.jpg",
    depth_range: "Từ 200 đến 1,000 mét",
    temperature: "20°C đến 4°C, giảm dần với độ sâu",
    light: "Ánh sáng yếu, không đủ cho quang hợp",
    pressure: "Tăng đáng kể so với tầng epipelagic",
    marine_life: "Cá ánh sáng, mực, sinh vật phát sáng",
  },

  biensau: {
    image:
      "https://beyondtheabyssaldepths.wordpress.com/wp-content/uploads/2018/10/image.jpg?w=800",
    depth_range: "Từ 1,000 đến 4,000 mét",
    temperature: "4°C đến 0°C",
    light: "Không có ánh sáng mặt trời, chỉ có ánh sáng từ sinh vật phát sáng",
    pressure: "Rất cao, tăng mạnh theo độ sâu",
    marine_life: "Cá rồng, sinh vật phát sáng, giáp xác lớn, cá vây chân",
  },

  biensautham: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniiA9NC8DwuHSC3DuSwAZ8Dxw95luxiatpg&s",
    depth_range: "Từ 4,000 đến 6,000 mét.",
    temperature: "Thấp, dưới 2°C",
    light: "Không có ánh sáng mặt trời",
    pressure: "Cực kỳ cao",
    marine_life: "Giun ống khổng lồ, sao biển, sinh vật kỵ khí",
  },

  day: {
    image:
      "https://lakeerieimprovement.org/wp-content/uploads/2018/10/knowing-what%E2%80%99s-underneath-10-facts-about-the-hadal-zone-2-1024x576.jpg",
    depth_range: "Trên 6,000 mét, trong các rãnh sâu dưới biển",
    temperature: "Gần với nhiệt độ đóng băng, dưới 2°C",
    light: "Hoàn toàn tối tăm",
    pressure: "Cực kỳ cao, cao nhất trong các tầng biển",
    marine_life:
      "Sinh vật thích nghi với áp suất cao như giáp xác đặc biệt, giun ống, vi khuẩn kỵ khí",
  },
};

export const commonData: IObjectData = {
  "1": {
    id: "1",
    image:
      "https://dienmattroigio.com/wp-content/uploads/2022/11/trai-dat-va-mat-troi.jpg",
    title: "Mặt Trời - Ngôi Sao Trung Tâm Của Hệ Mặt Trời",
    description:
      "Mặt Trời, ngôi sao trung tâm của Hệ Mặt Trời, là nguồn năng lượng chính của Trái Đất và các hành tinh xung quanh. Đây là một quả cầu lửa khổng lồ, cung cấp ánh sáng và nhiệt lượng, duy trì sự sống trên Trái Đất và đóng vai trò quan trọng trong việc điều hòa khí hậu toàn cầu.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Mặt Trời",
        body: [
          "Mặt Trời là một ngôi sao loại G, thuộc dải Ngân Hà và cách Trái Đất khoảng 150 triệu km. Nó có đường kính khoảng 1,4 triệu km, lớn gấp 109 lần đường kính của Trái Đất. Mặt Trời được cấu tạo chủ yếu từ hydro (khoảng 74%) và heli (khoảng 24%), cùng một lượng nhỏ các nguyên tố nặng khác.",
          "Bên trong Mặt Trời, quá trình nhiệt hạch diễn ra ở lõi, nơi nhiệt độ đạt tới khoảng 15 triệu độ C. Quá trình này biến đổi hydro thành heli, sản sinh ra năng lượng khổng lồ được truyền ra ngoài dưới dạng bức xạ và ánh sáng.",
        ],
      },
      {
        title: "Các Lớp Cấu Tạo Của Mặt Trời",
        body: [
          "Lõi (Core): Đây là nơi diễn ra các phản ứng nhiệt hạch, nơi năng lượng được tạo ra.",
          "Vùng bức xạ (Radiative Zone): Năng lượng từ lõi di chuyển qua vùng này dưới dạng bức xạ.",
          "Vùng đối lưu (Convective Zone): Năng lượng tiếp tục di chuyển qua lớp này bằng dòng đối lưu, tạo ra các đợt chuyển động của khí nóng.",
          "Phía ngoài của Mặt Trời bao gồm các lớp: quang quyển, sắc quyển và vành nhật hoa.",
          "Quang quyển (Photosphere): Đây là bề mặt nhìn thấy của Mặt Trời, nơi phát ra ánh sáng.",
          "Sắc quyển (Chromosphere): Một lớp mỏng bên trên quang quyển, thường chỉ thấy trong các hiện tượng nhật thực toàn phần.",
          "Vành nhật hoa (Corona): Lớp ngoài cùng, có nhiệt độ cao, trải rộng ra không gian vũ trụ và chỉ nhìn thấy rõ trong nhật thực toàn phần.",
        ],
      },
      {
        title: "Tầm Quan Trọng Của Mặt Trời",
        body: [
          "Mặt Trời không chỉ cung cấp năng lượng và ánh sáng mà còn tạo ra các hiện tượng quan trọng như gió Mặt Trời và từ trường Mặt Trời. Gió Mặt Trời là dòng hạt tích điện di chuyển từ Mặt Trời ra không gian, ảnh hưởng đến từ trường của Trái Đất và tạo ra các hiện tượng như cực quang.",
          "Từ trường Mặt Trời cũng gây ra các vết đen và lửa Mặt Trời, có thể ảnh hưởng đến khí hậu và các thiết bị điện tử trên Trái Đất.",
        ],
      },
      {
        title: "Vòng Đời Của Mặt Trời",
        body: [
          "Mặt Trời hiện đang ở giai đoạn chính của cuộc đời, giai đoạn đốt cháy hydro để sản sinh năng lượng.",
          "Sau khoảng 5 tỷ năm nữa, Mặt Trời sẽ tiến vào giai đoạn sao khổng lồ đỏ, phình to và nuốt chửng các hành tinh gần kề như sao Thủy và sao Kim.",
          "Cuối cùng, Mặt Trời sẽ suy yếu và biến thành sao lùn trắng.",
        ],
      },
      {
        title: "Ảnh Hưởng Đến Hệ Mặt Trời",
        body: [
          "Mặt Trời có ảnh hưởng quyết định đến tất cả các hành tinh trong Hệ Mặt Trời.",
          "Nó giữ các hành tinh trong quỹ đạo bằng lực hấp dẫn của mình và điều chỉnh khí hậu của các hành tinh qua sự biến đổi năng lượng và ánh sáng.",
        ],
      },
    ],
  },
  "2": {
    id: "2",
    image: "https://static.robocon.com.vn/api/images/20170426/i.jpg",
    title: "Vành Đai Tiểu Hành Tinh - Vùng Không Gian Giữa Sao Hỏa Và Sao Mộc",
    description:
      "Vành Đai Tiểu Hành Tinh là vùng không gian nằm giữa quỹ đạo của sao Hỏa và sao Mộc, chứa hàng triệu tiểu hành tinh và mảnh vụn không gian. Khu vực này giữ nhiều thông tin quan trọng về sự hình thành và tiến hóa của Hệ Mặt Trời.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Vành Đai Tiểu Hành Tinh",
        body: [
          "Vành Đai Tiểu Hành Tinh nằm giữa quỹ đạo của sao Hỏa và sao Mộc, trải dài khoảng 1,5 triệu km.",
          "Khu vực này chứa hàng triệu tiểu hành tinh với kích thước từ vài mét đến hàng trăm km. Các tiểu hành tinh này chủ yếu được cấu tạo từ đá và kim loại.",
          "Một số tiểu hành tinh nổi bật trong vành đai này bao gồm Ceres, Vesta, Pallas và Hygiea. Ceres là tiểu hành tinh lớn nhất và được phân loại là hành tinh lùn.",
        ],
      },
      {
        title: "Nguồn Gốc Và Hình Thành",
        body: [
          "Vành Đai Tiểu Hành Tinh được cho là tàn dư từ quá trình hình thành Hệ Mặt Trời khoảng 4,6 tỷ năm trước.",
          "Lực hấp dẫn mạnh mẽ từ sao Mộc ngăn cản các vật chất trong vành đai hợp nhất thành một hành tinh lớn.",
          "Các tiểu hành tinh trong vành đai giữ lại nhiều thông tin quý giá về điều kiện nguyên thủy của Hệ Mặt Trời.",
        ],
      },
      {
        title: "Tầm Quan Trọng Của Vành Đai Tiểu Hành Tinh",
        body: [
          "Vành Đai Tiểu Hành Tinh đóng vai trò quan trọng trong việc nghiên cứu sự hình thành và tiến hóa của Hệ Mặt Trời.",
          "Nó cung cấp các mẫu vật lý quan trọng để các nhà khoa học nghiên cứu về thành phần hóa học và cấu trúc của các tiểu hành tinh.",
          "Việc nghiên cứu vành đai này cũng giúp chúng ta hiểu rõ hơn về các nguy cơ tiềm ẩn từ tiểu hành tinh có thể va chạm với Trái Đất.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Các sứ mệnh không gian như Dawn của NASA đã mang lại nhiều thông tin quan trọng về Vesta và Ceres.",
          "Các nhà khoa học sử dụng kính viễn vọng và các công nghệ tiên tiến để theo dõi và nghiên cứu các tiểu hành tinh trong vành đai.",
          "Việc tiếp tục nghiên cứu Vành Đai Tiểu Hành Tinh sẽ giúp chúng ta có cái nhìn sâu sắc hơn về quá khứ và tương lai của Hệ Mặt Trời.",
        ],
      },
    ],
  },
  "3": {
    id: "3",
    image: "https://genk.mediacdn.vn/2016/kuiper-belt-1474296780870.png",
    title: "Vành Đai Kuiper - Vùng Biên Giới Xa Xôi Của Hệ Mặt Trời",
    description:
      "Vành Đai Kuiper là vùng không gian xa xôi nằm ngoài quỹ đạo của sao Hải Vương, chứa hàng ngàn thiên thể băng giá và các hành tinh lùn. Khu vực này đóng vai trò quan trọng trong việc hiểu rõ hơn về sự hình thành và tiến hóa của Hệ Mặt Trời.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Vành Đai Kuiper",
        body: [
          "Vành Đai Kuiper bắt đầu từ khoảng 30 đơn vị thiên văn (AU) và kéo dài đến khoảng 55 AU từ Mặt Trời.",
          "Khu vực này chứa hàng ngàn thiên thể băng giá và các hành tinh lùn, bao gồm các vật thể lớn như Pluto, Haumea, Makemake và Eris.",
          "Các thiên thể trong Vành Đai Kuiper chủ yếu được cấu tạo từ nước đá, metan, amoniac và các hợp chất hữu cơ.",
        ],
      },
      {
        title: "Nguồn Gốc Và Hình Thành",
        body: [
          "Vành Đai Kuiper được cho là tàn dư từ quá trình hình thành Hệ Mặt Trời, tương tự như Vành Đai Tiểu Hành Tinh nhưng ở khoảng cách xa hơn.",
          "Các thiên thể trong Vành Đai Kuiper không hợp nhất thành hành tinh lớn do ảnh hưởng của lực hấp dẫn từ sao Hải Vương.",
          "Vành Đai Kuiper chứa các vật liệu nguyên thủy từ thời kỳ đầu của Hệ Mặt Trời, cung cấp thông tin quý giá về điều kiện ban đầu của hệ hành tinh của chúng ta.",
        ],
      },
      {
        title: "Tầm Quan Trọng Của Vành Đai Kuiper",
        body: [
          "Vành Đai Kuiper là một trong những khu vực quan trọng nhất để nghiên cứu về sự hình thành và tiến hóa của Hệ Mặt Trời.",
          "Nó cung cấp các mẫu vật lý quan trọng để các nhà khoa học nghiên cứu về thành phần hóa học và cấu trúc của các thiên thể băng giá.",
          "Nghiên cứu Vành Đai Kuiper giúp hiểu rõ hơn về các hành tinh lùn và các vật thể băng giá khác, cũng như nguồn gốc của các sao chổi.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Sứ mệnh New Horizons của NASA đã mang lại nhiều thông tin quan trọng về Pluto và các vật thể trong Vành Đai Kuiper.",
          "Các nhà khoa học sử dụng kính viễn vọng và các công nghệ tiên tiến để theo dõi và nghiên cứu các thiên thể trong Vành Đai Kuiper.",
          "Việc tiếp tục nghiên cứu Vành Đai Kuiper sẽ giúp chúng ta có cái nhìn sâu sắc hơn về quá khứ và tương lai của Hệ Mặt Trời, cũng như khả năng tồn tại của các hành tinh lùn và thiên thể băng giá khác.",
        ],
      },
    ],
  },
  "4": {
    id: "4",
    image:
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/7/917634/Sao-Choi.jpg?w=800&h=496&crop=auto&scale=both",
    title: "Mây Oort - Vùng Biên Giới Xa Xôi Nhất Của Hệ Mặt Trời",
    description:
      "Mây Oort là một vùng bao quanh Hệ Mặt Trời, chứa hàng tỷ thiên thể băng giá. Được cho là nguồn gốc của các sao chổi dài hạn, Mây Oort giúp chúng ta hiểu rõ hơn về biên giới của hệ hành tinh của chúng ta.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Mây Oort",
        body: [
          "Mây Oort là một vùng rộng lớn bao quanh Hệ Mặt Trời, bắt đầu từ khoảng 2.000 đến 5.000 đơn vị thiên văn (AU) và kéo dài đến khoảng 100.000 AU từ Mặt Trời.",
          "Khu vực này chứa hàng tỷ thiên thể băng giá, chủ yếu là các hạt nhỏ và các sao chổi tiềm năng.",
          "Các thiên thể trong Mây Oort chủ yếu được cấu tạo từ nước đá, metan, amoniac và các hợp chất hữu cơ, tương tự như các sao chổi.",
        ],
      },
      {
        title: "Nguồn Gốc Và Hình Thành",
        body: [
          "Mây Oort được cho là tàn dư từ quá trình hình thành Hệ Mặt Trời, bao gồm các vật chất bị đẩy ra khỏi vùng trong của hệ hành tinh do tương tác hấp dẫn với các hành tinh khổng lồ.",
          "Lực hấp dẫn từ các ngôi sao gần đó và từ dải Ngân Hà giữ các thiên thể trong Mây Oort ở vị trí xa xôi này.",
          "Các thiên thể trong Mây Oort cung cấp thông tin quý giá về điều kiện ban đầu của Hệ Mặt Trời và các quá trình tương tác hấp dẫn trong quá khứ.",
        ],
      },
      {
        title: "Tầm Quan Trọng Của Mây Oort",
        body: [
          "Mây Oort là nguồn gốc của các sao chổi dài hạn, các sao chổi có quỹ đạo kéo dài hàng ngàn năm để quay lại gần Mặt Trời.",
          "Nghiên cứu về Mây Oort giúp hiểu rõ hơn về biên giới và cấu trúc của Hệ Mặt Trời, cũng như nguồn gốc của các sao chổi và các vật thể băng giá khác.",
          "Việc khám phá Mây Oort có thể cung cấp thêm thông tin về các quá trình tương tác hấp dẫn giữa các thiên thể trong Hệ Mặt Trời và các ngôi sao lân cận.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Hiện nay, chưa có sứ mệnh không gian nào tiếp cận trực tiếp Mây Oort, nhưng các nhà khoa học sử dụng các kính viễn vọng và mô phỏng máy tính để nghiên cứu khu vực này.",
          "Các sao chổi dài hạn quan sát được là những bằng chứng gián tiếp về sự tồn tại của Mây Oort.",
          "Việc tiếp tục nghiên cứu Mây Oort sẽ giúp chúng ta hiểu rõ hơn về nguồn gốc và cấu trúc của các sao chổi, cũng như lịch sử hình thành và tiến hóa của Hệ Mặt Trời.",
        ],
      },
    ],
  },
  "5": {
    id: "5",
    image:
      "https://thoitietso.com/media/2024/01/15/images/hien-tuong-bao-mat-troi-chinh-la-su-xao-tron-trong-ngoai-nhat-khuyen.JPG",
    title: "Bão Mặt Trời - Hiện Tượng Vũ Trụ Đầy Sức Mạnh",
    description:
      "Bão Mặt Trời là các hiện tượng bùng nổ năng lượng từ Mặt Trời, có khả năng ảnh hưởng đến Trái Đất và các hệ thống điện tử. Hiểu rõ về bão Mặt Trời giúp chúng ta chuẩn bị và giảm thiểu các tác động tiêu cực từ các sự kiện này.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Bão Mặt Trời",
        body: [
          "Bão Mặt Trời bao gồm các hiện tượng như sự bùng phát mặt trời (solar flare) và sự phóng đại lượng plasma (coronal mass ejection - CME) từ bề mặt Mặt Trời.",
          "Các sự kiện này phát ra một lượng lớn năng lượng và hạt tích điện vào không gian, có thể tương tác với từ trường và khí quyển của Trái Đất.",
          "Bão Mặt Trời thường xảy ra trong các chu kỳ hoạt động của Mặt Trời, với chu kỳ 11 năm là phổ biến nhất.",
        ],
      },
      {
        title: "Nguồn Gốc Và Hình Thành",
        body: [
          "Bão Mặt Trời bắt nguồn từ các vùng hoạt động mạnh trên bề mặt Mặt Trời, nơi các dòng từ trường phức tạp tạo ra các sự kiện bùng phát năng lượng.",
          "Sự bùng phát mặt trời (solar flare) là sự gia tăng nhanh chóng của bức xạ điện từ, trong khi CME là sự phóng đại lượng plasma và từ trường ra ngoài không gian.",
          "Các sự kiện này có thể xảy ra đồng thời hoặc riêng lẻ, và đều có thể ảnh hưởng đến Trái Đất.",
        ],
      },
      {
        title: "Tầm Quan Trọng Của Bão Mặt Trời",
        body: [
          "Bão Mặt Trời có thể gây ra các hiện tượng như cực quang (aurora) và làm gián đoạn các hệ thống thông tin liên lạc và định vị toàn cầu (GPS).",
          "Các sự kiện bão mạnh có thể ảnh hưởng đến lưới điện và gây hư hỏng các thiết bị điện tử trên Trái Đất.",
          "Nghiên cứu về bão Mặt Trời giúp chúng ta dự đoán và chuẩn bị cho các sự kiện này, giảm thiểu các tác động tiêu cực đến đời sống và công nghệ.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Các sứ mệnh không gian như Solar and Heliospheric Observatory (SOHO) và Parker Solar Probe của NASA đã cung cấp nhiều thông tin quan trọng về bão Mặt Trời.",
          "Các nhà khoa học sử dụng các kính viễn vọng và các công nghệ tiên tiến để theo dõi và dự đoán các sự kiện bão Mặt Trời.",
          "Việc tiếp tục nghiên cứu bão Mặt Trời sẽ giúp chúng ta cải thiện khả năng dự đoán và giảm thiểu tác động của các sự kiện này đến Trái Đất và các hoạt động của con người.",
        ],
      },
    ],
  },
};
export const planetData: IObjectData = {
  "7": {
    id: "7",
    image:
      "https://cdnphoto.dantri.com.vn/uNW6Vuad4Re3_gWMbtQHfIbP37s=/thumb_w/1020/2023/03/28/mercury-1679964412501.jpg",
    title: "Sao Thủy - Hành Tinh Gần Mặt Trời Nhất",
    description:
      "Sao Thủy là hành tinh gần Mặt Trời nhất trong Hệ Mặt Trời và có kích thước nhỏ nhất. Với bề mặt đầy miệng núi lửa và sự biến đổi nhiệt độ cực đoan, Sao Thủy là một hành tinh thú vị để nghiên cứu.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Thủy",
        body: [
          "Sao Thủy có bán kính khoảng 2.440 km, chỉ lớn hơn một chút so với Mặt Trăng của Trái Đất.",
          "Bề mặt của Sao Thủy đầy các miệng núi lửa, tương tự như bề mặt của Mặt Trăng, chứng tỏ hành tinh này đã chịu nhiều va chạm từ các thiên thạch.",
          "Sao Thủy có lõi sắt lớn, chiếm khoảng 75% bán kính hành tinh, khiến nó có mật độ cao thứ hai trong Hệ Mặt Trời.",
        ],
      },
      {
        title: "Quỹ Đạo Và Chu Kỳ Quay",
        body: [
          "Sao Thủy có quỹ đạo hình elip, với khoảng cách trung bình từ Mặt Trời khoảng 57,9 triệu km.",
          "Một năm trên Sao Thủy (thời gian để quay quanh Mặt Trời) kéo dài khoảng 88 ngày Trái Đất.",
          "Một ngày trên Sao Thủy (thời gian để quay quanh trục của mình) kéo dài khoảng 59 ngày Trái Đất.",
        ],
      },
      {
        title: "Khí Hậu Và Nhiệt Độ",
        body: [
          "Do không có khí quyển dày, nhiệt độ trên Sao Thủy biến đổi cực đoan, từ -173 độ C vào ban đêm đến 427 độ C vào ban ngày.",
          "Không có khí quyển để giữ nhiệt, bề mặt Sao Thủy nóng lên nhanh chóng khi tiếp xúc với Mặt Trời và nguội đi nhanh chóng khi quay ra phía tối.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Sứ mệnh Mariner 10 của NASA vào thập niên 1970 đã cung cấp những hình ảnh đầu tiên về bề mặt Sao Thủy.",
          "Sứ mệnh MESSENGER của NASA, kết thúc vào năm 2015, đã cung cấp thông tin chi tiết về thành phần hóa học, cấu trúc và lịch sử địa chất của Sao Thủy.",
          "Sứ mệnh BepiColombo, một dự án hợp tác giữa ESA và JAXA, hiện đang trên đường đến Sao Thủy và dự kiến sẽ cung cấp thêm nhiều thông tin giá trị về hành tinh này.",
        ],
      },
    ],
  },
  "8": {
    id: "8",
    image:
      "https://kenh14cdn.com/Images/Uploaded/Share/2010/10/25/2610201002Venus.jpg",
    title: "Sao Kim - Hành Tinh Rực Rỡ Và Nóng Bỏng",
    description:
      "Sao Kim là hành tinh thứ hai tính từ Mặt Trời và có kích thước tương đương với Trái Đất. Tuy nhiên, với bầu khí quyển dày đặc và nhiệt độ bề mặt cao nhất trong Hệ Mặt Trời, Sao Kim là một hành tinh đầy thách thức và kỳ bí.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Kim",
        body: [
          "Sao Kim có đường kính khoảng 12.104 km, chỉ nhỏ hơn Trái Đất một chút.",
          "Bề mặt của Sao Kim chủ yếu là các đồng bằng bazan với một số núi lửa và các cấu trúc địa chất độc đáo như rãnh nứt và cao nguyên.",
          "Lớp vỏ của Sao Kim được cấu tạo chủ yếu từ silicat và sắt, tương tự như Trái Đất.",
        ],
      },
      {
        title: "Quỹ Đạo Và Chu Kỳ Quay",
        body: [
          "Sao Kim quay quanh Mặt Trời ở khoảng cách trung bình 108,2 triệu km.",
          "Một năm trên Sao Kim kéo dài khoảng 225 ngày Trái Đất.",
          "Một ngày trên Sao Kim (thời gian để quay quanh trục của mình) kéo dài khoảng 243 ngày Trái Đất và nó quay theo chiều ngược lại so với hầu hết các hành tinh khác.",
        ],
      },
      {
        title: "Khí Hậu Và Nhiệt Độ",
        body: [
          "Bầu khí quyển của Sao Kim chủ yếu là khí CO2, với áp suất khí quyển cao gấp 92 lần áp suất khí quyển của Trái Đất.",
          "Nhiệt độ bề mặt Sao Kim cực kỳ cao, trung bình khoảng 467 độ C, do hiệu ứng nhà kính mạnh mẽ.",
          "Các đám mây dày đặc axit sulfuric che phủ toàn bộ hành tinh, khiến việc quan sát bề mặt từ không gian rất khó khăn.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Sứ mệnh Mariner 2 của NASA năm 1962 là tàu vũ trụ đầu tiên bay qua và nghiên cứu Sao Kim.",
          "Các sứ mệnh của Venera của Liên Xô vào thập niên 1970 và 1980 đã gửi các tàu đổ bộ xuống bề mặt Sao Kim, cung cấp hình ảnh và dữ liệu quý giá.",
          "Gần đây, các sứ mệnh như Akatsuki của Nhật Bản và các kế hoạch của NASA và ESA hứa hẹn sẽ tiếp tục nghiên cứu và khám phá bí ẩn của Sao Kim.",
        ],
      },
    ],
  },
  "9": {
    id: "9",
    image:
      "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/rutmbn/2022_08_08/earth.jpg.webp",
    title: "Trái Đất - Hành Tinh Xanh Đẹp Và Đầy Sự Sống",
    description:
      "Trái Đất là hành tinh duy nhất trong Hệ Mặt Trời được biết đến có sự sống. Với khí quyển giàu oxy, nước và điều kiện khí hậu ổn định, Trái Đất là ngôi nhà của hàng triệu loài động thực vật và con người.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Trái Đất",
        body: [
          "Trái Đất có đường kính khoảng 12.742 km và khối lượng xấp xỉ 5,97 x 10^24 kg.",
          "Trái Đất có cấu trúc bao gồm ba lớp chính: lớp vỏ (crust), lớp manti (mantle), và lõi (core).",
          "Lớp vỏ bao gồm lớp vỏ đại dương và lớp vỏ lục địa, lớp manti là lớp đá nóng chảy dưới vỏ và lõi chia thành lõi ngoài và lõi trong, với lõi ngoài là một lớp sắt lỏng và lõi trong là một lớp sắt rắn.",
        ],
      },
      {
        title: "Quỹ Đạo Và Chu Kỳ Quay",
        body: [
          "Trái Đất quay quanh Mặt Trời ở khoảng cách trung bình 149,6 triệu km, với một năm kéo dài khoảng 365,25 ngày.",
          "Trái Đất quay quanh trục của mình trong khoảng 24 giờ, tạo ra các chu kỳ ngày và đêm.",
          "Trái Đất có trục nghiêng 23,5 độ so với mặt phẳng quỹ đạo của nó, gây ra các mùa trên hành tinh.",
        ],
      },
      {
        title: "Khí Hậu Và Môi Trường",
        body: [
          "Khí quyển của Trái Đất chủ yếu bao gồm khí nitơ (78%), oxy (21%) và các khí khác như argon và carbon dioxide.",
          "Trái Đất có ba lớp khí quyển chính: tầng đối lưu (troposphere), tầng bình lưu (stratosphere), và tầng trung lưu (mesosphere), với tầng nhiệt đới (thermosphere) và tầng exosphere nằm ngoài cùng.",
          "Nước trên Trái Đất chiếm khoảng 71% bề mặt, với đại dương, biển, hồ và sông là các nguồn nước chủ yếu.",
        ],
      },
      {
        title: "Sự Sống Trên Trái Đất",
        body: [
          "Trái Đất là nơi có sự sống phong phú và đa dạng, bao gồm các loài động vật, thực vật, nấm và vi khuẩn.",
          "Hệ sinh thái của Trái Đất bao gồm nhiều môi trường sống khác nhau như rừng mưa nhiệt đới, sa mạc, bãi cỏ, và đại dương, mỗi môi trường hỗ trợ các loại sự sống khác nhau.",
          "Sự sống trên Trái Đất phụ thuộc vào các yếu tố như nước, ánh sáng mặt trời, khí hậu và sự cân bằng của các chất dinh dưỡng trong môi trường.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Trái Đất đã được khám phá và nghiên cứu qua nhiều sứ mệnh không gian, bao gồm các vệ tinh và tàu vũ trụ như Voyager, Landsat và các sứ mệnh khác.",
          "Các nghiên cứu về khí quyển, môi trường và sự sống trên Trái Đất cung cấp thông tin quan trọng về biến đổi khí hậu, ô nhiễm và bảo vệ môi trường.",
          "Các dự án như NASA's Earth Science Division và các tổ chức nghiên cứu quốc tế tiếp tục theo dõi và phân tích sự thay đổi của Trái Đất để hiểu rõ hơn về hành tinh của chúng ta.",
        ],
      },
    ],
  },
  "10": {
    id: "10",
    image:
      "https://thienvanhanoi.org/wp-content/uploads/2017/12/57bc5d831600002900bfdd6e.jpeg",
    title: "Sao Mộc - Hành Tinh Lớn Nhất Trong Hệ Mặt Trời",
    description:
      "Sao Mộc là hành tinh lớn nhất trong Hệ Mặt Trời và có khối lượng gấp 2,5 lần tổng khối lượng của tất cả các hành tinh khác cộng lại. Với hệ thống các vành đai và nhiều vệ tinh, Sao Mộc là một đối tượng nghiên cứu hấp dẫn trong thiên văn học.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Mộc",
        body: [
          "Sao Mộc có đường kính khoảng 139.820 km và khối lượng xấp xỉ 1,9 x 10^27 kg.",
          "Sao Mộc chủ yếu được cấu tạo từ hydro (khoảng 90%) và heli (khoảng 10%), tương tự như Mặt Trời.",
          "Sao Mộc có lõi rắn nhỏ, bao quanh bởi một lớp chất lỏng kim loại hydro dày đặc và các lớp khí.",
        ],
      },
      {
        title: "Quỹ Đạo Và Chu Kỳ Quay",
        body: [
          "Sao Mộc quay quanh Mặt Trời ở khoảng cách trung bình 778 triệu km, với một năm kéo dài khoảng 11,86 năm Trái Đất.",
          "Một ngày trên Sao Mộc (thời gian để quay quanh trục của mình) chỉ kéo dài khoảng 10 giờ, là một trong những ngày ngắn nhất trong Hệ Mặt Trời.",
          "Sao Mộc có tốc độ quay nhanh, tạo ra một hệ thống các đám mây và các dải khí quyển phức tạp.",
        ],
      },
      {
        title: "Khí Hậu Và Thời Tiết",
        body: [
          "Sao Mộc có các đám mây dày đặc và hệ thống bão phức tạp, bao gồm Cơn Bão Lớn Đỏ nổi tiếng, đã tồn tại hàng trăm năm.",
          "Nhiệt độ tại tầng mây trên của Sao Mộc dao động từ -145 độ C, trong khi lõi có thể nóng lên đến khoảng 24.000 độ C.",
          "Sao Mộc phát ra nhiều nhiệt hơn so với lượng nhận từ Mặt Trời, do quá trình co lại và phát nhiệt của hành tinh.",
        ],
      },
      {
        title: "Hệ Thống Vành Đai Và Vệ Tinh",
        body: [
          "Sao Mộc có một hệ thống vành đai mỏng, chủ yếu được cấu tạo từ bụi và các hạt nhỏ.",
          "Sao Mộc có ít nhất 79 vệ tinh được biết đến, trong đó lớn nhất là Ganymede, Callisto, Io và Europa, còn được gọi là các vệ tinh Galilean.",
          "Các vệ tinh Galilean đều có đặc điểm và cấu tạo độc đáo, với Europa có khả năng chứa đại dương nước lỏng dưới lớp băng.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Sứ mệnh Galileo của NASA vào những năm 1990 đã cung cấp nhiều thông tin chi tiết về Sao Mộc và các vệ tinh của nó.",
          "Tàu vũ trụ Juno của NASA, hiện đang hoạt động, tiếp tục nghiên cứu Sao Mộc để hiểu rõ hơn về cấu trúc, từ trường và khí quyển của hành tinh.",
          "Các sứ mệnh trong tương lai như Europa Clipper của NASA dự kiến sẽ khám phá các vệ tinh của Sao Mộc để tìm kiếm dấu hiệu của sự sống.",
        ],
      },
    ],
  },
};

export const mixedData = {
  ...commonData,
  ...planetData,
  ...headerSlideData,
};

export const allData = {
  [EData.COMMON]: commonData,
  [EData.PLANET]: planetData,
  [EData.HEADER_SLIDE]: headerSlideData,
  [EData.ALL]: mixedData,
};
