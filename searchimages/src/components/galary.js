const Gallery = (props) => {
    return(
        <div>
            <div>
                {
                    props.header && <h2>{props.header}</h2>
                }
            </div>
            <div>
                {   props.value &&
                    props.value.map((data, index) => {
                        return(
                            <img key={index} src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt="flickr" width={200} height={180} style={{padding: 2}} />
                        )
                    })
                }
            </div>
        </div>
    )
}
// 317a7dddfa228163aefa6613e4bd3c18

export default Gallery;