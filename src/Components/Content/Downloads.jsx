import './Content.css';
import '../../App.css';
function Downloads(){
    return (
        <section className='Downloads'>
            <h2 className='TitleTxt'>DOWNLOADS</h2>
            <hr/>
            <p>Download documents or project files here.</p>
            <table className="downloadTable">
                <tr className='tableHead'>
                    <td>File</td>
                    <td>Last Updated</td>
                    <td></td>
                </tr>
                <tr className='tableRow'>
                    <td>Resume</td>
                    <td>2026/08/06</td>
                    <td><a>Download</a></td>
                </tr>
                <tr className='tableRow'>
                    <td>Curry Recipe</td>
                    <td>2026/07/01</td>
                    <td><a>Download</a></td>
                </tr>
            </table>
        </section>
    );
}

export default Downloads;