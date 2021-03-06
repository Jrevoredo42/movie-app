import './styles.css';

function Forms(){

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title:'the witcher',
        count: 2,
        score: 7.5,
    };


    return(
        <div className='movieapp-form-container'>
            <img className='movieapp-movie-card-image' src={movie.image} alt={movie.title} />
            <div className='movieapp-card-bottom-container'>
            <h3>{movie.title}</h3>
                <form className='movieapp-form'>
                    <div className='form-group movieapp-form-group'>
                        <label htmlFor='email'>Informe seu email</label>            
                        <input type='email' className='form-control' id='email' />
                    </div>
                    <div className='form-group movieapp-form-group'>
                        <label htmlFor='score'>Informe sua avaliação</label>
                        <select className='form-control' id='score'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
            <div className='btn-container-save'>
                <button type='submit' className='btn btn-primary movieapp-btn'>Salvar</button>     
            </div>
                </form>
            <button className='btn btn-primary movieapp-btn mt-3'>Cancelar</button>
            </div>
        </div>
    )
}export default Forms