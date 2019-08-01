using Microsoft.VisualStudio.TestTools.UnitTesting;
using Guideline.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Guideline.Models;

namespace Guideline.Services.Tests
{

  [TestClass()]
  public class ItemServiceTests
  {
    private ItemService _Service;

    [TestInitialize]
    public void BeforeEach()
    {
      _Service = new ItemService();
      string filename = "guideline";
      ItemDb.DeserializeFromFile(filename);
    }

    [TestMethod()]
    public void GetAllItemTest()
    {
      var result = _Service.GetAllItems();
      Assert.AreEqual(ItemDb.ITEMS.Count, result.Count());
    }
    /*
        [TestMethod()]
        public void GetTest()
        {
            var result = _Service.Get(1);
            Assert.AreEqual("ENT Infections", result.name);
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void GetAnUnexistItemTest()
        {
             _Service.Get(77);
        }


        [TestMethod()]
        public void PostTestCreateNewMainSection()
        {
            var result = _Service.Post();
            Assert.AreEqual(803, result.id);
            Assert.AreEqual(21, MainDb.MAINS.Count());
        }

        [TestMethod()]
        public void PostTestCreateNewMainSectionOnASection()
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == 3);
            Assert.AreEqual(0, s.mainIds.Count());
            _Service.Post(3);
            Assert.AreEqual(1, s.mainIds.Count());
            Assert.AreEqual(803, s.mainIds[0]);
        }

        [TestMethod()]
        public void PostTestCreateNewMainSectionOnASectionWithNullMainIds()
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == 4);
            Assert.IsNull(s.mainIds);
            _Service.Post(4);
            Assert.IsNotNull(s.mainIds);
            Assert.AreEqual(1, s.mainIds.Count());
            Assert.AreEqual(803, s.mainIds[0]);
        }

        [TestMethod()]
        public void PutTestUpdateUnMainSectionName()
        {
            Assert.AreEqual(1, MainDb.MAINS[5].sectionIds.Count());
            var main = new MainSection();
            main.name = "Raining";
            main.sectionIds = new List<int> { 3, 5, 8 };
            _Service.Put(5, main);
            Assert.AreEqual(3, MainDb.MAINS[5].sectionIds.Count());
            Assert.AreEqual("Raining", MainDb.MAINS[5].name);
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void PutTestUpdateAnUnexistId()
        {
            Assert.AreEqual(1, MainDb.MAINS[5].sectionIds.Count());
            var main = new MainSection();
            main.name = "Raining";
            main.sectionIds = new List<int> { 3, 5, 8 };
            _Service.Put(90, main);
        }

        [TestMethod()]
        public void DeleteAMainSectionTest()
        {
            Assert.AreEqual(20, MainDb.MAINS.Count());
            Assert.AreEqual(14, MainDb.MAINS[14].id);
            Assert.IsNotNull(MainDb.MAINS.FirstOrDefault(s => s.id == 14));
            _Service.Delete(14);
            Assert.AreEqual(19, MainDb.MAINS.Count());
            Assert.AreEqual(500, MainDb.MAINS[14].id);
            Assert.IsNull(MainDb.MAINS.FirstOrDefault(s => s.id == 14));
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void DeleteAnUnexistMainSectionTest()
        {
            _Service.Delete(90);
        }*/
  }
}
