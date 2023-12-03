# 数据集简要
**GlobalTemperatures.csv**  
	 Data: 陆地average tempture开始于1750年，陆地max/min temperatures，陆地海洋平均气温开始于1850年  

**GlobalLandTemperaturesByState.csv**    
	 列举了 Australia 、Beazil、 Canda、 China、 India、 Russia 、United States这几个国家州/省的数据  
	
**GlobalLandTemperaturesByMajorCity.csv**  
	 标注了国家及其城市的平均气温，除此之外有经纬度  
	 国家49个，每个国家有几个代表城市    
	 eg:China包含 长春、成都、重庆、大连、广州、哈尔滨、济南、南京、北京、上海、沈阳、太原、唐山、天津、武汉、西安  
**GlobalLandTemperaturesByCity.csv**  
	 标注了国家及其城市的平均气温，除此之外有经纬度，（可视化是否以此为手段确定城市位置）  
	 国家有85个，城市不计其数！！  
**GlobalLandTemperaturesByCountry.csv**    
	 标注了每个国家的平均气温（国家243个）  


# 实现方案

对于地表气温，因为较为明显的特征是地理位置，所以构想使用世界二维地图，拥护可以点击不同的国家区域，进行国家、地区、城市选择  
选择国家、地区、城市后，会进行一个页面悬浮框，其中利用柱状图或折线图进行展示日期、气温等信息，因为数据时间跨度比较大，因此构想提供时间区间的搜索框（对于不想进行手动点击地图的情况，酌情考虑是否增加名称搜索）  
对于全球陆地海洋气温，选用一个全球陆地海洋地图，提供时间轴拖动按钮，对于气温使用颜色编码，方便用户查看对比  

# 实现细节
对于地图的定位以及选择，采用高德地图的开放数据服务，获取地理位置信息，地理信息的获取通过数据集中的经纬度 
对于整体的代码编写，使用Echarts  
![image](https://github.com/zheAhen/visualization/assets/98160658/e2069f28-8c43-4c41-9e59-c2d202b00fbc)
最终的地图模版，类似上图，会尝试对选中区域进行高亮显示
