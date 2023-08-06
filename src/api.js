import axios from "axios";

//search yapmak istediğimiz objeleri term olarak atadık.
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
    },
    params: {
      query: term,
    },
  });
  //   console.log(response);

  return response.data.results;
};

export default searchImages;
