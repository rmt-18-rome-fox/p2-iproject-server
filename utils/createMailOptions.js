const createMailOptions = (data) => {
    const { to, movie } = data;
  
    const htmlContent = `
                  <h1><strong>Movie Booked!</strong></h1>
                  <p>Hi, You have booked this movie below:</p>
                  <p>Movie name: ${movie}</p>
                  <br/>
                `;
    return {
      from: 'risangdevs@gmail.com',
      to,
      subject: 'Booking Success',
      html: htmlContent,
    };
  };
  module.exports=createMailOptions