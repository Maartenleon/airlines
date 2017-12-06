package com.maarten.airlines.airlines;

import com.maarten.airlines.airlines.models.Airplane;
import com.maarten.airlines.airlines.models.AirplaneType;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AirlinesApplicationTests {

	@Test
	public void contextLoads() {
	}

	@SpringBootTest
	public class RoomModelTests {

		private Airplane testAirplane;

		/**
		 * Create a new airplane object for each test
		 */
		@Before
		public void initialize(){
			testAirplane = new Airplane();
		}

		/**
		 * Checks if the get returns the value specified in the set
		 */
		

		@Test
		public void AirplaneTypeTest(){

			AirplaneType airplaneType = AirplaneType.Boeing747;

			testAirplane.setAirplaneType(airplaneType);

			Assert.assertEquals(testAirplane.getAirplaneType(), airplaneType);
		}








		/**
		 * Checks if the get returns the value specified in the set
		 */
		@Test
		public void roomTypeTest(){

			RoomType roomType = RoomType.Normal;

			testRoom.setRoomType(roomType);

			Assert.assertEquals(testRoom.getRoomType(), roomType);
		}

		/**
		 * Checks if the get returns the value specified in the set
		 */
		@Test
		public void roomSizeTest(){

			RoomSize roomSize = RoomSize.TwoPerson;

			testRoom.setRoomSize(roomSize);

			Assert.assertEquals(testRoom.getRoomSize(), roomSize);
		}

}
