<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>shopping - Mart</title>
	<link rel="stylesheet" href="styles/shoppingmart.css">
</head>
<body>
	<header id="header">
		<div class="headcontent">
			<div id="logo">
				<a href="<?php echo $_SERVER['PHP_SELF'] ?>"><img src="images/logo.gif" alt="Jane Shopping Logo" title="Jane Shopping"></a>
			</div>
			<!-- logo图放在超链接里，点击后重新加载本页面 -->
			<form action="">
				<div id="searchbox">
					<select name="" id="">
						<option value="All" selected="selected">All</option>
						<option value="womenClother">女装</option>
						<option value="menClother">男装</option>
						<option value="shoesbags">鞋包配饰</option>
					</select>
					<input type="search" maxlength="50" placeholder="请输入商品名称" id="search">
					<!-- 背景图设为search图标 -->
					<div id="submit"></div>
				</div>
			</form>
			<ul id="skin">
				<li id="skin_0"></li>
				<li id="skin_1"></li>
				<li id="skin_2"></li>
				<li id="skin_3"></li>
				<li id="skin_4"></li>
				<li id="skin_5"></li>
			</ul>
			<nav>
				<ul id="nav">
					<li><a href="index.php">首页</a></li>
					<li><a href="">品牌</a></li>
					<li><a href="">女装</a></li>
					<li><a href="">男装</a></li>
					<li><a href="">鞋包配饰</a></li>
				</ul>
			</nav>	
		</div>
	</header>
	<!-- 内容栏分为两栏布局 -->
	<section id="content">
		<div class="left">
			<h3><span>商品分类</span></h3>
			<div class="goodslist">
				<h4>推荐品牌</h4>
				<table>
					<tr>
						<td><a href="">耐克</a></td>
						<td class="hot"><a href="">阿迪达斯<sup>HOT</sup></a></td>
					</tr>
					<tr>
						<td><a href="">达芙妮</a></td>
						<td><a href="">李宁</a></td>
					</tr>
					<tr>
						<td><a href="">安踏</a></td>
						<td><a href="">奥康</a></td>
					</tr>
					<tr>
						<td class="hot"><a href="">骆驼<sup>HOT</sup></a></td>
						<td><a href="">特步</a></td>
					</tr>
				</table>
			</div>
			<div class="goodslist">
				<h4>女装</h4>
				<table>
					<tr>
						<td><a href="">呢大衣</a></td>
						<td><a href="">T恤</a></td>
					</tr>
					<tr>
						<td><a href="">羽绒服</a></td>
						<td><a href="">衬衫</a></td>
					</tr>
					<tr>
						<td><a href="">羊绒衫</a></td>
						<td><a href="">针织衫</a></td>
					</tr>
					<tr>
						<td><a href="">连衣裙</a></td>
						<td><a href="">皮外套</a></td>
					</tr>
				</table>
			</div>
			<div class="goodslist">
				<h4>男装</h4>
				<table>
					<tr>
						<td id="shirt"><a href="">衬衫</a></td>
						<td><a href="">T恤</a></td>
					</tr>
					<tr>
						<td><a href="">夹克</a></td>
						<td><a href="">皮衣</a></td>
					</tr>
					<tr>
						<td><a href="">风衣</a></td>
						<td><a href="">牛仔裤</a></td>
					</tr>
					<tr>
						<td><a href="">西服</a></td>
						<td><a href="">卫衣</a></td>
					</tr>
				</table>
			</div>
			<div class="goodslist">
				<h4>鞋包配饰</h4>
				<table>
					<tr>
						<td><a href="">围巾</a></td>
						<td><a href="">旅行箱</a></td>
					</tr>
					<tr>
						<td><a href="">真皮包</a></td>
						<td><a href="">韩版</a></td>
					</tr>
					<tr>
						<td><a href="">达芙妮</a></td>
						<td><a href="">单肩包</a></td>
					</tr>
					<tr>
						<td><a href="">毛绒</a></td>
						<td><a href="">清仓靴子</a></td>
					</tr>
				</table>
			</div>
		</div>
		<!-- 右边栏 -->
		<div class="right">
			<h3>购物车</h3>
			<div id="shoppingList">
				
			</div>
		</div>
	</section>
	<footer id="footer">
		<p>Copyright &copy; 2009 - 2012 JaneShop Inc.</p>
	</footer>
	<script src="scripts/utils.js"></script>
	<script src="scripts/skin.js"></script>
	<script src="scripts/shoppingMartInit.js"></script>
</body>
</html>