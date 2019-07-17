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
    public class MessageServiceTests
    {
        private MessageService _Service;

        [TestInitialize]
        public void BeforeEach()
        {
            _Service = new MessageService();
        }

        [TestMethod()]
        public void PostTest()
        {
            Assert.AreEqual(11, MessageDb.MESSAGES.Count());
            Assert.AreEqual(4, SectionDb.SECTIONS.FirstOrDefault(s => s.id == 0).messageIds.Count());
            _Service.Post(0);
            Assert.IsNotNull(MessageDb.MESSAGES[11]);
            Assert.AreEqual(11, MessageDb.MESSAGES[11].id);
            Assert.AreEqual(5, SectionDb.SECTIONS.FirstOrDefault(s => s.id == 0).messageIds.Count());
            Assert.AreEqual("add message", MessageDb.MESSAGES[11].content);
            Assert.AreEqual(12, MessageDb.MESSAGES.Count());
        }

        [TestMethod()]
        public void PostNewMessageOnNullListTest()
        {
            var s = SectionDb.SECTIONS.FirstOrDefault(v => v.id == 4);
            Assert.IsNull(s.messageIds);
            _Service.Post(4);
            Assert.AreEqual(11, s.messageIds[0]);
            Assert.AreEqual(1, s.messageIds.Count());
        }


        [TestMethod()]
        public void PutTest()
        {
            var m = MessageDb.MESSAGES.FirstOrDefault(v => v.id == 0);
            Assert.AreEqual("Princess And The Pea – This fairy tale by Hans Christian Andersen, deals with a prince who is in search of a princess and how he gets to meet her.", m.content);
            var s = new Message();
            s.content = "Mushroom";
            s.id = 0;
            _Service.Put(0, s);
            Assert.AreEqual("Mushroom", m.content);
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void PutTestOnAnUnexistId()
        {
            var n = new Message();
            n.content = "Raining";
            _Service.Put(90, n);
        }

        [TestMethod()]
        public void DeleteTest()
        {
            Assert.AreEqual(11, MessageDb.MESSAGES.Count());
            Assert.IsNotNull(MessageDb.MESSAGES.FirstOrDefault(s => s.id == 1));
            _Service.Delete(1);
            Assert.AreEqual(10, MessageDb.MESSAGES.Count());
            Assert.IsNull(MessageDb.MESSAGES.FirstOrDefault(s => s.id == 1));
            bool a = false;
            SectionDb.SECTIONS.ForEach(section =>
            {
                if (section.messageIds.Contains(1))
                {
                    a = true;
                }
            });
            Assert.AreEqual(false, a);
        }

        [TestMethod()]
        [ExpectedException(typeof(NullReferenceException))]
        public void DeleteAnUnexistMessageTest()
        {
            _Service.Delete(90);
        }
    }
}