import { notification } from "antd";
import axios from "axios";
import Router from "next/router";

export const timeOut =() =>{
	Router.push(`/`);
	modalWarning('Token expired', "Your token has expired please login to continue")
	localStorage.removeItem("electionToken");
	localStorage.removeItem("electionData");
}

export const modalSuccess = (message, description) => {
  notification.success({
    message,
    description,
  });
};

export const modalWarning = (message, description) => {
  notification.warning({
    message,
    description,
  });
};

export function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
  }
}

export const copyIdToClipboard = (link) => {
  navigator.clipboard.writeText(link);
  modalSuccess("refferal code copy to clipboard", 'Copied!',);
};

export const uploadFile = async (file) => {
  try {
    const { data } = await axios.post("/api/routes/upload-s3", {
      name: file.name,
      type: file.type,
    });
    const url = data.url;
      await axios.put(url, file, {
        headers: {
          "Content-type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
      });
      const img = `https://${data.bucket}.s3.us-east-1.amazonaws.com/${data.name}`
    return img;
  } catch (error) {
    return false
  }
};

export const getBanks = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.paystack.co/bank`,
      headers: {
        'authorization': 'Bearer sk_test_629b392e2345d122b5941f00b27cdd91957ca848',
        'Content-Type': 'application/json'
      },
    });
    return response?.data;
  } catch (error) {
    return false
  }
};

export const verifyAccount = async (code, number) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.paystack.co/bank/resolve?account_number=${number}&bank_code=${code}`,
      headers: {
        'authorization': 'Bearer sk_test_629b392e2345d122b5941f00b27cdd91957ca848',
        'Content-Type': 'application/json'
      },
    });
    return response?.data;
  } catch (error) {
    return false
  }
};

export const posts = [
  {
      "id": "2",
      "title": "Apc campaign in Lagos",
      "thumbnail": "https://media.premiumtimesng.com/wp-content/files/2022/10/IMG-20221009-WA0017.jpg",
      "type": "normal",
      "badge": "icon-volume-high",
      "categories": [
          {
              "id": "2",
              "text": "Politics"
          },
          {
              "id": "6",
              "text": "Campaign"
          }
      ]
  },
  {
      "id": "3",
      "title": "Reminder tips for 2023 election",
      "thumbnail": "https://www.channelstv.com/wp-content/uploads/2021/10/Untitled-1-31.png",
      "type": "normal",
      "categories": [
          {
              "id": "4",
              "text": "Election"
          }
      ]
  },
  {
      "id": "4",
      "title": "APC new national chairman appointed swear in",
      "thumbnail": "https://www.ripplesnigeria.com/wp-content/uploads/2022/06/apc-abuja-convention-2022.jpeg",
      "type": "normal",
      "categories": [
          {
              "id": "4",
              "text": "Inauguration"
          }
      ]
  },
  // {
  //     "id": "5",
  //     "title": "DeerCo – A New Look About Startup In Product Manufacture Field7",
  //     "thumbnail": "/img/blog/grid/4.jpg",
  //     "type": "normal",
  //     "badge": "icon-picture",
  //     "categories": [
  //         {
  //             "id": "2",
  //             "text": "Entertaiment"
  //         }
  //     ]
  // },
  // {
  //     "id": "6",
  //     "title": "B&O Play – Best Headphone For You",
  //     "thumbnail": "/img/blog/grid/5.jpg",
  //     "type": "normal",
  //     "badge": "icon-camera-play",
  //     "categories": [
  //         {
  //             "id": "6",
  //             "text": "Technology"
  //         }
  //     ]
  // },
  // {
  //     "id": "7",
  //     "title": "Unique Products For Your Kitchen From IKEA Design",
  //     "thumbnail": "/img/blog/grid/6.jpg",
  //     "type": "normal",
  //     "categories": [
  //         {
  //             "id": "1",
  //             "text": "Business"
  //         },
  //         {
  //             "id": "6",
  //             "text": "Technology"
  //         }
  //     ]
  // }
]

export const parties = [
  {name: 'All progressive Congress', logo: '/img/parties/APC.jpg', abbr:'APC'},
  {name: 'Labour Paaty', logo: '/img/parties/LP.jpg', abbr:'LP'},
  {name: 'Peoples Democratic Party', logo: '/img/parties/PDP.jpg', abbr:'PDP'},
  {name: 'Accord', logo: '/img/parties/A.jpg', abbr:'A'},
]