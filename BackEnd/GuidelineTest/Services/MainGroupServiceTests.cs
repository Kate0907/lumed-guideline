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
    public class MainGroupServiceTests
    {
        private MainGroupService _Service;

        [TestInitialize]
        public void BeforeEach()
        {
            _Service = new MainGroupService();
        }

        [TestMethod()]
        public void GetAllMainGroupTest()
        {
            var result = _Service.GetAllMainGroup();
            Assert.AreEqual(result.Count(), 5);
        }

        [TestMethod()]
        public void GetTest()
        {
            var result = _Service.Get(1);
            Assert.AreEqual("ppppPenicillin Allergy", result.name);
        }


        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void GetAnUnexistGroupTest()
        {
            _Service.Get(77);
        }

        [TestMethod()]
        public void PostTest()
        {
            Assert.AreEqual(5, MainGroupDb.MAINGROUP.Count());
            var result = _Service.Post();
            Assert.AreEqual(6, result.id);
            Assert.AreEqual("New Group", result.name);
            Assert.AreEqual(6, MainGroupDb.MAINGROUP.Count());
        }

        [TestMethod()]
        public void PutTestUpdateGroupName()
        {
            Assert.AreEqual(1, MainGroupDb.MAINGROUP[0].samemainsIds.Count());
            Assert.AreEqual("ppppPenicillin Allergy", MainGroupDb.MAINGROUP[0].name);
            var group = new MainGroup();
            group.name = "Mushroom";
            group.samemainsIds = new List<int> { 3, 4, 5, 6, 7, 8 };
            _Service.Put(1, group);
            Assert.AreEqual(6, MainGroupDb.MAINGROUP[0].samemainsIds.Count());
            Assert.AreEqual("Mushroom", MainGroupDb.MAINGROUP[0].name);
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
       public void PutTestOnAnEntryNotExist()
        {
            var group = new MainGroup();
            group.name = "Mushroom";
            group.samemainsIds = new List<int> { 3, 4, 5, 6, 7, 8 };
            _Service.Put(11, group);           
        }

        [TestMethod()]
        public void PostNewMainSectionOnAnMainGroupTest()
        {
            Assert.AreEqual(3, MainGroupDb.MAINGROUP[3].samemainsIds.Count());
            var main = new MainSection();
            main.id = 50;
            _Service.Post(4, main);
            Assert.AreEqual(4, MainGroupDb.MAINGROUP[3].samemainsIds.Count());
        }

        [TestMethod()]
        public void PostWithEmptyListTest()
        {
            var g = MainGroupDb.MAINGROUP.FirstOrDefault(v => v.id == 5);
            Assert.IsNull(g.samemainsIds);
            var main = new MainSection();
            main.id = 60;
            _Service.Post(5, main);
            Assert.AreEqual(60, g.samemainsIds[0]);
        }

        [TestMethod()]
        public void DeleteTest()
        {
            Assert.AreEqual(5, MainGroupDb.MAINGROUP.Count());
            Assert.IsNotNull(MainGroupDb.MAINGROUP.FirstOrDefault(s => s.id == 1));
            _Service.Delete(1);
            Assert.AreEqual(4, MainGroupDb.MAINGROUP.Count());
            Assert.IsNull(MainGroupDb.MAINGROUP.FirstOrDefault(s => s.id == 1));
        }


        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void DeleteAnUnexistMainGroupTest()
        {
            _Service.Delete(90);
        }
    }
}
