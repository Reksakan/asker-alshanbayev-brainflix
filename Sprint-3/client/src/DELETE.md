
lass HomePage extends React.Component {

  state = {
      currentVidId: '',
      currentVid: {},
      currentVidComments: [],
      listOfVid: []
  }
  //Too long code but currently I can't do anything
  componentDidMount() {
    axios
    .get(`${API_URLS}`)
    .then(response => {
      this.setState ({
        listOfVid: response.data
      })
      //Maybe here put if (!this.props.match.params.currentVidId) {} 
      // console.log('Look at current link:', this.props.match);          
      
      if(!this.props.match.params.currentVidId) {
        axios
        .get(`${API_URLS}/videos/${response.data[0].id}`)

        .then(output => {
          console.log('Current vid full description***: ', output)    //Console should be deleted before submission
          this.setState({
            currentVidId: output.data.id,
            currentVid: output.data,
            currentVidComments: output.data.comments
          })
        })
      } else {
        axios
        .get(`${API_URLS}/videos/${this.props.match.params.currentVidId}`)
        .then(outcome => {
          this.setState({
            /* currentVidId: outcome.data.id, */
            currentVid: outcome.data,
            currentVidComments: outcome.data.comments
          })
        })
      }
    })
  }