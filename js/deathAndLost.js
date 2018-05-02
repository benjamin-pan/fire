$(function(){
	var myChart = echarts.init(document.getElementById('death'));
	option = {
	    title: {
	        text: '伤亡人数分析',
	        left: 'center',
	        textStyle: {
	        	color: '#ffffff'
	        }
	    },
	    legend: {
	        bottom: 10,
	        left: 'center',
	        textStyle: {
	        	color: '#ffffff'
	        },
	        formatter: function(value){
	            var data=option.series[0].data;
	            var sum=0;
	            for(var i=0;i<data.length;i++){
	                sum+=data[i].value
	            }
	            for(var j=0;j<data.length;j++){
	                if(value===data[j].name){
	                    return data[j].value/sum*100+'% '+value;
	                }
	            }
	        },
	        data: ['0至3人','3至5人','5至10人','10人以上']
	    },
	    series : [
	        {
	            type: 'pie',
	            radius : '65%',
	            center: ['50%', '35%'],
	            selectedMode: 'single',
	            label: {
	                normal: {
	                    position: 'inner',
	                    formatter: "{d}%"
	                }
	            },
	            data:[
	                {value:60,name: '0至3人',
	                    itemStyle:{
	                        color: '#4FC4F6'
	                    }
	                },
	                {value:25, name: '3至5人',
	                    itemStyle:{
	                        color: '#E64C65'
	                    }
	                },
	                {value:12, name: '5至10人',
	                    itemStyle:{
	                        color: '#FCB150'
	                    }
	                },
	                {value:3, name: '10人以上',
	                    itemStyle:{
	                        color: '#11A8AB'
	                    }
	                }
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('lost'));
	option = {
	    title: {
	        text: '经济损失分析',
	        left: 'center',
	        textStyle: {
	            align: 'center',
	            color: '#ffffff'
	        }
	    },
	    legend: {
	    	bottom: 10,
	        left: 'center',
	        textStyle: {
	        	color: '#ffffff'
	        },
	        //orient: 'vertical',
	        // x: 'left',

	        data:['1万元以下','1-10万元','10-100万元','100万元以上']
	    },
	    series: [
	        {
	            type:'pie',
	            radius: ['50%', '70%'],
	            center: ['50%', '35%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: true,
	                    color: '#ffffff',
	                    position: 'center',
	                    formatter: '合计\n1520万元'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'1万元以下',
	                    itemStyle:{
	                        color: '#4FC4F6'
	                    }
	                },
	                {value:310, name:'1-10万元',
	                    itemStyle:{
	                        color: '#E64C65'
	                    }
	                },
	                {value:234, name:'10-100万元',
	                    itemStyle:{
	                        color: '#FCB150'
	                    }
	                },
	                {value:135, name:'100万元以上',
	                    itemStyle:{
	                        color: '#11A8AB'
	                    }
	                }
	            ]
	        }
	    ]
	};
	myChart.setOption(option);
})