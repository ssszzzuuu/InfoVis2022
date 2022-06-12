d3.csv("https://ssszzzuuu.github.io/InfoVis2022/FinalTask/Finaltask.csv")
    .then( data => {
        data.forEach( (d,i) => {
          d.Member = +d.Member, 
          d.Population = +d.Population,
          d.PopulationPerMember = +d.PopulationPerMember,
          d.DisparityPerMember = +d.DisparityPerMember,
          d.Voter = +d.Voter,
          d.VoterPerMember = +d.VoterPerMember,
          d.DisparityPerVoter = +d.DisparityPerVoter,
          d.AreaPerMember = +d.AreaPerMember,
          d.DisparityPerArea = +d.DisparityPerArea,

          d.index = i;  });

        const barchart = new BarChart({ 
            parent: '#drawing_region_barchart',
            width: 600,
            height: 600,
            margin: {top:10, right:50, bottom:50, left:100},
            xlabel: 'xlabel',
            ylabel: 'ylabel',
            title: "title",
            }, data);
        
        const scatter_plot = new ScatterPlot( {
            parent: '#drawing_region_scatterplot',
            width: 600,
            height: 600,
            margin: {top:10, right:10, bottom:50, left:100},
            xlabel: 'Sepal length [cm]',
            ylabel: 'Sepal width [cm]',
            }, data );
        
        d3.select('#original')
          .on('click', d => {
            data.sort((a, b) => a.index - b.index);
            barchart.update();
        });
        
        d3.select('#reverse')
        .on('click', d => {
            data.reverse();
            barchart.update();
        });
    
        d3.select('#ascend')
        .on('click', d => {
            const BarData = document.getElementById('BarValue');
            const num = BarData.selectedIndex;
            const str = BarData.options[num].value;
            //データの追加
              if(num == 1){
              data.sort((a, b) => a.Member - b.Member)
              }else if (num == 2){
                data.sort((a, b) => a.Populatiopn - b.Population)
              }else if (num == 3){
                data.sort((a, b) => a.PopulationPerMember - b.PopulationPerMember)
              }else if (num == 4){
                data.sort((a, b) => a.DisparityPerMember - b.DisparityPerMember)
              }else if (num == 5){
                data.sort((a, b) => a.Voter - b.Voter)
              }else if (num == 6){
                data.sort((a, b) => a.VoterPerMember - b.VoterPerMember)
              }else if (num == 7){
                data.sort((a, b) => a.DisparityPerVoter - b.DisparityPerVoter)
              }else if (num == 8){
                data.sort((a, b) => a.AreaPerMember - b.AreaPerMember)
              }else if (num == 9){
                data.sort((a, b) => a.DisparityPerArea - b.DisparityPerArea)
              
              }
              barchart.update();
        });

        d3.select('#descend')
        .on('click', d => {
            const BarData = document.getElementById('BarValue');
            const num = BarData.selectedIndex;
            const str = BarData.options[num].value;
            //データの追加
              if(num == 1){
              data.sort((a, b) => b.Member - a.Member)
              }else if (num == 2){
              data.sort((a, b) => b.Population - a.Population)
              }else if (num == 3){
              data.sort((a, b) => b.PopulationPerMember - a.PopulationPerMember)
              }else if (num == 4){
              data.sort((a, b) => b.DisparityPerMember - a.DisparityPerMember)
              }else if (num == 5){
              data.sort((a, b) => b.Voter - a.Voter)
              }else if (num == 6){
              data.sort((a, b) => b.VoterPerMember - a.VoterPerMember)
              }else if (num == 7){
                data.sort((a, b) => b.DisparityPerVoter - a.DisparityPerVoter)
              }else if (num == 8){
                data.sort((a, b) => b.AreaPerMember - a.AreaPerMember)
              }else if (num == 9){
                data.sort((a, b) => b.DisparityPerArea - a.DisparityPerArea)
              }
              barchart.update();
        });

        d3.select('#Decision1')
        .on('click', d => {
            const BarData = document.getElementById('BarValue');
            const num = BarData.selectedIndex;
            const str = BarData.options[num].value;
            barchart.update()
            document.getElementById("span1").textContent = str;   
        });

        d3.select('#Decision2')
        .on('click', d => {
            const HorizontalData = document.getElementById('HorizontalValue');
            const Horizontalnum = HorizontalData.selectedIndex;
            const Horizontalstr = HorizontalData.options[Horizontalnum].value;
            scatter_plot.update();
            document.getElementById("span2").textContent = Horizontalstr; 
        });

        d3.select('#Decision3')
        .on('click', d => {
            const VerticalData = document.getElementById('VerticalValue');
            const Verticalnum = VerticalData.selectedIndex;
            const Verticalstr = VerticalData.options[Verticalnum].value;
            scatter_plot.update();
            document.getElementById("span3").textContent = Verticalstr; 
        });

        d3.select('#Decision4')
        .on('click', d => {
            barchart.update()
            scatter_plot.update();    
        });

        d3.select('#Decision5')
        .on('click', d => {
            data.forEach( (d,i) =>{
            d.color = 'steelblue'
        });
            barchart.update()
            scatter_plot.update();    
        });
        
        d3.select('#radius-slider')
        .on('input', function() {
            data.forEach( (d,i) =>{
            d.radius = this.value
        });
            scatter_plot.update(); 
            d3.select('#radius-value').text(this.value);
        });

        

    })
    .catch( error => {
        console.log( error );
    });
